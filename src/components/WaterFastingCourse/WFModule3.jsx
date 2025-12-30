import React from "react";

const WFModule3 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Deep Autophagy Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
            🧬
          </span>
          Deep Cellular Cleaning
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Extended water fasting allows autophagy to reach levels impossible
            with shorter fasts. This deep cellular cleaning removes accumulated
            damage and dysfunction that builds up over years.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                🔄 What Gets Cleaned
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    icon: "🗑️",
                    text: "Damaged mitochondria (cell powerhouses)",
                  },
                  { icon: "🧹", text: "Misfolded proteins linked to disease" },
                  { icon: "🦠", text: "Intracellular pathogens and debris" },
                  { icon: "⚡", text: "Dysfunctional cell components" },
                  { icon: "🔗", text: "Accumulated lipofuscin (age pigment)" },
                  { icon: "🧬", text: "Senescent (zombie) cells" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-xl">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-teal-400 mb-4">
                ✨ Reported Results
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: "🌟", text: "Improved cellular function and energy" },
                  { icon: "🧠", text: "Enhanced cognitive clarity" },
                  { icon: "💪", text: "Better recovery and resilience" },
                  { icon: "🕐", text: "Potential longevity benefits" },
                  { icon: "🛡️", text: "Reduced disease markers" },
                  { icon: "🌱", text: 'Feeling of being "reset"' },
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

      {/* Section: Fat Loss */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            🔥
          </span>
          Significant Fat Loss
        </h2>
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Water fasting is one of the most effective fat loss methods
            available. With no calories coming in, your body has no choice but
            to burn stored fat for energy.
          </p>

          <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              📊 Expected Fat Loss Rates
            </h3>
            <div className="space-y-3">
              {[
                {
                  period: "Per Day",
                  loss: "0.5-1 lb",
                  note: "Of actual fat (not water)",
                },
                {
                  period: "7-Day Fast",
                  loss: "4-7 lbs",
                  note: "Pure fat loss",
                },
                {
                  period: "14-Day Fast",
                  loss: "8-14 lbs",
                  note: "Significant reduction",
                },
                {
                  period: "21-Day Fast",
                  loss: "12-20 lbs",
                  note: "Major transformation",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                >
                  <span className="text-gray-400">{item.period}</span>
                  <span className="text-orange-400 font-bold">{item.loss}</span>
                  <span className="text-gray-500 text-sm">{item.note}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-3 italic">
              Note: Scale weight drops faster due to water loss. The above is
              pure fat loss only.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
              <h4 className="font-semibold text-green-400 mb-2">
                ✅ Why Fasting Fat Loss Sticks
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• HGH preserves muscle mass during fast</li>
                <li>• Metabolic rate stays elevated</li>
                <li>• Insulin sensitivity improves dramatically</li>
                <li>• Fat cells actually shrink and die</li>
                <li>• Reset of hunger hormones</li>
              </ul>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
              <h4 className="font-semibold text-blue-400 mb-2">
                💡 Visceral Fat Priority
              </h4>
              <p className="text-gray-300 text-sm">
                During fasting, your body preferentially burns visceral fat
                (dangerous belly fat around organs) before subcutaneous fat.
                This is the most harmful type of fat, so fasting targets it
                first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Mental Clarity */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            🧠
          </span>
          Mental Clarity & Cognitive Enhancement
        </h2>
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-2xl p-6 border border-violet-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Many practitioners report that extended water fasting produces
            remarkable mental clarity—often described as the clearest thinking
            of their lives. This isn't just subjective; there's science behind
            it.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Ketone Brain Fuel",
                desc: "Ketones provide 25% more energy than glucose and cross the blood-brain barrier efficiently.",
                icon: "⚡",
                color: "from-yellow-500 to-amber-600",
              },
              {
                title: "BDNF Increase",
                desc: "Brain-derived neurotrophic factor increases, promoting new neuron growth and connections.",
                icon: "🌱",
                color: "from-green-500 to-emerald-600",
              },
              {
                title: "Reduced Brain Fog",
                desc: "Inflammation reduction clears brain fog. Many report thinking more clearly than in years.",
                icon: "☀️",
                color: "from-orange-500 to-red-600",
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

          <div className="mt-6 bg-violet-500/10 border border-violet-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-violet-400 mb-2">
              🎯 Reported Cognitive Benefits
            </h4>
            <div className="grid md:grid-cols-2 gap-3 text-gray-300 text-sm">
              <div>• Laser-like focus and concentration</div>
              <div>• Enhanced memory and recall</div>
              <div>• Creative insights and problem-solving</div>
              <div>• Emotional clarity and stability</div>
              <div>• Reduced anxiety and mental chatter</div>
              <div>• Spiritual and meditative states</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Immune Reset */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            🛡️
          </span>
          Immune System Reset
        </h2>
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Extended fasting (3+ days) triggers a remarkable immune system
            regeneration. Old, damaged immune cells are recycled and replaced
            with newly generated cells.
          </p>

          <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              🔄 The Immune Reset Process
            </h3>
            <div className="space-y-3">
              {[
                {
                  phase: "Days 1-2",
                  event: "White blood cell count begins to drop",
                },
                {
                  phase: "Days 3-5",
                  event: "Old/damaged immune cells are recycled via autophagy",
                },
                {
                  phase: "Days 5-7",
                  event: "Stem cells activate, ready to regenerate",
                },
                {
                  phase: "Refeeding",
                  event: "New immune cells flood the system",
                },
                {
                  phase: "Post-Fast",
                  event: "Refreshed, more effective immune function",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg"
                >
                  <span className="text-blue-400 font-medium w-20">
                    {item.phase}
                  </span>
                  <span className="text-gray-300">{item.event}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-blue-400 mb-2">
              💡 Implications for Autoimmune Conditions
            </h4>
            <p className="text-gray-300">
              The immune reset mechanism has shown promise for various
              autoimmune conditions where the immune system attacks the body. By
              clearing out dysfunctional immune cells and generating new ones,
              fasting may help "reboot" immune function.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Digestive Rest */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center">
            🌿
          </span>
          Complete Digestive Rest
        </h2>
        <div className="bg-gradient-to-br from-lime-900/30 to-green-900/30 rounded-2xl p-6 border border-lime-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Your digestive system works constantly—processing food 3+ times
            daily plus snacks. Water fasting gives it a complete rest, allowing
            repair and regeneration of the gut lining.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-lime-400 mb-4">
                🔧 What Heals During Rest
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Intestinal lining regeneration",
                  "Gut microbiome reset",
                  "Reduced intestinal inflammation",
                  "Repair of leaky gut",
                  "Enzyme production reset",
                  "Stomach acid normalization",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-lime-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                ✨ Reported Improvements
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Resolution of bloating and gas",
                  "Improved food sensitivities",
                  "Better nutrient absorption post-fast",
                  "Reduced acid reflux and GERD",
                  "More regular bowel movements",
                  "Reduction in IBS symptoms",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Additional Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
            ✨
          </span>
          Additional Reported Benefits
        </h2>
        <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-2xl p-6 border border-pink-500/30">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "💧",
                title: "Skin Improvements",
                benefits: [
                  "Clearer complexion",
                  "Reduced acne",
                  "Improved skin tone",
                  "Less puffiness",
                ],
              },
              {
                icon: "😴",
                title: "Better Sleep",
                benefits: [
                  "Deeper sleep cycles",
                  "Need less sleep",
                  "Wake refreshed",
                  "More vivid dreams",
                ],
              },
              {
                icon: "🔋",
                title: "Energy Levels",
                benefits: [
                  "Stable energy (after Day 3)",
                  "No energy crashes",
                  "Sustained focus",
                  "Less need for stimulants",
                ],
              },
              {
                icon: "💪",
                title: "Physical Changes",
                benefits: [
                  "Reduced joint pain",
                  "Less inflammation",
                  "Improved mobility",
                  "Faster recovery",
                ],
              },
              {
                icon: "🧘",
                title: "Emotional Benefits",
                benefits: [
                  "Greater emotional stability",
                  "Reduced anxiety",
                  "Increased patience",
                  "Sense of accomplishment",
                ],
              },
              {
                icon: "🎯",
                title: "Life Perspective",
                benefits: [
                  "Reset relationship with food",
                  "Appreciation for meals",
                  "Willpower boost",
                  "Sense of control",
                ],
              },
            ].map((category, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-3">
                  {category.title}
                </h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  {category.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-pink-400">•</span>
                      {b}
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
              Maximize Benefits with Proper Electrolytes
            </h3>
            <p className="text-white/90">
              All these benefits require you to fast <strong>safely</strong>.
              Proper electrolyte supplementation ensures you can fast long
              enough to achieve deep autophagy and immune reset without
              dangerous side effects. Plain water will cut your fast short due
              to symptoms—electrolytes let you go the distance.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">✨</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Module Summary
            </h3>
            <p className="text-white/90">
              Extended water fasting offers remarkable benefits: deep cellular
              cleaning through autophagy, significant fat loss (especially
              visceral fat), profound mental clarity, immune system
              regeneration, complete digestive rest, and numerous other physical
              and mental improvements. These benefits are maximized when fasting
              is done properly with consistent electrolyte supplementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFModule3;
