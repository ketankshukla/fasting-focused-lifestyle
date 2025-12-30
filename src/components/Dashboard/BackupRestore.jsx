import React, { useState, useRef } from "react";

const BackupRestore = ({ dailyLogs, profile, onRestoreData }) => {
  const [status, setStatus] = useState(null);
  const fileInputRef = useRef(null);

  const createBackup = () => {
    const backup = {
      version: "1.0",
      createdAt: new Date().toISOString(),
      profile,
      dailyLogs,
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fasting-backup-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setStatus({ type: "success", message: "Backup downloaded successfully!" });
    setTimeout(() => setStatus(null), 3000);
  };

  const handleRestore = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const backup = JSON.parse(event.target.result);

        if (!backup.profile || !backup.dailyLogs) {
          throw new Error("Invalid backup file format");
        }

        if (onRestoreData) {
          onRestoreData(backup.profile, backup.dailyLogs);
        } else {
          localStorage.setItem(
            "fastingProfile",
            JSON.stringify(backup.profile)
          );
          localStorage.setItem(
            "fastingDailyLogs",
            JSON.stringify(backup.dailyLogs)
          );
          window.location.reload();
        }

        setStatus({
          type: "success",
          message: "Data restored successfully! Reloading...",
        });
        setTimeout(() => window.location.reload(), 1500);
      } catch (error) {
        setStatus({
          type: "error",
          message: "Invalid backup file. Please try again.",
        });
        setTimeout(() => setStatus(null), 3000);
      }
    };
    reader.readAsText(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const clearAllData = () => {
    if (
      window.confirm(
        "Are you sure you want to clear ALL data? This cannot be undone!"
      )
    ) {
      if (
        window.confirm(
          "This will delete all your logs, photos, and settings. Are you absolutely sure?"
        )
      ) {
        localStorage.removeItem("fastingProfile");
        localStorage.removeItem("fastingDailyLogs");
        localStorage.removeItem("notificationReminders");

        indexedDB.deleteDatabase("FastingTrackerDB");

        setStatus({
          type: "success",
          message: "All data cleared. Reloading...",
        });
        setTimeout(() => window.location.reload(), 1500);
      }
    }
  };

  const logCount = Object.keys(dailyLogs).filter(
    (d) => dailyLogs[d]?.weight
  ).length;

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <h3 className="text-lg font-bold text-white mb-4">💾 Backup & Restore</h3>

      <p className="text-sm text-gray-300 mb-4">
        {logCount} days of data • Backup includes all logs, profile, and
        settings.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={createBackup}
          className="py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all"
        >
          ⬇️ Backup
        </button>
        <label className="py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all cursor-pointer text-center">
          ⬆️ Restore
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleRestore}
            className="hidden"
          />
        </label>
      </div>

      <button
        onClick={clearAllData}
        className="w-full py-2 bg-red-500/20 text-red-400 text-sm rounded-lg hover:bg-red-500/30 transition-all border border-red-500/30"
      >
        🗑️ Clear All Data
      </button>

      {status && (
        <div
          className={`mt-3 p-2 rounded-lg text-sm text-center ${
            status.type === "success"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status.message}
        </div>
      )}

      <p className="text-xs text-gray-500 text-center mt-3">
        💡 Backup regularly to avoid losing your progress!
      </p>
    </div>
  );
};

export default BackupRestore;
