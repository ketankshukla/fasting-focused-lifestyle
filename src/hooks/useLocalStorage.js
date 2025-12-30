import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

export const useFastingStorage = (defaultProfile) => {
  const [profile, setProfile] = useLocalStorage(
    "fastingProfile",
    defaultProfile
  );
  const [dailyLogs, setDailyLogs] = useLocalStorage("fastingDailyLogs", {});

  const saveLog = (dateKey, logData) => {
    setDailyLogs((prev) => ({
      ...prev,
      [dateKey]: {
        ...logData,
        savedAt: new Date().toISOString(),
      },
    }));
  };

  const saveProfile = (newProfile) => {
    setProfile(newProfile);
  };

  return { profile, dailyLogs, saveLog, saveProfile };
};
