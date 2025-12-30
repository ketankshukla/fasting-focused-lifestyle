import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
} from "recharts";

const COLORS = [
  "#10B981",
  "#F59E0B",
  "#EC4899",
  "#8B5CF6",
  "#06B6D4",
  "#EF4444",
];

const ProgressCharts = ({ dailyLogs, profile }) => {
  const [chartType, setChartType] = useState("weight");

  // Helper to parse date string as local date (not UTC)
  const parseLocalDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  // Count only days that have actual weight data logged
  const daysWithWeight = Object.entries(dailyLogs).filter(
    ([_, log]) => log && log.weight && log.weight > 0
  ).length;

  // Weight chart data - only entries with actual weight
  const weightChartData = Object.entries(dailyLogs)
    .filter(
      ([_, log]) =>
        log && log.weight && typeof log.weight === "number" && log.weight > 0
    )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, log]) => ({
      date: parseLocalDate(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      fullDate: date,
      weight: log.weight,
      waist: log.waist || null,
    }));

  // Wellness chart data - entries with energy OR mood (must be actual values, not defaults)
  const wellnessChartData = Object.entries(dailyLogs)
    .filter(([_, log]) => {
      if (!log) return false;
      // Only include if energy or mood is a real number > 0
      const hasEnergy =
        log.energy && typeof log.energy === "number" && log.energy > 0;
      const hasMood = log.mood && typeof log.mood === "number" && log.mood > 0;
      return hasEnergy || hasMood;
    })
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, log]) => ({
      date: parseLocalDate(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      fullDate: date,
      energy: log.energy || null,
      mood: log.mood || null,
    }));

  // Combined chart data for comparison view
  const chartData = Object.entries(dailyLogs)
    .filter(([_, log]) => log && (log.weight > 0 || log.waist > 0))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, log]) => ({
      date: parseLocalDate(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      fullDate: date,
      weight: log.weight || null,
      waist: log.waist || null,
    }));

  // Data for pie/radial charts - progress overview
  const currentWeight =
    weightChartData[weightChartData.length - 1]?.weight ||
    profile.startingWeight;
  const progressData = [
    {
      name: "Lost",
      value: Math.max(0, profile.startingWeight - currentWeight),
      fill: "#10B981",
    },
    {
      name: "Remaining",
      value: Math.max(0, currentWeight - profile.goalWeight),
      fill: "#374151",
    },
  ];

  // Check if we have ANY data to show
  const hasAnyData = weightChartData.length > 0 || wellnessChartData.length > 0;

  if (!hasAnyData) {
    return (
      <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
        <h3 className="text-lg font-bold text-white mb-4">
          📊 Progress Charts
        </h3>
        <div className="text-center py-8 text-gray-400">
          <p className="text-4xl mb-2">📈</p>
          <p>Log your first day to see your progress charts!</p>
        </div>
      </div>
    );
  }

  const getUnit = (name) => {
    const units = {
      Weight: " lbs",
      Waist: " inches",
      Energy: "/10",
      Mood: "/10",
      "BP Systolic": " mmHg",
      "BP Diastolic": " mmHg",
      Glucose: " mg/dL",
      Ketones: " mmol/L",
      "Sleep Hours": " hrs",
      "Sleep Quality": "/10",
      "Water (oz)": " oz",
      Goal: " lbs",
    };
    return units[name] || "";
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl">
          <p className="text-white font-medium mb-1">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value}
              {getUnit(entry.name)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h3 className="text-lg font-bold text-white">📊 Progress Charts</h3>
        <div className="flex flex-wrap gap-2">
          {["weight", "progress", "wellness", "compare"].map((type) => (
            <button
              key={type}
              onClick={() => setChartType(type)}
              className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                chartType === type
                  ? "bg-white text-gray-900"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {type === "weight"
                ? "⚖️ Weight"
                : type === "progress"
                ? "🎯 Progress"
                : type === "wellness"
                ? "💚 Wellness"
                : "📊 Compare"}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "weight" ? (
            // BAR CHART for weight
            <BarChart
              data={weightChartData}
              margin={{ bottom: 5, left: 10, right: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="date"
                type="category"
                stroke="#9CA3AF"
                fontSize={12}
                tick={{ fill: "#9CA3AF" }}
                tickLine={false}
                axisLine={{ stroke: "#374151" }}
              />
              <YAxis
                stroke="#9CA3AF"
                fontSize={12}
                domain={[profile.goalWeight - 10, "dataMax + 5"]}
                tick={{ fill: "#9CA3AF" }}
                label={{
                  value: "Weight (lbs)",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#9CA3AF",
                  fontSize: 11,
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="weight"
                name="Weight"
                fill="#10B981"
                radius={[4, 4, 0, 0]}
                barSize={weightChartData.length === 1 ? 60 : undefined}
              />
            </BarChart>
          ) : chartType === "progress" ? (
            // PIE CHART for progress overview
            <PieChart>
              <Pie
                data={progressData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value.toFixed(1)} lbs`}
                labelLine={{ stroke: "#9CA3AF" }}
              >
                {progressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value.toFixed(1)} lbs`, ""]}
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "white" }}
              />
              <Legend
                verticalAlign="bottom"
                formatter={(value) => (
                  <span style={{ color: "#9CA3AF" }}>{value}</span>
                )}
              />
            </PieChart>
          ) : chartType === "wellness" ? (
            // BAR CHART for wellness (energy & mood)
            <BarChart
              data={wellnessChartData}
              margin={{ bottom: 5, left: 10, right: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="date"
                type="category"
                stroke="#9CA3AF"
                fontSize={12}
                tick={{ fill: "#9CA3AF" }}
                tickLine={false}
                axisLine={{ stroke: "#374151" }}
              />
              <YAxis
                stroke="#9CA3AF"
                fontSize={12}
                domain={[0, 10]}
                tick={{ fill: "#9CA3AF" }}
                label={{
                  value: "Rating (1-10)",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#9CA3AF",
                  fontSize: 11,
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="energy"
                name="Energy"
                fill="#F59E0B"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="mood"
                name="Mood"
                fill="#EC4899"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          ) : (
            // LINE CHART for comparison (weight trend)
            <LineChart
              data={chartData}
              margin={{ bottom: 5, left: 10, right: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="date"
                type="category"
                stroke="#9CA3AF"
                fontSize={12}
                tick={{ fill: "#9CA3AF" }}
                tickLine={false}
                axisLine={{ stroke: "#374151" }}
              />
              <YAxis
                stroke="#9CA3AF"
                fontSize={12}
                tick={{ fill: "#9CA3AF" }}
                label={{
                  value: "Value",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#9CA3AF",
                  fontSize: 11,
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="weight"
                name="Weight"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="waist"
                name="Waist"
                stroke="#8B5CF6"
                strokeWidth={3}
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 6 }}
                connectNulls
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Chart description */}
      <div className="mt-2 text-center text-xs text-gray-400">
        {chartType === "weight" && "📊 Daily weight measurements (bar chart)"}
        {chartType === "progress" &&
          "🎯 Weight lost vs. remaining to goal (pie chart)"}
        {chartType === "wellness" &&
          "💚 Daily energy & mood levels (bar chart)"}
        {chartType === "compare" &&
          "📈 Weight & waist trends over time (line chart)"}
      </div>

      {/* Debug: Show actual dates in data */}
      <div className="mt-1 text-center text-xs text-cyan-400">
        Data dates:{" "}
        {chartType === "weight"
          ? weightChartData.map((d) => d.date).join(", ") || "No weight data"
          : chartType === "wellness"
          ? wellnessChartData.map((d) => d.date).join(", ") ||
            "No wellness data"
          : chartData.map((d) => d.date).join(", ") || "No data"}
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-gray-400">Start Weight</p>
          <p className="text-sm font-bold text-white">
            {profile.startingWeight} lbs
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-gray-400">Current</p>
          <p className="text-sm font-bold text-green-400">
            {weightChartData[weightChartData.length - 1]?.weight
              ? `${weightChartData[weightChartData.length - 1].weight} lbs`
              : "--"}
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-gray-400">Lost So Far</p>
          <p className="text-sm font-bold text-emerald-400">
            {weightChartData[weightChartData.length - 1]?.weight
              ? `${(
                  profile.startingWeight -
                  weightChartData[weightChartData.length - 1].weight
                ).toFixed(1)} lbs`
              : "--"}
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-gray-400">Days Logged</p>
          <p className="text-sm font-bold text-amber-400">{daysWithWeight}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCharts;
