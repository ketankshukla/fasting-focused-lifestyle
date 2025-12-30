import React from "react";
import { getLocalDateKey } from "../../utils/calculations";

const QuickLogButton = ({ onLogToday }) => {
  const today = getLocalDateKey();

  return (
    <button
      onClick={() => onLogToday(today)}
      className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 hover:scale-110 transition-all z-40 flex items-center justify-center text-2xl"
      title="Log Today"
    >
      ✏️
    </button>
  );
};

export default QuickLogButton;
