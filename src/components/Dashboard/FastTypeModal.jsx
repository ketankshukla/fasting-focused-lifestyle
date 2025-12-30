import React, { useMemo } from "react";
import { colors } from "../../data";
import { schedule } from "../../data/schedule";

const fastTypeInfo = {
  pdf: {
    emoji: "🔥",
    description:
      "Complete abstinence from food and water for extended periods.",
    benefits: [
      "Deep autophagy & cellular regeneration",
      "Stem cell activation",
      "Maximum fat adaptation",
      "Enhanced mental clarity",
      "Reduced inflammation",
    ],
    bodyChanges: [
      { days: "Day 1-3", description: "Glycogen depletion, entering ketosis" },
      {
        days: "Day 4-7",
        description: "Deep autophagy, stem cell regeneration",
      },
      { days: "Day 8-10", description: "Maximum fat adaptation, peak clarity" },
    ],
    tips: [
      "Rest and minimize physical activity",
      "Avoid extreme temperatures",
      "Listen to your body carefully",
      "Break fast gently with bone broth",
    ],
  },
  wf: {
    emoji: "💧",
    description: "Water-only fasting while maintaining hydration.",
    benefits: [
      "Sustained ketosis",
      "Autophagy activation",
      "Improved insulin sensitivity",
      "Mental clarity",
      "Steady weight loss",
    ],
    bodyChanges: [
      { days: "Day 1-2", description: "Transitioning to fat burning" },
      { days: "Day 3-5", description: "Deep ketosis, autophagy begins" },
      { days: "Day 6-7", description: "Fat adaptation, stable energy" },
    ],
    tips: [
      "Drink 2-3 liters of water daily",
      "Add electrolytes if needed",
      "Light activity is okay",
      "Monitor how you feel",
    ],
  },
  sdf: {
    emoji: "⚡",
    description: "Shorter dry fasting periods for maintenance benefits.",
    benefits: [
      "Quick autophagy boost",
      "Metabolic reset",
      "Inflammation reduction",
      "Digestive rest",
      "Time-efficient fasting",
    ],
    bodyChanges: [
      { days: "Day 1-2", description: "Glycogen depletion begins" },
      { days: "Day 3-4", description: "Entering ketosis" },
      { days: "Day 5", description: "Early autophagy activation" },
    ],
    tips: [
      "Great for fasting maintenance",
      "Easier to schedule around life",
      "Good stepping stone to longer fasts",
      "Break fast with light foods",
    ],
  },
  "1r": {
    emoji: "🥗",
    description: "Strategic single-day refeed between fasting blocks.",
    benefits: [
      "Replenish glycogen stores",
      "Reset leptin levels",
      "Maintain metabolism",
      "Psychological break",
      "Nutrient replenishment",
    ],
    bodyChanges: [
      {
        days: "Morning",
        description: "Break fast gently, bone broth recommended",
      },
      { days: "Midday", description: "Light proteins and vegetables" },
      {
        days: "Evening",
        description: "Full balanced meal, prep for next fast",
      },
    ],
    tips: [
      "Start with bone broth or light soup",
      "Focus on protein (100-150g target)",
      "Avoid processed foods",
      "Don't overeat - eat mindfully",
    ],
  },
  fr: {
    emoji: "🍽️",
    description: "Extended eating period for full recovery and nourishment.",
    benefits: [
      "Complete metabolic reset",
      "Muscle preservation",
      "Hormone normalization",
      "Social eating flexibility",
      "Mental wellness break",
    ],
    bodyChanges: [
      {
        days: "Day 1",
        description: "Gentle refeeding, digestive reactivation",
      },
      { days: "Day 2-3", description: "Normal eating, nutrient absorption" },
      { days: "Day 4", description: "Fully nourished, ready for next fast" },
    ],
    tips: [
      "Gradually increase food intake",
      "Prioritize whole foods",
      "Stay hydrated",
      "Enjoy social meals guilt-free",
    ],
  },
};

const FastTypeModal = ({ fastType, onClose, dailyLogs = {} }) => {
  if (!fastType) return null;

  const typeInfo = fastTypeInfo[fastType];
  const colorInfo = colors[fastType];

  const scheduleData = useMemo(() => {
    const entries = Object.entries(schedule).filter(
      ([_, data]) => data.type === fastType
    );
    const totalDays = entries.length;

    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    let completedDays = 0;
    let nextOccurrence = null;
    let currentBlock = null;

    const blocks = [];
    let currentBlockStart = null;
    let currentBlockDays = 0;
    let prevDate = null;

    entries.forEach(([dateKey, data]) => {
      const entryDate = new Date(dateKey);

      if (dateKey <= todayStr) {
        completedDays++;
      }

      if (!nextOccurrence && dateKey > todayStr) {
        nextOccurrence = dateKey;
      }

      if (data.day === 1) {
        if (currentBlockStart) {
          blocks.push({
            start: currentBlockStart,
            days: currentBlockDays,
            end: prevDate,
          });
        }
        currentBlockStart = dateKey;
        currentBlockDays = 1;
      } else {
        currentBlockDays++;
      }

      if (
        dateKey === todayStr ||
        (dateKey < todayStr && (!prevDate || prevDate < todayStr))
      ) {
        if (currentBlockStart && dateKey >= currentBlockStart) {
          currentBlock = { start: currentBlockStart, currentDay: data.day };
        }
      }

      prevDate = dateKey;
    });

    if (currentBlockStart) {
      blocks.push({
        start: currentBlockStart,
        days: currentBlockDays,
        end: prevDate,
      });
    }

    let daysUntilNext = null;
    if (nextOccurrence) {
      const nextDate = new Date(nextOccurrence);
      daysUntilNext = Math.ceil((nextDate - today) / (1000 * 60 * 60 * 24));
    }

    return {
      totalDays,
      completedDays,
      blocks,
      nextOccurrence,
      daysUntilNext,
      currentBlock,
    };
  }, [fastType]);

  const statsData = useMemo(() => {
    const relevantLogs = Object.entries(dailyLogs).filter(([dateKey]) => {
      const scheduleEntry = schedule[dateKey];
      return scheduleEntry && scheduleEntry.type === fastType;
    });

    if (relevantLogs.length === 0) return null;

    let totalWeightLoss = 0;
    let weightCount = 0;
    let totalEnergy = 0;
    let energyCount = 0;
    let totalMood = 0;
    let moodCount = 0;
    let prevWeight = null;

    relevantLogs.sort((a, b) => a[0].localeCompare(b[0]));

    relevantLogs.forEach(([_, log]) => {
      if (log.weight) {
        if (prevWeight) {
          totalWeightLoss += prevWeight - log.weight;
          weightCount++;
        }
        prevWeight = log.weight;
      }
      if (log.energy) {
        totalEnergy += log.energy;
        energyCount++;
      }
      if (log.mood) {
        totalMood += log.mood;
        moodCount++;
      }
    });

    return {
      logsCount: relevantLogs.length,
      avgWeightLoss:
        weightCount > 0 ? (totalWeightLoss / weightCount).toFixed(1) : null,
      avgEnergy:
        energyCount > 0 ? (totalEnergy / energyCount).toFixed(1) : null,
      avgMood: moodCount > 0 ? (totalMood / moodCount).toFixed(1) : null,
    };
  }, [fastType, dailyLogs]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const isBlockCurrent = (block) => {
    const today = new Date().toISOString().split("T")[0];
    return block.start <= today && block.end >= today;
  };

  const isBlockCompleted = (block) => {
    const today = new Date().toISOString().split("T")[0];
    return block.end < today;
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 rounded-t-2xl"
          style={{ backgroundColor: colorInfo.bg }}
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl">{typeInfo.emoji}</span>
            <div>
              <h2 className="text-2xl font-bold text-white">
                {colorInfo.name}
              </h2>
              <p className="text-white/80 text-sm">{typeInfo.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Progress Overview */}
          <div className="bg-gray-700/50 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              📊 Progress Overview
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">
                  {scheduleData.completedDays}
                </p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {scheduleData.totalDays - scheduleData.completedDays}
                </p>
                <p className="text-xs text-gray-400">Remaining</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {Math.round(
                    (scheduleData.completedDays / scheduleData.totalDays) * 100
                  )}
                  %
                </p>
                <p className="text-xs text-gray-400">Complete</p>
              </div>
            </div>
            <div className="mt-3 bg-gray-600 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  width: `${
                    (scheduleData.completedDays / scheduleData.totalDays) * 100
                  }%`,
                  backgroundColor: colorInfo.bg,
                }}
              />
            </div>
          </div>

          {/* Your Stats */}
          {statsData && (
            <div className="bg-gray-700/50 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                📈 Your Stats During {colorInfo.name}
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                {statsData.avgWeightLoss && (
                  <div>
                    <p className="text-xl font-bold text-green-400">
                      {statsData.avgWeightLoss} lbs
                    </p>
                    <p className="text-xs text-gray-400">Avg Loss/Day</p>
                  </div>
                )}
                {statsData.avgEnergy && (
                  <div>
                    <p className="text-xl font-bold text-yellow-400">
                      {statsData.avgEnergy}/10
                    </p>
                    <p className="text-xs text-gray-400">Avg Energy</p>
                  </div>
                )}
                {statsData.avgMood && (
                  <div>
                    <p className="text-xl font-bold text-pink-400">
                      {statsData.avgMood}/10
                    </p>
                    <p className="text-xs text-gray-400">Avg Mood</p>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Based on {statsData.logsCount} logged days
              </p>
            </div>
          )}

          {/* Schedule Blocks */}
          <div className="bg-gray-700/50 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              📅 Schedule Blocks
            </h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {scheduleData.blocks.map((block, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-2 rounded-lg ${
                    isBlockCurrent(block)
                      ? "bg-green-500/20 border border-green-500/50"
                      : isBlockCompleted(block)
                      ? "bg-gray-600/50"
                      : "bg-gray-600/30"
                  }`}
                >
                  <span className="text-sm text-gray-300">
                    {formatDate(block.start)} - {formatDate(block.end)}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">
                      {block.days} days
                    </span>
                    {isBlockCurrent(block) && (
                      <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                    {isBlockCompleted(block) && (
                      <span className="text-green-400">✓</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Occurrence */}
          {scheduleData.nextOccurrence && (
            <div
              className="rounded-xl p-4 text-center"
              style={{ backgroundColor: `${colorInfo.bg}20` }}
            >
              <p className="text-gray-400 text-sm">Next {colorInfo.name}</p>
              <p className="text-white font-bold text-lg">
                {formatDate(scheduleData.nextOccurrence)}
              </p>
              <p className="text-gray-400 text-sm">
                {scheduleData.daysUntilNext} days away
              </p>
            </div>
          )}

          {/* What Happens to Your Body */}
          <div className="bg-gray-700/50 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              🧬 What Happens to Your Body
            </h3>
            <div className="space-y-2">
              {typeInfo.bodyChanges.map((change, idx) => (
                <div key={idx} className="flex gap-3">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded whitespace-nowrap h-fit"
                    style={{ backgroundColor: colorInfo.bg }}
                  >
                    {change.days}
                  </span>
                  <p className="text-sm text-gray-300">{change.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-700/50 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              ✨ Benefits
            </h3>
            <div className="flex flex-wrap gap-2">
              {typeInfo.benefits.map((benefit, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-full bg-gray-600 text-gray-300"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gray-700/50 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              💡 Tips
            </h3>
            <ul className="space-y-1.5">
              {typeInfo.tips.map((tip, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-300 flex items-start gap-2"
                >
                  <span style={{ color: colorInfo.bg }}>•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastTypeModal;
