import React from "react";

const WFModule6 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Day by Day Timeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
            📅
          </span>
          Day-by-Day Timeline
        </h2>
        <div className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 rounded-2xl p-6 border border-rose-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Understanding what typically happens each day helps you navigate
            your fast with confidence. Remember: with proper electrolytes, most
            difficult symptoms are preventable.
          </p>

          <div className="space-y-4">
            {/* Days 1-3 */}
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl overflow-hidden border border-blue-500/30">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3">
                <h3 className="text-xl font-bold text-white">
                  Days 1-3: The Transition Phase
                </h3>
                <p className="text-white/70 text-sm">
                  Glycogen depletion → Ketosis begins
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      day: "Day 1",
                      items: [
                        "Hunger peaks around meal times",
                        "Blood sugar fluctuations",
                        "May feel irritable or moody",
                        "Frequent urination (glycogen release)",
                        "Energy may feel normal",
                      ],
                      emoji: "🌅",
                    },
                    {
                      day: "Day 2",
                      items: [
                        "Often the hardest day",
                        "Hunger intensifies then fades",
                        "Possible headache (add more salt!)",
                        "Fatigue and low energy",
                        "Beginning to enter ketosis",
                      ],
                      emoji: "⛰️",
                    },
                    {
                      day: "Day 3",
                      items: [
                        "Hunger significantly reduces",
                        "Ketosis establishing",
                        "Energy starting to stabilize",
                        "Mental clarity emerging",
                        "Worst is typically over",
                      ],
                      emoji: "🌤️",
                    },
                  ].map((d, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{d.emoji}</span>
                        <span className="font-semibold text-white">
                          {d.day}
                        </span>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {d.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-300 text-sm">
                    <strong>⚡ Electrolyte Focus:</strong> This phase is when
                    most people fail due to electrolyte-related symptoms. Take
                    MORE salt than you think you need. If you get a headache,
                    immediately take 1/4-1/2 tsp salt.
                  </p>
                </div>
              </div>
            </div>

            {/* Days 4-7 */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl overflow-hidden border border-emerald-500/30">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-3">
                <h3 className="text-xl font-bold text-white">
                  Days 4-7: The Adaptation Phase
                </h3>
                <p className="text-white/70 text-sm">
                  Full ketosis → Deep autophagy
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      period: "Days 4-5",
                      items: [
                        "Full ketosis achieved",
                        "Hunger largely gone",
                        "Energy stabilizing (may feel good)",
                        "Mental clarity increasing",
                        "Sleep may change (need less)",
                        "Autophagy in full effect",
                      ],
                      emoji: "✨",
                    },
                    {
                      period: "Days 6-7",
                      items: [
                        "Consistent energy levels",
                        "Sharp mental clarity",
                        "Possible euphoria or wellbeing",
                        "Body fully fat-adapted",
                        "May feel better than pre-fast",
                        "Deep healing occurring",
                      ],
                      emoji: "🌟",
                    },
                  ].map((d, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{d.emoji}</span>
                        <span className="font-semibold text-white">
                          {d.period}
                        </span>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {d.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-emerald-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-emerald-300 text-sm">
                    <strong>💡 This is the sweet spot:</strong> Many fasters
                    report feeling amazing during this phase. Energy is stable,
                    mind is clear, and the hardest part is behind you. Maintain
                    your electrolyte protocol.
                  </p>
                </div>
              </div>
            </div>

            {/* Days 8-14 */}
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl overflow-hidden border border-purple-500/30">
              <div className="bg-gradient-to-r from-purple-500 to-violet-600 px-4 py-3">
                <h3 className="text-xl font-bold text-white">
                  Days 8-14: Extended Fasting
                </h3>
                <p className="text-white/70 text-sm">
                  Stem cell regeneration → Deep reset
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      period: "Days 8-10",
                      items: [
                        "Sustained ketosis",
                        "Continued fat loss",
                        "Immune system regenerating",
                        "Possible spiritual/emotional insights",
                        "May need more rest",
                        "Body temperature may drop",
                      ],
                      emoji: "🔮",
                    },
                    {
                      period: "Days 11-14",
                      items: [
                        "Deep cellular cleaning",
                        "Maximum autophagy benefits",
                        "Stem cell activation continues",
                        "May feel detached from food",
                        "Preparation for refeeding",
                        "Profound transformation possible",
                      ],
                      emoji: "🦋",
                    },
                  ].map((d, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{d.emoji}</span>
                        <span className="font-semibold text-white">
                          {d.period}
                        </span>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {d.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-purple-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-purple-300 text-sm">
                    <strong>🎯 Stay committed:</strong> You're in rare
                    territory. Most people never experience this level of
                    autophagy and cellular regeneration. Keep up your
                    electrolytes and trust the process.
                  </p>
                </div>
              </div>
            </div>

            {/* Days 15-21+ */}
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl overflow-hidden border border-amber-500/30">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-3">
                <h3 className="text-xl font-bold text-white">
                  Days 15-21+: Extended Territory
                </h3>
                <p className="text-white/70 text-sm">
                  Advanced fasting → Maximum benefits
                </p>
              </div>
              <div className="p-5">
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                  <ul className="text-gray-300 space-y-2">
                    {[
                      "Requires experienced fasting background",
                      "Maximum cellular regeneration",
                      "Profound metabolic reset",
                      "Close monitoring of symptoms important",
                      "Breaking the fast becomes even more critical",
                      "Benefits compound but so do risks if electrolytes are neglected",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <p className="text-amber-300 text-sm">
                    <strong>⚠️ Advanced territory:</strong> Fasts beyond 14 days
                    should only be attempted after successfully completing
                    shorter fasts. Listen to your body carefully and have a plan
                    to break the fast if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Energy Curve */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
            ⚡
          </span>
          Energy Level Curve
        </h2>
        <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 rounded-2xl p-6 border border-yellow-500/30">
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              📈 Typical Energy Pattern
            </h3>
            <div className="space-y-3">
              {[
                { day: "Day 1", level: 80, desc: "Normal to slightly reduced" },
                {
                  day: "Day 2",
                  level: 35,
                  desc: "Lowest point—rest is essential",
                },
                { day: "Day 3", level: 50, desc: "Beginning to recover" },
                { day: "Day 4", level: 70, desc: "Noticeably better" },
                { day: "Day 5", level: 85, desc: "Good stable energy" },
                { day: "Day 6", level: 90, desc: "Often better than normal!" },
                { day: "Day 7", level: 90, desc: "Peak ketone-fueled energy" },
                { day: "Day 8-10", level: 85, desc: "Sustained and stable" },
                {
                  day: "Day 11-14",
                  level: 80,
                  desc: "Good but may need more rest",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-20 text-gray-400 text-sm">{item.day}</span>
                  <div className="flex-1 h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                  <span className="text-gray-400 text-xs w-48 text-right">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-yellow-400 mb-2">
              ⚡ Electrolytes Affect Energy
            </h4>
            <p className="text-gray-300">
              Much of the "low energy" reported during fasting is actually
              electrolyte deficiency, not true energy deficit. With proper
              sodium, potassium, and magnesium, Day 2-3 dips are much less
              severe. If you feel exhausted, try more salt first!
            </p>
          </div>
        </div>
      </section>

      {/* Section: What Changes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
            🔄
          </span>
          What Changes Throughout Your Fast
        </h2>
        <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-2xl p-6 border border-teal-500/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-teal-400 mb-4">
                ⚖️ Weight Loss Pattern
              </h3>
              <div className="space-y-3">
                {[
                  {
                    period: "Days 1-3",
                    water: "5-10 lbs",
                    fat: "1-2 lbs",
                    total: "6-12 lbs",
                  },
                  {
                    period: "Days 4-7",
                    water: "2-3 lbs",
                    fat: "2-3 lbs",
                    total: "4-6 lbs",
                  },
                  {
                    period: "Days 8-14",
                    water: "1-2 lbs",
                    fat: "3-5 lbs",
                    total: "4-7 lbs",
                  },
                  {
                    period: "Week 3+",
                    water: "Minimal",
                    fat: "3-4 lbs",
                    total: "3-4 lbs/week",
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg text-sm"
                  >
                    <span className="text-gray-400">{row.period}</span>
                    <span className="text-blue-400">💧 {row.water}</span>
                    <span className="text-orange-400">🔥 {row.fat}</span>
                    <span className="text-teal-400 font-medium">
                      {row.total}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Water weight returns during refeeding. Fat loss is permanent.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                🧪 Ketone Levels
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Day 1", level: "0.1-0.5", status: "Trace" },
                  {
                    day: "Day 2",
                    level: "0.5-1.5",
                    status: "Entering ketosis",
                  },
                  { day: "Day 3", level: "1.5-3.0", status: "Ketosis" },
                  { day: "Day 4-5", level: "3.0-5.0", status: "Deep ketosis" },
                  {
                    day: "Day 6+",
                    level: "4.0-7.0",
                    status: "Optimal fasting range",
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg text-sm"
                  >
                    <span className="text-gray-400">{row.day}</span>
                    <span className="text-cyan-400 font-medium">
                      {row.level} mmol/L
                    </span>
                    <span className="text-gray-500">{row.status}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Measured with blood ketone meter (most accurate)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Electrolyte Reminder */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚡</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Timeline Success = Consistent Electrolytes
            </h3>
            <p className="text-white/90">
              Every phase of this timeline assumes you're taking electrolytes
              properly. Without them, Days 2-3 become unbearable, you'll likely
              quit, and you'll never experience the amazing clarity and energy
              of Days 5-7+. Electrolytes are what make extended fasting
              possible.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📅</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Module Summary
            </h3>
            <p className="text-white/90">
              Extended water fasting follows a predictable pattern: Days 1-3 are
              transition (hardest), Days 4-7 are adaptation (often feeling
              great), Days 8-14+ are extended benefits (deep healing). Energy
              dips around Day 2 then rises to often exceed normal levels. Weight
              loss is rapid initially (mostly water), then steady fat loss.
              Understanding this timeline helps you navigate each phase with
              confidence—and proper electrolytes make it dramatically easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFModule6;
