import React, { useState } from "react";
import { defaultProfile } from "../data";
import { useSupabaseStorage } from "../hooks/useSupabaseStorage";
import { useSupabasePhotos } from "../hooks/useSupabasePhotos";
import { useNotifications } from "../hooks/useNotifications";
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
  NotificationSettings,
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
import { LogModal, ProfileModal } from "./Modals";

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
  const { permission, isSupported, requestPermission, scheduleReminder } =
    useNotifications();

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [showYearView, setShowYearView] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "dashboard";
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    setShowLogModal(true);
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
            <ProgressDashboard stats={stats} profile={profile} />
            <FastTypeStats scheduleStats={scheduleStats} />
          </div>
        );

      case "timer":
        return <FastingTimer />;

      case "calendar":
        return (
          <div className="space-y-6">
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
        );

      case "charts":
        return <ProgressCharts dailyLogs={dailyLogs} profile={profile} />;

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

      case "streaks":
        return <StreakCounter dailyLogs={dailyLogs} />;

      case "badges":
        return (
          <AchievementBadges
            dailyLogs={dailyLogs}
            profile={profile}
            stats={stats}
          />
        );

      case "quotes":
        return <MotivationalQuotes />;

      case "notifications":
        return (
          <NotificationSettings
            permission={permission}
            isSupported={isSupported}
            onRequestPermission={requestPermission}
            onScheduleReminder={scheduleReminder}
          />
        );

      case "export":
        return (
          <ExportData dailyLogs={dailyLogs} profile={profile} stats={stats} />
        );

      case "share":
        return <ShareProgress stats={stats} profile={profile} />;

      case "backup":
        return <BackupRestore dailyLogs={dailyLogs} profile={profile} />;

      default:
        return <ProgressDashboard stats={stats} profile={profile} />;
    }
  };

  const getSectionTitle = () => {
    const titles = {
      dashboard: "📊 Dashboard",
      timer: "⏱️ Fasting Timer",
      calendar: "📅 Calendar",
      charts: "📈 Progress Charts",
      photos: "📸 Photo Progress",
      journal: "📔 Journal",
      streaks: "🔥 Streaks",
      badges: "🏅 Achievements",
      quotes: "💫 Daily Motivation",
      notifications: "🔔 Notifications",
      export: "📤 Export Data",
      share: "📱 Share Progress",
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
            <button
              onClick={() => setShowProfileModal(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-all"
            >
              <span>⚙️</span>
              <span className="hidden sm:inline">Profile</span>
            </button>
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

      {/* Quick Log Button */}
      <QuickLogButton onLogToday={handleDayClick} />
    </div>
  );
};

export default FastingTracker;
