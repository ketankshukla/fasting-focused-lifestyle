import React from "react";

const WFModule9 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Maintaining Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            🔒
          </span>
          Maintaining Your Fasting Benefits
        </h2>
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            You've accomplished something significant. Now it's about
            maintaining those benefits through sustainable lifestyle choices.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                ✅ Continue Doing
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Intermittent fasting (16:8 or similar)",
                  "Eating whole, unprocessed foods",
                  "Mindful, slow eating",
                  "Staying well-hydrated (with minerals)",
                  "Regular movement and exercise",
                  "Quality sleep habits",
                  "Meditation or stress management",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-4">
                ❌ Avoid Returning To
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Regular processed food consumption",
                  "Excessive sugar and refined carbs",
                  "Mindless eating while distracted",
                  "Late-night eating habits",
                  "Dehydration (drink water with minerals!)",
                  "Sedentary lifestyle",
                  "Stress eating patterns",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-red-400">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Future Fasting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            🔄
          </span>
          Planning Future Fasts
        </h2>
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-2xl p-6 border border-violet-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Extended water fasting works best as part of a long-term practice.
            Here's how to structure your fasting schedule.
          </p>

          <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
            <h3 className="text-lg font-semibold text-violet-400 mb-4">
              📅 Recommended Fasting Schedules
            </h3>
            <div className="space-y-4">
              {[
                {
                  type: "Daily: 16:8 Intermittent Fasting",
                  freq: "Everyday",
                  purpose: "Baseline metabolic flexibility",
                  recovery: "None needed",
                },
                {
                  type: "24-Hour Water Fast",
                  freq: "Weekly",
                  purpose: "Digestive rest, mild autophagy",
                  recovery: "1 day",
                },
                {
                  type: "3-Day Water Fast",
                  freq: "Monthly",
                  purpose: "Significant autophagy boost",
                  recovery: "3-4 days",
                },
                {
                  type: "5-7 Day Water Fast",
                  freq: "Quarterly",
                  purpose: "Immune reset, deep cleaning",
                  recovery: "1-2 weeks",
                },
                {
                  type: "14+ Day Water Fast",
                  freq: "1-2x/year",
                  purpose: "Maximum cellular regeneration",
                  recovery: "3-4 weeks",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-semibold text-white">
                      {item.type}
                    </span>
                    <span className="px-2 py-0.5 bg-violet-500/20 text-violet-400 text-xs rounded-full">
                      {item.freq}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <p className="text-gray-300">
                      <strong>Purpose:</strong> {item.purpose}
                    </p>
                    <p className="text-gray-500">
                      <strong>Recovery:</strong> {item.recovery}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-violet-400 mb-2">
              💡 Building Your Practice
            </h4>
            <p className="text-gray-300 text-sm">
              Start with intermittent fasting as your baseline. Add weekly
              24-hour fasts when comfortable. Progress to monthly 3-day fasts.
              Only attempt 7+ day fasts after successfully completing shorter
              ones. Always allow adequate recovery between extended fasts.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Resources */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            📚
          </span>
          Recommended Resources
        </h2>
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-500/30">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Books */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                📕 Books
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "The Complete Guide to Fasting",
                    author: "Dr. Jason Fung",
                    note: "Excellent scientific foundation",
                  },
                  {
                    title: "Life in the Fasting Lane",
                    author: "Dr. Jason Fung et al.",
                    note: "Practical fasting advice",
                  },
                  {
                    title: "The Obesity Code",
                    author: "Dr. Jason Fung",
                    note: "Understanding insulin and weight",
                  },
                  {
                    title: "Fasting and Eating for Health",
                    author: "Dr. Joel Fuhrman",
                    note: "Medical perspective",
                  },
                ].map((book, i) => (
                  <li key={i}>
                    <span className="text-white font-medium">{book.title}</span>
                    <p className="text-blue-400 text-sm">{book.author}</p>
                    <p className="text-gray-500 text-xs">{book.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Communities */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                👥 Communities
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    name: "r/fasting",
                    platform: "Reddit",
                    members: "400k+ members",
                    note: "Large, active community",
                  },
                  {
                    name: "r/WaterFasting",
                    platform: "Reddit",
                    members: "Dedicated sub",
                    note: "Water fasting specific",
                  },
                  {
                    name: "Snake Diet Community",
                    platform: "Various",
                    members: "Active group",
                    note: "Electrolyte-focused approach",
                  },
                  {
                    name: "Fasting Groups",
                    platform: "Facebook",
                    members: "Multiple groups",
                    note: 'Search "extended fasting"',
                  },
                ].map((community, i) => (
                  <li key={i}>
                    <span className="text-white font-medium">
                      {community.name}
                    </span>
                    <p className="text-indigo-400 text-sm">
                      {community.platform} • {community.members}
                    </p>
                    <p className="text-gray-500 text-xs">{community.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apps & Tools */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                📱 Apps & Tools
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    name: "Zero",
                    type: "App",
                    note: "Popular fasting tracker",
                  },
                  {
                    name: "Life Fasting",
                    type: "App",
                    note: "Community features",
                  },
                  { name: "Fastient", type: "App", note: "Simple tracker" },
                  {
                    name: "Blood Ketone Meter",
                    type: "Device",
                    note: "Track ketosis accurately",
                  },
                  {
                    name: "This Tracker!",
                    type: "Web App",
                    note: "Track your fasting journey here",
                  },
                ].map((tool, i) => (
                  <li key={i}>
                    <span className="text-white font-medium">{tool.name}</span>
                    <span className="text-cyan-400 text-sm ml-2">
                      ({tool.type})
                    </span>
                    <p className="text-gray-500 text-xs">{tool.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Electrolyte Sources */}
            <div className="bg-yellow-500/10 rounded-xl p-5 border border-yellow-500/30">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                ⚡ Electrolyte Products
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "LMNT", note: "High sodium, great taste, pricey" },
                  {
                    name: "NoSalt / Nu-Salt",
                    note: "Potassium chloride, affordable",
                  },
                  {
                    name: "Himalayan Pink Salt",
                    note: "Sodium with trace minerals",
                  },
                  {
                    name: "Magnesium Glycinate",
                    note: "Best absorbed magnesium form",
                  },
                  {
                    name: "DIY Snake Juice",
                    note: "Cheapest and customizable",
                  },
                ].map((product, i) => (
                  <li key={i}>
                    <span className="text-white font-medium">
                      {product.name}
                    </span>
                    <p className="text-gray-500 text-xs">{product.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Quick Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            📋
          </span>
          Quick Reference Card
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
              <h4 className="font-semibold text-yellow-400 mb-3">
                ⚡ Daily Electrolytes
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>
                  <strong>Sodium:</strong> 4,000-7,000 mg
                </li>
                <li>
                  <strong>Potassium:</strong> 2,000-4,000 mg
                </li>
                <li>
                  <strong>Magnesium:</strong> 300-500 mg
                </li>
              </ul>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
              <h4 className="font-semibold text-blue-400 mb-3">
                🥤 Snake Juice (2L)
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>½ tsp Himalayan salt</li>
                <li>½ tsp NoSalt (potassium)</li>
                <li>½ tsp Baking soda</li>
                <li>¼ tsp Epsom salt (optional)</li>
              </ul>
            </div>
            <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
              <h4 className="font-semibold text-green-400 mb-3">
                🍉 Breaking Fast Order
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>1. Diluted juice/broth</li>
                <li>2. Watermelon/cucumber</li>
                <li>3. Raw vegetables</li>
                <li>4. Cooked veg + eggs (Day 3)</li>
                <li>5. Fish/chicken (Day 4-5)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Completion */}
      <section className="space-y-4">
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl p-8 text-center">
          <span className="text-6xl">🎉</span>
          <h2 className="text-3xl font-bold text-white mt-4 mb-2">
            Congratulations!
          </h2>
          <p className="text-xl text-white/90 mb-6">
            You've completed the Extended Water Fasting Course
          </p>

          <div className="bg-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg mb-4">
              You now have the knowledge to safely undertake extended water
              fasts. Remember the fundamentals:
            </p>
            <ul className="text-white/80 text-left space-y-2 mb-6">
              <li>
                ⚡ <strong>Never drink plain water</strong>—always add
                electrolytes
              </li>
              <li>
                📋 <strong>Prepare properly</strong>—diet, supplies, mindset
              </li>
              <li>
                💪 <strong>Days 2-3 are hardest</strong>—push through with
                electrolytes
              </li>
              <li>
                🍉 <strong>Break your fast slowly</strong>—don't rush refeeding
              </li>
              <li>
                🔄 <strong>Build a sustainable practice</strong>—start with IF
                baseline
              </li>
            </ul>
            <p className="text-white font-semibold text-lg">
              💧 Your transformation journey begins now!
            </p>
          </div>
        </div>
      </section>

      {/* Final Electrolyte Reminder */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚡</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              The Golden Rule: Electrolytes Always
            </h3>
            <p className="text-white/90">
              If you take one thing from this entire course:{" "}
              <strong>never drink plain water during extended fasts</strong>.
              Electrolytes are the difference between a miserable, dangerous
              fast and a transformative, healing experience. Sodium, potassium,
              magnesium—every single time you drink water.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Course Complete!
            </h3>
            <p className="text-white/90">
              You now have a comprehensive understanding of extended water
              fasting: the science, the benefits, the critical importance of
              electrolytes, how to prepare, what to expect, how to break your
              fast, and how to build a sustainable practice. Use the resources
              provided to deepen your knowledge and connect with community. Most
              importantly: never fast without proper electrolyte
              supplementation. Good luck on your fasting journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFModule9;
