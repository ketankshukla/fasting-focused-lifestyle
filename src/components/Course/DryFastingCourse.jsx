import React, { useState } from "react";
import Module1 from "./Module1";
import Module2 from "./Module2";
import Module3 from "./Module3";
import Module4 from "./Module4";
import Module5 from "./Module5";
import Module6 from "./Module6";
import Module7 from "./Module7";
import Module8 from "./Module8";
import Module9 from "./Module9";

const modules = [
  {
    id: 1,
    title: "Introduction to Dry Fasting",
    icon: "📖",
    emoji: "🌿 💫",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    title: "The Science Behind Dry Fasting",
    icon: "🔬",
    emoji: "🧬 ⚗️ 🧠",
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Benefits of Prolonged Dry Fasting",
    icon: "✨",
    emoji: "💪 🌟 🦋",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: 4,
    title: "Preparing for a 10-Day Dry Fast",
    icon: "📝",
    emoji: "🎯 🏠 🧘",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 5,
    title: "The 10-Day Dry Fast Timeline",
    icon: "📅",
    emoji: "🗓️ ⏰ 🌅",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: 6,
    title: "What to Expect Physically & Mentally",
    icon: "🌡️",
    emoji: "💭 😴 ⚡",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 7,
    title: "Breaking a 10-Day Dry Fast",
    icon: "🍉",
    emoji: "🥒 🥣 🍲",
    color: "from-lime-500 to-green-600",
  },
  {
    id: 8,
    title: "Post-Fast Integration",
    icon: "🔄",
    emoji: "📊 🎯 🌱",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    id: 9,
    title: "Practical Resources",
    icon: "📚",
    emoji: "🔗 📱 🍽️",
    color: "from-orange-500 to-red-600",
  },
];

const DryFastingCourse = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [completedModules, setCompletedModules] = useState(() => {
    try {
      const saved = localStorage.getItem("completedCourseModules");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const markComplete = (moduleId) => {
    const updated = completedModules.includes(moduleId)
      ? completedModules.filter((id) => id !== moduleId)
      : [...completedModules, moduleId];
    setCompletedModules(updated);
    try {
      localStorage.setItem("completedCourseModules", JSON.stringify(updated));
    } catch {}
  };

  const progress = Math.round((completedModules.length / modules.length) * 100);

  const renderModule = () => {
    switch (activeModule) {
      case 1:
        return <Module1 />;
      case 2:
        return <Module2 />;
      case 3:
        return <Module3 />;
      case 4:
        return <Module4 />;
      case 5:
        return <Module5 />;
      case 6:
        return <Module6 />;
      case 7:
        return <Module7 />;
      case 8:
        return <Module8 />;
      case 9:
        return <Module9 />;
      default:
        return null;
    }
  };

  if (activeModule) {
    const currentIndex = modules.findIndex((m) => m.id === activeModule);
    const currentModule = modules[currentIndex];
    const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
    const nextModule =
      currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

    return (
      <div className="min-h-screen">
        {/* Module Header */}
        <div
          className={`bg-gradient-to-r ${currentModule.color} p-6 rounded-2xl mb-6 shadow-2xl`}
        >
          <button
            onClick={() => setActiveModule(null)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <span>←</span> Back to Course Overview
          </button>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{currentModule.icon}</span>
            <div>
              <p className="text-white/70 text-sm">
                Module {currentModule.id} of 9
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {currentModule.title}
              </h1>
              <p className="text-white/80 text-lg mt-1">
                {currentModule.emoji}
              </p>
            </div>
          </div>
        </div>

        {/* Module Content */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 mb-6">
          {renderModule()}
        </div>

        {/* Navigation Footer */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {prevModule ? (
              <button
                onClick={() => setActiveModule(prevModule.id)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all"
              >
                <span>←</span>
                <span className="hidden sm:inline">
                  {prevModule.icon} {prevModule.title}
                </span>
                <span className="sm:hidden">Previous</span>
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={() => markComplete(activeModule)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                completedModules.includes(activeModule)
                  ? "bg-green-500 text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {completedModules.includes(activeModule)
                ? "✓ Completed"
                : "Mark as Complete"}
            </button>

            {nextModule ? (
              <button
                onClick={() => setActiveModule(nextModule.id)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg text-white transition-all"
              >
                <span className="hidden sm:inline">
                  {nextModule.icon} {nextModule.title}
                </span>
                <span className="sm:hidden">Next</span>
                <span>→</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveModule(null)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-lg text-white transition-all"
              >
                🎉 Complete Course
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 p-8 md:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-white/90 text-sm font-medium mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full">
              🔥 Premium Course
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full">
              ⏱️ Self-Paced
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Prolonged Dry Fasting 🌟
          </h1>
          <p className="text-xl text-white/90 mb-6 max-w-2xl">
            Master the transformative practice of 10-day dry fasting. A
            comprehensive guide covering science, preparation, execution, and
            recovery.
          </p>

          {/* Progress Bar */}
          <div className="bg-white/20 rounded-full h-3 mb-2 max-w-md overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/80 text-sm">
            {completedModules.length} of {modules.length} modules completed •{" "}
            {progress}% complete
          </p>
        </div>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            icon: "📚",
            value: "9",
            label: "Modules",
            color: "from-purple-500 to-violet-600",
          },
          {
            icon: "⏱️",
            value: "2-3h",
            label: "Total Time",
            color: "from-blue-500 to-cyan-600",
          },
          {
            icon: "🎯",
            value: "10",
            label: "Day Protocol",
            color: "from-amber-500 to-orange-600",
          },
          {
            icon: "✨",
            value: "∞",
            label: "Transformation",
            color: "from-emerald-500 to-green-600",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 text-center shadow-lg`}
          >
            <span className="text-3xl">{stat.icon}</span>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
            <p className="text-white/80 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Modules Grid */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          📖 Course Modules
        </h2>

        <div className="grid gap-4">
          {modules.map((module, index) => {
            const isCompleted = completedModules.includes(module.id);
            const isNext =
              !isCompleted &&
              (index === 0 || completedModules.includes(modules[index - 1].id));

            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`group relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  isCompleted
                    ? "bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-2 border-green-500/50"
                    : isNext
                    ? `bg-gradient-to-r ${module.color} shadow-lg`
                    : "bg-gray-800/50 border border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${
                      isCompleted
                        ? "bg-green-500"
                        : isNext
                        ? "bg-white/20"
                        : "bg-white/10"
                    }`}
                  >
                    {isCompleted ? "✓" : module.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          isCompleted
                            ? "bg-green-500/30 text-green-300"
                            : isNext
                            ? "bg-white/20 text-white"
                            : "bg-white/10 text-gray-400"
                        }`}
                      >
                        Module {module.id}
                      </span>
                      {isCompleted && (
                        <span className="text-green-400 text-sm">
                          ✓ Completed
                        </span>
                      )}
                      {isNext && (
                        <span className="text-white text-sm animate-pulse">
                          ▶ Start Here
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-lg font-semibold mt-1 ${
                        isCompleted || isNext ? "text-white" : "text-gray-200"
                      }`}
                    >
                      {module.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        isCompleted || isNext
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {module.emoji}
                    </p>
                  </div>

                  <div
                    className={`text-2xl transition-transform group-hover:translate-x-1 ${
                      isCompleted || isNext ? "text-white" : "text-gray-500"
                    }`}
                  >
                    →
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 rounded-3xl p-8 border border-purple-500/30">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          🎯 What You'll Master
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: "🔬",
              text: "The complete science of autophagy and cellular regeneration",
            },
            {
              icon: "🧬",
              text: "How metabolic water production sustains your body",
            },
            {
              icon: "📅",
              text: "Day-by-day breakdown of what happens during a 10-day fast",
            },
            {
              icon: "🍉",
              text: "Proper refeeding protocols to maximize benefits",
            },
            { icon: "🧘", text: "Mental and physical preparation strategies" },
            { icon: "📊", text: "How to track and measure your progress" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 bg-white/5 rounded-xl"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-gray-200">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      {completedModules.length === 0 && (
        <div className="text-center py-8">
          <button
            onClick={() => setActiveModule(1)}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            🚀 Start Your Journey
          </button>
        </div>
      )}
    </div>
  );
};

export default DryFastingCourse;
