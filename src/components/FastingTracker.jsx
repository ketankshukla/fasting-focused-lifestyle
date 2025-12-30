import React, { useState } from "react";
import { defaultProfile } from "../data";
import { useSupabaseStorage } from "../hooks/useSupabaseStorage";
import { useSupabasePhotos } from "../hooks/useSupabasePhotos";
import { getProgressStats, getScheduleStats } from "../utils/calculations";

import { Sidebar } from "./Layout";
import { Header } from "./Header";
import {
  ProgressDashboard,
  FastTypeStats,
  Legend,
  MonthNavigation,
  ProgressCharts,
  PhotoProgress,
  FastingTimer,
  StreakCounter,
  AchievementBadges,
  MotivationalQuotes,
  JournalDiary,
  ExportData,
  ShareProgress,
  BackupRestore,
  QuickLogButton,
} from "./Dashboard";
import { MonthView, YearView } from "./Calendar";
import { LogModal, ProfileModal, DayInfoModal } from "./Modals";

const FastingTracker = () => {
  const {
    profile,
    dailyLogs,
    saveLog,
    saveProfile,
    loading: dataLoading,
  } = useSupabaseStorage(defaultProfile);
  const {
    photos,
    savePhoto,
    deletePhoto,
    getAllPhotoDates,
    loading: photosLoading,
  } = useSupabasePhotos();

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [showYearView, setShowYearView] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "dashboard";
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOwnerMode, setIsOwnerMode] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");
  const [pendingAction, setPendingAction] = useState(null);

  const OWNER_PIN = import.meta.env.VITE_OWNER_PIN || "55378008";

  // Generic function to require PIN before any action
  const requireOwnerAccess = (action) => {
    if (isOwnerMode) {
      action();
    } else {
      setPendingAction(() => action);
      setShowPinModal(true);
      setPinInput("");
      setPinError("");
    }
  };

  const handleProfileButtonClick = () => {
    requireOwnerAccess(() => setShowProfileModal(true));
  };

  const handlePinSubmit = () => {
    if (pinInput === OWNER_PIN) {
      setIsOwnerMode(true);
      setShowPinModal(false);
      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }
    } else {
      setPinError("Incorrect PIN");
      setPinInput("");
    }
  };

  // Persist active section to localStorage
  const handleSectionChange = (section) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
  };

  const stats = getProgressStats(profile, dailyLogs);
  const scheduleStats = getScheduleStats();
  const isLoading = dataLoading || photosLoading;

  const handleDayClick = (dateKey) => {
    setSelectedDay(dateKey);
    setShowInfoModal(true);
  };

  const handleQuickLog = (dateKey) => {
    requireOwnerAccess(() => {
      setSelectedDay(dateKey);
      setShowLogModal(true);
    });
  };

  const handleMonthSelect = (idx) => {
    setSelectedMonth(idx);
    setShowYearView(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            {/* Fasting Timer */}
            <FastingTimer />

            {/* Calendar */}
            <div className="space-y-4">
              <MonthNavigation
                selectedMonth={selectedMonth}
                showYearView={showYearView}
                onMonthSelect={handleMonthSelect}
                onYearViewToggle={() => setShowYearView(!showYearView)}
              />
              <Legend />
              {showYearView ? (
                <YearView onMonthSelect={handleMonthSelect} />
              ) : (
                <MonthView
                  monthIndex={selectedMonth}
                  dailyLogs={dailyLogs}
                  onDayClick={handleDayClick}
                />
              )}
            </div>

            {/* Progress Cards */}
            <ProgressDashboard stats={stats} profile={profile} />
            <FastTypeStats
              scheduleStats={scheduleStats}
              dailyLogs={dailyLogs}
            />
          </div>
        );

      case "charts":
        return (
          <div className="space-y-6">
            <ProgressCharts dailyLogs={dailyLogs} profile={profile} />
            <ShareProgress stats={stats} profile={profile} />
          </div>
        );

      case "photos":
        return (
          <PhotoProgress
            photos={photos}
            onSavePhoto={savePhoto}
            onDeletePhoto={deletePhoto}
            getAllPhotoDates={getAllPhotoDates}
          />
        );

      case "journal":
        return <JournalDiary dailyLogs={dailyLogs} />;

      case "rewards":
        return (
          <div className="space-y-6">
            <StreakCounter dailyLogs={dailyLogs} />
            <AchievementBadges
              dailyLogs={dailyLogs}
              profile={profile}
              stats={stats}
            />
            <MotivationalQuotes />
          </div>
        );

      case "export":
        return (
          <ExportData dailyLogs={dailyLogs} profile={profile} stats={stats} />
        );

      case "backup":
        return <BackupRestore dailyLogs={dailyLogs} profile={profile} />;

      default:
        return <ProgressDashboard stats={stats} profile={profile} />;
    }
  };

  const getSectionTitle = () => {
    const titles = {
      dashboard: "📊 Dashboard",
      charts: "📈 Progress Charts",
      photos: "📸 Photo Progress",
      journal: "📔 Journal",
      rewards: "🏆 Rewards & Goals",
      export: "📤 Export Data",
      backup: "💾 Backup & Restore",
    };
    return titles[activeSection] || "Dashboard";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading your data...</p>
          <p className="text-gray-400 text-sm mt-1">Syncing with cloud</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 bg-gray-900/80 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <h2 className="text-lg font-bold text-white">
                {getSectionTitle()}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {isOwnerMode && (
                <button
                  onClick={() => setIsOwnerMode(false)}
                  className="px-2 py-1 bg-green-500/30 text-green-300 text-xs rounded-full hover:bg-green-500/40 transition-colors"
                >
                  ✓ Owner
                </button>
              )}
              <button
                onClick={handleProfileButtonClick}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-all"
              >
                <span>{isOwnerMode ? "⚙️" : "🔒"}</span>
                <span className="hidden sm:inline">Profile</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto">{renderContent()}</div>
        </main>

        {/* Quick Stats Footer */}
        <footer className="bg-gray-900/80 backdrop-blur-xl border-t border-white/10 px-4 py-3">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-gray-400">
              <span>⚖️ {stats.currentWeight} lbs</span>
              <span className="hidden sm:inline">
                📉 {stats.lostSoFar.toFixed(1)} lost
              </span>
              <span>🎯 {stats.progressPercent.toFixed(0)}%</span>
            </div>
            <div className="text-gray-500 text-xs">
              {scheduleStats.fastingDays} fasting • {scheduleStats.eatingDays}{" "}
              eating
            </div>
          </div>
        </footer>
      </div>

      {/* Modals */}
      {showLogModal && selectedDay && (
        <LogModal
          selectedDay={selectedDay}
          dailyLogs={dailyLogs}
          onSave={saveLog}
          onClose={() => setShowLogModal(false)}
        />
      )}

      {showProfileModal && (
        <ProfileModal
          profile={profile}
          onSave={saveProfile}
          onClose={() => setShowProfileModal(false)}
        />
      )}

      {/* PIN Modal for Owner Access */}
      {showPinModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowPinModal(false)}
        >
          <div
            className="bg-gray-800 rounded-2xl shadow-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-white mb-2">
              🔐 Owner Access
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Enter PIN to edit profile settings
            </p>

            <input
              type="password"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePinSubmit()}
              placeholder="Enter PIN"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-center text-2xl tracking-widest focus:outline-none focus:border-purple-500"
              maxLength={8}
              autoFocus
            />

            {pinError && (
              <p className="text-red-400 text-sm mt-2 text-center">
                {pinError}
              </p>
            )}

            <button
              onClick={handlePinSubmit}
              className="w-full mt-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Unlock
            </button>
          </div>
        </div>
      )}

      {/* Day Info Modal */}
      {showInfoModal && selectedDay && (
        <DayInfoModal
          selectedDay={selectedDay}
          dailyLogs={dailyLogs}
          onClose={() => setShowInfoModal(false)}
          onNavigate={(newDay) => setSelectedDay(newDay)}
        />
      )}

      {/* Quick Log Button */}
      <QuickLogButton onLogToday={handleQuickLog} />
    </div>
  );
};

export default FastingTracker;
