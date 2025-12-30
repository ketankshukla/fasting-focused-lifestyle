import React, { useState, useEffect } from "react";

const NotificationSettings = ({
  permission,
  isSupported,
  onRequestPermission,
  onScheduleReminder,
}) => {
  const [reminders, setReminders] = useState({
    dailyLog: false,
    motivation: false,
    hydration: false,
  });

  useEffect(() => {
    const savedReminders = localStorage.getItem("notificationReminders");
    if (savedReminders) {
      setReminders(JSON.parse(savedReminders));
    }
  }, []);

  const handleToggle = (type) => {
    const newReminders = { ...reminders, [type]: !reminders[type] };
    setReminders(newReminders);
    localStorage.setItem("notificationReminders", JSON.stringify(newReminders));

    if (newReminders[type] && permission === "granted") {
      const delays = {
        dailyLog: 8 * 60 * 60 * 1000,
        motivation: 4 * 60 * 60 * 1000,
        hydration: 2 * 60 * 60 * 1000,
      };
      onScheduleReminder(type === "dailyLog" ? "log" : type, delays[type]);
    }
  };

  const handleTestNotification = () => {
    if (permission === "granted") {
      onScheduleReminder("motivation", 100);
    }
  };

  if (!isSupported) {
    return (
      <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
        <h3 className="text-lg font-bold text-white mb-4">🔔 Notifications</h3>
        <div className="text-center py-4 text-gray-400">
          <p className="text-4xl mb-2">🚫</p>
          <p>Notifications are not supported in this browser.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">🔔 Notifications</h3>
        {permission === "granted" && (
          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
            Enabled
          </span>
        )}
      </div>

      {permission !== "granted" ? (
        <div className="text-center py-4">
          <p className="text-gray-400 mb-4">
            Enable notifications to get reminders for logging, motivation, and
            hydration.
          </p>
          <button
            onClick={onRequestPermission}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
          >
            Enable Notifications
          </button>
          {permission === "denied" && (
            <p className="text-red-400 text-xs mt-2">
              Notifications blocked. Please enable in browser settings.
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div>
              <p className="text-white font-medium text-sm">
                📊 Daily Log Reminder
              </p>
              <p className="text-gray-400 text-xs">
                Remind me to log weight & feelings
              </p>
            </div>
            <button
              onClick={() => handleToggle("dailyLog")}
              className={`w-12 h-6 rounded-full transition-colors ${
                reminders.dailyLog ? "bg-green-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  reminders.dailyLog ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div>
              <p className="text-white font-medium text-sm">
                💪 Motivation Boosts
              </p>
              <p className="text-gray-400 text-xs">
                Periodic encouragement messages
              </p>
            </div>
            <button
              onClick={() => handleToggle("motivation")}
              className={`w-12 h-6 rounded-full transition-colors ${
                reminders.motivation ? "bg-green-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  reminders.motivation ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div>
              <p className="text-white font-medium text-sm">
                💧 Hydration Reminders
              </p>
              <p className="text-gray-400 text-xs">
                Stay hydrated during water fasts
              </p>
            </div>
            <button
              onClick={() => handleToggle("hydration")}
              className={`w-12 h-6 rounded-full transition-colors ${
                reminders.hydration ? "bg-green-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  reminders.hydration ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <button
            onClick={handleTestNotification}
            className="w-full mt-2 py-2 bg-white/10 text-gray-300 text-sm rounded-lg hover:bg-white/20 transition-all"
          >
            🔔 Test Notification
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationSettings;
