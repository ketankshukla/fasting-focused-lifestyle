import React from "react";
import { colors } from "../../data";

const Legend = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 text-sm">
      {Object.entries(colors).map(([type, color]) => (
        <div key={type} className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded"
            style={{ backgroundColor: color.bg }}
          />
          <span className="text-gray-300">{color.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
