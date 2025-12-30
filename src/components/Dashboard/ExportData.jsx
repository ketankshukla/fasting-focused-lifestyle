import React, { useState } from "react";

const ExportData = ({ dailyLogs, profile, stats }) => {
  const [isExporting, setIsExporting] = useState(false);

  // Helper to parse date string as local date (not UTC)
  const parseLocalDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  const formatDate = (dateStr) => {
    return parseLocalDate(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

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
    return `
${formatDate(date)}
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

  const exportAsPDF = () => {
    setIsExporting(true);
    try {
      const loggedDays = Object.entries(dailyLogs)
        .filter(([_, log]) => log.weight)
        .sort(([a], [b]) => a.localeCompare(b));

      // Create HTML content for PDF
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Fasting Journey Progress Report</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; color: #333; }
            h1 { color: #7c3aed; text-align: center; border-bottom: 3px solid #7c3aed; padding-bottom: 10px; }
            h2 { color: #5b21b6; margin-top: 30px; }
            .summary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
            .card { background: #f3f4f6; padding: 15px; border-radius: 8px; }
            .card-title { font-size: 12px; color: #6b7280; text-transform: uppercase; }
            .card-value { font-size: 24px; font-weight: bold; color: #1f2937; }
            .progress-bar { background: #e5e7eb; height: 20px; border-radius: 10px; margin: 10px 0; }
            .progress-fill { background: linear-gradient(to right, #7c3aed, #ec4899); height: 100%; border-radius: 10px; }
            .log-entry { border-left: 4px solid #7c3aed; padding: 10px 15px; margin: 15px 0; background: #faf5ff; }
            .log-date { font-weight: bold; color: #5b21b6; font-size: 16px; }
            .log-details { color: #4b5563; margin-top: 5px; }
            .log-notes { font-style: italic; color: #6b7280; margin-top: 8px; padding-top: 8px; border-top: 1px dashed #d1d5db; }
            .footer { text-align: center; color: #9ca3af; margin-top: 40px; font-size: 12px; }
          </style>
        </head>
        <body>
          <h1>🔥 Fasting Journey Progress Report</h1>
          <p style="text-align: center; color: #6b7280;">Generated: ${new Date().toLocaleDateString()}</p>
          
          <h2>📊 Profile Summary</h2>
          <div class="summary-grid">
            <div class="card">
              <div class="card-title">Starting Weight</div>
              <div class="card-value">${profile.startingWeight} lbs</div>
            </div>
            <div class="card">
              <div class="card-title">Goal Weight</div>
              <div class="card-value">${profile.goalWeight} lbs</div>
            </div>
            <div class="card">
              <div class="card-title">Current Weight</div>
              <div class="card-value">${stats.currentWeight} lbs</div>
            </div>
            <div class="card">
              <div class="card-title">Weight Lost</div>
              <div class="card-value">${stats.lostSoFar.toFixed(1)} lbs</div>
            </div>
          </div>

          <h2>📈 Progress</h2>
          <div class="card">
            <div class="card-title">Overall Progress: ${stats.progressPercent.toFixed(
              1
            )}%</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${Math.min(
                stats.progressPercent,
                100
              )}%"></div>
            </div>
            <p style="margin: 0; color: #6b7280;">${stats.remaining.toFixed(
              1
            )} lbs remaining to goal</p>
          </div>

          <h2>📅 Daily Log Entries (${loggedDays.length} days)</h2>
          ${loggedDays
            .map(
              ([date, log]) => `
            <div class="log-entry">
              <div class="log-date">${formatDate(date)}</div>
              <div class="log-details">
                <strong>Weight:</strong> ${log.weight || "--"} lbs | 
                <strong>Waist:</strong> ${log.waist || "--"}" |
                <strong>Energy:</strong> ${log.energy}/10 | 
                <strong>Mood:</strong> ${log.mood}/10
                ${
                  log.bloodPressureSys
                    ? `<br><strong>BP:</strong> ${log.bloodPressureSys}/${log.bloodPressureDia} mmHg`
                    : ""
                }
                ${
                  log.glucose
                    ? ` | <strong>Glucose:</strong> ${log.glucose} mg/dL`
                    : ""
                }
                ${
                  log.ketones
                    ? ` | <strong>Ketones:</strong> ${log.ketones} mmol/L`
                    : ""
                }
                ${
                  log.waterIntake
                    ? ` | <strong>Water:</strong> ${log.waterIntake} oz`
                    : ""
                }
                ${
                  log.sleepHours
                    ? `<br><strong>Sleep:</strong> ${log.sleepHours}h (Quality: ${log.sleepQuality}/10)`
                    : ""
                }
              </div>
              ${log.notes ? `<div class="log-notes">"${log.notes}"</div>` : ""}
            </div>
          `
            )
            .join("")}

          <div class="footer">
            <p>Generated by Fasting Tracker | fasting.ketanshukla.com</p>
          </div>
        </body>
        </html>
      `;

      // Open print dialog which allows saving as PDF
      const printWindow = window.open("", "_blank");
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
      };
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
              📄 Text
            </button>
            <button
              onClick={exportAsPDF}
              disabled={isExporting}
              className="py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-pink-700 transition-all disabled:opacity-50"
            >
              📑 PDF
            </button>
            <button
              onClick={exportAsJSON}
              disabled={isExporting}
              className="py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all disabled:opacity-50"
            >
              💾 JSON
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-3">
            PDF for printing • JSON for backup/restore
          </p>
        </>
      )}
    </div>
  );
};

export default ExportData;
