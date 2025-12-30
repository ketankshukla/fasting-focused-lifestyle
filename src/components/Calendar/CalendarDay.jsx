import React from "react";
import { colors } from "../../data";
import { getDayData } from "../../utils/calculations";

const CalendarDay = ({ dateKey, dayNum, isDecember2025, hasLog, onClick }) => {
  const dayData = getDayData(dateKey);

  return (
    <div
      onClick={() => onClick(dateKey)}
      className={`
        relative h-14 sm:h-16 rounded-lg cursor-pointer transition-all duration-200
        ${
          dayData
            ? "hover:scale-105 hover:shadow-lg"
            : "bg-gray-100 hover:bg-gray-200"
        }
        ${isDecember2025 ? "ring-1 ring-amber-400/50" : ""}
      `}
      style={{
        backgroundColor: dayData ? colors[dayData.type].bg : "#F3F4F6",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        {isDecember2025 && (
          <span className="text-[8px] sm:text-[10px] font-medium opacity-75">
            Dec
          </span>
        )}
        <span
          className={`text-xs sm:text-sm font-medium ${
            !dayData && "text-gray-400"
          }`}
        >
          {dayNum}
        </span>
        {dayData && (
          <span className="text-[10px] sm:text-xs font-bold opacity-90">
            D{dayData.day}
          </span>
        )}
      </div>
      {hasLog && (
        <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-300 rounded-full shadow-sm" />
      )}
    </div>
  );
};

export default CalendarDay;
