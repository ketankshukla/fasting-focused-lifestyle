import React from "react";

const WFModule8 = () => {
  return (
    <div className="space-y-8">
      {/* Critical Warning */}
      <div className="bg-gradient-to-r from-red-500/30 to-rose-500/30 rounded-2xl p-6 border-2 border-red-500/50">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚠️</span>
          <div>
            <h3 className="text-xl font-bold text-red-400 mb-2">
              Breaking Your Fast Properly Is Critical
            </h3>
            <p className="text-gray-200">
              How you break your fast is{" "}
              <strong className="text-white">just as important</strong> as the
              fast itself. Improper refeeding can cause serious discomfort,
              negate benefits, and in extreme cases lead to refeeding syndrome.
              Take this module seriously.
            </p>
          </div>
        </div>
      </div>

      {/* Section: First 24 Hours */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center">
            ⏰
          </span>
          Hour-by-Hour: First 24 Hours
        </h2>
        <div className="bg-gradient-to-br from-lime-900/30 to-green-900/30 rounded-2xl p-6 border border-lime-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            The first 24 hours require careful, measured reintroduction. Your
            digestive system has been dormant—wake it up gently.
          </p>

          <div className="space-y-4">
            {[
              {
                time: "Hour 0-2",
                title: "First Food: Diluted Juice or Broth",
                icon: "🥤",
                color: "from-cyan-500 to-blue-600",
                instructions: [
                  "Fresh fruit juice diluted 50% with water, OR",
                  "Warm bone broth (no chunks)",
                  "Sip very slowly over 30-60 minutes",
                  "Small amount only: 8-12 oz total",
                  "Continue taking electrolytes",
                ],
                warning: "Do NOT eat solid food yet or drink undiluted juice",
              },
              {
                time: "Hour 2-4",
                title: "Watermelon or Cucumber",
                icon: "🍉",
                color: "from-red-500 to-rose-600",
                instructions: [
                  "Fresh watermelon is ideal first solid food",
                  "High water content, easy to digest",
                  "Eat slowly—chew thoroughly (30+ times)",
                  "1-2 small slices maximum",
                  "Cucumber also excellent option",
                ],
                warning: "Stop if you feel any discomfort",
              },
              {
                time: "Hour 4-8",
                title: "More Fruit & Broth",
                icon: "🍇",
                color: "from-purple-500 to-violet-600",
                instructions: [
                  "More watermelon or other watery fruits",
                  "Grapes, oranges, melon acceptable",
                  "Continue bone broth if desired",
                  "Small portions, eaten slowly",
                  "Stay hydrated (with electrolytes)",
                ],
                warning: "Avoid heavy fruits like bananas",
              },
              {
                time: "Hour 8-12",
                title: "Light Raw Vegetables",
                icon: "🥒",
                color: "from-emerald-500 to-green-600",
                instructions: [
                  "Cucumber, celery, tomatoes",
                  "Small raw salad with olive oil",
                  "No heavy dressings",
                  "Continue with fruits and broth",
                  "Listen to your body's signals",
                ],
                warning:
                  "Still no cooked food, protein, or fats beyond olive oil",
              },
              {
                time: "Hour 12-24",
                title: "Larger Portions, More Variety",
                icon: "🥗",
                color: "from-teal-500 to-cyan-600",
                instructions: [
                  "Larger salads acceptable",
                  "More variety of raw fruits and vegetables",
                  "Light vegetable soup (blended) okay",
                  "Fermented foods (small amount): sauerkraut, kimchi",
                  "Continue prioritizing easy-to-digest foods",
                ],
                warning: "Still no animal protein, grains, or heavy meals",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${item.color} bg-opacity-10 rounded-xl overflow-hidden`}
              >
                <div className={`bg-gradient-to-r ${item.color} px-4 py-2`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white font-bold">{item.time}</span>
                    <span className="text-white/80 mx-2">—</span>
                    <span className="text-white font-semibold">
                      {item.title}
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-gray-800/50">
                  <ul className="text-gray-300 text-sm space-y-1 mb-3">
                    {item.instructions.map((inst, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        {inst}
                      </li>
                    ))}
                  </ul>
                  <p className="text-amber-400 text-sm flex items-start gap-2">
                    <span>⚠️</span>
                    {item.warning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Days 2-7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            📅
          </span>
          Day-by-Day: First Week of Refeeding
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <div className="space-y-6">
            {[
              {
                day: "Day 2",
                add: [
                  "Smoothies (fruit only)",
                  "Avocado (small amount)",
                  "Cooked vegetables (steamed, light)",
                  "Vegetable soups",
                  "More fermented foods",
                ],
                avoid: [
                  "Animal protein",
                  "Grains and starches",
                  "Heavy fats",
                  "Processed foods",
                ],
                color: "emerald",
              },
              {
                day: "Day 3",
                add: [
                  "Eggs (soft-boiled or poached, 1-2)",
                  "Greek yogurt (plain, small)",
                  "Soaked nuts (small handful)",
                  "Wider variety of cooked vegetables",
                  "Herbal teas",
                ],
                avoid: [
                  "Red meat",
                  "Heavy dairy",
                  "Bread and grains",
                  "Processed foods",
                ],
                color: "green",
              },
              {
                day: "Days 4-5",
                add: [
                  "Fish (baked or steamed)",
                  "Chicken (small portions)",
                  "Quinoa or rice (small amounts)",
                  "Legumes (well-cooked)",
                  "Coffee okay now",
                ],
                avoid: [
                  "Red meat",
                  "Large portions",
                  "Fried foods",
                  "Sugar and desserts",
                ],
                color: "teal",
              },
              {
                day: "Days 6-7",
                add: [
                  "Red meat (small portions)",
                  "Normal portion sizes",
                  "Most whole foods",
                  "Healthy fats",
                  "Return to normal eating",
                ],
                avoid: [
                  "Junk food",
                  "Excessive sugar",
                  "Alcohol",
                  "Overeating",
                ],
                color: "cyan",
              },
            ].map((phase, i) => (
              <div
                key={i}
                className={`bg-white/5 rounded-xl p-5 border border-${phase.color}-500/20`}
              >
                <h3
                  className={`text-lg font-semibold text-${phase.color}-400 mb-3`}
                >
                  📆 {phase.day}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">✅ Can Add</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {phase.add.map((item, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="text-green-400">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      ❌ Still Avoid
                    </h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {phase.avoid.map((item, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="text-red-400">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: What to Avoid */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center">
            🚫
          </span>
          Critical Mistakes to Avoid
        </h2>
        <div className="bg-gradient-to-br from-red-900/30 to-rose-900/30 rounded-2xl p-6 border border-red-500/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-red-500/20">
              <h3 className="text-lg font-semibold text-red-400 mb-4">
                ❌ Never Do
              </h3>
              <ul className="text-gray-300 space-y-3">
                {[
                  {
                    mistake: "Eat a large meal",
                    why: "Stomach has shrunk—causes severe pain and discomfort",
                  },
                  {
                    mistake: "Eat fast food or junk",
                    why: "Body is sensitive—chemicals hit much harder",
                  },
                  {
                    mistake: "Drink alcohol",
                    why: "Extremely dangerous after fasting—wait 7-10 days minimum",
                  },
                  {
                    mistake: "Eat heavy proteins immediately",
                    why: "Digestive enzymes not ready—causes bloating and pain",
                  },
                  {
                    mistake: "Rush the process",
                    why: "Risk of refeeding syndrome and GI distress",
                  },
                ].map((item, i) => (
                  <li key={i}>
                    <span className="text-white font-medium">
                      {item.mistake}
                    </span>
                    <p className="text-gray-500 text-sm">{item.why}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-rose-500/20">
              <h3 className="text-lg font-semibold text-rose-400 mb-4">
                ⚠️ Avoid First Week
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                {[
                  "Fried foods of any kind",
                  "Fast food and processed meals",
                  "Refined sugar and desserts",
                  "Carbonated drinks",
                  "Spicy foods",
                  "Heavy cream sauces",
                  "Large portion sizes",
                  "Eating quickly or while distracted",
                  "Alcohol (wait until Day 10+)",
                  "Artificial sweeteners",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-rose-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-red-400 mb-2">
              🚨 Refeeding Syndrome Warning
            </h4>
            <p className="text-gray-300 text-sm">
              Refeeding syndrome is a potentially serious condition that can
              occur when eating too much too quickly after extended fasting. It
              involves dangerous shifts in electrolytes (especially phosphorus).
              Symptoms include weakness, confusion, heart problems. Prevent it
              by: refeeding slowly, starting with small portions, avoiding
              high-carb foods initially, and continuing electrolyte
              supplementation through refeeding.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Signs of Problems */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
            🩺
          </span>
          Normal vs. Problem Signs During Refeeding
        </h2>
        <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                ✅ Normal During Refeeding
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                {[
                  "Mild bloating (temporary)",
                  "Increased bowel movements",
                  "Temporary water weight gain",
                  "Feeling full quickly",
                  "Some gas (digestive restart)",
                  "Slight energy fluctuation",
                  "Food tasting incredibly intense",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-4">
                🚨 Seek Help If
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                {[
                  "Severe abdominal pain",
                  "Persistent vomiting",
                  "Heart palpitations that don't resolve",
                  "Extreme weakness or confusion",
                  "Swelling in legs or feet",
                  "Difficulty breathing",
                  "Chest pain",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-red-400">⚠️</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Refeeding Timeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            ⏳
          </span>
          Full Recovery Timeline
        </h2>
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-2xl p-6 border border-violet-500/30">
          <div className="space-y-4">
            {[
              {
                period: "Days 1-3",
                status: "40%",
                desc: "Digestive system reactivating. Keep foods very simple.",
              },
              {
                period: "Days 4-7",
                status: "70%",
                desc: "Enzymes restoring. Most foods tolerated in small amounts.",
              },
              {
                period: "Week 2",
                status: "90%",
                desc: "Near-normal digestion. Can eat most foods.",
              },
              {
                period: "Week 3-4",
                status: "100%",
                desc: "Full recovery. Normal eating fully resumed.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl"
              >
                <div className="w-24 text-violet-400 font-semibold">
                  {item.period}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                        style={{ width: item.status }}
                      />
                    </div>
                    <span className="text-violet-400 text-sm">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electrolyte Note */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚡</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Continue Electrolytes During Refeeding
            </h3>
            <p className="text-white/90">
              Don't stop electrolytes immediately when you break your fast.
              Continue supplementation for the first 3-5 days of refeeding,
              gradually reducing as you eat more mineral-rich foods. This helps
              prevent refeeding syndrome and supports your recovery.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-lime-500 to-green-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🍉</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Module Summary
            </h3>
            <p className="text-white/90">
              Breaking your fast properly is critical for safety and locking in
              benefits. Start with diluted juice or broth, progress to
              watermelon, then raw vegetables, and slowly reintroduce proteins
              over 5-7 days. Never eat a large meal, junk food, or alcohol.
              Continue electrolytes during refeeding. The golden rule: go slow,
              listen to your body, and don't rush back to normal eating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFModule8;
