import React from "react";

const Module6 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Tongue and Breath */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            👅
          </span>
          Tongue Coating & Breath Changes
        </h2>
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            One of the most visible signs of detoxification during dry fasting
            is changes to your tongue. This is your body eliminating toxins
            through available pathways.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">
                👅 Tongue Coating Progression
              </h3>
              <div className="space-y-3">
                {[
                  {
                    day: "Days 1-2",
                    desc: "Light white coating begins to appear",
                    color: "bg-gray-300",
                  },
                  {
                    day: "Days 3-4",
                    desc: "Thick white or yellow coating develops",
                    color: "bg-yellow-200",
                  },
                  {
                    day: "Days 5-7",
                    desc: "Coating may turn yellowish or brownish",
                    color: "bg-yellow-400",
                  },
                  {
                    day: "Days 8-10",
                    desc: "Coating begins to clear as detox completes",
                    color: "bg-pink-200",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                  >
                    <div className={`w-4 h-4 rounded-full ${item.color}`} />
                    <div>
                      <span className="text-white font-medium">
                        {item.day}:
                      </span>
                      <span className="text-gray-400 ml-2">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                💡 Use a tongue scraper 2-3x daily to help remove buildup and
                reduce bad breath.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-indigo-400">
                💨 Breath Changes
              </h3>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-white font-medium mb-2">
                  Acetone Breath (Ketone Breath)
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  As your body produces ketones, excess acetone is expelled
                  through your breath. This creates a distinctive smell that's
                  often described as:
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Fruity or sweet</li>
                  <li>• Metallic or chemical</li>
                  <li>• Similar to nail polish remover</li>
                  <li>• Different from normal bad breath</li>
                </ul>
                <p className="text-indigo-400 text-sm mt-3">
                  ✅ This is a GOOD sign—it means you're in ketosis and burning
                  fat efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Urine Changes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
            💧
          </span>
          Urine Color & Output Changes
        </h2>
        <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-2xl p-6 border border-amber-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Urine output decreases significantly during dry fasting, and the
            color and concentration change as your body conserves water.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">
                🎨 Urine Color Guide
              </h3>
              <div className="space-y-2">
                {[
                  {
                    color: "bg-yellow-100",
                    name: "Light Yellow",
                    meaning: "Normal hydration (Days 1-2)",
                  },
                  {
                    color: "bg-yellow-300",
                    name: "Dark Yellow",
                    meaning: "Concentration increasing (Days 2-3)",
                  },
                  {
                    color: "bg-amber-500",
                    name: "Amber/Orange",
                    meaning: "Maximum concentration (Days 3-6)",
                  },
                  {
                    color: "bg-amber-700",
                    name: "Dark Amber",
                    meaning: "Very concentrated (Days 5-10)",
                  },
                  {
                    color: "bg-amber-900",
                    name: "Brown-ish",
                    meaning: "Toxin elimination (occasional)",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${item.color}`} />
                    <div>
                      <span className="text-white font-medium">
                        {item.name}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">
                        — {item.meaning}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                📊 Output Changes
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>
                    <strong>Days 1-2:</strong> Frequent urination as body
                    releases stored water from glycogen
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>
                    <strong>Days 3-5:</strong> Urination decreases to 1-3 times
                    daily
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>
                    <strong>Days 6-10:</strong> May urinate only 1-2 times
                    daily, very concentrated
                  </span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-300 text-sm">
                  ⚠️ Some reduction is normal. Complete cessation of urination
                  for 24+ hours is a signal to break your fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Sleep */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
            😴
          </span>
          Sleep Pattern Alterations
        </h2>
        <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-6 border border-purple-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Sleep during dry fasting often changes dramatically. Many people
            need less sleep yet feel more rested.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "🌙",
                title: "Reduced Sleep Need",
                desc: "Many practitioners report needing only 4-6 hours of sleep yet feeling fully rested. Ketones provide efficient energy to the brain.",
                color: "from-purple-500 to-violet-600",
              },
              {
                icon: "💭",
                title: "Vivid Dreams",
                desc: "Dreams often become more vivid, memorable, and sometimes spiritually significant. Some report lucid dreaming increases.",
                color: "from-violet-500 to-fuchsia-600",
              },
              {
                icon: "⚡",
                title: "Lighter Sleep",
                desc: "Sleep may feel lighter but more restorative. You might wake up more easily but feel refreshed nonetheless.",
                color: "from-fuchsia-500 to-pink-600",
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

          <div className="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-purple-400 mb-2">
              💡 Sleep Tips During Dry Fasting
            </h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Go to bed earlier than usual</li>
              <li>• Use the extra awake hours for meditation or reading</li>
              <li>• Keep your room cool (you may feel warmer than usual)</li>
              <li>
                • Don't worry about less sleep—it's normal and often sufficient
              </li>
              <li>• Keep a dream journal to capture insights</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Temperature */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
            🌡️
          </span>
          Body Temperature Fluctuations
        </h2>
        <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Your body temperature will fluctuate during dry fasting as your
            metabolism adapts. Understanding these changes helps you stay
            comfortable.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-red-400 mb-4">
                🔥 Feeling Hot
              </h3>
              <p className="text-gray-300 mb-3">
                Common during Days 2-4 (acidotic crisis)
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Body working hard to metabolize fat</li>
                <li>• Mild fever-like state (up to 99-100°F)</li>
                <li>• Sign of active detoxification</li>
                <li>• Usually passes after Day 4-5</li>
              </ul>
              <p className="text-orange-400 text-sm mt-3">
                ✓ Light clothing, cool environment helps
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                ❄️ Feeling Cold
              </h3>
              <p className="text-gray-300 mb-3">Common during Days 5-10</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Metabolism slows slightly to conserve energy</li>
                <li>• Less food means less thermogenesis</li>
                <li>• Body prioritizing energy for healing</li>
                <li>• Extremities (hands/feet) may feel cold</li>
              </ul>
              <p className="text-cyan-400 text-sm mt-3">
                ✓ Warm blankets, layers, warm (not hot) baths help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Weight Loss */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            ⚖️
          </span>
          Weight Loss Patterns
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Weight loss during dry fasting follows a predictable pattern.
            Understanding what's water vs. fat helps set realistic expectations.
          </p>

          <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/10">
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
              📉 Expected Weight Loss Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-2 px-3 text-left text-gray-400">Phase</th>
                    <th className="py-2 px-3 text-left text-gray-400">
                      Water Loss
                    </th>
                    <th className="py-2 px-3 text-left text-gray-400">
                      Fat Loss
                    </th>
                    <th className="py-2 px-3 text-left text-gray-400">Total</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10">
                    <td className="py-2 px-3">Days 1-3</td>
                    <td className="py-2 px-3">5-8 lbs</td>
                    <td className="py-2 px-3">3-4 lbs</td>
                    <td className="py-2 px-3 text-emerald-400 font-medium">
                      8-12 lbs
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 px-3">Days 4-6</td>
                    <td className="py-2 px-3">2-3 lbs</td>
                    <td className="py-2 px-3">4-5 lbs</td>
                    <td className="py-2 px-3 text-emerald-400 font-medium">
                      6-8 lbs
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 px-3">Days 7-10</td>
                    <td className="py-2 px-3">1-2 lbs</td>
                    <td className="py-2 px-3">4-6 lbs</td>
                    <td className="py-2 px-3 text-emerald-400 font-medium">
                      5-8 lbs
                    </td>
                  </tr>
                  <tr className="bg-emerald-500/10">
                    <td className="py-2 px-3 font-bold">Total</td>
                    <td className="py-2 px-3">8-13 lbs</td>
                    <td className="py-2 px-3">11-15 lbs</td>
                    <td className="py-2 px-3 text-emerald-400 font-bold">
                      20-28 lbs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-3 italic">
              Note: Some water weight returns during refeeding. Net fat loss of
              11-15 lbs is typical for a 10-day dry fast.
            </p>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-emerald-400 mb-2">
              💡 Waist Measurement Is More Accurate
            </h4>
            <p className="text-gray-300">
              Track your waist measurement alongside weight. While water weight
              fluctuates, your waist measurement gives a more accurate picture
              of actual fat loss. Expect 3-5 inches off your waist during a
              10-day dry fast.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Mental States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            💭
          </span>
          Mental States
        </h2>
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400">
                ✨ Positive States
              </h3>
              <div className="space-y-3">
                {[
                  {
                    state: "Mental Clarity",
                    when: "Days 4-10",
                    desc: "Sharp focus, clear thinking, enhanced concentration",
                  },
                  {
                    state: "Euphoria",
                    when: "Days 5-8",
                    desc: "Feelings of bliss, peace, and wellbeing",
                  },
                  {
                    state: "Spiritual Connection",
                    when: "Days 6-10",
                    desc: "Heightened intuition, meaningful insights",
                  },
                  {
                    state: "Emotional Balance",
                    when: "Days 7-10",
                    desc: "Stable mood, reduced anxiety",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/5 rounded-lg border border-cyan-500/20"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">
                        {item.state}
                      </span>
                      <span className="text-cyan-400 text-xs">{item.when}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">
                ⚠️ Challenging States
              </h3>
              <div className="space-y-3">
                {[
                  {
                    state: "Brain Fog",
                    when: "Days 2-3",
                    desc: "Temporary confusion as brain switches fuel sources",
                  },
                  {
                    state: "Irritability",
                    when: "Days 1-3",
                    desc: "Short temper, frustration—passes quickly",
                  },
                  {
                    state: "Emotional Releases",
                    when: "Days 4-7",
                    desc: "Old emotions surfacing—allow them to process",
                  },
                  {
                    state: "Detachment",
                    when: "Days 8-10",
                    desc: "Feeling distant from everyday concerns—normal",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/5 rounded-lg border border-blue-500/20"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">
                        {item.state}
                      </span>
                      <span className="text-blue-400 text-xs">{item.when}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Energy Levels */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
            ⚡
          </span>
          Energy Level Fluctuations
        </h2>
        <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 rounded-2xl p-6 border border-yellow-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Energy levels follow a predictable curve during dry fasting.
            Understanding this helps you plan your activities.
          </p>

          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              📈 Energy Curve Throughout the Fast
            </h3>
            <div className="space-y-3">
              {[
                { day: "Day 1", level: 70, desc: "Normal to slightly reduced" },
                {
                  day: "Day 2",
                  level: 30,
                  desc: "Lowest point—rest as much as possible",
                },
                {
                  day: "Day 3",
                  level: 40,
                  desc: "Still low but beginning to improve",
                },
                {
                  day: "Day 4",
                  level: 65,
                  desc: "Notable improvement, clarity emerging",
                },
                { day: "Day 5", level: 80, desc: "Good stable energy" },
                {
                  day: "Day 6",
                  level: 85,
                  desc: "Sustained energy, may feel better than pre-fast",
                },
                { day: "Day 7", level: 90, desc: "Peak energy for many" },
                { day: "Day 8", level: 85, desc: "Stable, strong energy" },
                { day: "Day 9", level: 80, desc: "Consistent energy" },
                { day: "Day 10", level: 75, desc: "Preparing for completion" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-14 text-gray-400 text-sm">{item.day}</span>
                  <div className="flex-1 h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full transition-all"
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
              💡 Activity Recommendations
            </h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>
                • <strong>Days 1-3:</strong> Rest, light reading, meditation
                only
              </li>
              <li>
                • <strong>Days 4-6:</strong> Light walking, gentle stretching
                okay
              </li>
              <li>
                • <strong>Days 7-10:</strong> Moderate activity acceptable but
                not strenuous
              </li>
              <li>
                • <strong>Throughout:</strong> Listen to your body—rest when
                tired
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🌡️</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Physical & Mental Summary
            </h3>
            <p className="text-white/90">
              During a 10-day dry fast, expect visible changes: tongue coating,
              concentrated urine, altered sleep, temperature fluctuations, and
              significant weight loss. Mentally, you'll likely experience
              initial difficulty followed by remarkable clarity and potential
              euphoria. Energy dips around Days 2-3 then rebounds. Track these
              changes in your journal—they're signs your body is healing and
              transforming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module6;
