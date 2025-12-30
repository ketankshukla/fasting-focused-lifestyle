import React from "react";

const Module4 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Pre-Fast Diet */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
            🥗
          </span>
          Pre-Fast Dietary Preparation
        </h2>
        <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-6 border border-purple-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Proper preparation in the 1-2 weeks before your dry fast makes a
            significant difference in how smoothly the fast goes and how
            beneficial it will be. Your body needs time to adapt.
          </p>

          <div className="space-y-6">
            {/* Week 2 Before */}
            <div className="bg-white/5 rounded-xl p-5 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                📅 2 Weeks Before
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-400 mb-2">
                    ✅ Start Doing
                  </h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Reduce processed food intake</li>
                    <li>• Increase water consumption (3-4L daily)</li>
                    <li>• Add more vegetables to meals</li>
                    <li>• Begin intermittent fasting (16:8)</li>
                    <li>• Reduce caffeine gradually</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-400 mb-2">
                    ❌ Start Eliminating
                  </h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Alcohol completely</li>
                    <li>• Sugary drinks and sodas</li>
                    <li>• Fast food and fried foods</li>
                    <li>• Heavy dairy products</li>
                    <li>• Excessive salt intake</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Week 1 Before */}
            <div className="bg-white/5 rounded-xl p-5 border border-violet-500/20">
              <h3 className="text-lg font-semibold text-violet-400 mb-4">
                📅 1 Week Before
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-400 mb-2">
                    ✅ Focus On
                  </h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Primarily plant-based meals</li>
                    <li>• Raw fruits and vegetables</li>
                    <li>• Light proteins (fish, eggs)</li>
                    <li>• Smoothies and juices</li>
                    <li>• Herbal teas (no caffeine)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-400 mb-2">
                    ❌ Avoid Completely
                  </h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• All caffeine</li>
                    <li>• Red meat</li>
                    <li>• Refined carbohydrates</li>
                    <li>• Artificial sweeteners</li>
                    <li>• Heavy, greasy meals</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2-3 Days Before */}
            <div className="bg-white/5 rounded-xl p-5 border border-pink-500/20">
              <h3 className="text-lg font-semibold text-pink-400 mb-4">
                📅 2-3 Days Before
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-400 mb-2">
                    ✅ Final Prep
                  </h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Mostly raw foods</li>
                    <li>• Fresh juices and smoothies</li>
                    <li>• Light soups (no salt)</li>
                    <li>• Watermelon and cucumber</li>
                    <li>• Small, frequent meals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-400 mb-2">
                    💡 Pro Tips
                  </h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Do a colon cleanse or enema</li>
                    <li>• Take your last meal by 6pm</li>
                    <li>• Hydrate well but don't overdo it</li>
                    <li>• Get extra sleep</li>
                    <li>• Mentally prepare and set intentions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Mental Preparation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
            🧘
          </span>
          Mental & Psychological Preparation
        </h2>
        <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-2xl p-6 border border-indigo-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Mental preparation is just as important as physical preparation.
            Your mindset will determine whether you complete the fast
            successfully.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-indigo-400">
                🎯 Setting Your Intention
              </h3>
              <div className="space-y-3">
                {[
                  {
                    q: "Why are you doing this fast?",
                    tip: "Be specific: health, weight loss, spiritual growth, reset",
                  },
                  {
                    q: "What do you want to achieve?",
                    tip: "Set measurable goals: lose X pounds, clear skin, mental clarity",
                  },
                  {
                    q: "What are you willing to sacrifice?",
                    tip: "Accept discomfort as part of transformation",
                  },
                  {
                    q: "How will you handle challenges?",
                    tip: "Plan strategies for hunger, thirst, and doubt",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <p className="text-white font-medium">{item.q}</p>
                    <p className="text-gray-500 text-sm mt-1">{item.tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">
                💪 Building Mental Strength
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    icon: "🧘",
                    text: "Practice meditation daily for 2 weeks before",
                    note: "Builds focus and willpower",
                  },
                  {
                    icon: "📖",
                    text: "Read success stories and research",
                    note: "Knowledge reduces fear",
                  },
                  {
                    icon: "✍️",
                    text: "Write down your commitment",
                    note: "Written goals are more powerful",
                  },
                  {
                    icon: "🗣️",
                    text: "Tell someone you trust",
                    note: "Accountability helps",
                  },
                  {
                    icon: "🎯",
                    text: "Visualize completing the fast",
                    note: "Mental rehearsal works",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-gray-200">{item.text}</p>
                      <p className="text-gray-500 text-sm">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Environment Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
            🏠
          </span>
          Setting Up Your Environment
        </h2>
        <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-2xl p-6 border border-teal-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Your environment plays a crucial role in your success. Remove
            temptations and create a supportive space for healing.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "🍽️",
                title: "Kitchen Prep",
                items: [
                  "Remove or hide tempting foods",
                  "Stock up on refeeding supplies",
                  "Clean out the fridge",
                  "Prepare bone broth in advance",
                  "Have coconut water ready",
                ],
              },
              {
                icon: "🛏️",
                title: "Rest Space",
                items: [
                  "Clean, comfortable bedroom",
                  "Extra blankets (you may feel cold)",
                  "Blackout curtains for sleep",
                  "Comfortable clothes ready",
                  "Books, journals, meditation apps",
                ],
              },
              {
                icon: "🚿",
                title: "Bathroom",
                items: [
                  "Tongue scraper",
                  "Dry brush for skin",
                  "Epsom salts for baths (soft fast)",
                  "Fresh towels",
                  "Scale for tracking",
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <span className="text-3xl">{section.icon}</span>
                <h3 className="text-lg font-semibold text-white mt-3 mb-3">
                  {section.title}
                </h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  {section.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Breaking Fast Supplies */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center">
            🛒
          </span>
          What to Have Ready for Breaking the Fast
        </h2>
        <div className="bg-gradient-to-br from-lime-900/30 to-green-900/30 rounded-2xl p-6 border border-lime-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Have these items ready BEFORE you start your fast. You won't want to
            go shopping when it's time to break your fast.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-green-500/20">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                🥤 First 24 Hours
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center text-green-400 text-sm">
                    1
                  </span>
                  Pure spring or filtered water
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center text-green-400 text-sm">
                    2
                  </span>
                  Fresh watermelon
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center text-green-400 text-sm">
                    3
                  </span>
                  Coconut water (no additives)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center text-green-400 text-sm">
                    4
                  </span>
                  Fresh cucumber
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center text-green-400 text-sm">
                    5
                  </span>
                  Homemade bone broth (prepared in advance)
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-lime-500/20">
              <h3 className="text-lg font-semibold text-lime-400 mb-4">
                🍽️ Days 2-7
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-lime-500/30 rounded-full flex items-center justify-center text-lime-400 text-sm">
                    ✓
                  </span>
                  Fresh fruits (melons, grapes, citrus)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-lime-500/30 rounded-full flex items-center justify-center text-lime-400 text-sm">
                    ✓
                  </span>
                  Raw vegetables (cucumber, celery, tomatoes)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-lime-500/30 rounded-full flex items-center justify-center text-lime-400 text-sm">
                    ✓
                  </span>
                  Fermented foods (sauerkraut, kimchi)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-lime-500/30 rounded-full flex items-center justify-center text-lime-400 text-sm">
                    ✓
                  </span>
                  Eggs (for day 3+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-lime-500/30 rounded-full flex items-center justify-center text-lime-400 text-sm">
                    ✓
                  </span>
                  Light fish (for day 4+)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Scheduling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
            📅
          </span>
          Scheduling Considerations
        </h2>
        <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Timing your fast correctly can make the difference between success
            and failure. Plan around your life, not against it.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-400">
                ✅ Ideal Timing
              </h3>
              <ul className="space-y-2">
                {[
                  "During vacation or time off work",
                  "When you have minimal social obligations",
                  "During a quiet period in your life",
                  "When weather is mild (not extreme heat)",
                  "When you can rest as needed",
                  "After any major deadlines are complete",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">
                ❌ Avoid Fasting During
              </h3>
              <ul className="space-y-2">
                {[
                  "High-stress work periods",
                  "Social events with food/drinks",
                  "Travel or major changes",
                  "Extremely hot weather",
                  "When others depend on you heavily",
                  "Times of emotional upheaval",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-red-400">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-amber-400 mb-2">
              💡 Pro Tip: The 10+7 Rule
            </h4>
            <p className="text-gray-300">
              Plan for at least 17 days total: 10 days of fasting + 7 days of
              careful refeeding. Don't schedule anything demanding during this
              entire period. Your body needs this time to heal and readjust.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Journaling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
            📔
          </span>
          Journaling & Tracking
        </h2>
        <div className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 rounded-2xl p-6 border border-rose-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Keeping a detailed journal during your fast provides valuable
            insights and helps you stay accountable.
          </p>

          <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
            <h3 className="text-lg font-semibold text-rose-400 mb-4">
              📝 Daily Tracking Template
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="text-white font-medium">Morning Check-in:</p>
                <ul className="text-gray-400 space-y-1">
                  <li>• Weight (same time daily)</li>
                  <li>• How did you sleep?</li>
                  <li>• Energy level (1-10)</li>
                  <li>• Mood (1-10)</li>
                  <li>• Any physical symptoms?</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-white font-medium">Evening Reflection:</p>
                <ul className="text-gray-400 space-y-1">
                  <li>• How was your day overall?</li>
                  <li>• Biggest challenge today?</li>
                  <li>• What helped you succeed?</li>
                  <li>• Mental clarity (1-10)</li>
                  <li>• Gratitude or insights</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "📊",
                title: "Track Metrics",
                desc: "Weight, waist measurement, blood pressure, ketone levels if testing",
              },
              {
                icon: "🌡️",
                title: "Note Symptoms",
                desc: "Headaches, energy, sleep quality, tongue coating, urine color",
              },
              {
                icon: "💭",
                title: "Record Insights",
                desc: "Mental clarity moments, emotional releases, dreams, spiritual experiences",
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

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Preparation Checklist
            </h3>
            <p className="text-white/90">
              Success in a 10-day dry fast is 80% preparation. Clean up your
              diet 1-2 weeks before, prepare mentally through meditation and
              intention-setting, set up your environment to support rest and
              healing, stock up on refeeding supplies, clear your schedule, and
              commit to daily journaling. The better you prepare, the smoother
              your fast will be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4;
