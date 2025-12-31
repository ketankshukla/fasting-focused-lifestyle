import React, { useState } from "react";

const JournalDiary = ({ dailyLogs }) => {
  const [filterTag, setFilterTag] = useState("all");

  const journalEntries = Object.entries(dailyLogs)
    .filter(([_, log]) => log.notes && log.notes.length > 0)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, log]) => ({
      date,
      notes: log.notes,
      mood: log.mood,
      energy: log.energy,
      weight: log.weight,
    }));

  const tags = ["all", "high-energy", "low-energy", "good-mood", "challenging"];

  const filteredEntries = journalEntries.filter((entry) => {
    if (filterTag === "all") return true;
    if (filterTag === "high-energy") return entry.energy >= 7;
    if (filterTag === "low-energy") return entry.energy <= 4;
    if (filterTag === "good-mood") return entry.mood >= 7;
    if (filterTag === "challenging")
      return entry.mood <= 4 || entry.energy <= 4;
    return true;
  });

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getMoodEmoji = (mood) => {
    if (mood >= 8) return "😊";
    if (mood >= 6) return "🙂";
    if (mood >= 4) return "😐";
    if (mood >= 2) return "😔";
    return "😢";
  };

  const getEnergyEmoji = (energy) => {
    if (energy >= 8) return "⚡";
    if (energy >= 6) return "💪";
    if (energy >= 4) return "🔋";
    return "🪫";
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">📔 Journal</h3>
        <span className="text-sm text-gray-400">
          {journalEntries.length} entries
        </span>
      </div>

      {journalEntries.length === 0 ? (
        <div className="text-center py-6 text-gray-400">
          <p className="text-4xl mb-2">📝</p>
          <p>No journal entries yet.</p>
          <p className="text-sm mt-1">
            Add notes when logging your daily data!
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3 py-1 text-xs rounded-full transition-all capitalize ${
                  filterTag === tag
                    ? "bg-white text-gray-900"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {tag.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredEntries.map((entry) => (
              <div key={entry.date} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-white">
                    📅 {formatDate(entry.date)}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <p className="text-xl">{getMoodEmoji(entry.mood)}</p>
                    <p className="text-xs text-gray-400">
                      Mood {entry.mood}/10
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <p className="text-xl">{getEnergyEmoji(entry.energy)}</p>
                    <p className="text-xs text-gray-400">
                      Energy {entry.energy}/10
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <p className="text-base font-bold text-white">
                      {entry.weight ? `${entry.weight}` : "--"}
                    </p>
                    <p className="text-xs text-gray-400">Weight (lbs)</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-sm text-gray-200 whitespace-pre-wrap">
                    {entry.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default JournalDiary;
