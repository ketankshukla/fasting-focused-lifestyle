import React from "react";

const Header = ({ fastingDays, eatingDays, onProfileClick }) => {
  return (
    <div className="text-center py-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
        2026 Fasting Journey
      </h1>
      <p className="text-gray-300 mt-2 text-sm sm:text-base">
        Started: Dec 29, 2025 @ 10:00 PM PST • {fastingDays} Fasting Days •{" "}
        {eatingDays} Eating Days
      </p>
      <button
        onClick={onProfileClick}
        className="mt-2 px-4 py-1 bg-white/20 text-white text-sm rounded-full hover:bg-white/30 transition-colors"
      >
        ⚙️ Edit Profile
      </button>
    </div>
  );
};

export default Header;
