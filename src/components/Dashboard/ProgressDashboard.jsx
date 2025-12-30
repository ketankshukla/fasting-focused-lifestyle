import React from "react";

const ProgressDashboard = ({ stats, profile }) => {
  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <h3 className="text-lg font-bold text-white mb-4">📈 Ketan's Progress</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-2xl sm:text-3xl font-black text-white">
            {stats.currentWeight}
          </p>
          <p className="text-xs text-gray-300">Current (lbs)</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-2xl sm:text-3xl font-black text-green-400">
            -{stats.lostSoFar.toFixed(1)}
          </p>
          <p className="text-xs text-gray-300">Lost So Far</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-2xl sm:text-3xl font-black text-amber-400">
            {stats.remaining.toFixed(1)}
          </p>
          <p className="text-xs text-gray-300">To Goal</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-2xl sm:text-3xl font-black text-purple-400">
            {stats.bmi || "--"}
          </p>
          <p className="text-xs text-gray-300">BMI</p>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex justify-between text-sm text-gray-300 mb-1">
          <span>{profile.startingWeight} lbs</span>
          <span className="font-mono">{stats.progressPercent.toFixed(6)}%</span>
          <span>{profile.goalWeight} lbs</span>
        </div>
        <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
            style={{ width: `${stats.progressPercent}%` }}
          />
        </div>
      </div>

      {stats.avgLossPerWeek > 0 && (
        <p className="text-sm text-gray-300 text-center">
          Avg: {stats.avgLossPerWeek.toFixed(1)} lbs/week •
          {stats.daysToGoal && ` Est. ${stats.daysToGoal} days to goal`}
        </p>
      )}
    </div>
  );
};

export default ProgressDashboard;
