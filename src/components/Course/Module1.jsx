import React from "react";

const Module1 = () => {
  return (
    <div className="space-y-8">
      {/* Section: What is Dry Fasting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
            💧
          </span>
          What is Dry Fasting?
        </h2>
        <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Dry fasting is the practice of abstaining from both food{" "}
            <strong className="text-amber-400">and water</strong> for a specific
            period. Unlike water fasting, where you continue to drink fluids,
            dry fasting puts your body into a unique metabolic state that
            accelerates many of the benefits associated with fasting.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">
                🌊 Soft Dry Fast
              </h3>
              <p className="text-gray-300">
                You avoid consuming water but allow external contact with water.
                You can shower, wash your hands, brush your teeth, and swim.
                Most practitioners choose this method for extended dry fasts.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                🔥 Hard Dry Fast
              </h3>
              <p className="text-gray-300">
                Complete avoidance of water both internally and externally. No
                showers, no brushing teeth, no contact with water whatsoever.
                This intensifies the fast but is typically reserved for shorter
                durations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Historical Context */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
            📜
          </span>
          Historical & Cultural Context
        </h2>
        <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-6 border border-purple-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Dry fasting is not a modern invention. It has deep roots across
            multiple cultures and spiritual traditions spanning thousands of
            years.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: "☪️",
                title: "Ramadan (Islam)",
                desc: "Muslims worldwide practice daily dry fasting from dawn to sunset for an entire month. This has been observed for over 1,400 years, making it one of the largest collective dry fasting practices in human history.",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: "✡️",
                title: "Yom Kippur (Judaism)",
                desc: "The Day of Atonement involves a 25-hour dry fast, abstaining from both food and water. This practice has been observed for over 3,000 years.",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: "🕉️",
                title: "Hindu Traditions",
                desc: "Various Hindu fasting practices include Nirjala Ekadashi, an 11th-day dry fast observed twice monthly. Some yogic traditions incorporate extended dry fasting for spiritual purification.",
                color: "from-orange-500 to-red-600",
              },
              {
                icon: "✝️",
                title: "Christian Traditions",
                desc: "Early Christians, including Jesus Christ (40 days in the desert), practiced extended fasts. The Eastern Orthodox tradition maintains various fasting periods throughout the year.",
                color: "from-yellow-500 to-amber-600",
              },
              {
                icon: "🧘",
                title: "Russian & Eastern European",
                desc: "Dr. Sergey Filonov and other Russian practitioners have developed modern dry fasting protocols based on decades of clinical observations, popularizing therapeutic dry fasting.",
                color: "from-cyan-500 to-blue-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Comparison */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
            ⚖️
          </span>
          Dry Fasting vs Other Fasting Methods
        </h2>
        <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-2xl p-6 border border-teal-500/30">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-gray-400 font-medium">
                    Aspect
                  </th>
                  <th className="py-3 px-4 text-amber-400 font-medium">
                    🔥 Dry Fasting
                  </th>
                  <th className="py-3 px-4 text-blue-400 font-medium">
                    💧 Water Fasting
                  </th>
                  <th className="py-3 px-4 text-green-400 font-medium">
                    ⏰ Intermittent
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Water Intake</td>
                  <td className="py-3 px-4">None</td>
                  <td className="py-3 px-4">Unlimited</td>
                  <td className="py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Ketosis Speed</td>
                  <td className="py-3 px-4 text-amber-400">
                    ⚡ Fastest (12-24h)
                  </td>
                  <td className="py-3 px-4">Fast (24-48h)</td>
                  <td className="py-3 px-4">Slow (varies)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Autophagy Rate</td>
                  <td className="py-3 px-4 text-amber-400">
                    ⚡ 3x water fasting
                  </td>
                  <td className="py-3 px-4">Moderate</td>
                  <td className="py-3 px-4">Minimal</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Fat Burning</td>
                  <td className="py-3 px-4 text-amber-400">⚡ Maximum</td>
                  <td className="py-3 px-4">High</td>
                  <td className="py-3 px-4">Moderate</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Typical Duration</td>
                  <td className="py-3 px-4">1-10+ days</td>
                  <td className="py-3 px-4">3-40+ days</td>
                  <td className="py-3 px-4">16-24 hours</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Difficulty Level</td>
                  <td className="py-3 px-4 text-amber-400">Challenging</td>
                  <td className="py-3 px-4">Moderate</td>
                  <td className="py-3 px-4">Easy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section: Metabolic Shift */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
            🔄
          </span>
          The Metabolic Shift
        </h2>
        <div className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 rounded-2xl p-6 border border-rose-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            When you stop consuming both food and water, your body undergoes a
            remarkable metabolic transformation. Understanding this shift is key
            to appreciating what happens during a dry fast.
          </p>

          <div className="grid gap-4">
            {[
              {
                phase: "Phase 1: Glycogen Depletion",
                time: "0-24 hours",
                icon: "⚡",
                desc: "Your body first burns through stored glycogen (sugar) in your liver and muscles. Each gram of glycogen holds 3-4 grams of water, so you'll notice initial water weight loss.",
                color: "border-yellow-500/50 bg-yellow-500/10",
              },
              {
                phase: "Phase 2: Ketosis Activation",
                time: "12-36 hours",
                icon: "🔥",
                desc: "Without water intake, ketosis begins faster than in water fasting. Your liver starts converting fatty acids into ketone bodies, which become your brain's primary fuel source.",
                color: "border-orange-500/50 bg-orange-500/10",
              },
              {
                phase: "Phase 3: Metabolic Water Production",
                time: "24+ hours",
                icon: "💧",
                desc: 'Your body begins producing "metabolic water" internally. When fat is oxidized, it releases H₂O. For every 100g of fat burned, approximately 110ml of water is produced.',
                color: "border-blue-500/50 bg-blue-500/10",
              },
              {
                phase: "Phase 4: Deep Autophagy",
                time: "48+ hours",
                icon: "🧬",
                desc: "Autophagy (cellular self-cleaning) accelerates dramatically. Damaged proteins, dysfunctional organelles, and even some pathogens are broken down and recycled.",
                color: "border-purple-500/50 bg-purple-500/10",
              },
            ].map((phase, i) => (
              <div key={i} className={`p-5 rounded-xl border ${phase.color}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{phase.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {phase.phase}
                    </h3>
                    <span className="text-sm text-gray-400">{phase.time}</span>
                  </div>
                </div>
                <p className="text-gray-300 ml-11">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaway Box */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Key Takeaway</h3>
            <p className="text-white/90">
              Dry fasting accelerates many fasting benefits because it forces
              your body to work harder. The absence of external water means your
              body must produce its own, which requires burning more fat and
              engaging deeper cellular repair mechanisms. One day of dry fasting
              is often compared to 2-3 days of water fasting in terms of
              autophagy and metabolic effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module1;
