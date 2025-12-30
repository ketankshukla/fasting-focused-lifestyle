import React from "react";

const Module2 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Autophagy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
            🧬
          </span>
          Autophagy & Cellular Regeneration
        </h2>
        <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-2xl p-6 border border-teal-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Autophagy (from Greek "auto" = self, "phagy" = eating) is your
            body's cellular recycling system. During dry fasting, this process
            accelerates dramatically as cells compete for limited resources.
          </p>

          <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/10">
            <h3 className="text-lg font-semibold text-teal-400 mb-3">
              🔬 How Autophagy Works
            </h3>
            <ol className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  1
                </span>
                <span>
                  <strong className="text-white">Initiation:</strong> Nutrient
                  depletion triggers autophagy-related genes (ATGs) to activate
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  2
                </span>
                <span>
                  <strong className="text-white">Formation:</strong> A
                  double-membrane structure (autophagosome) forms around damaged
                  components
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  3
                </span>
                <span>
                  <strong className="text-white">Fusion:</strong> The
                  autophagosome fuses with lysosomes (digestive organelles)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  4
                </span>
                <span>
                  <strong className="text-white">Degradation:</strong> Contents
                  are broken down into amino acids and other building blocks
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  5
                </span>
                <span>
                  <strong className="text-white">Recycling:</strong> These
                  building blocks are used to create new, healthy cellular
                  components
                </span>
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-5 border border-green-500/30">
              <h4 className="font-semibold text-green-400 mb-2">
                ✅ What Gets Recycled
              </h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Damaged mitochondria</li>
                <li>• Misfolded proteins</li>
                <li>• Dysfunctional organelles</li>
                <li>• Intracellular pathogens</li>
                <li>• Protein aggregates</li>
                <li>• Excess cell membrane</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl p-5 border border-purple-500/30">
              <h4 className="font-semibold text-purple-400 mb-2">
                🎯 Autophagy Timeline
              </h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>
                  • <strong>24h:</strong> Autophagy begins activating
                </li>
                <li>
                  • <strong>48h:</strong> Significant autophagy underway
                </li>
                <li>
                  • <strong>72h:</strong> Peak autophagy rates
                </li>
                <li>
                  • <strong>5+ days:</strong> Deep cellular renovation
                </li>
                <li>
                  • <strong>7+ days:</strong> Stem cell regeneration
                </li>
                <li>
                  • <strong>10 days:</strong> Maximum cellular reset
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Metabolic Water */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            💧
          </span>
          Metabolic Water Production
        </h2>
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            One of the most fascinating aspects of dry fasting is your body's
            ability to produce its own water internally. This is called{" "}
            <strong className="text-blue-400">endogenous water</strong> or{" "}
            <strong className="text-blue-400">metabolic water</strong>.
          </p>

          <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/10">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">
              ⚗️ The Chemistry
            </h3>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-center mb-4">
              <p className="text-blue-300">
                C₅₅H₁₀₄O₆ + 78 O₂ → 55 CO₂ +{" "}
                <span className="text-cyan-400 font-bold">52 H₂O</span> + Energy
              </p>
              <p className="text-gray-500 text-sm mt-2">
                (Fat oxidation produces water as a byproduct)
              </p>
            </div>
            <p className="text-gray-300">
              When your body oxidizes (burns) fat for energy, the chemical
              reaction produces carbon dioxide, energy (ATP), and{" "}
              <strong className="text-white">water</strong>. For every 100 grams
              of fat burned, approximately 107-110ml of pure, clean metabolic
              water is produced.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "🐪",
                title: "Camel Example",
                desc: "Camels can go weeks without water by metabolizing their hump fat, producing enough water to survive. Humans have this same capability.",
              },
              {
                icon: "🧪",
                title: "Pure Water",
                desc: "Metabolic water is the purest form of water possible—produced inside your cells with no external contaminants.",
              },
              {
                icon: "📊",
                title: "Production Rate",
                desc: "During deep ketosis, an average person can produce 1-1.5 liters of metabolic water daily from fat oxidation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <span className="text-3xl">{item.icon}</span>
                <h4 className="font-semibold text-white mt-2">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Fat Metabolism */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            🔥
          </span>
          Fat Metabolism & Ketosis
        </h2>
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Without any external calories or water, your body must rely entirely
            on stored body fat for both energy and hydration. This creates an
            accelerated fat-burning state unique to dry fasting.
          </p>

          <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/10">
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              📈 Ketone Production During Dry Fasting
            </h3>
            <div className="space-y-3">
              {[
                {
                  day: "Day 1",
                  level: "0.5-1.5 mmol/L",
                  width: "25%",
                  label: "Mild Ketosis",
                },
                {
                  day: "Day 2",
                  level: "1.5-3.0 mmol/L",
                  width: "45%",
                  label: "Moderate Ketosis",
                },
                {
                  day: "Day 3",
                  level: "3.0-5.0 mmol/L",
                  width: "65%",
                  label: "Deep Ketosis",
                },
                {
                  day: "Day 4-5",
                  level: "4.0-7.0 mmol/L",
                  width: "80%",
                  label: "Optimal Ketosis",
                },
                {
                  day: "Day 6+",
                  level: "5.0-8.0 mmol/L",
                  width: "95%",
                  label: "Maximum Fat Burning",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-medium">{item.day}</span>
                    <span className="text-gray-400">
                      {item.level} - {item.label}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-orange-400 mb-2">
              ⚡ Why Dry Fasting Burns Fat Faster
            </h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                • <strong className="text-white">No dietary water</strong> means
                body must oxidize more fat to produce metabolic water
              </li>
              <li>
                •{" "}
                <strong className="text-white">Glycogen depletes faster</strong>{" "}
                without water to bind to
              </li>
              <li>
                •{" "}
                <strong className="text-white">
                  Insulin drops more rapidly
                </strong>
                , unlocking fat stores sooner
              </li>
              <li>
                •{" "}
                <strong className="text-white">
                  Metabolic rate stays elevated
                </strong>{" "}
                as body works to maintain homeostasis
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Stem Cells */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            🌱
          </span>
          Stem Cell Activation & Immune Reset
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Research by Dr. Valter Longo at USC has shown that extended fasting
            triggers stem cell regeneration and a complete immune system reset.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-emerald-400">
                🔬 Stem Cell Activation
              </h3>
              <div className="space-y-3">
                {[
                  {
                    phase: "Days 1-3",
                    desc: "Old immune cells begin to die off and be recycled",
                  },
                  {
                    phase: "Days 4-5",
                    desc: "Stem cell populations in bone marrow begin expanding",
                  },
                  {
                    phase: "Days 6-7",
                    desc: "New white blood cell production accelerates",
                  },
                  {
                    phase: "Days 8-10",
                    desc: "Complete immune system regeneration underway",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-emerald-400 font-semibold whitespace-nowrap">
                      {item.phase}
                    </span>
                    <span className="text-gray-300">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-400">
                🛡️ Immune System Reset
              </h3>
              <p className="text-gray-300">
                During extended fasting, your body breaks down and recycles old,
                damaged, or inefficient immune cells. When you refeed, stem
                cells generate entirely new immune cells, essentially giving you
                a "new" immune system.
              </p>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-gray-400 text-sm italic">
                  "Prolonged fasting forces the body to use stores of glucose,
                  fat, and ketones, but it also breaks down a significant
                  portion of white blood cells. This triggers stem cell-based
                  regeneration of new immune system cells."
                  <span className="block mt-2 text-emerald-400 not-italic">
                    — Dr. Valter Longo, USC
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Inflammation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
            🔻
          </span>
          Inflammation Reduction
        </h2>
        <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-2xl p-6 border border-pink-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Chronic inflammation is linked to virtually every modern disease.
            Dry fasting produces powerful anti-inflammatory effects through
            multiple mechanisms.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "🧬",
                title: "Reduced Inflammatory Markers",
                desc: "CRP, IL-6, and TNF-alpha levels drop significantly during extended dry fasts",
              },
              {
                icon: "🔥",
                title: "Ketones Are Anti-Inflammatory",
                desc: "Beta-hydroxybutyrate (BHB) directly inhibits the NLRP3 inflammasome",
              },
              {
                icon: "💧",
                title: "Edema Reduction",
                desc: "Without external water, the body eliminates excess fluid trapped in tissues",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <span className="text-3xl">{item.icon}</span>
                <h4 className="font-semibold text-white mt-3">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Hormones */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            ⚗️
          </span>
          Hormonal Changes
        </h2>
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-2xl p-6 border border-violet-500/30">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-green-500/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">📈</span>
                <h3 className="text-lg font-semibold text-green-400">
                  HGH (Growth Hormone)
                </h3>
              </div>
              <p className="text-gray-300 mb-3">
                Human growth hormone can increase by{" "}
                <strong className="text-white">1,250-2,000%</strong> during
                extended fasting.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Preserves muscle mass</li>
                <li>• Accelerates fat burning</li>
                <li>• Promotes tissue repair</li>
                <li>• Anti-aging effects</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-yellow-500/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">⚡</span>
                <h3 className="text-lg font-semibold text-yellow-400">
                  Cortisol
                </h3>
              </div>
              <p className="text-gray-300 mb-3">
                Cortisol rises initially (stress response) then{" "}
                <strong className="text-white">normalizes by day 3-4</strong>.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Mobilizes energy stores</li>
                <li>• Maintains blood glucose</li>
                <li>• Supports alertness</li>
                <li>• Returns to baseline post-fast</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-blue-500/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">📉</span>
                <h3 className="text-lg font-semibold text-blue-400">Insulin</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Insulin drops to{" "}
                <strong className="text-white">baseline minimum</strong> levels,
                unlocking fat stores.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Enables fat release</li>
                <li>• Restores insulin sensitivity</li>
                <li>• Reduces inflammation</li>
                <li>• Promotes autophagy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🔬</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Scientific Summary
            </h3>
            <p className="text-white/90">
              Dry fasting triggers a cascade of beneficial metabolic changes:
              accelerated autophagy cleans up damaged cells, metabolic water
              production from fat oxidation keeps you hydrated, ketosis provides
              clean energy to your brain, stem cells regenerate your immune
              system, and hormonal optimization preserves muscle while burning
              fat. These processes work synergistically to produce profound
              healing and regeneration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module2;
