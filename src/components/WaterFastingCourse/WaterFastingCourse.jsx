import React, { useState } from "react";
import WFModule1 from "./WFModule1";
import WFModule2 from "./WFModule2";
import WFModule3 from "./WFModule3";
import WFModule4 from "./WFModule4";
import WFModule5 from "./WFModule5";
import WFModule6 from "./WFModule6";
import WFModule7 from "./WFModule7";
import WFModule8 from "./WFModule8";
import WFModule9 from "./WFModule9";

const modules = [
  {
    id: 1,
    title: "Introduction to Water Fasting",
    icon: "💧",
    emoji: "🌊 ✨",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "The Science Behind Water Fasting",
    icon: "🔬",
    emoji: "🧬 ⚗️ 🧠",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 3,
    title: "Benefits of Extended Water Fasting",
    icon: "✨",
    emoji: "💪 🌟 🦋",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    title: "Electrolytes: The Critical Key",
    icon: "⚡",
    emoji: "🧂 💎 🔋",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: 5,
    title: "Preparing for an Extended Water Fast",
    icon: "📝",
    emoji: "🎯 🏠 🧘",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 6,
    title: "The Extended Water Fast Timeline",
    icon: "📅",
    emoji: "🗓️ ⏰ 🌅",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: 7,
    title: "What to Expect During Your Fast",
    icon: "🌡️",
    emoji: "💭 😴 ⚡",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 8,
    title: "Breaking Your Water Fast",
    icon: "🍉",
    emoji: "🥒 🥣 🍲",
    color: "from-lime-500 to-green-600",
  },
  {
    id: 9,
    title: "Post-Fast Integration & Resources",
    icon: "📚",
    emoji: "🔗 📱 🌱",
    color: "from-orange-500 to-red-600",
  },
];

const WaterFastingCourse = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [completedModules, setCompletedModules] = useState(() => {
    try {
      const saved = localStorage.getItem("completedWaterFastingModules");
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
      localStorage.setItem(
        "completedWaterFastingModules",
        JSON.stringify(updated)
      );
    } catch {}
  };

  const progress = Math.round((completedModules.length / modules.length) * 100);

  const renderModule = () => {
    switch (activeModule) {
      case 1:
        return <WFModule1 />;
      case 2:
        return <WFModule2 />;
      case 3:
        return <WFModule3 />;
      case 4:
        return <WFModule4 />;
      case 5:
        return <WFModule5 />;
      case 6:
        return <WFModule6 />;
      case 7:
        return <WFModule7 />;
      case 8:
        return <WFModule8 />;
      case 9:
        return <WFModule9 />;
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
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white transition-all"
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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 p-8 md:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-white/90 text-sm font-medium mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full">
              💧 Premium Course
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full">
              ⏱️ Self-Paced
            </span>
            <span className="px-3 py-1 bg-yellow-400/30 rounded-full">
              ⚡ Electrolyte Focus
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
            Extended Water Fasting 💧
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
            Master the art of extended water fasting with proper electrolyte
            supplementation. A comprehensive guide covering science,
            preparation, execution, and recovery.
          </p>

          {/* Critical Notice */}
          <div className="bg-yellow-500/20 border border-yellow-400/50 rounded-xl p-4 mb-6 max-w-2xl">
            <p className="text-yellow-200 font-semibold flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              Never drink plain water during extended fasts—always add
              electrolytes!
            </p>
          </div>

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
            icon: "⚡",
            value: "100%",
            label: "Electrolytes",
            color: "from-yellow-500 to-amber-600",
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
            <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
            <p className="text-white/80 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Electrolyte Warning Banner */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-2 border-yellow-500/50 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚡</span>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">
              The #1 Rule of Water Fasting
            </h3>
            <p className="text-gray-200">
              <strong className="text-white">
                Plain water is NOT recommended
              </strong>{" "}
              during extended fasts. Drinking plain water flushes out essential
              electrolytes (sodium, potassium, magnesium), leading to dangerous
              imbalances, weakness, heart palpitations, and other serious
              symptoms.{" "}
              <strong className="text-yellow-400">
                Always supplement your water with electrolytes.
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Module Grid */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">📖 Course Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-left hover:border-white/30 transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              {completedModules.includes(module.id) && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              )}

              <div
                className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <span className="text-2xl">{module.icon}</span>
              </div>

              <p className="text-gray-500 text-sm mb-1">Module {module.id}</p>
              <h3 className="text-lg font-semibold text-white mb-2">
                {module.title}
              </h3>
              <p className="text-gray-400 text-sm">{module.emoji}</p>

              <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm group-hover:text-cyan-300">
                <span>Start Module</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Course Features */}
      <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h2 className="text-xl font-bold text-white mb-4">
          🎯 What You'll Learn
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: "💧",
              text: "The science of water fasting and how it transforms your body",
            },
            {
              icon: "⚡",
              text: "Critical electrolyte protocols to fast safely and effectively",
            },
            {
              icon: "🧬",
              text: "How autophagy, ketosis, and cellular regeneration work",
            },
            {
              icon: "📅",
              text: "Day-by-day timeline of what to expect during extended fasts",
            },
            {
              icon: "🍉",
              text: "Proper refeeding protocols to lock in your fasting benefits",
            },
            {
              icon: "🎯",
              text: "How to build a sustainable fasting practice for life",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-gray-300">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaterFastingCourse;
