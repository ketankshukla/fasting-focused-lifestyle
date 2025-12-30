import { useState, useEffect, useCallback } from "react";
import { supabase, DEFAULT_USER_ID } from "../lib/supabase";

export const useSupabaseStorage = (defaultProfile) => {
  const [profile, setProfile] = useState(defaultProfile);
  const [dailyLogs, setDailyLogs] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load profile from Supabase
  const loadProfile = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", DEFAULT_USER_ID)
        .single();

      if (error && error.code !== "PGRST116") {
        throw error;
      }

      if (data) {
        setProfile({
          startingWeight: data.starting_weight || defaultProfile.startingWeight,
          goalWeight: data.goal_weight || defaultProfile.goalWeight,
          height: data.height || defaultProfile.height,
          startingWaist:
            data.starting_waist || defaultProfile.startingWaist || 0,
          goalWaist: data.goal_waist || defaultProfile.goalWaist || 0,
        });
      } else {
        // Create default profile if none exists
        await supabase.from("profiles").insert({
          user_id: DEFAULT_USER_ID,
          starting_weight: defaultProfile.startingWeight,
          goal_weight: defaultProfile.goalWeight,
          height: defaultProfile.height,
          starting_waist: defaultProfile.startingWaist || 0,
          goal_waist: defaultProfile.goalWaist || 0,
        });
      }
    } catch (err) {
      console.error("Error loading profile:", err);
      setError(err.message);
      // Fallback to localStorage
      const saved = localStorage.getItem("fastingProfile");
      if (saved) setProfile(JSON.parse(saved));
    }
  }, [defaultProfile]);

  // Load daily logs from Supabase
  const loadDailyLogs = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("daily_logs")
        .select("*")
        .eq("user_id", DEFAULT_USER_ID);

      if (error) throw error;

      const logsObj = {};
      data?.forEach((log) => {
        logsObj[log.date_key] = {
          weight: log.weight,
          waist: log.waist,
          notes: log.notes,
          energy: log.energy,
          mood: log.mood,
          bloodPressureSys: log.systolic,
          bloodPressureDia: log.diastolic,
          glucose: log.glucose,
          sleepHours: log.sleep_hours,
          sleepQuality: log.sleep_quality,
          ketones: log.ketones,
          waterIntake: log.water_intake,
        };
      });
      setDailyLogs(logsObj);
    } catch (err) {
      console.error("Error loading daily logs:", err);
      setError(err.message);
      // Fallback to localStorage
      const saved = localStorage.getItem("fastingDailyLogs");
      if (saved) setDailyLogs(JSON.parse(saved));
    }
  }, []);

  // Initial load and realtime subscriptions
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([loadProfile(), loadDailyLogs()]);
      setLoading(false);
    };
    loadData();

    // Subscribe to realtime changes on profiles
    const profileSubscription = supabase
      .channel("profiles-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "profiles",
          filter: `user_id=eq.${DEFAULT_USER_ID}`,
        },
        (payload) => {
          console.log("Profile changed:", payload);
          if (payload.new) {
            setProfile({
              startingWeight: payload.new.starting_weight,
              goalWeight: payload.new.goal_weight,
              height: payload.new.height,
              startingWaist: payload.new.starting_waist || 0,
              goalWaist: payload.new.goal_waist || 0,
            });
          }
        }
      )
      .subscribe();

    // Subscribe to realtime changes on daily_logs
    const logsSubscription = supabase
      .channel("daily-logs-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "daily_logs",
          filter: `user_id=eq.${DEFAULT_USER_ID}`,
        },
        (payload) => {
          console.log("Daily log changed:", payload);
          if (payload.eventType === "DELETE") {
            setDailyLogs((prev) => {
              const newLogs = { ...prev };
              delete newLogs[payload.old.date_key];
              return newLogs;
            });
          } else if (payload.new) {
            const log = payload.new;
            setDailyLogs((prev) => ({
              ...prev,
              [log.date_key]: {
                weight: log.weight,
                waist: log.waist,
                notes: log.notes,
                energy: log.energy,
                mood: log.mood,
                bloodPressureSys: log.systolic,
                bloodPressureDia: log.diastolic,
                glucose: log.glucose,
                sleepHours: log.sleep_hours,
                sleepQuality: log.sleep_quality,
                ketones: log.ketones,
                waterIntake: log.water_intake,
              },
            }));
          }
        }
      )
      .subscribe();

    // Cleanup subscriptions on unmount
    return () => {
      supabase.removeChannel(profileSubscription);
      supabase.removeChannel(logsSubscription);
    };
  }, [loadProfile, loadDailyLogs]);

  // Save profile to Supabase
  const saveProfile = useCallback(async (newProfile) => {
    setProfile(newProfile);
    // Also save to localStorage as backup
    localStorage.setItem("fastingProfile", JSON.stringify(newProfile));

    try {
      const { error } = await supabase.from("profiles").upsert(
        {
          user_id: DEFAULT_USER_ID,
          starting_weight: newProfile.startingWeight,
          goal_weight: newProfile.goalWeight,
          height: newProfile.height,
          starting_waist: newProfile.startingWaist || 0,
          goal_waist: newProfile.goalWaist || 0,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );

      if (error) throw error;
    } catch (err) {
      console.error("Error saving profile:", err);
      setError(err.message);
    }
  }, []);

  // Save daily log to Supabase
  const saveLog = useCallback(
    async (dateKey, logData) => {
      const newLogs = { ...dailyLogs, [dateKey]: logData };
      setDailyLogs(newLogs);
      // Also save to localStorage as backup
      localStorage.setItem("fastingDailyLogs", JSON.stringify(newLogs));

      try {
        const { error } = await supabase.from("daily_logs").upsert(
          {
            user_id: DEFAULT_USER_ID,
            date_key: dateKey,
            weight: logData.weight || null,
            waist: logData.waist || null,
            notes: logData.notes || null,
            energy: logData.energy || null,
            mood: logData.mood || null,
            systolic: logData.bloodPressureSys || logData.systolic || null,
            diastolic: logData.bloodPressureDia || logData.diastolic || null,
            glucose: logData.glucose || null,
            sleep_hours: logData.sleepHours || null,
            sleep_quality: logData.sleepQuality || null,
            ketones: logData.ketones || null,
            water_intake: logData.waterIntake || null,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id,date_key" }
        );

        if (error) throw error;
      } catch (err) {
        console.error("Error saving log:", err);
        setError(err.message);
      }
    },
    [dailyLogs]
  );

  return {
    profile,
    dailyLogs,
    saveLog,
    saveProfile,
    loading,
    error,
    refresh: () => Promise.all([loadProfile(), loadDailyLogs()]),
  };
};
