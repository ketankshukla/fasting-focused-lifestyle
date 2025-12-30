import React, { useState } from "react";
import { colors, defaultColor } from "../../data";
import {
  getDayData,
  getPhysiologyInfo,
  formatDate,
} from "../../utils/calculations";

const LogModal = ({ selectedDay, dailyLogs, onSave, onClose }) => {
  const [activeTab, setActiveTab] = useState("log");
  const [logForm, setLogForm] = useState(() => {
    const existingLog = dailyLogs[selectedDay] || {};
    return {
      weight: existingLog.weight || "",
      waist: existingLog.waist || "",
      notes: existingLog.notes || "",
      energy: existingLog.energy || 5,
      mood: existingLog.mood || 5,
      bloodPressureSys: existingLog.bloodPressureSys || "",
      bloodPressureDia: existingLog.bloodPressureDia || "",
      glucose: existingLog.glucose || "",
      sleepHours: existingLog.sleepHours || "",
      sleepQuality: existingLog.sleepQuality || 5,
      ketones: existingLog.ketones || "",
      waterIntake: existingLog.waterIntake || "",
    };
  });

  const dayData = getDayData(selectedDay);
  const info = dayData ? getPhysiologyInfo(dayData.type, dayData.day) : null;
  const color = dayData ? colors[dayData.type] : defaultColor;
  const dateStr = formatDate(selectedDay);

  const isRefeedDay =
    dayData && (dayData.type === "1r" || dayData.type === "fr");
  const hasMeals = info && info.meals;

  const handleSave = () => {
    onSave(selectedDay, {
      weight: logForm.weight ? parseFloat(logForm.weight) : null,
      waist: logForm.waist ? parseFloat(logForm.waist) : null,
      notes: logForm.notes,
      energy: logForm.energy,
      mood: logForm.mood,
      bloodPressureSys: logForm.bloodPressureSys
        ? parseInt(logForm.bloodPressureSys)
        : null,
      bloodPressureDia: logForm.bloodPressureDia
        ? parseInt(logForm.bloodPressureDia)
        : null,
      glucose: logForm.glucose ? parseInt(logForm.glucose) : null,
      sleepHours: logForm.sleepHours ? parseFloat(logForm.sleepHours) : null,
      sleepQuality: logForm.sleepQuality,
      ketones: logForm.ketones ? parseFloat(logForm.ketones) : null,
      waterIntake: logForm.waterIntake ? parseFloat(logForm.waterIntake) : null,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-4 rounded-t-2xl flex justify-between items-center"
          style={{ backgroundColor: color.light }}
        >
          <div>
            <p className="text-xs font-medium" style={{ color: color.text }}>
              {dateStr}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <h3 className="text-lg font-bold" style={{ color: color.text }}>
                {color.name}
              </h3>
              {dayData && (
                <span
                  className="px-2 py-0.5 rounded-full text-white text-xs font-bold"
                  style={{ backgroundColor: color.bg }}
                >
                  Day {dayData.day}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("log")}
            className={`flex-1 py-2.5 text-xs font-medium transition-colors ${
              activeTab === "log"
                ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            📊 Log
          </button>
          <button
            onClick={() => setActiveTab("info")}
            className={`flex-1 py-2.5 text-xs font-medium transition-colors ${
              activeTab === "info"
                ? "text-purple-600 border-b-2 border-purple-600 bg-purple-50"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            🔬 Info
          </button>
          {hasMeals && (
            <button
              onClick={() => setActiveTab("meals")}
              className={`flex-1 py-2.5 text-xs font-medium transition-colors ${
                activeTab === "meals"
                  ? "text-green-600 border-b-2 border-green-600 bg-green-50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              🍽️ Meals
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {/* LOG TAB */}
          {activeTab === "log" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Weight (lbs)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={logForm.weight}
                    onChange={(e) =>
                      setLogForm({ ...logForm, weight: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="215.5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Waist (inches)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={logForm.waist}
                    onChange={(e) =>
                      setLogForm({ ...logForm, waist: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="40.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    BP Systolic
                  </label>
                  <input
                    type="number"
                    value={logForm.bloodPressureSys}
                    onChange={(e) =>
                      setLogForm({
                        ...logForm,
                        bloodPressureSys: e.target.value,
                      })
                    }
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="120"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    BP Diastolic
                  </label>
                  <input
                    type="number"
                    value={logForm.bloodPressureDia}
                    onChange={(e) =>
                      setLogForm({
                        ...logForm,
                        bloodPressureDia: e.target.value,
                      })
                    }
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="80"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Glucose
                  </label>
                  <input
                    type="number"
                    value={logForm.glucose}
                    onChange={(e) =>
                      setLogForm({ ...logForm, glucose: e.target.value })
                    }
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="95"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Ketones (mmol/L)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={logForm.ketones}
                    onChange={(e) =>
                      setLogForm({ ...logForm, ketones: e.target.value })
                    }
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="1.5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Water (oz)
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="0"
                    value={logForm.waterIntake}
                    onChange={(e) =>
                      setLogForm({ ...logForm, waterIntake: e.target.value })
                    }
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="64"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Sleep Hours
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    max="24"
                    value={logForm.sleepHours}
                    onChange={(e) =>
                      setLogForm({ ...logForm, sleepHours: e.target.value })
                    }
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="7.5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Sleep Quality: {logForm.sleepQuality}/10
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={logForm.sleepQuality}
                    onChange={(e) =>
                      setLogForm({
                        ...logForm,
                        sleepQuality: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Energy: {logForm.energy}/10
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={logForm.energy}
                    onChange={(e) =>
                      setLogForm({
                        ...logForm,
                        energy: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Mood: {logForm.mood}/10
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={logForm.mood}
                    onChange={(e) =>
                      setLogForm({ ...logForm, mood: parseInt(e.target.value) })
                    }
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <textarea
                  value={logForm.notes}
                  onChange={(e) =>
                    setLogForm({ ...logForm, notes: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  rows={6}
                  placeholder="How are you feeling? Write your thoughts, experiences, challenges, or wins for today..."
                />
              </div>

              <button
                onClick={handleSave}
                className="w-full py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all text-sm"
              >
                💾 Save Log
              </button>

              {dailyLogs[selectedDay]?.savedAt && (
                <p className="text-xs text-gray-400 text-center">
                  Last saved:{" "}
                  {new Date(dailyLogs[selectedDay].savedAt).toLocaleString()}
                </p>
              )}
            </div>
          )}

          {/* INFO TAB */}
          {activeTab === "info" && info && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-gray-800">
                {info.title}
              </h4>

              <div className="bg-yellow-50 rounded-lg p-3">
                <h5 className="font-semibold text-yellow-800 text-xs mb-1">
                  ⚡ What You're Feeling
                </h5>
                <p className="text-yellow-700 text-xs">{info.symptoms}</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-3">
                <h5 className="font-semibold text-blue-800 text-xs mb-1">
                  🔬 What's Happening Inside
                </h5>
                <p className="text-blue-700 text-xs">{info.whatHappens}</p>
              </div>

              <div className="bg-green-50 rounded-lg p-3">
                <h5 className="font-semibold text-green-800 text-xs mb-1">
                  ✨ Benefits
                </h5>
                <p className="text-green-700 text-xs">{info.benefits}</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-3">
                <h5 className="font-semibold text-purple-800 text-xs mb-1">
                  💡 Tips
                </h5>
                <p className="text-purple-700 text-xs">{info.tips}</p>
              </div>

              {info.expectedLoss && (
                <div className="bg-orange-50 rounded-lg p-3">
                  <h5 className="font-semibold text-orange-800 text-xs mb-1">
                    ⚖️ Expected Weight
                  </h5>
                  <p className="text-orange-700 text-xs">{info.expectedLoss}</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "info" && !info && (
            <div className="text-center py-8 text-gray-500">
              <p className="text-4xl mb-2">📅</p>
              <p className="text-sm">
                No physiological info for this day type.
              </p>
            </div>
          )}

          {/* MEALS TAB */}
          {activeTab === "meals" && hasMeals && (
            <div className="space-y-3">
              <div className="bg-emerald-100 rounded-lg p-2 text-center">
                <p className="text-xs font-semibold text-emerald-800">
                  {info.meals.overview}
                </p>
              </div>

              {info.meals.meal1 && <MealCard meal={info.meals.meal1} />}
              {info.meals.meal2 && <MealCard meal={info.meals.meal2} />}
              {info.meals.meal3 && <MealCard meal={info.meals.meal3} />}
              {info.meals.meal4 && <MealCard meal={info.meals.meal4} />}
              {info.meals.snack && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-amber-700">
                      🥜 {info.meals.snack.time}
                    </span>
                    <span className="text-xs font-semibold text-green-600">
                      {info.meals.snack.protein}
                    </span>
                  </div>
                  <p className="text-xs text-gray-800 font-medium">
                    {info.meals.snack.food}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 italic">
                    {info.meals.snack.notes}
                  </p>
                </div>
              )}
              {info.meals.note && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-2.5">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-red-700">
                      ⚠️ {info.meals.note.time}
                    </span>
                  </div>
                  <p className="text-xs text-red-800 font-medium">
                    {info.meals.note.food}
                  </p>
                  <p className="text-xs text-red-600 mt-1 italic">
                    {info.meals.note.notes}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MealCard = ({ meal }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-2.5">
    <div className="flex justify-between items-start mb-1">
      <span className="text-xs font-bold text-gray-700">{meal.time}</span>
      <span className="text-xs font-semibold text-green-600">
        {meal.protein}
      </span>
    </div>
    <p className="text-xs text-gray-800 font-medium">{meal.food}</p>
    <p className="text-xs text-gray-500 mt-1 italic">{meal.notes}</p>
  </div>
);

export default LogModal;
