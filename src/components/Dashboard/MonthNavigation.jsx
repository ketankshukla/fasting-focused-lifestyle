import React from "react";
import { months } from "../../data";

const MonthNavigation = ({
  selectedMonth,
  showYearView,
  onMonthSelect,
  onYearViewToggle,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {months.map((month, idx) => (
        <button
          key={month.name}
          onClick={() => onMonthSelect(idx)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
            ${
              selectedMonth === idx && !showYearView
                ? "bg-white text-gray-900 shadow-lg"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
        >
          {idx === 0 ? "Dec→Jan" : month.name.slice(0, 3)}
        </button>
      ))}
      <button
        onClick={onYearViewToggle}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
          ${
            showYearView
              ? "bg-amber-400 text-gray-900 shadow-lg"
              : "bg-amber-400/20 text-amber-200 hover:bg-amber-400/30"
          }`}
      >
        Year View
      </button>
    </div>
  );
};

export default MonthNavigation;
