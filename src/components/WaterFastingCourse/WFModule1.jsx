import React from "react";

const WFModule1 = () => {
  return (
    <div className="space-y-8">
      {/* Section: What is Water Fasting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            💧
          </span>
          What is Water Fasting?
        </h2>
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Water fasting is the practice of abstaining from all food while
            consuming only water (with electrolytes) for an extended period.
            It's one of the most powerful healing modalities available,
            triggering deep cellular repair, autophagy, and metabolic reset.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                🌊 Water Fasting Defined
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Complete abstinence from all food and calories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Water with electrolytes is consumed throughout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Extended fasts range from 3-40+ days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Body shifts to using stored fat for energy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Triggers profound cellular cleaning (autophagy)</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 rounded-xl p-5 border border-yellow-500/30">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                ⚠️ Critical: Electrolytes Required
              </h3>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">
                  Never drink plain water during extended fasts.
                </strong>{" "}
                Plain water flushes out electrolytes and can cause:
              </p>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Dangerous electrolyte imbalances</li>
                <li>• Heart palpitations and arrhythmias</li>
                <li>• Severe weakness and fatigue</li>
                <li>• Muscle cramps and spasms</li>
                <li>• Dizziness and fainting</li>
                <li>• Headaches and brain fog</li>
              </ul>
              <p className="text-yellow-400 text-sm mt-3 font-semibold">
                Always add sodium, potassium, and magnesium to your water!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Historical Context */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
            📜
          </span>
          Historical & Cultural Context
        </h2>
        <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Water fasting has been practiced for thousands of years across
            virtually every culture and spiritual tradition. It's deeply
            embedded in human history as a path to healing, clarity, and
            spiritual growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "🙏",
                title: "Spiritual Traditions",
                items: [
                  "40-day fasts in Christianity",
                  "Ramadan in Islam",
                  "Yom Kippur in Judaism",
                  "Buddhist monk fasts",
                  "Hindu Ekadashi fasts",
                ],
                color: "from-purple-500 to-violet-600",
              },
              {
                icon: "⚕️",
                title: "Medical History",
                items: [
                  "Hippocrates prescribed fasting",
                  "Ancient Greek healing temples",
                  "Traditional Chinese medicine",
                  "Ayurvedic cleansing",
                  "European nature cure movement",
                ],
                color: "from-emerald-500 to-green-600",
              },
              {
                icon: "🔬",
                title: "Modern Science",
                items: [
                  "Dr. Herbert Shelton's work",
                  "True North Health Center",
                  "Dr. Jason Fung's research",
                  "Nobel Prize autophagy (2016)",
                  "Valter Longo longevity studies",
                ],
                color: "from-blue-500 to-indigo-600",
              },
            ].map((category, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-3`}
                >
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {category.title}
                </h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-amber-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Water Fasting vs Other Fasts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            ⚖️
          </span>
          Water Fasting vs Other Fasting Methods
        </h2>
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-2xl p-4 sm:p-6 border border-violet-500/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                method: "💧 Water Fast + Electrolytes",
                consumed: "Water with sodium, potassium, magnesium",
                autophagy: "High",
                difficulty: "Moderate",
                speed: "Moderate",
                highlight: true,
              },
              {
                method: "🔥 Dry Fast",
                consumed: "Nothing—no food or water",
                autophagy: "Maximum",
                difficulty: "Hard",
                speed: "Fastest",
                highlight: false,
              },
              {
                method: "☕ Intermittent Fast",
                consumed: "Nothing during fasting window",
                autophagy: "Low-Moderate",
                difficulty: "Easy",
                speed: "Slow",
                highlight: false,
              },
              {
                method: "🥤 Juice Fast",
                consumed: "Fresh fruit/vegetable juices",
                autophagy: "Minimal",
                difficulty: "Easy",
                speed: "Slow",
                highlight: false,
              },
              {
                method: "🍵 Bone Broth Fast",
                consumed: "Bone broth only",
                autophagy: "Low-Moderate",
                difficulty: "Easy",
                speed: "Slow",
                highlight: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 border ${
                  item.highlight
                    ? "bg-cyan-500/20 border-cyan-500/50"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <h4
                  className={`font-semibold mb-3 ${
                    item.highlight ? "text-cyan-400" : "text-white"
                  }`}
                >
                  {item.method}
                </h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-gray-500">Consumed:</span>{" "}
                    {item.consumed}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/10 rounded text-green-400">
                      Autophagy: {item.autophagy}
                    </span>
                    <span className="px-2 py-1 bg-white/10 rounded text-yellow-400">
                      Difficulty: {item.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-cyan-400 mb-2">
              💧 Why Choose Water Fasting?
            </h4>
            <p className="text-gray-300">
              Water fasting offers an excellent balance of healing benefits and
              sustainability. Unlike dry fasting, it can be safely extended for
              weeks. Unlike juice fasts, it triggers true autophagy. With proper
              electrolyte supplementation, it's safe and effective for extended
              periods.
            </p>
          </div>
        </div>
      </section>

      {/* Section: How Water Fasting Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            ⚙️
          </span>
          How Water Fasting Works
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            When you stop eating, your body undergoes a remarkable metabolic
            transformation. Understanding this process helps you navigate your
            fast with confidence.
          </p>

          <div className="space-y-4">
            {[
              {
                phase: "Phase 1: Glycogen Depletion",
                time: "0-24 hours",
                desc: "Your body burns through stored glucose (glycogen) in your liver and muscles. You may feel hungry as blood sugar fluctuates.",
                color: "from-blue-500 to-cyan-600",
              },
              {
                phase: "Phase 2: Gluconeogenesis",
                time: "24-48 hours",
                desc: "Liver begins creating glucose from non-carb sources. Ketone production starts. Hunger often peaks then begins to diminish.",
                color: "from-purple-500 to-violet-600",
              },
              {
                phase: "Phase 3: Ketosis",
                time: "2-3 days",
                desc: "Full ketosis achieved. Body efficiently burns fat for fuel. Brain runs on ketones. Hunger typically disappears.",
                color: "from-amber-500 to-orange-600",
              },
              {
                phase: "Phase 4: Deep Ketosis & Autophagy",
                time: "3-7 days",
                desc: "Maximum autophagy kicks in. Damaged cells are recycled. Inflammation drops dramatically. Mental clarity peaks.",
                color: "from-emerald-500 to-green-600",
              },
              {
                phase: "Phase 5: Extended Fasting",
                time: "7+ days",
                desc: "Stem cell regeneration increases. Immune system resets. Deep healing and repair processes continue.",
                color: "from-rose-500 to-pink-600",
              },
            ].map((phase, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${phase.color} bg-opacity-10 rounded-xl overflow-hidden`}
              >
                <div className={`bg-gradient-to-r ${phase.color} px-4 py-2`}>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">{phase.phase}</span>
                    <span className="text-white/80 text-sm">{phase.time}</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-800/50">
                  <p className="text-gray-300">{phase.desc}</p>
                </div>
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
              Remember: Electrolytes Are Non-Negotiable
            </h3>
            <p className="text-white/90">
              Throughout your entire water fast, you must supplement with
              electrolytes. Plain water dilutes your body's mineral balance,
              especially as you lose water weight and fluids. In Module 4, we'll
              cover exactly how much sodium, potassium, and magnesium you need
              daily.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💧</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Module Summary
            </h3>
            <p className="text-white/90">
              Water fasting is the complete abstention from food while drinking
              water supplemented with electrolytes. It's been practiced for
              millennia and is now backed by modern science. When done properly
              with electrolyte supplementation, it triggers profound healing
              through ketosis, autophagy, and cellular regeneration. The key to
              safe, effective water fasting is understanding that electrolytes
              are absolutely essential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFModule1;
