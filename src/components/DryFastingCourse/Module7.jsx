import React from "react";

const Module7 = () => {
  return (
    <div className="space-y-8">
      {/* Critical Importance Banner */}
      <div className="bg-gradient-to-r from-red-500/30 to-rose-500/30 rounded-2xl p-6 border-2 border-red-500/50">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚠️</span>
          <div>
            <h3 className="text-xl font-bold text-red-400 mb-2">
              Critical: Proper Refeeding Is Essential
            </h3>
            <p className="text-gray-200">
              How you break your fast is{" "}
              <strong className="text-white">just as important</strong> as the
              fast itself. Improper refeeding can negate benefits and cause
              serious discomfort. Take this section seriously—your body needs
              gentle reintroduction to food and water.
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
            The first 24 hours after a 10-day dry fast require careful, measured
            reintroduction of fluids and food. Follow this protocol precisely.
          </p>

          <div className="space-y-4">
            {[
              {
                time: "Hour 0-1",
                title: "First Water",
                icon: "💧",
                color: "from-cyan-500 to-blue-600",
                instructions: [
                  "Sip room-temperature water slowly",
                  "Take small sips only—do NOT gulp",
                  "Drink only 100-200ml (half a cup) over 30 minutes",
                  "Wait and assess how you feel",
                  "Your mouth and throat will feel incredible",
                ],
                warning:
                  "Do NOT drink large amounts—your stomach has shrunk significantly",
              },
              {
                time: "Hour 1-2",
                title: "More Water + Optional Lemon",
                icon: "🍋",
                color: "from-yellow-500 to-amber-600",
                instructions: [
                  "Continue sipping water slowly",
                  "Can add a squeeze of fresh lemon juice",
                  "Total water: 300-500ml by end of hour 2",
                  "Move slowly, rest between sips",
                  "Notice how your body responds",
                ],
                warning: "If you feel nauseous, slow down",
              },
              {
                time: "Hour 2-4",
                title: "First Food: Watermelon",
                icon: "🍉",
                color: "from-red-500 to-rose-600",
                instructions: [
                  "Fresh, ripe watermelon is ideal first food",
                  "Eat 1-2 small slices slowly",
                  "Chew thoroughly—at least 30 times per bite",
                  "High water content and natural sugars",
                  "Easy to digest, gentle on stomach",
                ],
                warning: "Alternative: fresh cucumber or honeydew melon",
              },
              {
                time: "Hour 4-6",
                title: "Coconut Water or Diluted Juice",
                icon: "🥥",
                color: "from-amber-500 to-orange-600",
                instructions: [
                  "Fresh coconut water (no additives)",
                  "Or fresh-pressed juice diluted 50% with water",
                  "Natural electrolytes begin replenishing",
                  "Continue small amounts of watermelon",
                  "Keep sipping water between",
                ],
                warning: "Avoid store-bought juices with added sugars",
              },
              {
                time: "Hour 6-8",
                title: "Warm Bone Broth",
                icon: "🍲",
                color: "from-orange-500 to-red-600",
                instructions: [
                  "Homemade bone broth is best",
                  "Warm (not hot), sip slowly",
                  "Start with 1 cup over 30 minutes",
                  "Rich in minerals and easy to absorb",
                  "Healing for the gut lining",
                ],
                warning: "Store-bought is okay if no additives/MSG",
              },
              {
                time: "Hour 8-12",
                title: "More Fruits",
                icon: "🍇",
                color: "from-purple-500 to-violet-600",
                instructions: [
                  "Add other watery fruits: grapes, oranges, cantaloupe",
                  "Small portions, eaten slowly",
                  "Continue bone broth and water",
                  "Listen to your body's signals",
                  "Stop if feeling full or uncomfortable",
                ],
                warning: "Avoid bananas and heavy fruits on day 1",
              },
              {
                time: "Hour 12-24",
                title: "Light Raw Vegetables",
                icon: "🥒",
                color: "from-green-500 to-emerald-600",
                instructions: [
                  "Cucumber, celery, tomatoes",
                  "Small salad with olive oil (no heavy dressings)",
                  "More bone broth",
                  "Continue hydrating",
                  "Total food still small amounts",
                ],
                warning: "No cooked food, no protein, no fat yet",
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

      {/* Section: Day-by-Day First Week */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            📅
          </span>
          Day-by-Day: First Week of Refeeding
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <div className="space-y-6">
            {/* Day 1 */}
            <div className="bg-white/5 rounded-xl p-5 border border-emerald-500/20">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                📆 Day 1 (Post-Fast)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-medium mb-2">✅ Eat</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Water (sipped slowly throughout)</li>
                    <li>• Watermelon, cucumber, melon</li>
                    <li>• Coconut water</li>
                    <li>• Fresh fruit juices (diluted)</li>
                    <li>• Bone broth (warm)</li>
                    <li>• Light raw salad (evening)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">❌ Avoid</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Any cooked food</li>
                    <li>• Protein (meat, eggs, fish)</li>
                    <li>• Fats and oils (except olive oil on salad)</li>
                    <li>• Bread, grains, starches</li>
                    <li>• Dairy products</li>
                    <li>• Coffee, alcohol</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white/5 rounded-xl p-5 border border-green-500/20">
              <h3 className="text-lg font-semibold text-green-400 mb-3">
                📆 Day 2
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-medium mb-2">✅ Add</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• More variety of raw fruits</li>
                    <li>• Larger raw salads</li>
                    <li>• Avocado (small amount)</li>
                    <li>• Fermented vegetables (sauerkraut)</li>
                    <li>• Vegetable soups (blended, warm)</li>
                    <li>• Smoothies with fruit only</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">
                    ❌ Still Avoid
                  </h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Animal protein</li>
                    <li>• Cooked starches</li>
                    <li>• Heavy fats</li>
                    <li>• Processed foods</li>
                    <li>• Coffee, alcohol</li>
                    <li>• Sugar, desserts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white/5 rounded-xl p-5 border border-teal-500/20">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">
                📆 Day 3
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-medium mb-2">✅ Add</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Lightly steamed vegetables</li>
                    <li>• Soft-boiled or poached eggs (1-2)</li>
                    <li>• Greek yogurt (plain, small amount)</li>
                    <li>• Nuts (soaked, small handful)</li>
                    <li>• More fermented foods</li>
                    <li>• Herbal teas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">⚠️ Notes</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• First protein introduction</li>
                    <li>• Keep portions small</li>
                    <li>• Chew thoroughly</li>
                    <li>• Still no red meat or heavy protein</li>
                    <li>• Continue high water intake</li>
                    <li>• Notice how digestion feels</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 4-5 */}
            <div className="bg-white/5 rounded-xl p-5 border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                📆 Days 4-5
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-medium mb-2">✅ Add</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Fish (baked or steamed, light portions)</li>
                    <li>• Chicken (small amounts, well-cooked)</li>
                    <li>• Cooked vegetables (wider variety)</li>
                    <li>• Quinoa or rice (small portions)</li>
                    <li>• Legumes (well-cooked, small amounts)</li>
                    <li>• More variety overall</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">⚠️ Notes</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Digestion should be working better</li>
                    <li>• Increase protein gradually</li>
                    <li>• Watch for any digestive discomfort</li>
                    <li>• Still avoid processed foods</li>
                    <li>• Coffee okay now (if desired)</li>
                    <li>• Keep eating slowly</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 6-7 */}
            <div className="bg-white/5 rounded-xl p-5 border border-blue-500/20">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">
                📆 Days 6-7
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-medium mb-2">✅ Add</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Red meat (small portions, well-chewed)</li>
                    <li>• Full variety of vegetables</li>
                    <li>• Normal portion sizes</li>
                    <li>• Healthy fats (olive oil, butter)</li>
                    <li>• Most whole foods acceptable</li>
                    <li>• Return to normal eating pattern</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">
                    ❌ Continue Avoiding
                  </h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Processed junk food</li>
                    <li>• Excessive sugar</li>
                    <li>• Alcohol (at least until Day 10)</li>
                    <li>• Very heavy/greasy meals</li>
                    <li>• Fast food</li>
                    <li>• Overeating</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Food Introduction Order */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            📋
          </span>
          Foods to Introduce (In Order)
        </h2>
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-orange-400 mb-4">
                🥇 First (Day 1)
              </h3>
              <ul className="space-y-2">
                {[
                  "Water",
                  "Watermelon",
                  "Cucumber",
                  "Coconut water",
                  "Bone broth",
                  "Melon",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center text-green-400 text-xs">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">
                🥈 Second (Days 2-3)
              </h3>
              <ul className="space-y-2">
                {[
                  "Other fresh fruits",
                  "Raw vegetables",
                  "Avocado",
                  "Fermented foods",
                  "Eggs",
                  "Light soups",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="w-6 h-6 bg-amber-500/30 rounded-full flex items-center justify-center text-amber-400 text-xs">
                      {i + 7}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                🥉 Third (Days 4-5)
              </h3>
              <ul className="space-y-2">
                {[
                  "Fish",
                  "Chicken",
                  "Cooked vegetables",
                  "Grains",
                  "Legumes",
                  "Dairy",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="w-6 h-6 bg-yellow-500/30 rounded-full flex items-center justify-center text-yellow-400 text-xs">
                      {i + 13}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-red-400 mb-4">
                🏅 Last (Days 6-7+)
              </h3>
              <ul className="space-y-2">
                {[
                  "Red meat",
                  "Heavy fats",
                  "Complex meals",
                  "Coffee/tea",
                  "Bread products",
                  "Normal diet",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="w-6 h-6 bg-red-500/30 rounded-full flex items-center justify-center text-red-400 text-xs">
                      {i + 19}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What to Avoid */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center">
            🚫
          </span>
          What to Avoid During Refeeding
        </h2>
        <div className="bg-gradient-to-br from-red-900/30 to-rose-900/30 rounded-2xl p-6 border border-red-500/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-red-500/20">
              <h3 className="text-lg font-semibold text-red-400 mb-4">
                ❌ Never Do
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>
                    <strong>Drink large amounts of water quickly</strong> — can
                    cause dangerous electrolyte imbalances
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>
                    <strong>Eat a large meal</strong> — your stomach has shrunk;
                    overeating causes severe discomfort
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>
                    <strong>Consume processed foods</strong> — your body is
                    sensitive; chemicals hit harder
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>
                    <strong>Drink alcohol</strong> — extremely dangerous after
                    fasting; wait at least 10 days
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>
                    <strong>Rush the process</strong> — refeeding syndrome is
                    real and dangerous
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-rose-500/20">
              <h3 className="text-lg font-semibold text-rose-400 mb-4">
                ⚠️ Avoid First Week
              </h3>
              <ul className="text-gray-300 space-y-2">
                {[
                  "Fried foods",
                  "Fast food",
                  "Refined sugar",
                  "Artificial sweeteners",
                  "Carbonated drinks",
                  "Heavy cream sauces",
                  "Very spicy food",
                  "Excessive salt",
                  "Processed meats",
                  "Pastries and desserts",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-rose-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Recovery Timeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
            ⏳
          </span>
          Full Digestive Recovery Timeline
        </h2>
        <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-6 border border-purple-500/30">
          <div className="space-y-4">
            {[
              {
                period: "Days 1-3",
                status: "30%",
                desc: "Digestive system reactivating. Keep foods simple and easy.",
              },
              {
                period: "Days 4-7",
                status: "60%",
                desc: "Enzymes restoring. Can handle more variety but still gentle.",
              },
              {
                period: "Week 2",
                status: "80%",
                desc: "Normal digestion returning. Most foods tolerated.",
              },
              {
                period: "Week 3-4",
                status: "95%",
                desc: "Full recovery. Normal eating patterns resume.",
              },
              {
                period: "Month 2+",
                status: "100%",
                desc: "Complete restoration with improved baseline function.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl"
              >
                <div className="w-24 text-purple-400 font-semibold">
                  {item.period}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-violet-500"
                        style={{ width: item.status }}
                      />
                    </div>
                    <span className="text-purple-400 text-sm">
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

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-lime-500 to-green-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🍉</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Refeeding Summary
            </h3>
            <p className="text-white/90">
              Breaking a 10-day dry fast requires patience and precision. Start
              with small sips of water, progress to watermelon and bone broth,
              then slowly add fruits, vegetables, and finally proteins over 7
              days. The rule is simple:{" "}
              <strong>go slow, listen to your body, and don't rush</strong>.
              Proper refeeding locks in your fasting benefits and ensures a safe
              transition back to normal eating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module7;
