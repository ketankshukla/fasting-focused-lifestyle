import React, { useState, useEffect } from "react";
import { schedule } from "../../data";
import { colors } from "../../data";

// Daily log time is 9 PM PST (21:00)
const DAILY_LOG_HOUR = 21;
const FAST_START_HOUR = 21; // 9 PM PST

const FastingTimer = () => {
  const [now, setNow] = useState(new Date());
  const [customStartTime, setCustomStartTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Calculate time until next 9 PM log time
  const getTimeUntilNextLog = () => {
    const nextLog = new Date(now);
    nextLog.setHours(DAILY_LOG_HOUR, 0, 0, 0);
    if (now >= nextLog) {
      nextLog.setDate(nextLog.getDate() + 1);
    }
    const diff = nextLog - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { hours, minutes };
  };

  const timeUntilLog = getTimeUntilNextLog();

  const getTodayKey = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const findCurrentFast = () => {
    const todayKey = getTodayKey();
    const todayData = schedule[todayKey];

    if (!todayData) return null;

    const isFastingDay = ["pdf", "wf", "sdf"].includes(todayData.type);
    if (!isFastingDay) return null;

    let fastStartDate = todayKey;
    let currentDay = todayData.day;

    for (let i = currentDay - 1; i >= 1; i--) {
      const prevDate = new Date(todayKey);
      prevDate.setDate(prevDate.getDate() - (currentDay - i));
      const prevKey = prevDate.toISOString().split("T")[0];
      const prevData = schedule[prevKey];
      if (prevData && prevData.type === todayData.type && prevData.day === i) {
        fastStartDate = prevKey;
      }
    }

    return {
      type: todayData.type,
      day: todayData.day,
      startDate: fastStartDate,
      color: colors[todayData.type],
    };
  };

  const currentFast = findCurrentFast();

  const calculateTimeElapsed = () => {
    if (!currentFast) return null;

    // Start time is 9 PM (21:00) on the fast start date
    const startTime = customStartTime
      ? new Date(customStartTime)
      : new Date(
          currentFast.startDate +
            `T${String(FAST_START_HOUR).padStart(2, "0")}:00:00`
        );

    const diff = now - startTime;

    if (diff < 0)
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalHours: 0,
        daysCompleted: 0,
      };

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Calculate actual 24-hour days completed (not calendar days)
    const daysCompleted = Math.floor(hours / 24);
    const currentDayHours = hours % 24;

    const milliseconds = diff % 1000;

    return {
      hours,
      minutes,
      seconds,
      milliseconds,
      totalMs: diff,
      totalHours: diff / (1000 * 60 * 60),
      daysCompleted,
      currentDayHours,
    };
  };

  const timeElapsed = calculateTimeElapsed();

  const getExpectedDuration = () => {
    if (!currentFast) return 0;
    switch (currentFast.type) {
      case "pdf":
        return 240;
      case "wf":
        return 168;
      case "sdf":
        return 120;
      default:
        return 0;
    }
  };

  const expectedDuration = getExpectedDuration();
  const expectedMs = expectedDuration * 60 * 60 * 1000;
  const progress = timeElapsed
    ? Math.min(100, (timeElapsed.totalMs / expectedMs) * 100)
    : 0;

  const formatTime = (value) => String(value).padStart(2, "0");

  const getMotivationalMessage = () => {
    if (!timeElapsed) return "";
    const hours = timeElapsed.hours;

    if (hours < 12)
      return "You've got this! The beginning is always the hardest.";
    if (hours < 24) return "Glycogen depleting. Your body is transitioning!";
    if (hours < 48) return "Ketosis beginning. Fat burning is starting!";
    if (hours < 72) return "Deep ketosis! Autophagy is accelerating.";
    if (hours < 96)
      return "Peak autophagy zone! Cellular cleanup in overdrive.";
    if (hours < 120) return "Maximum benefits! You're in rare territory.";
    if (hours < 168) return "Elite faster! Your discipline is extraordinary.";
    return "Legendary status! You've mastered the art of fasting.";
  };

  if (!currentFast) {
    const todayKey = getTodayKey();
    const todayData = schedule[todayKey];
    const isRefeedDay = todayData && ["1r", "fr"].includes(todayData.type);

    return (
      <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
        <h3 className="text-lg font-bold text-white mb-4">⏱️ Fasting Timer</h3>
        <div className="text-center py-4">
          {isRefeedDay ? (
            <>
              <p className="text-4xl mb-2">🍽️</p>
              <p className="text-green-400 font-medium">Refeed Day!</p>
              <p className="text-gray-400 text-sm mt-1">
                Enjoy your nourishment. You've earned it!
              </p>
            </>
          ) : (
            <>
              <p className="text-4xl mb-2">📅</p>
              <p className="text-gray-400">No active fast today</p>
            </>
          )}
        </div>
      </div>
    );
  }

  // Calculate time until next log with milliseconds
  const getTimeUntilNextLogPrecise = () => {
    const nextLog = new Date(now);
    nextLog.setHours(DAILY_LOG_HOUR, 0, 0, 0);
    if (now >= nextLog) {
      nextLog.setDate(nextLog.getDate() + 1);
    }
    const diff = nextLog - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const milliseconds = diff % 1000;
    return { hours, minutes, seconds, milliseconds };
  };

  const countdownTime = getTimeUntilNextLogPrecise();

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">⏱️ Fasting Timer</h3>
        <div
          className="px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: currentFast.color.bg }}
        >
          {currentFast.color.name} - Day {(timeElapsed?.daysCompleted || 0) + 1}
        </div>
      </div>

      {/* Timers Side by Side */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Fasting Duration */}
        <div className="text-center">
          <div className="flex justify-center items-baseline gap-0.5 text-amber-400">
            <span className="text-3xl sm:text-4xl font-black tabular-nums">
              {formatTime(timeElapsed?.hours || 0)}
            </span>
            <span className="text-xl font-bold">:</span>
            <span className="text-3xl sm:text-4xl font-black tabular-nums">
              {formatTime(timeElapsed?.minutes || 0)}
            </span>
            <span className="text-xl font-bold">:</span>
            <span className="text-3xl sm:text-4xl font-black tabular-nums">
              {formatTime(timeElapsed?.seconds || 0)}
            </span>
          </div>
          <p className="text-amber-300 text-xs mt-1 font-medium">
            ⏱️ Fasting Duration
          </p>
        </div>

        {/* Next Log Countdown */}
        <div className="text-center">
          <div className="flex justify-center items-baseline gap-0.5 text-cyan-400">
            <span className="text-3xl sm:text-4xl font-black tabular-nums">
              {formatTime(countdownTime.hours)}
            </span>
            <span className="text-xl font-bold">:</span>
            <span className="text-3xl sm:text-4xl font-black tabular-nums">
              {formatTime(countdownTime.minutes)}
            </span>
            <span className="text-xl font-bold">:</span>
            <span className="text-3xl sm:text-4xl font-black tabular-nums">
              {formatTime(countdownTime.seconds)}
            </span>
          </div>
          <p className="text-cyan-300 text-xs mt-1 font-medium">
            📝 Next Log In
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-emerald-400 font-medium">0h</span>
          <span className="font-mono text-pink-400 font-bold">
            {progress.toFixed(6)}%
          </span>
          <span className="text-emerald-400 font-medium">
            {expectedDuration}h
          </span>
        </div>
        <div className="h-4 bg-gray-900/50 rounded-full overflow-hidden border border-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-3 text-center">
        <p className="text-sm text-yellow-300">{getMotivationalMessage()}</p>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-4 text-center">
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-rose-300 font-medium">Total Hours</p>
          <p className="text-lg font-bold text-white">
            {timeElapsed?.hours || 0}
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-amber-300 font-medium">Full Days</p>
          <p className="text-lg font-bold text-amber-400">
            {timeElapsed?.daysCompleted || 0}
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-purple-300 font-medium">Current Day</p>
          <p className="text-lg font-bold text-purple-400">
            {timeElapsed?.currentDayHours || 0}h
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-green-300 font-medium">Hours Left</p>
          <p className="text-lg font-bold text-green-400">
            {Math.max(0, expectedDuration - (timeElapsed?.hours || 0))}
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-cyan-300 font-medium">Log Time</p>
          <p className="text-lg font-bold text-cyan-400">9PM</p>
        </div>
      </div>
    </div>
  );
};

export default FastingTimer;
