import React from "react";

const WFModule2 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Autophagy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            🧬
          </span>
          Autophagy: Cellular Self-Cleaning
        </h2>
        <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Autophagy (from Greek "auto" = self, "phagy" = eating) is your
            body's cellular recycling system. During fasting, cells break down
            and recycle damaged components, creating new healthy cells. This
            process won the 2016 Nobel Prize in Medicine.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                🔄 What Autophagy Does
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    icon: "🗑️",
                    text: "Removes damaged proteins and organelles",
                  },
                  {
                    icon: "♻️",
                    text: "Recycles cellular components for new cell parts",
                  },
                  {
                    icon: "🦠",
                    text: "Destroys intracellular pathogens and bacteria",
                  },
                  {
                    icon: "🧹",
                    text: "Clears misfolded proteins (linked to diseases)",
                  },
                  {
                    icon: "⚡",
                    text: "Generates energy from recycled materials",
                  },
                  {
                    icon: "🌱",
                    text: "Promotes cellular renewal and longevity",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-xl">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                ⏰ Autophagy Timeline
              </h3>
              <div className="space-y-3">
                {[
                  {
                    time: "12-16 hours",
                    level: "Begins",
                    desc: "Autophagy starts activating",
                  },
                  {
                    time: "24 hours",
                    level: "Moderate",
                    desc: "Noticeable autophagy activity",
                  },
                  {
                    time: "48 hours",
                    level: "Strong",
                    desc: "Significant cellular cleaning",
                  },
                  {
                    time: "72 hours",
                    level: "Peak",
                    desc: "Maximum autophagy reached",
                  },
                  {
                    time: "5-7 days",
                    level: "Sustained",
                    desc: "Deep cleaning continues",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg"
                  >
                    <span className="text-gray-400 text-sm">{item.time}</span>
                    <span className="text-purple-400 font-medium">
                      {item.level}
                    </span>
                    <span className="text-gray-500 text-xs">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Ketosis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
            🔥
          </span>
          Ketosis: Fat-Burning Mode
        </h2>
        <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Ketosis occurs when your body switches from burning glucose to
            burning fat for fuel. Your liver converts fatty acids into ketone
            bodies, which become the primary energy source for your brain and
            body.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Beta-Hydroxybutyrate (BHB)",
                desc: "The primary ketone body. Provides clean, efficient energy. Anti-inflammatory properties.",
                icon: "⚡",
                color: "from-yellow-500 to-amber-600",
              },
              {
                title: "Acetoacetate",
                desc: "Second major ketone. Can convert to BHB or acetone. Used by various tissues.",
                icon: "🔋",
                color: "from-orange-500 to-red-600",
              },
              {
                title: "Acetone",
                desc: 'Released through breath and urine. Causes "keto breath." Sign of active ketosis.',
                icon: "💨",
                color: "from-rose-500 to-pink-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-amber-400 mb-2">
              🧠 Why Ketones Are Superior Brain Fuel
            </h4>
            <p className="text-gray-300">
              Ketones cross the blood-brain barrier efficiently and provide 25%
              more energy per unit than glucose. This is why many fasters report
              exceptional mental clarity, focus, and cognitive performance
              during extended fasts.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Hormonal Changes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
            🧪
          </span>
          Hormonal Changes During Fasting
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                hormone: "Insulin",
                change: "↓ Dramatically Decreases",
                effect:
                  "Allows fat burning, reduces inflammation, improves insulin sensitivity",
                icon: "📉",
                color: "text-green-400",
              },
              {
                hormone: "Human Growth Hormone",
                change: "↑ Increases 5-10x",
                effect:
                  "Preserves muscle mass, accelerates fat loss, promotes cellular repair",
                icon: "📈",
                color: "text-emerald-400",
              },
              {
                hormone: "Norepinephrine",
                change: "↑ Increases",
                effect:
                  "Boosts metabolism, increases alertness and focus, mobilizes fat",
                icon: "⚡",
                color: "text-yellow-400",
              },
              {
                hormone: "Cortisol",
                change: "↑ Mild Increase",
                effect:
                  "Mobilizes energy stores, maintains blood sugar. Normalizes after adaptation.",
                icon: "🎯",
                color: "text-orange-400",
              },
              {
                hormone: "Glucagon",
                change: "↑ Increases",
                effect:
                  "Releases stored glucose from liver, promotes fat breakdown",
                icon: "🔓",
                color: "text-blue-400",
              },
              {
                hormone: "Ghrelin (Hunger)",
                change: "↑ Then ↓ Normalizes",
                effect:
                  "Spikes initially, then decreases as body adapts to fasting state",
                icon: "🌊",
                color: "text-purple-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.hormone}
                    </h3>
                    <span className={`text-sm font-medium ${item.color}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{item.effect}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Stem Cells */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
            🌱
          </span>
          Stem Cell Regeneration
        </h2>
        <div className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 rounded-2xl p-6 border border-rose-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Research by Dr. Valter Longo at USC shows that extended fasting
            triggers stem cell regeneration, particularly in the immune system.
            After 3+ days, fasting signals stem cells to shift from dormancy to
            self-renewal.
          </p>

          <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
            <h3 className="text-lg font-semibold text-rose-400 mb-4">
              🔬 The Research Shows
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold">1.</span>
                <span>
                  Extended fasting reduces PKA enzyme activity, which triggers
                  stem cell regeneration
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold">2.</span>
                <span>
                  Old, damaged immune cells are recycled, and new ones are
                  generated
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold">3.</span>
                <span>
                  3-5 days of fasting triggers significant immune system
                  regeneration
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold">4.</span>
                <span>
                  Refeeding after the fast stimulates new cell production
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-rose-400 mb-2">
              💡 Implications
            </h4>
            <p className="text-gray-300">
              This research suggests that periodic extended fasts could help
              "reset" your immune system, potentially beneficial for autoimmune
              conditions and aging-related immune decline. The regenerative
              effect is amplified during the refeeding phase.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Inflammation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            🔥
          </span>
          Inflammation Reduction
        </h2>
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Chronic inflammation is linked to virtually every modern disease.
            Fasting powerfully reduces inflammatory markers throughout the body.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                📉 Markers That Decrease
              </h3>
              <ul className="space-y-2">
                {[
                  {
                    marker: "C-Reactive Protein (CRP)",
                    effect: "General inflammation marker",
                  },
                  {
                    marker: "IL-6 (Interleukin-6)",
                    effect: "Pro-inflammatory cytokine",
                  },
                  { marker: "TNF-alpha", effect: "Tumor necrosis factor" },
                  {
                    marker: "Oxidative stress markers",
                    effect: "Free radical damage",
                  },
                  {
                    marker: "Homocysteine",
                    effect: "Cardiovascular inflammation",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center p-2 bg-gray-800/50 rounded-lg"
                  >
                    <span className="text-gray-300">{item.marker}</span>
                    <span className="text-gray-500 text-xs">{item.effect}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                🛡️ How Fasting Reduces Inflammation
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Ketones have direct anti-inflammatory effects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Reduced insulin decreases inflammatory pathways</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Autophagy removes inflammatory damaged cells</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Gut rest reduces intestinal inflammation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>NLRP3 inflammasome is suppressed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Electrolyte Science Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
            ⚡
          </span>
          The Science of Electrolyte Loss
        </h2>
        <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 rounded-2xl p-6 border border-yellow-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Understanding why electrolytes are lost during fasting is crucial.
            When insulin drops, your kidneys excrete more sodium, which triggers
            a cascade of electrolyte loss.
          </p>

          <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              🔬 The Electrolyte Loss Cascade
            </h3>
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  text: "Insulin levels drop dramatically when fasting begins",
                },
                {
                  step: "2",
                  text: "Low insulin signals kidneys to excrete sodium",
                },
                {
                  step: "3",
                  text: "Sodium excretion pulls water with it (diuresis)",
                },
                {
                  step: "4",
                  text: "Potassium and magnesium follow sodium out",
                },
                {
                  step: "5",
                  text: "Drinking plain water further dilutes remaining electrolytes",
                },
                {
                  step: "6",
                  text: "Electrolyte imbalance causes symptoms: weakness, cramps, heart issues",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg"
                >
                  <span className="w-8 h-8 bg-yellow-500/30 rounded-full flex items-center justify-center text-yellow-400 font-bold">
                    {item.step}
                  </span>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-red-400 mb-2">
              ⚠️ Why Plain Water Is Dangerous
            </h4>
            <p className="text-gray-300">
              Plain water during extended fasting dilutes your already-depleted
              electrolytes further. This can lead to hyponatremia (low sodium),
              which causes headaches, nausea, confusion, and in severe cases,
              seizures.{" "}
              <strong className="text-white">
                Always add electrolytes to your water.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🔬</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Module Summary
            </h3>
            <p className="text-white/90">
              Water fasting triggers powerful scientific mechanisms: autophagy
              cleans damaged cells, ketosis burns fat and provides clean energy,
              hormones shift to promote healing, stem cells regenerate, and
              inflammation drops dramatically. Understanding why electrolytes
              are lost—through the insulin-kidney-sodium cascade—explains why
              supplementation is absolutely essential for safe fasting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFModule2;
