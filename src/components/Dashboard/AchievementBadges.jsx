import React, { useState } from "react";

const AchievementBadges = ({ dailyLogs, profile, stats }) => {
  const [showAll, setShowAll] = useState(false);

  const badges = [
    {
      id: "first_log",
      name: "First Step",
      icon: "🌱",
      description: "Log your first day",
      check: () => Object.keys(dailyLogs).length >= 1,
    },
    {
      id: "week_logger",
      name: "Week Warrior",
      icon: "📅",
      description: "Log 7 days",
      check: () =>
        Object.keys(dailyLogs).filter((d) => dailyLogs[d]?.weight).length >= 7,
    },
    {
      id: "month_logger",
      name: "Month Master",
      icon: "📆",
      description: "Log 30 days",
      check: () =>
        Object.keys(dailyLogs).filter((d) => dailyLogs[d]?.weight).length >= 30,
    },
    {
      id: "first_5lbs",
      name: "First 5",
      icon: "⚡",
      description: "Lose 5 pounds",
      check: () => stats.lostSoFar >= 5,
    },
    {
      id: "first_10lbs",
      name: "Double Digits",
      icon: "🔥",
      description: "Lose 10 pounds",
      check: () => stats.lostSoFar >= 10,
    },
    {
      id: "first_20lbs",
      name: "Twenty Down",
      icon: "💪",
      description: "Lose 20 pounds",
      check: () => stats.lostSoFar >= 20,
    },
    {
      id: "first_50lbs",
      name: "Half Century",
      icon: "🏆",
      description: "Lose 50 pounds",
      check: () => stats.lostSoFar >= 50,
    },
    {
      id: "goal_reached",
      name: "Goal Crusher",
      icon: "👑",
      description: "Reach your goal weight",
      check: () => stats.currentWeight <= profile.goalWeight,
    },
    {
      id: "bmi_normal",
      name: "Healthy BMI",
      icon: "💚",
      description: "Achieve normal BMI (18.5-24.9)",
      check: () => stats.bmi && stats.bmi >= 18.5 && stats.bmi <= 24.9,
    },
    {
      id: "consistency_3",
      name: "Consistent",
      icon: "⭐",
      description: "3-day logging streak",
      check: () => {
        const dates = Object.keys(dailyLogs)
          .filter((d) => dailyLogs[d]?.weight)
          .sort();
        let streak = 1;
        for (let i = 1; i < dates.length; i++) {
          const diff = (new Date(dates[i]) - new Date(dates[i - 1])) / 86400000;
          if (diff === 1) streak++;
          else streak = 1;
          if (streak >= 3) return true;
        }
        return false;
      },
    },
    {
      id: "consistency_7",
      name: "Dedicated",
      icon: "🌟",
      description: "7-day logging streak",
      check: () => {
        const dates = Object.keys(dailyLogs)
          .filter((d) => dailyLogs[d]?.weight)
          .sort();
        let streak = 1;
        for (let i = 1; i < dates.length; i++) {
          const diff = (new Date(dates[i]) - new Date(dates[i - 1])) / 86400000;
          if (diff === 1) streak++;
          else streak = 1;
          if (streak >= 7) return true;
        }
        return false;
      },
    },
    {
      id: "consistency_30",
      name: "Unstoppable",
      icon: "🔥",
      description: "30-day logging streak",
      check: () => {
        const dates = Object.keys(dailyLogs)
          .filter((d) => dailyLogs[d]?.weight)
          .sort();
        let streak = 1;
        for (let i = 1; i < dates.length; i++) {
          const diff = (new Date(dates[i]) - new Date(dates[i - 1])) / 86400000;
          if (diff === 1) streak++;
          else streak = 1;
          if (streak >= 30) return true;
        }
        return false;
      },
    },
    {
      id: "notes_writer",
      name: "Journaler",
      icon: "📝",
      description: "Write notes on 10 days",
      check: () =>
        Object.values(dailyLogs).filter((l) => l.notes && l.notes.length > 0)
          .length >= 10,
    },
    {
      id: "high_energy",
      name: "Energized",
      icon: "⚡",
      description: "Log energy level 9+ five times",
      check: () =>
        Object.values(dailyLogs).filter((l) => l.energy >= 9).length >= 5,
    },
    {
      id: "happy_camper",
      name: "Happy Camper",
      icon: "😊",
      description: "Log mood level 9+ five times",
      check: () =>
        Object.values(dailyLogs).filter((l) => l.mood >= 9).length >= 5,
    },
  ];

  const earnedBadges = badges.filter((b) => b.check());
  const unearnedBadges = badges.filter((b) => !b.check());
  const displayBadges = showAll ? badges : earnedBadges;

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">🏅 Achievements</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-amber-400 font-medium">
            {earnedBadges.length}/{badges.length}
          </span>
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-3 py-1 text-xs rounded-full transition-all ${
              showAll
                ? "bg-white text-gray-900"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {showAll ? "Earned Only" : "Show All"}
          </button>
        </div>
      </div>

      {earnedBadges.length === 0 && !showAll ? (
        <div className="text-center py-6 text-gray-400">
          <p className="text-4xl mb-2">🎯</p>
          <p>Start logging to earn badges!</p>
          <button
            onClick={() => setShowAll(true)}
            className="mt-3 text-sm text-blue-400 hover:text-blue-300"
          >
            View all available badges →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {displayBadges.map((badge) => {
            const isEarned = badge.check();
            return (
              <div
                key={badge.id}
                className={`relative group p-2 rounded-xl text-center transition-all ${
                  isEarned
                    ? "bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30"
                    : "bg-white/5 border border-gray-700/50 opacity-50"
                }`}
              >
                <div
                  className={`text-2xl sm:text-3xl ${!isEarned && "grayscale"}`}
                >
                  {badge.icon}
                </div>
                <p
                  className={`text-[10px] sm:text-xs font-medium mt-1 truncate ${
                    isEarned ? "text-amber-300" : "text-gray-500"
                  }`}
                >
                  {badge.name}
                </p>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                  {badge.description}
                  {isEarned && <span className="text-green-400 ml-1">✓</span>}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showAll && unearnedBadges.length > 0 && (
        <p className="text-xs text-gray-500 text-center mt-3">
          {unearnedBadges.length} more badges to unlock!
        </p>
      )}
    </div>
  );
};

export default AchievementBadges;
