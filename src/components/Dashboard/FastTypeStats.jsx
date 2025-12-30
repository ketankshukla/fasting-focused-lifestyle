import React from "react";
import { colors } from "../../data";

const FastTypeStats = ({ scheduleStats }) => {
  const statItems = [
    { type: "pdf", label: "Prolonged Dry", days: scheduleStats.pdf },
    { type: "wf", label: "Water Fast", days: scheduleStats.wf },
    { type: "sdf", label: "Short Dry", days: scheduleStats.sdf },
    { type: "1r", label: "1-Day Refeed", days: scheduleStats["1r"] },
    { type: "fr", label: "Full Refeed", days: scheduleStats.fr },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {statItems.map((stat) => (
        <div
          key={stat.type}
          className="rounded-xl p-3 sm:p-4 text-white shadow-lg"
          style={{ backgroundColor: colors[stat.type].bg }}
        >
          <p className="text-xs sm:text-sm font-medium opacity-90">
            {stat.label}
          </p>
          <p className="text-2xl sm:text-3xl font-black">{stat.days}</p>
          <p className="text-xs opacity-75">days</p>
        </div>
      ))}
    </div>
  );
};

export default FastTypeStats;
