import React from "react";

const Module5 = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-2xl p-6 border border-rose-500/30">
        <p className="text-gray-200 text-lg leading-relaxed">
          Understanding what happens each day helps you navigate the journey
          with confidence. This timeline is based on typical experiences
          reported by dry fasting practitioners. Individual experiences may
          vary.
        </p>
      </div>

      {/* Phase 1: Days 1-3 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🌅</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Days 1-3: The Transition Phase
            </h2>
            <p className="text-amber-400">Entering ketosis and adaptation</p>
          </div>
        </div>

        <div className="grid gap-4">
          {/* Day 1 */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 rounded-2xl p-6 border border-yellow-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-yellow-500 text-black font-bold rounded-full">
                Day 1
              </span>
              <span className="text-yellow-400 font-semibold">
                🌅 The Beginning
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What's Happening Inside 🔬
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Liver glycogen being depleted</li>
                  <li>• Blood sugar stabilizing</li>
                  <li>• Insulin levels dropping</li>
                  <li>• Body beginning to search for alternative fuel</li>
                  <li>• Initial water weight loss (glycogen releases water)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What You'll Feel 💭
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Hunger (mostly psychological/habitual)</li>
                  <li>• Mild thirst</li>
                  <li>• Normal to slightly lower energy</li>
                  <li>• Possible headache if caffeine withdrawal</li>
                  <li>• Mind occupied with thoughts of food</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
              <p className="text-yellow-300 text-sm">
                <strong>💡 Tip:</strong> Stay busy! Hunger is often boredom.
                This is the easiest day physically but can be challenging
                mentally.
              </p>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-500 text-black font-bold rounded-full">
                Day 2
              </span>
              <span className="text-orange-400 font-semibold">
                🔥 The Challenge
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What's Happening Inside 🔬
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Glycogen nearly depleted</li>
                  <li>• Ketone production ramping up</li>
                  <li>• Fat cells releasing fatty acids</li>
                  <li>• Brain transitioning fuel sources</li>
                  <li>• Autophagy beginning to activate</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What You'll Feel 💭
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Peak hunger (this is the hardest day)</li>
                  <li>• Noticeable thirst</li>
                  <li>• Lower energy, fatigue</li>
                  <li>• Possible headache, irritability</li>
                  <li>• Brain fog as fuel switches</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
              <p className="text-orange-300 text-sm">
                <strong>⚠️ Important:</strong> This is typically the most
                difficult day. Rest as much as possible. The discomfort is
                temporary—tomorrow will be easier.
              </p>
            </div>
          </div>

          {/* Day 3 */}
          <div className="bg-gradient-to-br from-red-900/30 to-rose-900/30 rounded-2xl p-6 border border-red-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-500 text-white font-bold rounded-full">
                Day 3
              </span>
              <span className="text-red-400 font-semibold">
                ⚡ The Acidotic Crisis
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What's Happening Inside 🔬
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Full ketosis achieved</li>
                  <li>• Ketone bodies flooding bloodstream</li>
                  <li>• pH slightly lowered (acidotic crisis)</li>
                  <li>• Autophagy significantly accelerating</li>
                  <li>• Metabolic water production beginning</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What You'll Feel 💭
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Hunger starting to disappear</li>
                  <li>• Possible nausea or weakness</li>
                  <li>• Acetone breath (fruity/metallic)</li>
                  <li>• Mental clarity beginning to improve</li>
                  <li>• Thirst becomes more manageable</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
              <p className="text-red-300 text-sm">
                <strong>🎯 Milestone:</strong> The acidotic crisis marks your
                body fully switching to fat-burning mode. Push through—relief is
                coming within 12-24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Days 4-6 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">☀️</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Days 4-6: Deep Ketosis Phase
            </h2>
            <p className="text-teal-400">Peak fat burning and autophagy</p>
          </div>
        </div>

        <div className="grid gap-4">
          {/* Day 4 */}
          <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-2xl p-6 border border-teal-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-teal-500 text-black font-bold rounded-full">
                Day 4
              </span>
              <span className="text-teal-400 font-semibold">
                🧬 Deep Cleaning Begins
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What's Happening Inside 🔬
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Maximum autophagy activation</li>
                  <li>• Damaged cells being recycled aggressively</li>
                  <li>• Stem cell regeneration beginning</li>
                  <li>• Growth hormone surging (5x normal)</li>
                  <li>• Metabolic water production increasing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What You'll Feel 💭
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Excellent mental clarity</li>
                  <li>• No hunger at all</li>
                  <li>• Good energy returning</li>
                  <li>• Possible euphoria or calm</li>
                  <li>• Thirst manageable</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-teal-500/10 rounded-lg border border-teal-500/20">
              <p className="text-teal-300 text-sm">
                <strong>✨ The Shift:</strong> Most people report Day 4 as when
                everything changes. Discomfort fades and benefits become
                apparent.
              </p>
            </div>
          </div>

          {/* Day 5 */}
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-500 text-black font-bold rounded-full">
                Day 5
              </span>
              <span className="text-cyan-400 font-semibold">
                🔥 Peak Fat Burning
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What's Happening Inside 🔬
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Maximum fat oxidation rate</li>
                  <li>• Ketones providing clean brain fuel</li>
                  <li>• Mitochondrial biogenesis (new mitochondria)</li>
                  <li>• Cognitive enhancement from ketones</li>
                  <li>• Efficient metabolic water production</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What You'll Feel 💭
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Mental clarity peaks</li>
                  <li>• Sustained, stable energy</li>
                  <li>• Zero hunger</li>
                  <li>• Enhanced mood</li>
                  <li>• Clothes noticeably looser</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <p className="text-cyan-300 text-sm">
                <strong>📏 Check Progress:</strong> Measure your waist—you
                should be 1.5-2 inches down from start. This is real fat loss,
                not water weight.
              </p>
            </div>
          </div>

          {/* Day 6 */}
          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500 text-white font-bold rounded-full">
                Day 6
              </span>
              <span className="text-blue-400 font-semibold">
                🛡️ Immune System Reset
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What's Happening Inside 🔬
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Old immune cells being recycled</li>
                  <li>• New white blood cell production</li>
                  <li>• Skin regeneration accelerating</li>
                  <li>• Damaged mitochondria being removed</li>
                  <li>• Deep tissue autophagy</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What You'll Feel 💭
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Calm, stable energy</li>
                  <li>• Deep mental focus</li>
                  <li>• Improved skin appearance</li>
                  <li>• Sense of physical lightness</li>
                  <li>• Minimal physical discomfort</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-blue-300 text-sm">
                <strong>🧘 Deep Healing:</strong> This is the deep healing
                phase. Rest is productive—your body is doing important repair
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Days 7-10 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🌙</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Days 7-10: Extended Fasting Phase
            </h2>
            <p className="text-purple-400">Maximum cellular renewal</p>
          </div>
        </div>

        <div className="grid gap-4">
          {/* Day 7 */}
          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-6 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-500 text-white font-bold rounded-full">
                Day 7
              </span>
              <span className="text-purple-400 font-semibold">
                📈 Growth Hormone Surge
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What's Happening Inside 🔬
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Growth hormone peaks (up to 2000%)</li>
                  <li>• Muscle mass preserved while fat burns</li>
                  <li>• BDNF elevated (brain growth factor)</li>
                  <li>• Neuroplasticity increased</li>
                  <li>• Anti-aging pathways fully activated</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What You'll Feel 💭
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Powerful mental clarity</li>
                  <li>• Euphoric feeling possible</li>
                  <li>• Surprisingly high energy</li>
                  <li>• Minimal physical discomfort</li>
                  <li>• Deep sense of accomplishment</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <p className="text-purple-300 text-sm">
                <strong>🎉 Milestone:</strong> You've completed a full week!
                Light stretching or gentle yoga is fine. Your energy may feel
                surprisingly high.
              </p>
            </div>
          </div>

          {/* Day 8 */}
          <div className="bg-gradient-to-br from-violet-900/30 to-fuchsia-900/30 rounded-2xl p-6 border border-violet-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-violet-500 text-white font-bold rounded-full">
                Day 8
              </span>
              <span className="text-violet-400 font-semibold">
                🧬 Advanced Autophagy
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What's Happening Inside 🔬
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Pre-cancerous cells being targeted</li>
                  <li>• Deep tissue autophagy continues</li>
                  <li>• Immune system completing reset</li>
                  <li>• Metabolic efficiency at maximum</li>
                  <li>• Deep genetic repair processes</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What You'll Feel 💭
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Sustained clarity</li>
                  <li>• Light, clean feeling</li>
                  <li>• Deep sense of wellbeing</li>
                  <li>• Pride in your discipline</li>
                  <li>• Time passes more easily</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-violet-500/10 rounded-lg border border-violet-500/20">
              <p className="text-violet-300 text-sm">
                <strong>🏆 Rare Territory:</strong> You're in elite fasting
                territory now. Very few people reach this point. Monitor your
                body closely.
              </p>
            </div>
          </div>

          {/* Day 9 */}
          <div className="bg-gradient-to-br from-fuchsia-900/30 to-pink-900/30 rounded-2xl p-6 border border-fuchsia-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-fuchsia-500 text-white font-bold rounded-full">
                Day 9
              </span>
              <span className="text-fuchsia-400 font-semibold">
                ⚡ Mitochondrial Renewal
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What's Happening Inside 🔬
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Mitochondria being replaced with new ones</li>
                  <li>• Old damaged components fully cleared</li>
                  <li>• Maximum cellular renewal</li>
                  <li>• Complete immune system reset</li>
                  <li>• Deep detoxification completing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What You'll Feel 💭
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Stable, peaceful energy</li>
                  <li>• Profound inner peace</li>
                  <li>• Body feels light and clean</li>
                  <li>• Anticipation of completion</li>
                  <li>• Begin preparing mentally for refeed</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-fuchsia-500/10 rounded-lg border border-fuchsia-500/20">
              <p className="text-fuchsia-300 text-sm">
                <strong>🎯 Almost There:</strong> One more day! Stay rested and
                begin mentally preparing for your careful refeed tomorrow.
              </p>
            </div>
          </div>

          {/* Day 10 */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-500 text-white font-bold rounded-full">
                Day 10
              </span>
              <span className="text-emerald-400 font-semibold">
                🎉 Completion & Victory
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What's Happening Inside 🔬
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• All dry fasting benefits maximized</li>
                  <li>• Final autophagy wave</li>
                  <li>• Complete metabolic reset achieved</li>
                  <li>• Insulin sensitivity fully restored</li>
                  <li>• Body primed for optimal nutrient uptake</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  What You'll Feel 💭
                </h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Peak mental state</li>
                  <li>• Profound sense of achievement</li>
                  <li>• Ready to break the fast</li>
                  <li>• Deep gratitude</li>
                  <li>• Transformed perspective on food</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <p className="text-emerald-300 text-sm">
                <strong>🏆 CONGRATULATIONS!</strong> You've completed a 10-day
                dry fast. Break your fast SLOWLY and carefully. Start with
                water, then watermelon or bone broth. Your refeeding is crucial
                to lock in these benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracker Visual */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
            📊
          </span>
          Expected Progress Overview
        </h2>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-white/10">
          <div className="space-y-4">
            {[
              { day: 1, weight: "2-3 lbs", difficulty: 30, benefits: 10 },
              { day: 2, weight: "4-6 lbs", difficulty: 90, benefits: 20 },
              { day: 3, weight: "7-9 lbs", difficulty: 80, benefits: 40 },
              { day: 4, weight: "9-11 lbs", difficulty: 40, benefits: 60 },
              { day: 5, weight: "11-13 lbs", difficulty: 30, benefits: 75 },
              { day: 6, weight: "13-15 lbs", difficulty: 25, benefits: 85 },
              { day: 7, weight: "15-17 lbs", difficulty: 20, benefits: 90 },
              { day: 8, weight: "17-19 lbs", difficulty: 20, benefits: 95 },
              { day: 9, weight: "19-21 lbs", difficulty: 15, benefits: 98 },
              { day: 10, weight: "20-25 lbs", difficulty: 10, benefits: 100 },
            ].map((d) => (
              <div key={d.day} className="flex items-center gap-4">
                <span className="w-12 text-white font-bold">Day {d.day}</span>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs w-16">
                      Difficulty
                    </span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                        style={{ width: `${d.difficulty}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs w-16">Benefits</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                        style={{ width: `${d.benefits}%` }}
                      />
                    </div>
                  </div>
                </div>
                <span className="text-gray-400 text-sm w-20 text-right">
                  {d.weight}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center italic">
            Weight loss includes both fat and water. Difficulty typically peaks
            on Day 2-3, then decreases as benefits increase.
          </p>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📅</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Timeline Summary
            </h3>
            <p className="text-white/90">
              Days 1-3 are about transition and endurance. Days 4-6 bring
              clarity and accelerated healing. Days 7-10 deliver maximum
              benefits and transformation. The hardest part is Day 2-3; after
              that, it gets easier as your body adapts to burning fat and
              producing its own water. Trust the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module5;
