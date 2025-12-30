import React, { useState } from "react";

const ExportData = ({ dailyLogs, profile, stats }) => {
  const [isExporting, setIsExporting] = useState(false);

  const generateReport = () => {
    const loggedDays = Object.entries(dailyLogs)
      .filter(([_, log]) => log.weight)
      .sort(([a], [b]) => a.localeCompare(b));

    const report = `
================================================================================
                        FASTING JOURNEY PROGRESS REPORT
                           Generated: ${new Date().toLocaleDateString()}
================================================================================

PROFILE SUMMARY
---------------
Starting Weight: ${profile.startingWeight} lbs
Goal Weight: ${profile.goalWeight} lbs
Starting Waist: ${profile.startingWaist}"
Goal Waist: ${profile.goalWaist}"
Height: ${Math.floor(profile.height / 12)}'${profile.height % 12}"

PROGRESS OVERVIEW
-----------------
Current Weight: ${stats.currentWeight} lbs
Weight Lost: ${stats.lostSoFar.toFixed(1)} lbs
Remaining to Goal: ${stats.remaining.toFixed(1)} lbs
Progress: ${stats.progressPercent.toFixed(1)}%
Current BMI: ${stats.bmi || "N/A"}
${
  stats.avgLossPerWeek > 0
    ? `Average Loss: ${stats.avgLossPerWeek.toFixed(1)} lbs/week`
    : ""
}
${stats.daysToGoal ? `Estimated Days to Goal: ${stats.daysToGoal}` : ""}

DAILY LOG ENTRIES (${loggedDays.length} days logged)
----------------------------------------------------
${loggedDays
  .map(([date, log]) => {
    const d = new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return `
${d}
  Weight: ${log.weight || "--"} lbs | Waist: ${log.waist || "--"}"
  Energy: ${log.energy}/10 | Mood: ${log.mood}/10
  ${
    log.bloodPressureSys
      ? `BP: ${log.bloodPressureSys}/${log.bloodPressureDia} mmHg`
      : ""
  }
  ${log.glucose ? `Glucose: ${log.glucose} mg/dL` : ""}
  ${log.ketones ? `Ketones: ${log.ketones} mmol/L` : ""}
  ${log.waterIntake ? `Water: ${log.waterIntake} oz` : ""}
  ${
    log.sleepHours
      ? `Sleep: ${log.sleepHours}h (Quality: ${log.sleepQuality}/10)`
      : ""
  }
  ${log.notes ? `Notes: ${log.notes}` : ""}
`;
  })
  .join("\n")}

================================================================================
                           END OF REPORT
================================================================================
`;

    return report;
  };

  const exportAsText = () => {
    setIsExporting(true);
    try {
      const report = generateReport();
      const blob = new Blob([report], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `fasting-report-${
        new Date().toISOString().split("T")[0]
      }.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setIsExporting(false);
    }
  };

  const exportAsJSON = () => {
    setIsExporting(true);
    try {
      const data = {
        exportDate: new Date().toISOString(),
        profile,
        stats: {
          currentWeight: stats.currentWeight,
          lostSoFar: stats.lostSoFar,
          remaining: stats.remaining,
          progressPercent: stats.progressPercent,
          bmi: stats.bmi,
        },
        dailyLogs,
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `fasting-data-${
        new Date().toISOString().split("T")[0]
      }.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setIsExporting(false);
    }
  };

  const exportAsCSV = () => {
    setIsExporting(true);
    try {
      const headers = [
        "Date",
        "Weight",
        "Waist",
        "Energy",
        "Mood",
        "BP Sys",
        "BP Dia",
        "Glucose",
        "Ketones",
        "Water",
        "Sleep Hours",
        "Sleep Quality",
        "Notes",
      ];
      const rows = Object.entries(dailyLogs)
        .filter(([_, log]) => log.weight)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([date, log]) =>
          [
            date,
            log.weight || "",
            log.waist || "",
            log.energy || "",
            log.mood || "",
            log.bloodPressureSys || "",
            log.bloodPressureDia || "",
            log.glucose || "",
            log.ketones || "",
            log.waterIntake || "",
            log.sleepHours || "",
            log.sleepQuality || "",
            `"${(log.notes || "").replace(/"/g, '""')}"`,
          ].join(",")
        );

      const csv = [headers.join(","), ...rows].join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `fasting-log-${new Date().toISOString().split("T")[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setIsExporting(false);
    }
  };

  const logCount = Object.keys(dailyLogs).filter(
    (d) => dailyLogs[d]?.weight
  ).length;

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <h3 className="text-lg font-bold text-white mb-4">📤 Export Data</h3>

      {logCount === 0 ? (
        <div className="text-center py-4 text-gray-400">
          <p className="text-4xl mb-2">📊</p>
          <p>Log some data first to export!</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-300 mb-4">
            Export your {logCount} logged days in various formats.
          </p>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={exportAsText}
              disabled={isExporting}
              className="py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all disabled:opacity-50"
            >
              📄 Text Report
            </button>
            <button
              onClick={exportAsCSV}
              disabled={isExporting}
              className="py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all disabled:opacity-50"
            >
              📊 CSV
            </button>
            <button
              onClick={exportAsJSON}
              disabled={isExporting}
              className="py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all disabled:opacity-50"
            >
              💾 JSON
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-3">
            CSV works with Excel/Sheets • JSON for backup/restore
          </p>
        </>
      )}
    </div>
  );
};

export default ExportData;
