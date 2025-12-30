import React from "react";

const WFModule4 = () => {
  return (
    <div className="space-y-8">
      {/* Critical Warning Banner */}
      <div className="bg-gradient-to-r from-red-500/30 to-rose-500/30 rounded-2xl p-6 border-2 border-red-500/50">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🚨</span>
          <div>
            <h3 className="text-xl font-bold text-red-400 mb-2">
              The Most Important Module in This Course
            </h3>
            <p className="text-gray-200">
              <strong className="text-white">
                Electrolytes are non-negotiable.
              </strong>{" "}
              Drinking plain water during extended fasting is dangerous and can
              lead to serious complications. This module teaches you exactly
              what you need, how much, and when to take it.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Why Electrolytes Matter */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
            ⚡
          </span>
          Why Electrolytes Are Essential
        </h2>
        <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 rounded-2xl p-6 border border-yellow-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Electrolytes are minerals that carry electrical charges, essential
            for virtually every bodily function. During fasting, you lose
            electrolytes rapidly through urine as insulin drops. Without
            replacement, you'll experience debilitating symptoms.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-4">
                ❌ Plain Water Dangers
              </h3>
              <p className="text-gray-300 mb-3">
                Drinking plain water during extended fasts:
              </p>
              <ul className="text-gray-300 space-y-2">
                {[
                  "Dilutes already-low electrolytes further",
                  "Causes hyponatremia (dangerously low sodium)",
                  "Leads to heart palpitations and arrhythmias",
                  "Creates severe muscle cramps and weakness",
                  "Triggers headaches, nausea, and dizziness",
                  "Can cause confusion and cognitive issues",
                  "In severe cases: seizures and hospitalization",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                ✅ Electrolyte Water Benefits
              </h3>
              <p className="text-gray-300 mb-3">
                Water with proper electrolytes:
              </p>
              <ul className="text-gray-300 space-y-2">
                {[
                  "Maintains proper mineral balance",
                  "Keeps heart rhythm stable and healthy",
                  "Prevents muscle cramps entirely",
                  "Eliminates most fasting headaches",
                  "Maintains energy and mental clarity",
                  "Allows you to fast longer safely",
                  "Makes fasting dramatically easier",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Big Three */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            🧂
          </span>
          The Big Three: Sodium, Potassium, Magnesium
        </h2>
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Sodium */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🧂</span>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Sodium</h3>
              <div className="bg-blue-500/20 rounded-lg p-3 mb-4">
                <p className="text-white font-bold text-lg">
                  4,000-7,000 mg/day
                </p>
                <p className="text-blue-300 text-sm">~2-3 teaspoons salt</p>
              </div>
              <h4 className="text-white font-medium mb-2">Functions:</h4>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>• Fluid balance regulation</li>
                <li>• Nerve signal transmission</li>
                <li>• Blood pressure maintenance</li>
                <li>• Muscle contraction</li>
              </ul>
              <h4 className="text-white font-medium mb-2">Deficiency Signs:</h4>
              <ul className="text-red-400 text-sm space-y-1">
                <li>• Headache, fatigue</li>
                <li>• Nausea, dizziness</li>
                <li>• Muscle cramps</li>
                <li>• Confusion</li>
              </ul>
              <h4 className="text-white font-medium mt-4 mb-2">Sources:</h4>
              <p className="text-gray-400 text-sm">
                Himalayan pink salt, sea salt, table salt, sodium chloride
                tablets
              </p>
            </div>

            {/* Potassium */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🍌</span>
              </div>
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                Potassium
              </h3>
              <div className="bg-orange-500/20 rounded-lg p-3 mb-4">
                <p className="text-white font-bold text-lg">
                  2,000-4,000 mg/day
                </p>
                <p className="text-orange-300 text-sm">
                  ~1/2-1 tsp potassium salt
                </p>
              </div>
              <h4 className="text-white font-medium mb-2">Functions:</h4>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>• Heart rhythm regulation</li>
                <li>• Muscle function</li>
                <li>• Nerve transmission</li>
                <li>• Balances sodium</li>
              </ul>
              <h4 className="text-white font-medium mb-2">Deficiency Signs:</h4>
              <ul className="text-red-400 text-sm space-y-1">
                <li>• Heart palpitations</li>
                <li>• Severe weakness</li>
                <li>• Muscle cramps</li>
                <li>• Fatigue, lethargy</li>
              </ul>
              <h4 className="text-white font-medium mt-4 mb-2">Sources:</h4>
              <p className="text-gray-400 text-sm">
                NoSalt, Nu-Salt, Lite Salt, potassium chloride, cream of tartar
              </p>
            </div>

            {/* Magnesium */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">
                Magnesium
              </h3>
              <div className="bg-purple-500/20 rounded-lg p-3 mb-4">
                <p className="text-white font-bold text-lg">300-500 mg/day</p>
                <p className="text-purple-300 text-sm">Supplement form best</p>
              </div>
              <h4 className="text-white font-medium mb-2">Functions:</h4>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>• 300+ enzyme reactions</li>
                <li>• Muscle relaxation</li>
                <li>• Sleep quality</li>
                <li>• Heart rhythm</li>
              </ul>
              <h4 className="text-white font-medium mb-2">Deficiency Signs:</h4>
              <ul className="text-red-400 text-sm space-y-1">
                <li>• Muscle twitches/cramps</li>
                <li>• Insomnia</li>
                <li>• Anxiety, irritability</li>
                <li>• Heart palpitations</li>
              </ul>
              <h4 className="text-white font-medium mt-4 mb-2">Sources:</h4>
              <p className="text-gray-400 text-sm">
                Magnesium citrate, glycinate, or malate supplements. Epsom salt
                baths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Daily Protocol */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            📋
          </span>
          Daily Electrolyte Protocol
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Follow this simple daily protocol to maintain proper electrolyte
            levels throughout your fast.
          </p>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              🥤 The Snake Juice Recipe
            </h3>
            <p className="text-gray-300 mb-4">
              This popular electrolyte mix provides everything you need. Mix in
              2 liters (half gallon) of water:
            </p>
            <div className="bg-gray-800/50 rounded-xl p-5 space-y-3">
              {[
                {
                  ingredient: "Himalayan Pink Salt (or sea salt)",
                  amount: "1/2 teaspoon",
                  provides: "~1,150 mg sodium",
                },
                {
                  ingredient: "NoSalt or Nu-Salt (potassium chloride)",
                  amount: "1/2 teaspoon",
                  provides: "~1,280 mg potassium",
                },
                {
                  ingredient: "Baking Soda (sodium bicarbonate)",
                  amount: "1/2 teaspoon",
                  provides: "~630 mg sodium",
                },
                {
                  ingredient: "Epsom Salt (magnesium sulfate) - optional",
                  amount: "1/4 teaspoon",
                  provides: "~125 mg magnesium",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-wrap items-center justify-between gap-2 p-3 bg-white/5 rounded-lg"
                >
                  <span className="text-white font-medium">
                    {item.ingredient}
                  </span>
                  <span className="text-emerald-400">{item.amount}</span>
                  <span className="text-gray-500 text-sm">{item.provides}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Sip throughout the day. Make 2-3 batches daily depending on your
              needs. Adjust salt up if experiencing symptoms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                ⏰ When to Take
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">Morning:</span>
                  Start with a glass of electrolyte water
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">
                    Throughout Day:
                  </span>
                  Sip electrolyte water regularly
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">Evening:</span>
                  Take magnesium supplement before bed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">As Needed:</span>
                  Extra salt if feeling symptoms
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-teal-400 mb-4">
                💡 Pro Tips
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  If you get headaches, take more sodium immediately
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  Heart palpitations = need more potassium
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  Muscle cramps = likely magnesium deficiency
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  Listen to your body—symptoms tell you what's low
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  More active = need more electrolytes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Commercial Options */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            🛒
          </span>
          Commercial Electrolyte Options
        </h2>
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-2xl p-6 border border-violet-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            If you prefer convenience over making your own, these products work
            well for fasting. Look for products without sugar or calories.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "LMNT",
                pros: "High sodium (1000mg), good taste, no sugar",
                cons: "Expensive, lower potassium",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Keto Vitals",
                pros: "Balanced formula, capsule form available",
                cons: "May need multiple servings",
                rating: "⭐⭐⭐⭐",
              },
              {
                name: "Dr. Berg's Electrolyte",
                pros: "High potassium, good for fasting",
                cons: "Taste varies",
                rating: "⭐⭐⭐⭐",
              },
              {
                name: "Ultima Replenisher",
                pros: "Good taste, plant-based colors",
                cons: "Lower sodium, may need extra salt",
                rating: "⭐⭐⭐",
              },
              {
                name: "Nuun Tablets",
                pros: "Convenient tablets, good taste",
                cons: "Too low in electrolytes for fasting alone",
                rating: "⭐⭐⭐",
              },
              {
                name: "DIY Snake Juice",
                pros: "Cheapest option, fully customizable",
                cons: "Taste takes getting used to",
                rating: "⭐⭐⭐⭐⭐",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <span className="text-sm">{item.rating}</span>
                </div>
                <p className="text-green-400 text-sm mb-1">✓ {item.pros}</p>
                <p className="text-gray-500 text-sm">⚠️ {item.cons}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-red-400 mb-2">
              ⚠️ Avoid These During Fasting
            </h4>
            <ul className="text-gray-300 text-sm grid md:grid-cols-2 gap-2">
              <li>• Gatorade / Powerade (full of sugar)</li>
              <li>• Pedialyte (contains sugar)</li>
              <li>• Most sports drinks (too much sugar)</li>
              <li>• Coconut water alone (not enough sodium)</li>
              <li>• Plain water only (dilutes electrolytes)</li>
              <li>• Low-sodium electrolyte mixes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Symptoms Chart */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
            🩺
          </span>
          Symptom Guide: What Your Body Is Telling You
        </h2>
        <div className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 rounded-2xl p-6 border border-rose-500/30">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-left text-gray-400">Symptom</th>
                  <th className="py-3 px-4 text-left text-gray-400">
                    Likely Deficiency
                  </th>
                  <th className="py-3 px-4 text-left text-gray-400">
                    Quick Fix
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  {
                    symptom: "Headache",
                    deficiency: "Sodium",
                    fix: "Take 1/4-1/2 tsp salt in water immediately",
                  },
                  {
                    symptom: "Dizziness when standing",
                    deficiency: "Sodium",
                    fix: "More salt, stand up slowly",
                  },
                  {
                    symptom: "Heart palpitations",
                    deficiency: "Potassium (or Magnesium)",
                    fix: "Take potassium supplement, rest",
                  },
                  {
                    symptom: "Muscle cramps",
                    deficiency: "Magnesium (or Potassium)",
                    fix: "Magnesium supplement, Epsom salt bath",
                  },
                  {
                    symptom: "Severe fatigue/weakness",
                    deficiency: "All electrolytes",
                    fix: "Full electrolyte dose, rest",
                  },
                  {
                    symptom: "Nausea",
                    deficiency: "Sodium",
                    fix: "Small sips of salty water",
                  },
                  {
                    symptom: "Insomnia/restlessness",
                    deficiency: "Magnesium",
                    fix: "Magnesium before bed",
                  },
                  {
                    symptom: "Muscle twitching",
                    deficiency: "Magnesium",
                    fix: "Magnesium supplement",
                  },
                  {
                    symptom: "Brain fog",
                    deficiency: "Sodium",
                    fix: "Increase salt intake",
                  },
                  {
                    symptom: "Irritability",
                    deficiency: "Magnesium",
                    fix: "Magnesium supplement",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="py-3 px-4">{row.symptom}</td>
                    <td className="py-3 px-4 text-yellow-400">
                      {row.deficiency}
                    </td>
                    <td className="py-3 px-4 text-green-400">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Golden Rule */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚡</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              The Golden Rule of Water Fasting
            </h3>
            <p className="text-white/90 text-lg">
              <strong>Never drink plain water during extended fasts.</strong>{" "}
              Every single glass of water should contain electrolytes. If you
              remember nothing else from this course, remember this.
              Electrolytes are the difference between a safe, comfortable fast
              and a dangerous, miserable one.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🧂</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Module Summary
            </h3>
            <p className="text-white/90">
              Electrolytes (sodium, potassium, magnesium) are absolutely
              essential for safe water fasting. Aim for 4,000-7,000mg sodium,
              2,000-4,000mg potassium, and 300-500mg magnesium daily. Use Snake
              Juice or a quality electrolyte supplement. Learn to recognize
              deficiency symptoms and respond quickly. Never, ever drink plain
              water during extended fasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFModule4;
