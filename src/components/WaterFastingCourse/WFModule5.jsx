import React from "react";

const WFModule5 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Pre-Fast Diet */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            🥗
          </span>
          Pre-Fast Dietary Preparation
        </h2>
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-2xl p-6 border border-violet-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Proper preparation makes your fast significantly easier. Gradually
            transitioning your diet in the week before reduces withdrawal
            symptoms and eases the metabolic shift.
          </p>

          <div className="space-y-4">
            {[
              {
                days: "7-5 Days Before",
                title: "Reduce & Clean",
                tasks: [
                  "Cut out processed foods and sugar",
                  "Eliminate alcohol and caffeine (or reduce significantly)",
                  "Reduce meal portions by 25%",
                  "Focus on whole foods: vegetables, proteins, healthy fats",
                  "Start drinking more water (with a pinch of salt)",
                ],
                color: "from-purple-500 to-violet-600",
              },
              {
                days: "4-3 Days Before",
                title: "Simplify & Lighten",
                tasks: [
                  "Reduce to 2 meals per day",
                  "Eliminate grains and heavy starches",
                  "Focus on low-carb: vegetables, eggs, fish, salads",
                  "Add avocados and healthy fats",
                  "Continue increasing water intake",
                ],
                color: "from-indigo-500 to-purple-600",
              },
              {
                days: "2-1 Days Before",
                title: "Final Transition",
                tasks: [
                  "Eat only light, easily digestible foods",
                  "Fresh fruits, vegetables, light soups",
                  "Small portions, no heavy meals",
                  "Last meal should be early evening",
                  "Ensure you have all electrolyte supplies ready",
                ],
                color: "from-blue-500 to-indigo-600",
              },
            ].map((phase, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${phase.color} bg-opacity-10 rounded-xl overflow-hidden`}
              >
                <div className={`bg-gradient-to-r ${phase.color} px-4 py-2`}>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">{phase.days}</span>
                    <span className="text-white/80">{phase.title}</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-800/50">
                  <ul className="text-gray-300 space-y-2">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: What to Stock */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            📦
          </span>
          Essential Supplies Checklist
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-500/10 rounded-xl p-5 border border-yellow-500/30">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                ⚡ Electrolytes (CRITICAL)
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  {
                    item: "Himalayan pink salt or sea salt",
                    note: "1-2 containers",
                  },
                  {
                    item: "NoSalt / Nu-Salt (potassium chloride)",
                    note: "1 container",
                  },
                  { item: "Baking soda", note: "Small box" },
                  {
                    item: "Magnesium supplement",
                    note: "Citrate or glycinate, 60+ capsules",
                  },
                  {
                    item: "Epsom salt (optional)",
                    note: "For baths and internal use",
                  },
                ].map((supply, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="text-yellow-400">□</span>
                      {supply.item}
                    </span>
                    <span className="text-gray-500 text-sm">{supply.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                💧 Hydration & Tracking
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  {
                    item: "Large water bottle (2L+)",
                    note: "For mixing electrolytes",
                  },
                  { item: "Measuring spoons", note: "For accurate dosing" },
                  { item: "Scale", note: "For tracking weight" },
                  { item: "Tape measure", note: "For waist measurement" },
                  { item: "Journal or app", note: "For logging progress" },
                ].map((supply, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="text-emerald-400">□</span>
                      {supply.item}
                    </span>
                    <span className="text-gray-500 text-sm">{supply.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                🍉 For Breaking Fast
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  { item: "Watermelon or cucumber", note: "Fresh, for Day 1" },
                  {
                    item: "Bone broth ingredients",
                    note: "Or store-bought (no additives)",
                  },
                  { item: "Fresh fruits", note: "Grapes, oranges, melon" },
                  {
                    item: "Salad ingredients",
                    note: "Light vegetables, olive oil",
                  },
                  { item: "Eggs", note: "For Day 2-3" },
                ].map((supply, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="text-blue-400">□</span>
                      {supply.item}
                    </span>
                    <span className="text-gray-500 text-sm">{supply.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                🧘 Comfort & Wellness
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  {
                    item: "Herbal teas (caffeine-free)",
                    note: "Optional comfort",
                  },
                  { item: "Heating pad", note: "For cold spells" },
                  { item: "Cozy blankets", note: "May feel cold" },
                  {
                    item: "Books / entertainment",
                    note: "Low-energy activities",
                  },
                  { item: "Tongue scraper", note: "For coating buildup" },
                ].map((supply, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="text-purple-400">□</span>
                      {supply.item}
                    </span>
                    <span className="text-gray-500 text-sm">{supply.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Mental Preparation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            🧠
          </span>
          Mental & Psychological Preparation
        </h2>
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Your mindset is crucial for success. Mental preparation is just as
            important as physical preparation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                🎯 Set Clear Intentions
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Write down WHY you are fasting",
                  "Set a specific duration goal",
                  "Define what success looks like",
                  "Visualize completing the fast",
                  "Create a mantra for difficult moments",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                💭 Mental Strategies
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Accept discomfort as temporary and purposeful",
                  "Plan distractions for difficult moments",
                  "Prepare responses for social situations",
                  "Remember: hunger comes in waves, not continuous",
                  "Focus on one day (or hour) at a time",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-cyan-400 mb-2">
              📝 Write Your "Why" Statement
            </h4>
            <p className="text-gray-300">
              Before starting, write a paragraph about why you're doing this
              fast. Be specific. When moments get hard, read this statement.
              Your "why" will carry you through when willpower fades.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Environment Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
            🏠
          </span>
          Environment Setup
        </h2>
        <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">
                ✅ Do This
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Remove tempting foods from sight",
                  "Tell family/housemates about your fast",
                  "Clear your schedule of food-related events",
                  "Set up a comfortable rest area",
                  "Prepare your electrolyte station",
                  "Plan low-energy activities",
                  "Have entertainment ready (books, shows)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-orange-400 mb-4">
                ❌ Avoid This
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Scheduling stressful meetings",
                  "Planning intense workouts",
                  "Social events centered on food",
                  "Starting during high-stress periods",
                  "Cooking for others (if avoidable)",
                  "Watching cooking shows",
                  "Grocery shopping while fasting",
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

      {/* Section: Scheduling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
            📅
          </span>
          Scheduling Your Fast
        </h2>
        <div className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 rounded-2xl p-6 border border-rose-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Timing your fast strategically can make a significant difference in
            your success and comfort.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Best Times to Start",
                icon: "✅",
                items: [
                  "Weekend (time to rest Days 2-3)",
                  "Vacation or time off work",
                  "Low-stress periods",
                  "After completing a project",
                  "When you can control your environment",
                ],
                color: "text-green-400",
              },
              {
                title: "Avoid Starting",
                icon: "❌",
                items: [
                  "Before major deadlines",
                  "During holidays or celebrations",
                  "High-stress work periods",
                  "When traveling",
                  "During illness or recovery",
                ],
                color: "text-red-400",
              },
              {
                title: "Consider These",
                icon: "💡",
                items: [
                  "Season (summer heat = harder)",
                  "Menstrual cycle (if applicable)",
                  "Work schedule flexibility",
                  "Social calendar",
                  "Support availability",
                ],
                color: "text-yellow-400",
              },
            ].map((category, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <h3 className={`text-lg font-semibold ${category.color} mb-4`}>
                  {category.icon} {category.title}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className={category.color}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electrolyte Reminder */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚡</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Pre-Fast Electrolyte Prep
            </h3>
            <p className="text-white/90">
              Before you start, make sure you have ALL your electrolyte supplies
              ready. Mix up your first batch of Snake Juice the night before.
              Running out of electrolytes mid-fast is not an option—it can force
              you to break your fast early or cause serious symptoms.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📝</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Module Summary
            </h3>
            <p className="text-white/90">
              Proper preparation is essential for a successful fast. Transition
              your diet over 5-7 days, eliminating processed foods and reducing
              carbs. Stock all supplies—especially electrolytes. Prepare
              mentally with clear intentions and strategies. Set up your
              environment for success by removing temptations and clearing your
              schedule. Choose your timing wisely to maximize comfort and
              minimize obstacles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFModule5;
