import React, { useState } from "react";

const JournalDiary = ({ dailyLogs }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
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
    return new Date(dateStr).toLocaleDateString("en-US", {
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

          <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {filteredEntries.slice(0, 10).map((entry) => (
              <div
                key={entry.date}
                onClick={() => {
                  setSelectedEntry(entry);
                  setShowModal(true);
                }}
                className="bg-white/5 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">
                    {formatDate(entry.date)}
                  </span>
                  <div className="flex items-center gap-2">
                    <span title={`Mood: ${entry.mood}/10`}>
                      {getMoodEmoji(entry.mood)}
                    </span>
                    <span title={`Energy: ${entry.energy}/10`}>
                      {getEnergyEmoji(entry.energy)}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-200 line-clamp-2">
                  {entry.notes}
                </p>
              </div>
            ))}
          </div>

          {filteredEntries.length > 10 && (
            <p className="text-xs text-gray-500 text-center mt-3">
              Showing 10 of {filteredEntries.length} entries
            </p>
          )}
        </>
      )}

      {/* Entry Detail Modal */}
      {showModal && selectedEntry && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">
                📔 {formatDate(selectedEntry.date)}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <p className="text-2xl">{getMoodEmoji(selectedEntry.mood)}</p>
                <p className="text-xs text-gray-400">
                  Mood {selectedEntry.mood}/10
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <p className="text-2xl">
                  {getEnergyEmoji(selectedEntry.energy)}
                </p>
                <p className="text-xs text-gray-400">
                  Energy {selectedEntry.energy}/10
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <p className="text-lg font-bold text-white">
                  {selectedEntry.weight ? `${selectedEntry.weight}` : "--"}
                </p>
                <p className="text-xs text-gray-400">Weight (lbs)</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-gray-200 whitespace-pre-wrap">
                {selectedEntry.notes}
              </p>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalDiary;
