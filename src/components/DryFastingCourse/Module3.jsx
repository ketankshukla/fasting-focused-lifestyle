import React from "react";

const Module3 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Deep Autophagy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            🧬
          </span>
          Deep Autophagy & Cellular Cleanup
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Prolonged dry fasting induces the deepest level of autophagy
            achievable through fasting. Your body becomes incredibly efficient
            at identifying and recycling damaged cellular components.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🧹",
                title: "Cellular Deep Clean",
                desc: "Damaged proteins, dysfunctional mitochondria, and cellular debris are identified and broken down for recycling",
              },
              {
                icon: "🔄",
                title: "Organelle Renewal",
                desc: "Old organelles are replaced with newly synthesized, fully functional versions",
              },
              {
                icon: "🛡️",
                title: "Pathogen Elimination",
                desc: "Intracellular bacteria and viruses can be engulfed and destroyed through autophagy",
              },
              {
                icon: "⚡",
                title: "Energy Efficiency",
                desc: "Recycled cellular components provide amino acids and building blocks, reducing metabolic waste",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-lg font-semibold text-white mt-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Accelerated Fat Loss */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            🔥
          </span>
          Accelerated Fat Loss
        </h2>
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Dry fasting produces faster and more significant fat loss compared
            to water fasting. The body's need to produce metabolic water drives
            increased fat oxidation.
          </p>

          <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/10">
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              📊 Expected Fat Loss During 10-Day Dry Fast
            </h3>
            <div className="space-y-3">
              {[
                {
                  days: "Days 1-3",
                  loss: "3-5 lbs fat",
                  note: "+ significant water weight",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  days: "Days 4-6",
                  loss: "4-6 lbs fat",
                  note: "Peak fat burning phase",
                  color: "from-orange-500 to-red-500",
                },
                {
                  days: "Days 7-10",
                  loss: "4-6 lbs fat",
                  note: "Sustained fat oxidation",
                  color: "from-red-500 to-rose-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-sm text-center">
                      {item.days}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      {item.loss}
                    </p>
                    <p className="text-gray-400 text-sm">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4 italic">
              Total: 11-17 lbs of actual fat loss over 10 days, plus 10-15 lbs
              of water/waste weight. Results vary by individual.
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-orange-400 mb-2">
              💡 Why More Fat Burns During Dry Fasting
            </h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                • Body needs to produce ~1-1.5L of metabolic water daily from
                fat
              </li>
              <li>• No external calories means 100% reliance on body fat</li>
              <li>• Deeper ketosis = more efficient fat mobilization</li>
              <li>• Visceral (organ) fat is preferentially targeted</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Skin Rejuvenation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
            ✨
          </span>
          Skin Rejuvenation & Tissue Regeneration
        </h2>
        <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-2xl p-6 border border-pink-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Many practitioners report remarkable improvements in skin quality
            after extended dry fasts. The combination of autophagy, stem cell
            activation, and reduced inflammation contributes to visible
            rejuvenation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "🌟",
                title: "Clearer Complexion",
                desc: "Reduced inflammation and toxin elimination can clear acne, rashes, and skin irritations",
              },
              {
                icon: "🔄",
                title: "Collagen Renewal",
                desc: "Autophagy removes damaged collagen while HGH stimulates new collagen production",
              },
              {
                icon: "💧",
                title: "Improved Hydration",
                desc: "Post-fast, skin often appears more hydrated as cellular function improves",
              },
              {
                icon: "🦠",
                title: "Reduced Skin Conditions",
                desc: "Practitioners report improvement in eczema, psoriasis, and other chronic conditions",
              },
              {
                icon: "⏳",
                title: "Anti-Aging Effects",
                desc: "Fine lines may diminish as cellular turnover accelerates and damaged cells are replaced",
              },
              {
                icon: "🎯",
                title: "Even Skin Tone",
                desc: "Improved circulation and cellular renewal can reduce hyperpigmentation",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-semibold text-white mt-2">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Mental Clarity */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            🧠
          </span>
          Mental Clarity & Spiritual Experiences
        </h2>
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-2xl p-6 border border-violet-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Extended dry fasting is renowned for producing profound mental
            clarity and heightened states of awareness. Many cultures have used
            fasting as a spiritual practice for this reason.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-violet-400">
                🎯 Cognitive Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "Exceptional mental focus and concentration",
                  "Enhanced problem-solving ability",
                  "Improved memory and recall",
                  "Heightened creativity and insight",
                  "Reduced brain fog and mental fatigue",
                  "Greater emotional regulation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-violet-500/30 rounded-full flex items-center justify-center text-violet-400">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400">
                ✨ Reported Spiritual Experiences
              </h3>
              <div className="space-y-3">
                {[
                  {
                    exp: "Deep meditative states",
                    desc: "Easier to reach and maintain",
                  },
                  {
                    exp: "Heightened intuition",
                    desc: "Stronger gut feelings and insights",
                  },
                  {
                    exp: "Vivid dreams",
                    desc: "More memorable and meaningful",
                  },
                  {
                    exp: "Sense of connection",
                    desc: "Feeling of unity with nature/universe",
                  },
                  {
                    exp: "Emotional releases",
                    desc: "Processing of stored trauma",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <p className="text-white font-medium">{item.exp}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-purple-400 mb-2">
              🔬 The Science Behind Mental Clarity
            </h4>
            <p className="text-gray-300">
              Ketones are a highly efficient fuel for the brain.
              Beta-hydroxybutyrate (BHB) produces more ATP per unit than
              glucose, reduces oxidative stress in neurons, and increases BDNF
              (Brain-Derived Neurotrophic Factor), which supports new neural
              connections and cognitive function.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Pathogen Elimination */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center">
            🦠
          </span>
          Pathogen & Parasite Elimination Theories
        </h2>
        <div className="bg-gradient-to-br from-red-900/30 to-rose-900/30 rounded-2xl p-6 border border-red-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Practitioners and some researchers theorize that dry fasting creates
            an inhospitable environment for pathogens and parasites. While more
            research is needed, the mechanisms are logical.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h4 className="font-semibold text-red-400 mb-3">
                🔬 Theoretical Mechanisms
              </h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>
                  • <strong>Dehydration stress:</strong> Pathogens need water to
                  survive and reproduce
                </li>
                <li>
                  • <strong>Increased body temperature:</strong> Mild fever-like
                  state during acidotic crisis
                </li>
                <li>
                  • <strong>Autophagy:</strong> Cells can engulf and destroy
                  intracellular pathogens
                </li>
                <li>
                  • <strong>Immune activation:</strong> White blood cells become
                  more active during fasting
                </li>
                <li>
                  • <strong>Starvation:</strong> Without incoming nutrients,
                  parasites cannot feed
                </li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h4 className="font-semibold text-rose-400 mb-3">
                📋 Reported Observations
              </h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Resolution of chronic bacterial infections</li>
                <li>• Expulsion of intestinal parasites post-fast</li>
                <li>• Clearing of fungal overgrowth (candida)</li>
                <li>• Reduction in viral load markers</li>
                <li>• Improvement in Lyme disease symptoms</li>
              </ul>
              <p className="text-gray-500 text-xs mt-3 italic">
                Note: These are practitioner reports; individual results vary
                significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Digestive Reset */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center">
            🌿
          </span>
          Digestive System Reset
        </h2>
        <div className="bg-gradient-to-br from-lime-900/30 to-green-900/30 rounded-2xl p-6 border border-lime-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Your digestive system gets a complete rest during dry fasting,
            allowing for repair and regeneration of the gut lining and
            microbiome.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: "🔄",
                title: "Gut Lining Repair",
                desc: 'The intestinal lining regenerates every 3-5 days. Without digestive work, this process accelerates and heals "leaky gut."',
              },
              {
                icon: "🦠",
                title: "Microbiome Reset",
                desc: "Harmful bacteria that thrive on sugar and processed food die off. Beneficial bacteria populations can rebalance after refeeding.",
              },
              {
                icon: "⚡",
                title: "Enzyme Production",
                desc: "Digestive organs rest and regenerate, potentially improving enzyme production post-fast.",
              },
              {
                icon: "🎯",
                title: "Reduced Inflammation",
                desc: "Gut inflammation decreases without food antigens, allowing healing of conditions like IBS and colitis.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Chronic Conditions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            💊
          </span>
          Reported Benefits for Chronic Conditions
        </h2>
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Practitioners around the world have reported improvements in various
            chronic conditions. These are anecdotal reports and individual
            experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                category: "Metabolic",
                conditions: [
                  "Type 2 Diabetes",
                  "Insulin Resistance",
                  "Metabolic Syndrome",
                  "Obesity",
                ],
              },
              {
                category: "Autoimmune",
                conditions: [
                  "Rheumatoid Arthritis",
                  "Hashimoto's",
                  "Lupus",
                  "Multiple Sclerosis",
                ],
              },
              {
                category: "Digestive",
                conditions: [
                  "IBS/IBD",
                  "SIBO",
                  "Acid Reflux",
                  "Food Sensitivities",
                ],
              },
              {
                category: "Skin",
                conditions: ["Eczema", "Psoriasis", "Acne", "Rosacea"],
              },
              {
                category: "Respiratory",
                conditions: [
                  "Asthma",
                  "Allergies",
                  "Chronic Sinusitis",
                  "Sleep Apnea",
                ],
              },
              {
                category: "Mental Health",
                conditions: [
                  "Depression",
                  "Anxiety",
                  "Brain Fog",
                  "Chronic Fatigue",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <h4 className="font-semibold text-cyan-400 mb-2">
                  {item.category}
                </h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  {item.conditions.map((c, j) => (
                    <li key={j}>• {c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4 italic">
            These reports come from dry fasting communities and practitioners.
            Individual results vary, and fasting should be approached with
            proper preparation.
          </p>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">✨</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Benefits Summary
            </h3>
            <p className="text-white/90">
              Prolonged dry fasting offers a unique combination of benefits:
              accelerated fat loss, deep cellular cleanup through autophagy,
              skin rejuvenation, mental clarity, immune system regeneration,
              digestive healing, and potential relief from various chronic
              conditions. The body's remarkable ability to heal itself is
              amplified when given the right conditions—and dry fasting creates
              those conditions more intensely than any other fasting method.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3;
