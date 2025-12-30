import React from "react";

const Module8 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Maintaining Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center">
            🔒
          </span>
          Maintaining Your Fasting Benefits
        </h2>
        <div className="bg-gradient-to-br from-fuchsia-900/30 to-purple-900/30 rounded-2xl p-6 border border-fuchsia-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            You've achieved something remarkable. Now the key is maintaining
            those benefits long-term. Your body has been reset—don't go back to
            old habits that caused problems in the first place.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-fuchsia-500/20">
              <h3 className="text-lg font-semibold text-fuchsia-400 mb-4">
                ✅ Do Continue
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    icon: "💧",
                    text: "Staying well hydrated with quality water",
                  },
                  {
                    icon: "🥗",
                    text: "Eating whole, unprocessed foods primarily",
                  },
                  { icon: "🧘", text: "Practicing mindful, slow eating" },
                  {
                    icon: "⏰",
                    text: "Maintaining some form of intermittent fasting",
                  },
                  { icon: "😴", text: "Prioritizing quality sleep" },
                  { icon: "🚶", text: "Regular movement and exercise" },
                  { icon: "🧠", text: "Continuing meditation practice" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-xl">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                ❌ Avoid Returning To
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: "🍔", text: "Regular fast food and processed meals" },
                  { icon: "🍭", text: "Excessive sugar and refined carbs" },
                  { icon: "🍺", text: "Heavy alcohol consumption" },
                  { icon: "📱", text: "Mindless eating while distracted" },
                  { icon: "🌙", text: "Late-night eating habits" },
                  { icon: "😰", text: "Stress eating patterns" },
                  { icon: "🛋️", text: "Sedentary lifestyle" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-xl">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Eating Patterns */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            🍽️
          </span>
          Recommended Eating Patterns Post-Fast
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Your relationship with food has likely changed after this
            experience. Here are sustainable eating patterns that complement
            your fasting practice.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "⏰",
                title: "Intermittent Fasting (16:8)",
                desc: "Eat within an 8-hour window daily. Example: 12pm-8pm eating, 8pm-12pm fasting.",
                best: "Daily maintenance",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: "🌙",
                title: "One Meal A Day (OMAD)",
                desc: "Eat one large, nutritious meal per day. 23 hours fasting, 1 hour eating window.",
                best: "Accelerated results",
                color: "from-purple-500 to-violet-600",
              },
              {
                icon: "📅",
                title: "Weekly 24-Hour Fast",
                desc: "One full day of water fasting per week. Maintains autophagy benefits.",
                best: "Weekly reset",
                color: "from-amber-500 to-orange-600",
              },
              {
                icon: "🗓️",
                title: "Monthly 3-Day Fast",
                desc: "A 3-day water or dry fast once per month for deeper cleansing.",
                best: "Monthly deep clean",
                color: "from-rose-500 to-pink-600",
              },
              {
                icon: "🥩",
                title: "Low-Carb / Keto",
                desc: "Stay in mild ketosis with low-carb eating. Easier to transition into fasts.",
                best: "Metabolic flexibility",
                color: "from-red-500 to-rose-600",
              },
              {
                icon: "🌿",
                title: "Clean Eating",
                desc: "Focus on whole foods: vegetables, quality proteins, healthy fats. Avoid processed foods.",
                best: "Long-term health",
                color: "from-green-500 to-emerald-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">
                  Best for: {item.best}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: When to Repeat */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
            🔄
          </span>
          When to Repeat Extended Dry Fasts
        </h2>
        <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Extended dry fasting is a powerful tool, but it should be used
            strategically. Here are guidelines for when and how often
            practitioners typically repeat longer dry fasts.
          </p>

          <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
            <h3 className="text-lg font-semibold text-amber-400 mb-4">
              📅 Typical Fasting Schedules
            </h3>
            <div className="space-y-4">
              {[
                {
                  freq: "10-Day Dry Fast",
                  timing: "1-2x per year",
                  purpose:
                    "Deep cellular reset, major weight loss goals, chronic condition reset",
                  recovery: "Minimum 3-4 months between",
                },
                {
                  freq: "7-Day Dry Fast",
                  timing: "2-4x per year",
                  purpose:
                    "Significant autophagy, immune reset, substantial fat loss",
                  recovery: "Minimum 2-3 months between",
                },
                {
                  freq: "5-Day Dry Fast",
                  timing: "Every 1-2 months",
                  purpose: "Moderate reset, maintenance after longer fast",
                  recovery: "Minimum 4-6 weeks between",
                },
                {
                  freq: "3-Day Dry Fast",
                  timing: "Monthly",
                  purpose: "Regular autophagy boost, weight management",
                  recovery: "Minimum 2-3 weeks between",
                },
                {
                  freq: "24-Hour Dry Fast",
                  timing: "Weekly",
                  purpose: "Maintenance, digestive rest, minor reset",
                  recovery: "Can do weekly safely",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-semibold text-white">
                      {item.freq}
                    </span>
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded-full">
                      {item.timing}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-1">
                    <strong>Purpose:</strong> {item.purpose}
                  </p>
                  <p className="text-gray-500 text-sm">
                    <strong>Recovery:</strong> {item.recovery}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-amber-400 mb-2">
              ⚠️ Signs You Need More Recovery Time
            </h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Feeling depleted or weak weeks after the fast</li>
              <li>• Difficulty gaining back healthy weight</li>
              <li>• Persistent fatigue or low energy</li>
              <li>• Hair loss (usually indicates mineral depletion)</li>
              <li>• Feeling "fear" or dread about fasting again</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Building Sustainable Practice */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            🌱
          </span>
          Building a Sustainable Fasting Practice
        </h2>
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            The goal is to make fasting a sustainable part of your lifestyle,
            not an occasional extreme measure. Here's how to build a practice
            that lasts.
          </p>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Establish a Baseline",
                desc: "Start with daily intermittent fasting (16:8) as your new normal. This maintains metabolic flexibility and makes longer fasts easier.",
                icon: "📊",
              },
              {
                step: "2",
                title: "Add Weekly Extended Fasts",
                desc: "Once comfortable with IF, add a weekly 24-36 hour fast. This deepens benefits without being too demanding.",
                icon: "📅",
              },
              {
                step: "3",
                title: "Quarterly Deep Resets",
                desc: "Plan a 3-5 day fast once per quarter for deeper autophagy and reset. Mark these in your calendar in advance.",
                icon: "🗓️",
              },
              {
                step: "4",
                title: "Annual Extended Fast",
                desc: "Once or twice yearly, do a 7-10 day fast for maximum reset and renewal. Plan around your life—vacations, quiet periods.",
                icon: "🎯",
              },
              {
                step: "5",
                title: "Listen to Your Body",
                desc: "Adjust based on how you feel. Some periods you may need more nourishment, others you may feel called to fast more.",
                icon: "🧘",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      Step {item.step}
                    </span>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Tracking Results */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            📊
          </span>
          Tracking & Measuring Results
        </h2>
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-2xl p-6 border border-violet-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Tracking your progress helps you understand what works for your body
            and keeps you motivated for future fasts.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-violet-500/20">
              <h3 className="text-lg font-semibold text-violet-400 mb-4">
                📏 Physical Metrics
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  {
                    metric: "Weight",
                    freq: "Weekly",
                    note: "Same time, same conditions",
                  },
                  {
                    metric: "Waist measurement",
                    freq: "Weekly",
                    note: "Most accurate fat loss indicator",
                  },
                  {
                    metric: "Body fat %",
                    freq: "Monthly",
                    note: "Use calipers or DEXA scan",
                  },
                  {
                    metric: "Blood pressure",
                    freq: "Monthly",
                    note: "Often improves with fasting",
                  },
                  {
                    metric: "Blood work",
                    freq: "Quarterly",
                    note: "Glucose, lipids, inflammation markers",
                  },
                  {
                    metric: "Progress photos",
                    freq: "Monthly",
                    note: "Visual documentation",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center p-2 bg-gray-800/50 rounded-lg"
                  >
                    <span>{item.metric}</span>
                    <div className="text-right">
                      <span className="text-violet-400 text-sm">
                        {item.freq}
                      </span>
                      <p className="text-gray-500 text-xs">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                🧠 Subjective Metrics
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  {
                    metric: "Energy level",
                    scale: "1-10 daily",
                    note: "Morning and evening",
                  },
                  {
                    metric: "Mental clarity",
                    scale: "1-10 daily",
                    note: "Focus and concentration",
                  },
                  {
                    metric: "Sleep quality",
                    scale: "1-10 daily",
                    note: "Hours and restfulness",
                  },
                  {
                    metric: "Mood",
                    scale: "1-10 daily",
                    note: "Emotional baseline",
                  },
                  {
                    metric: "Cravings",
                    scale: "Note when occur",
                    note: "What triggers them",
                  },
                  {
                    metric: "Overall wellbeing",
                    scale: "1-10 weekly",
                    note: "General life satisfaction",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center p-2 bg-gray-800/50 rounded-lg"
                  >
                    <span>{item.metric}</span>
                    <div className="text-right">
                      <span className="text-purple-400 text-sm">
                        {item.scale}
                      </span>
                      <p className="text-gray-500 text-xs">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-violet-500/10 border border-violet-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-violet-400 mb-2">
              💡 Use This Tracker!
            </h4>
            <p className="text-gray-300">
              The fasting tracker you're using right now is designed to help you
              track all of this. Log your daily metrics, journal your
              experiences, and watch your progress over time. Data-driven
              fasting leads to better results.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🔄</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Integration Summary
            </h3>
            <p className="text-white/90">
              Post-fast integration is about building sustainable habits.
              Maintain your benefits through clean eating and regular
              intermittent fasting. Plan your extended fasts strategically—don't
              overdo it. Track your progress to stay motivated and understand
              your body. Remember: the fast is just the beginning. The real
              transformation happens in how you live your life afterward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module8;
