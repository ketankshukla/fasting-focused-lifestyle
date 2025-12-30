import React from "react";

const menuItems = [
  { id: "dashboard", icon: "📊", label: "Dashboard", section: "overview" },
  { id: "charts", icon: "📈", label: "Progress Charts", section: "tracking" },
  { id: "photos", icon: "📸", label: "Photo Progress", section: "tracking" },
  { id: "journal", icon: "📔", label: "Journal", section: "tracking" },
  {
    id: "rewards",
    icon: "🏆",
    label: "Rewards & Goals",
    section: "gamification",
  },
  { id: "export", icon: "📤", label: "Export Data", section: "settings" },
  { id: "backup", icon: "💾", label: "Backup & Restore", section: "settings" },
];

const sections = {
  overview: "Overview",
  tracking: "Tracking",
  gamification: "Gamification",
  settings: "Settings & Data",
};

const Sidebar = ({ activeSection, onSectionChange, isOpen, onClose }) => {
  const groupedItems = {};
  menuItems.forEach((item) => {
    if (!groupedItems[item.section]) {
      groupedItems[item.section] = [];
    }
    groupedItems[item.section].push(item);
  });

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 h-full w-72 bg-gray-900/95 backdrop-blur-xl border-r border-white/10 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:z-auto
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-white">
                🔥 Fasting Tracker
              </h1>
              <button
                onClick={onClose}
                className="lg:hidden text-gray-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Your health journey dashboard
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-3">
            {Object.entries(sections).map(([sectionKey, sectionLabel]) => (
              <div key={sectionKey} className="mb-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                  {sectionLabel}
                </h3>
                <div className="space-y-1">
                  {groupedItems[sectionKey]?.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSectionChange(item.id);
                        onClose();
                      }}
                      className={`
                        w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all
                        ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                            : "text-gray-300 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                      {activeSection === item.id && (
                        <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <p className="text-xs text-gray-500 text-center">
              fasting.ketanshukla.com
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
