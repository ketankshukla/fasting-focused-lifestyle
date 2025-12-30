import React, { useState } from "react";
import { defaultProfile } from "../data";
import { useFastingStorage } from "../hooks/useLocalStorage";
import { usePhotoStorage } from "../hooks/useIndexedDB";
import { getProgressStats, getScheduleStats } from "../utils/calculations";

import { Header } from "./Header";
import {
  ProgressDashboard,
  FastTypeStats,
  Legend,
  MonthNavigation,
  ProgressCharts,
  PhotoProgress,
  FastingTimer,
} from "./Dashboard";
import { MonthView, YearView } from "./Calendar";
import { LogModal, ProfileModal } from "./Modals";
import Footer from "./Footer";

const FastingTracker = () => {
  const { profile, dailyLogs, saveLog, saveProfile } =
    useFastingStorage(defaultProfile);
  const { photos, savePhoto, deletePhoto, getAllPhotoDates } =
    usePhotoStorage();

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [showYearView, setShowYearView] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);

  const stats = getProgressStats(profile, dailyLogs);
  const scheduleStats = getScheduleStats();

  const handleDayClick = (dateKey) => {
    setSelectedDay(dateKey);
    setShowLogModal(true);
  };

  const handleMonthSelect = (idx) => {
    setSelectedMonth(idx);
    setShowYearView(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <Header
          fastingDays={scheduleStats.fastingDays}
          eatingDays={scheduleStats.eatingDays}
          onProfileClick={() => setShowProfileModal(true)}
        />

        <ProgressDashboard stats={stats} profile={profile} />

        <FastingTimer />

        <ProgressCharts dailyLogs={dailyLogs} profile={profile} />

        <PhotoProgress
          photos={photos}
          onSavePhoto={savePhoto}
          onDeletePhoto={deletePhoto}
          getAllPhotoDates={getAllPhotoDates}
        />

        <FastTypeStats scheduleStats={scheduleStats} />

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

        <Footer />
      </div>
    </div>
  );
};

export default FastingTracker;
