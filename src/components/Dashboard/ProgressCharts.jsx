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
  Label,
} from "recharts";

const ProgressCharts = ({ dailyLogs, profile }) => {
  const [chartType, setChartType] = useState("weight");

  // Helper to parse date string as local date (not UTC)
  const parseLocalDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  // Count only days that have actual weight data logged
  const daysWithWeight = Object.entries(dailyLogs).filter(
    ([_, log]) => log.weight
  ).length;

  const chartData = Object.entries(dailyLogs)
    .filter(([_, log]) => log.weight || log.waist || log.energy || log.mood)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, log]) => ({
      date: parseLocalDate(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      fullDate: date,
      weight: log.weight || null,
      waist: log.waist || null,
      energy: log.energy || null,
      mood: log.mood || null,
      glucose: log.glucose || null,
      bloodPressureSys: log.bloodPressureSys || null,
      bloodPressureDia: log.bloodPressureDia || null,
      sleepHours: log.sleepHours || null,
      sleepQuality: log.sleepQuality || null,
      ketones: log.ketones || null,
      waterIntake: log.waterIntake || null,
    }));

  if (chartData.length < 1) {
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
        <div className="flex gap-2">
          {["weight", "waist", "wellness", "vitals", "sleep"].map((type) => (
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
                : type === "waist"
                ? "📏 Waist"
                : type === "wellness"
                ? "💚 Wellness"
                : type === "vitals"
                ? "🩺 Vitals"
                : "😴 Sleep"}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "weight" ? (
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}>
                <Label
                  value="Date"
                  offset={-5}
                  position="insideBottom"
                  fill="#9CA3AF"
                  fontSize={11}
                />
              </XAxis>
              <YAxis
                stroke="#9CA3AF"
                fontSize={12}
                domain={[profile.goalWeight - 10, "dataMax + 5"]}
                tickFormatter={(val) => `${val}`}
              >
                <Label
                  value="Weight (lbs)"
                  angle={-90}
                  position="insideLeft"
                  fill="#9CA3AF"
                  fontSize={11}
                  style={{ textAnchor: "middle" }}
                />
              </YAxis>
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="weight"
                name="Weight"
                stroke="#10B981"
                fill="url(#weightGradient)"
                strokeWidth={2}
                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "#10B981" }}
                connectNulls
              />
              {/* Goal line */}
              <Line
                type="monotone"
                dataKey={() => profile.goalWeight}
                name="Goal"
                stroke="#F59E0B"
                strokeDasharray="5 5"
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          ) : chartType === "waist" ? (
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="waistGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}>
                <Label
                  value="Date"
                  offset={-5}
                  position="insideBottom"
                  fill="#9CA3AF"
                  fontSize={11}
                />
              </XAxis>
              <YAxis
                stroke="#9CA3AF"
                fontSize={12}
                domain={[profile.goalWaist - 2, "dataMax + 2"]}
              >
                <Label
                  value="Waist (inches)"
                  angle={-90}
                  position="insideLeft"
                  fill="#9CA3AF"
                  fontSize={11}
                  style={{ textAnchor: "middle" }}
                />
              </YAxis>
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="waist"
                name="Waist"
                stroke="#8B5CF6"
                fill="url(#waistGradient)"
                strokeWidth={2}
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "#8B5CF6" }}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey={() => profile.goalWaist}
                name="Goal"
                stroke="#F59E0B"
                strokeDasharray="5 5"
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          ) : chartType === "wellness" ? (
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}>
                <Label
                  value="Date"
                  offset={-5}
                  position="insideBottom"
                  fill="#9CA3AF"
                  fontSize={11}
                />
              </XAxis>
              <YAxis stroke="#9CA3AF" fontSize={12} domain={[0, 10]}>
                <Label
                  value="Rating (1-10)"
                  angle={-90}
                  position="insideLeft"
                  fill="#9CA3AF"
                  fontSize={11}
                  style={{ textAnchor: "middle" }}
                />
              </YAxis>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="energy"
                name="Energy"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="mood"
                name="Mood"
                stroke="#EC4899"
                strokeWidth={2}
                dot={{ fill: "#EC4899", strokeWidth: 2, r: 4 }}
                connectNulls
              />
            </LineChart>
          ) : chartType === "vitals" ? (
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}>
                <Label
                  value="Date"
                  offset={-5}
                  position="insideBottom"
                  fill="#9CA3AF"
                  fontSize={11}
                />
              </XAxis>
              <YAxis stroke="#9CA3AF" fontSize={12}>
                <Label
                  value="Value"
                  angle={-90}
                  position="insideLeft"
                  fill="#9CA3AF"
                  fontSize={11}
                  style={{ textAnchor: "middle" }}
                />
              </YAxis>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="bloodPressureSys"
                name="BP Systolic"
                stroke="#EF4444"
                strokeWidth={2}
                dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="bloodPressureDia"
                name="BP Diastolic"
                stroke="#F97316"
                strokeWidth={2}
                dot={{ fill: "#F97316", strokeWidth: 2, r: 4 }}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="glucose"
                name="Glucose"
                stroke="#06B6D4"
                strokeWidth={2}
                dot={{ fill: "#06B6D4", strokeWidth: 2, r: 4 }}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="ketones"
                name="Ketones"
                stroke="#A855F7"
                strokeWidth={2}
                dot={{ fill: "#A855F7", strokeWidth: 2, r: 4 }}
                connectNulls
              />
            </LineChart>
          ) : (
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}>
                <Label
                  value="Date"
                  offset={-5}
                  position="insideBottom"
                  fill="#9CA3AF"
                  fontSize={11}
                />
              </XAxis>
              <YAxis stroke="#9CA3AF" fontSize={12}>
                <Label
                  value="Hours / Rating"
                  angle={-90}
                  position="insideLeft"
                  fill="#9CA3AF"
                  fontSize={11}
                  style={{ textAnchor: "middle" }}
                />
              </YAxis>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="sleepHours"
                name="Sleep Hours"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="sleepQuality"
                name="Sleep Quality"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="waterIntake"
                name="Water (oz)"
                stroke="#06B6D4"
                strokeWidth={2}
                dot={{ fill: "#06B6D4", strokeWidth: 2, r: 4 }}
                connectNulls
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-gray-400">First Log</p>
          <p className="text-sm font-bold text-white">
            {chartData[0]?.weight ? `${chartData[0].weight} lbs` : "--"}
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-gray-400">Latest</p>
          <p className="text-sm font-bold text-green-400">
            {chartData[chartData.length - 1]?.weight
              ? `${chartData[chartData.length - 1].weight} lbs`
              : "--"}
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-xs text-gray-400">Change</p>
          <p className="text-sm font-bold text-emerald-400">
            {chartData[0]?.weight && chartData[chartData.length - 1]?.weight
              ? `${(
                  chartData[0].weight - chartData[chartData.length - 1].weight
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
