import React from "react";

const Header = ({ fastingDays, eatingDays }) => {
  return (
    <div className="text-center py-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
        Ketan's 2026 Fasting Journey
      </h1>
      <p className="text-gray-300 mt-2 text-sm sm:text-base">
        Started: Dec 29, 2025 @ 9:00 PM PST • {fastingDays} Fasting Days •{" "}
        {eatingDays} Eating Days
      </p>
    </div>
  );
};

export default Header;
