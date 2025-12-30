import React from "react";
import CalendarDay from "./CalendarDay";
import { months } from "../../data";
import { getDateKey } from "../../utils/calculations";

const MonthView = ({ monthIndex, dailyLogs, onDayClick }) => {
  const month = months[monthIndex];
  const days = [];

  if (monthIndex === 0) {
    days.push(<div key="dec-empty" className="h-14 sm:h-16" />);
    days.push(
      <CalendarDay
        key="2025-12-29"
        dateKey="2025-12-29"
        dayNum={29}
        isDecember2025={true}
        hasLog={dailyLogs["2025-12-29"]?.weight}
        onClick={onDayClick}
      />
    );
    days.push(
      <CalendarDay
        key="2025-12-30"
        dateKey="2025-12-30"
        dayNum={30}
        isDecember2025={true}
        hasLog={dailyLogs["2025-12-30"]?.weight}
        onClick={onDayClick}
      />
    );
    days.push(
      <CalendarDay
        key="2025-12-31"
        dateKey="2025-12-31"
        dayNum={31}
        isDecember2025={true}
        hasLog={dailyLogs["2025-12-31"]?.weight}
        onClick={onDayClick}
      />
    );
  } else {
    for (let i = 0; i < month.startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-14 sm:h-16" />);
    }
  }

  for (let d = 1; d <= month.days; d++) {
    const dateKey = getDateKey(monthIndex, d);
    days.push(
      <CalendarDay
        key={dateKey}
        dateKey={dateKey}
        dayNum={d}
        hasLog={dailyLogs[dateKey]?.weight}
        onClick={onDayClick}
      />
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
        {monthIndex === 0
          ? "Dec 2025 → January 2026"
          : `${month.name} ${month.year}`}
      </h2>
      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div
            key={d}
            className="text-center text-xs font-medium text-gray-500 py-2"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 sm:gap-2">{days}</div>
      <p className="text-xs text-gray-400 mt-3 text-center">
        <span className="inline-block w-2 h-2 bg-yellow-300 rounded-full mr-1" />{" "}
        = Data logged
      </p>
    </div>
  );
};

export default MonthView;
