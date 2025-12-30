import React from "react";
import { getLocalDateKey } from "../../utils/calculations";

const StreakCounter = ({ dailyLogs }) => {
  const calculateStreaks = () => {
    const loggedDates = Object.keys(dailyLogs)
      .filter((date) => dailyLogs[date]?.weight)
      .sort();

    if (loggedDates.length === 0) {
      return { current: 0, longest: 0, total: 0 };
    }

    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 1;

    const today = getLocalDateKey();
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = `${yesterdayDate.getFullYear()}-${String(
      yesterdayDate.getMonth() + 1
    ).padStart(2, "0")}-${String(yesterdayDate.getDate()).padStart(2, "0")}`;

    for (let i = 1; i < loggedDates.length; i++) {
      const prevDate = new Date(loggedDates[i - 1]);
      const currDate = new Date(loggedDates[i]);
      const diffDays = (currDate - prevDate) / (1000 * 60 * 60 * 24);

      if (diffDays === 1) {
        tempStreak++;
      } else {
        longestStreak = Math.max(longestStreak, tempStreak);
        tempStreak = 1;
      }
    }
    longestStreak = Math.max(longestStreak, tempStreak);

    const lastLogDate = loggedDates[loggedDates.length - 1];
    if (lastLogDate === today || lastLogDate === yesterday) {
      let streak = 1;
      for (let i = loggedDates.length - 2; i >= 0; i--) {
        const currDate = new Date(loggedDates[i + 1]);
        const prevDate = new Date(loggedDates[i]);
        const diffDays = (currDate - prevDate) / (1000 * 60 * 60 * 24);
        if (diffDays === 1) {
          streak++;
        } else {
          break;
        }
      }
      currentStreak = streak;
    }

    return {
      current: currentStreak,
      longest: longestStreak,
      total: loggedDates.length,
    };
  };

  const streaks = calculateStreaks();

  const getStreakEmoji = (streak) => {
    if (streak >= 30) return "🏆";
    if (streak >= 14) return "🔥";
    if (streak >= 7) return "⭐";
    if (streak >= 3) return "✨";
    return "🌱";
  };

  const getStreakMessage = (streak) => {
    if (streak >= 30) return "Legendary streak!";
    if (streak >= 14) return "Two weeks strong!";
    if (streak >= 7) return "One week warrior!";
    if (streak >= 3) return "Building momentum!";
    if (streak >= 1) return "Keep it going!";
    return "Start your streak!";
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <h3 className="text-lg font-bold text-white mb-4">🔥 Logging Streak</h3>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-3 text-center border border-orange-500/30">
          <p className="text-3xl sm:text-4xl font-black text-orange-400">
            {streaks.current}
          </p>
          <p className="text-xs text-gray-300 mt-1">Current</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl p-3 text-center border border-amber-500/30">
          <p className="text-3xl sm:text-4xl font-black text-amber-400">
            {streaks.longest}
          </p>
          <p className="text-xs text-gray-300 mt-1">Longest</p>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-3 text-center border border-green-500/30">
          <p className="text-3xl sm:text-4xl font-black text-green-400">
            {streaks.total}
          </p>
          <p className="text-xs text-gray-300 mt-1">Total Days</p>
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-3 text-center">
        <p className="text-2xl mb-1">{getStreakEmoji(streaks.current)}</p>
        <p className="text-sm text-gray-300">
          {getStreakMessage(streaks.current)}
        </p>
      </div>

      {streaks.current > 0 && streaks.current < streaks.longest && (
        <p className="text-xs text-gray-400 text-center mt-3">
          {streaks.longest - streaks.current} more days to beat your record!
        </p>
      )}

      {streaks.current === streaks.longest && streaks.current > 0 && (
        <p className="text-xs text-amber-400 text-center mt-3">
          🎉 You're at your best streak!
        </p>
      )}

      <div className="mt-4 flex justify-center gap-1">
        {Array.from({ length: Math.min(7, streaks.current) }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
        {streaks.current === 0 && (
          <p className="text-xs text-gray-500">
            Log today to start your streak!
          </p>
        )}
      </div>
    </div>
  );
};

export default StreakCounter;
