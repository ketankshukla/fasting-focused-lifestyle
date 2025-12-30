import React from "react";
import { colors, defaultColor } from "../../data";
import {
  getDayData,
  getPhysiologyInfo,
  formatDate,
} from "../../utils/calculations";

// First and last days of the program
const FIRST_DAY = "2025-12-29";
const LAST_DAY = "2026-12-31";

const DayInfoModal = ({ selectedDay, dailyLogs, onClose, onNavigate }) => {
  const dayData = getDayData(selectedDay);
  const info = dayData ? getPhysiologyInfo(dayData.type, dayData.day) : null;
  const color = dayData ? colors[dayData.type] : defaultColor;
  const dateStr = formatDate(selectedDay);
  const existingLog = dailyLogs[selectedDay] || {};

  const isRefeedDay =
    dayData && (dayData.type === "1r" || dayData.type === "fr");
  const hasMeals = info && info.meals;

  // Check if we're on the first or last day
  const isFirstDay = selectedDay === FIRST_DAY;
  const isLastDay = selectedDay === LAST_DAY;

  const navigateDay = (direction) => {
    const currentDate = new Date(selectedDay + "T00:00:00");
    currentDate.setDate(currentDate.getDate() + direction);
    const newDateKey = currentDate.toISOString().split("T")[0];
    onNavigate(newDateKey);
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
          className="p-4 rounded-t-2xl"
          style={{ backgroundColor: color.light }}
        >
          <div className="flex items-center justify-between">
            {!isFirstDay ? (
              <button
                onClick={() => navigateDay(-1)}
                className="p-2 rounded-full hover:bg-white/50 transition-all"
                style={{ color: color.text }}
              >
                ◀
              </button>
            ) : (
              <div className="w-9" />
            )}
            <div className="text-center">
              <p className="text-xs font-medium" style={{ color: color.text }}>
                {dateStr}
              </p>
              <div className="flex items-center justify-center gap-2 mt-1">
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
            {!isLastDay ? (
              <button
                onClick={() => navigateDay(1)}
                className="p-2 rounded-full hover:bg-white/50 transition-all"
                style={{ color: color.text }}
              >
                ▶
              </button>
            ) : (
              <div className="w-9" />
            )}
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Title and Expected Loss */}
          {info && (
            <div className="text-center">
              <h4 className="font-bold text-gray-800">{info.title}</h4>
              {info.expectedLoss && (
                <p className="text-sm text-green-600 font-medium">
                  Expected: {info.expectedLoss}
                </p>
              )}
            </div>
          )}

          {/* Logged Data Summary */}
          {existingLog.weight && (
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                📊 Logged Data
              </h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                {existingLog.weight && (
                  <div>
                    <p className="text-lg font-bold text-gray-800">
                      {existingLog.weight}
                    </p>
                    <p className="text-xs text-gray-500">Weight (lbs)</p>
                  </div>
                )}
                {existingLog.mood && (
                  <div>
                    <p className="text-lg font-bold text-gray-800">
                      {existingLog.mood}/10
                    </p>
                    <p className="text-xs text-gray-500">Mood</p>
                  </div>
                )}
                {existingLog.energy && (
                  <div>
                    <p className="text-lg font-bold text-gray-800">
                      {existingLog.energy}/10
                    </p>
                    <p className="text-xs text-gray-500">Energy</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Physiology Info */}
          {info && (
            <div className="space-y-3">
              {/* What's Happening */}
              <div className="bg-purple-50 rounded-lg p-3">
                <h4 className="text-sm font-semibold text-purple-800 mb-2">
                  🧬 What's Happening In Your Body
                </h4>
                <p className="text-sm text-purple-700 mb-2">
                  {info.whatHappens}
                </p>
                {info.symptoms && (
                  <div className="mt-2 pt-2 border-t border-purple-200">
                    <p className="text-xs font-medium text-purple-600">
                      Common symptoms:
                    </p>
                    <p className="text-xs text-purple-600">{info.symptoms}</p>
                  </div>
                )}
              </div>

              {/* Benefits / Focus */}
              <div className="bg-amber-50 rounded-lg p-3">
                <h4 className="text-sm font-semibold text-amber-800 mb-2">
                  🎯 Benefits & Focus
                </h4>
                <p className="text-sm text-amber-700">{info.benefits}</p>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 rounded-lg p-3">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">
                  💡 Tips & Recommendations
                </h4>
                <p className="text-sm text-blue-700">{info.tips}</p>
              </div>
            </div>
          )}

          {/* Meals for Refeed Days */}
          {hasMeals && (
            <div className="bg-green-50 rounded-lg p-3">
              <h4 className="text-sm font-semibold text-green-800 mb-2">
                🍽️ Meal Suggestions
              </h4>
              <div className="space-y-2">
                {info.meals.breakfast && (
                  <div>
                    <span className="text-xs font-medium text-green-600">
                      Breakfast:
                    </span>
                    <p className="text-sm text-green-700">
                      {info.meals.breakfast}
                    </p>
                  </div>
                )}
                {info.meals.lunch && (
                  <div>
                    <span className="text-xs font-medium text-green-600">
                      Lunch:
                    </span>
                    <p className="text-sm text-green-700">{info.meals.lunch}</p>
                  </div>
                )}
                {info.meals.dinner && (
                  <div>
                    <span className="text-xs font-medium text-green-600">
                      Dinner:
                    </span>
                    <p className="text-sm text-green-700">
                      {info.meals.dinner}
                    </p>
                  </div>
                )}
                {info.meals.snacks && (
                  <div>
                    <span className="text-xs font-medium text-green-600">
                      Snacks:
                    </span>
                    <p className="text-sm text-green-700">
                      {info.meals.snacks}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Notes if logged */}
          {existingLog.notes && (
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="text-sm font-semibold text-gray-700 mb-1">
                📝 Notes
              </h4>
              <p className="text-sm text-gray-600 whitespace-pre-wrap">
                {existingLog.notes}
              </p>
            </div>
          )}

          {!dayData && (
            <div className="text-center py-4 text-gray-500">
              <p className="text-4xl mb-2">📅</p>
              <p>No fasting schedule for this day</p>
            </div>
          )}

          <p className="text-xs text-gray-400 text-center">
            Use the ✏️ button to log data for today
          </p>
        </div>
      </div>
    </div>
  );
};

export default DayInfoModal;
