import React, { useState } from "react";

const ProfileModal = ({ profile, onSave, onClose }) => {
  const [tempProfile, setTempProfile] = useState(profile);

  const handleSave = () => {
    onSave(tempProfile);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          ⚙️ Profile Settings
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height (inches)
            </label>
            <input
              type="number"
              value={tempProfile.height}
              onChange={(e) =>
                setTempProfile({
                  ...tempProfile,
                  height: parseInt(e.target.value) || 0,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <p className="text-xs text-gray-500 mt-1">
              {Math.floor(tempProfile.height / 12)}'{tempProfile.height % 12}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Starting Weight
              </label>
              <input
                type="number"
                value={tempProfile.startingWeight}
                onChange={(e) =>
                  setTempProfile({
                    ...tempProfile,
                    startingWeight: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Goal Weight
              </label>
              <input
                type="number"
                value={tempProfile.goalWeight}
                onChange={(e) =>
                  setTempProfile({
                    ...tempProfile,
                    goalWeight: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Starting Waist
              </label>
              <input
                type="number"
                value={tempProfile.startingWaist}
                onChange={(e) =>
                  setTempProfile({
                    ...tempProfile,
                    startingWaist: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Goal Waist
              </label>
              <input
                type="number"
                value={tempProfile.goalWaist}
                onChange={(e) =>
                  setTempProfile({
                    ...tempProfile,
                    goalWaist: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
          >
            💾 Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
