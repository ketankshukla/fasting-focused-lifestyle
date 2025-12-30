import React from "react";
import { months, colors } from "../../data";
import { getDateKey, getDayData } from "../../utils/calculations";

const YearView = ({ onMonthSelect }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        2026 Year at a Glance
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {months.map((month, idx) => (
          <div
            key={month.name}
            onClick={() => onMonthSelect(idx)}
            className="cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors"
          >
            <p className="text-xs font-medium text-gray-600 mb-1">
              {idx === 0 ? "Dec→Jan" : month.name.slice(0, 3)}
            </p>
            <div className="grid grid-cols-7 gap-px">
              {idx === 0 &&
                [29, 30, 31].map((d) => {
                  const dateKey = `2025-12-${d}`;
                  const dayData = getDayData(dateKey);
                  return (
                    <div
                      key={`dec-${d}`}
                      className="h-2 w-2 rounded-sm ring-1 ring-amber-400/50"
                      style={{
                        backgroundColor: dayData
                          ? colors[dayData.type].bg
                          : "#E5E7EB",
                      }}
                    />
                  );
                })}
              {Array.from({ length: month.days }, (_, i) => {
                const dateKey = getDateKey(idx, i + 1);
                const dayData = getDayData(dateKey);
                return (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-sm"
                    style={{
                      backgroundColor: dayData
                        ? colors[dayData.type].bg
                        : "#E5E7EB",
                    }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearView;
