import React, { useState, useRef } from "react";
import { getLocalDateKey } from "../../utils/calculations";

const PhotoProgress = ({
  photos,
  onSavePhoto,
  onDeletePhoto,
  getAllPhotoDates,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const photoDates = getAllPhotoDates();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = async () => {
    if (previewImage) {
      const today = getLocalDateKey();
      await onSavePhoto(today, previewImage);
      setPreviewImage(null);
      setShowModal(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleCompareSelect = (date) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else if (selectedDates.length < 2) {
      setSelectedDates([...selectedDates, date]);
    } else {
      setSelectedDates([selectedDates[1], date]);
    }
  };

  const formatDate = (dateStr) => {
    // Handle format: "2025-12-29_1735123456789" (date with timestamp)
    const datePart = dateStr.split("_")[0];
    const date = new Date(datePart + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h3 className="text-lg font-bold text-white">📸 Photo Progress</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setShowModal(true)}
            className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-medium rounded-full hover:from-pink-600 hover:to-rose-600 transition-all"
          >
            + Add Photo
          </button>
          {photoDates.length >= 2 && (
            <button
              onClick={() => setCompareMode(!compareMode)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                compareMode
                  ? "bg-amber-500 text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {compareMode ? "Exit Compare" : "Compare"}
            </button>
          )}
        </div>
      </div>

      {photoDates.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <p className="text-4xl mb-2">📷</p>
          <p>
            Take your first progress photo to track your visual transformation!
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all"
          >
            Take First Photo
          </button>
        </div>
      ) : compareMode ? (
        <div className="space-y-4">
          <p className="text-sm text-gray-300 text-center">
            Select 2 photos to compare
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {photoDates.map((date) => (
              <button
                key={date}
                onClick={() => handleCompareSelect(date)}
                className={`px-3 py-1 text-xs rounded-full transition-all ${
                  selectedDates.includes(date)
                    ? "bg-amber-500 text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {formatDate(date)}
              </button>
            ))}
          </div>

          {selectedDates.length === 2 && (
            <div className="grid grid-cols-2 gap-4">
              {selectedDates.sort().map((date, idx) => (
                <div key={date} className="text-center">
                  <p className="text-xs text-gray-400 mb-2">
                    {idx === 0 ? "Before" : "After"}: {formatDate(date)}
                  </p>
                  <img
                    src={photos[date]?.data || photos[date]?.imageData}
                    alt={`Progress ${date}`}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {photoDates.slice(-12).map((date) => (
            <div key={date} className="relative group">
              <img
                src={photos[date]?.data || photos[date]?.imageData}
                alt={`Progress ${date}`}
                className="w-full h-20 sm:h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => {
                  setSelectedDates([date]);
                  setCompareMode(false);
                }}
              />
              <p className="text-[10px] text-gray-400 text-center mt-1">
                {formatDate(date)}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeletePhoto(date);
                }}
                className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedDates.length === 1 && !compareMode && (
        <div className="mt-4">
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-2">
              {formatDate(selectedDates[0])}
            </p>
            <img
              src={
                photos[selectedDates[0]]?.data ||
                photos[selectedDates[0]]?.imageData
              }
              alt={`Progress ${selectedDates[0]}`}
              className="max-h-64 mx-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Add Photo Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              📸 Add Progress Photo
            </h3>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="max-h-48 mx-auto rounded-lg"
                  />
                ) : (
                  <>
                    <p className="text-4xl mb-2">📷</p>
                    <p className="text-gray-400 mb-4">Select a photo</p>
                  </>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="photo-input"
                />
                <label
                  htmlFor="photo-input"
                  className="inline-block px-4 py-2 bg-white/20 text-white rounded-lg cursor-pointer hover:bg-white/30 transition-all"
                >
                  {previewImage ? "Change Photo" : "Choose Photo"}
                </label>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleSavePhoto}
                  disabled={!previewImage}
                  className={`w-full py-2 rounded-lg font-medium transition-all ${
                    previewImage
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Save Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoProgress;
