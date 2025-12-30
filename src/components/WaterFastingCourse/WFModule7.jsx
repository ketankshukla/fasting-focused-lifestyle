import React from "react";

const WFModule7 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Physical Symptoms */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            🌡️
          </span>
          Physical Symptoms & What They Mean
        </h2>
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Your body goes through significant changes during an extended fast.
            Understanding what's normal helps you stay calm and know when to
            act.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Normal Symptoms */}
            <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                ✅ Normal & Expected
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    symptom: "Hunger waves (especially Days 1-3)",
                    note: "Comes and goes, diminishes over time",
                  },
                  {
                    symptom: "Tongue coating (white/yellow)",
                    note: "Sign of detoxification—use tongue scraper",
                  },
                  {
                    symptom: "Bad breath (ketone breath)",
                    note: "Acetone smell = you're in ketosis",
                  },
                  {
                    symptom: "Feeling cold",
                    note: "Metabolism slows, dress warmly",
                  },
                  {
                    symptom: "Vivid dreams",
                    note: "Brain activity changes during fasting",
                  },
                  {
                    symptom: "Less sleep needed",
                    note: "Ketones provide efficient brain fuel",
                  },
                  {
                    symptom: "Temporary weakness (Days 2-3)",
                    note: "Improves after adaptation",
                  },
                  {
                    symptom: "Light-headedness when standing",
                    note: "Take more salt, stand up slowly",
                  },
                ].map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm">
                    <span className="font-medium text-white">
                      {item.symptom}
                    </span>
                    <p className="text-gray-500 text-xs">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Electrolyte Symptoms */}
            <div className="bg-yellow-500/10 rounded-xl p-5 border border-yellow-500/30">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                ⚡ Electrolyte-Related (Fixable!)
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    symptom: "Headache",
                    fix: "Take 1/4-1/2 tsp salt immediately",
                  },
                  {
                    symptom: "Heart palpitations",
                    fix: "Potassium—take supplement, rest",
                  },
                  {
                    symptom: "Muscle cramps",
                    fix: "Magnesium—supplement + Epsom bath",
                  },
                  {
                    symptom: "Severe fatigue",
                    fix: "All electrolytes—full dose",
                  },
                  { symptom: "Nausea", fix: "Small sips of salty water" },
                  { symptom: "Dizziness", fix: "More sodium, sit down" },
                  { symptom: "Brain fog", fix: "Increase salt intake" },
                  {
                    symptom: "Irritability",
                    fix: "Often magnesium deficiency",
                  },
                ].map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm">
                    <span className="font-medium text-white">
                      {item.symptom}
                    </span>
                    <p className="text-yellow-400 text-xs">Fix: {item.fix}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="mt-6 bg-red-500/10 rounded-xl p-5 border border-red-500/30">
            <h3 className="text-lg font-semibold text-red-400 mb-4">
              🚨 Warning Signs (Consider Breaking Fast)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">⚠️</span> Severe or persistent
                  chest pain
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">⚠️</span> Fainting or loss of
                  consciousness
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">⚠️</span> Severe confusion or
                  disorientation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">⚠️</span> Inability to keep
                  water down
                </li>
              </ul>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">⚠️</span> Severe abdominal pain
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">⚠️</span> Blood in urine or
                  stool
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">⚠️</span> Irregular heartbeat
                  that doesn't resolve with electrolytes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">⚠️</span> Extreme weakness that
                  doesn't improve
                </li>
              </ul>
            </div>
            <p className="text-red-300 text-sm mt-4">
              If you experience these symptoms, break your fast carefully with
              diluted juice or broth, and seek medical attention if needed.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Mental & Emotional */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
            💭
          </span>
          Mental & Emotional Experiences
        </h2>
        <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-6 border border-purple-500/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400">
                ✨ Positive States
              </h3>
              <div className="space-y-3">
                {[
                  {
                    state: "Mental Clarity",
                    when: "Days 4+",
                    desc: "Exceptional focus and clear thinking",
                  },
                  {
                    state: "Euphoria",
                    when: "Days 5-7",
                    desc: "Feelings of peace and wellbeing",
                  },
                  {
                    state: "Spiritual Insights",
                    when: "Days 6+",
                    desc: "Many report profound realizations",
                  },
                  {
                    state: "Emotional Stability",
                    when: "Days 5+",
                    desc: "Calmer, more balanced mood",
                  },
                  {
                    state: "Heightened Senses",
                    when: "Days 4+",
                    desc: "Colors brighter, smells stronger",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/5 rounded-lg border border-purple-500/20"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">
                        {item.state}
                      </span>
                      <span className="text-purple-400 text-xs">
                        {item.when}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-violet-400">
                ⚠️ Challenging States
              </h3>
              <div className="space-y-3">
                {[
                  {
                    state: "Irritability",
                    when: "Days 1-3",
                    desc: "Hangry feelings—passes after adaptation",
                  },
                  {
                    state: "Brain Fog",
                    when: "Days 2-3",
                    desc: "Often electrolyte-related—add salt",
                  },
                  {
                    state: "Food Obsession",
                    when: "Days 1-4",
                    desc: "Thinking about food constantly—diminishes",
                  },
                  {
                    state: "Emotional Releases",
                    when: "Days 4-7",
                    desc: "Old emotions surfacing—allow processing",
                  },
                  {
                    state: "Boredom",
                    when: "Throughout",
                    desc: "Much time normally spent eating—find activities",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/5 rounded-lg border border-violet-500/20"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">
                        {item.state}
                      </span>
                      <span className="text-violet-400 text-xs">
                        {item.when}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Sleep Changes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
            😴
          </span>
          Sleep Changes
        </h2>
        <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-2xl p-6 border border-indigo-500/30">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Need Less Sleep",
                desc: "Many fasters need only 4-6 hours yet feel fully rested. Ketones provide efficient brain fuel.",
                icon: "⏰",
                color: "from-blue-500 to-indigo-600",
              },
              {
                title: "Vivid Dreams",
                desc: "Dreams become more memorable, vivid, and sometimes meaningful. Keep a dream journal.",
                icon: "🌙",
                color: "from-purple-500 to-violet-600",
              },
              {
                title: "Lighter Sleep",
                desc: "Sleep may feel lighter but more refreshing. You might wake easily but feel restored.",
                icon: "💤",
                color: "from-violet-500 to-fuchsia-600",
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

          <div className="mt-6 bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-indigo-400 mb-2">
              💡 Sleep Tips During Fasting
            </h4>
            <ul className="text-gray-300 space-y-1 text-sm grid md:grid-cols-2 gap-2">
              <li>• Take magnesium before bed</li>
              <li>• Keep room cool (you may feel warmer)</li>
              <li>• Use the extra awake time productively</li>
              <li>• Don't stress about less sleep—it's normal</li>
              <li>• Go to bed earlier if you feel tired</li>
              <li>• Light reading or meditation before sleep</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Activity Levels */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            🚶
          </span>
          Activity Recommendations
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                ✅ Recommended Activities
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Light walking (especially outdoors)",
                  "Gentle stretching or yoga",
                  "Meditation and breathwork",
                  "Reading and learning",
                  "Light household tasks",
                  "Journaling and reflection",
                  "Watching movies or shows",
                  "Creative activities (art, writing)",
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
                ❌ Avoid These
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Intense exercise or heavy lifting",
                  "HIIT or cardio workouts",
                  "Strenuous physical labor",
                  "Hot yoga or saunas (depletes electrolytes)",
                  "Competitive sports",
                  "Long hikes or cycling",
                  "Swimming alone",
                  "Anything that makes you very sweaty",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-red-400">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-emerald-400 mb-2">
              📅 Activity by Phase
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-white font-medium">Days 1-3:</span>
                <p className="text-gray-400">
                  Maximum rest. Light walking only. Your body is adapting.
                </p>
              </div>
              <div>
                <span className="text-white font-medium">Days 4-7:</span>
                <p className="text-gray-400">
                  Light activity okay. 20-30 min walks. Gentle yoga acceptable.
                </p>
              </div>
              <div>
                <span className="text-white font-medium">Days 8+:</span>
                <p className="text-gray-400">
                  Listen to your body. Some feel energized, others need rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Common Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            ❓
          </span>
          Common Questions
        </h2>
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30">
          <div className="space-y-4">
            {[
              {
                q: "Can I drink coffee or tea?",
                a: "Black coffee and plain tea are technically okay (no calories), but they can increase cortisol and may cause stomach upset. Many prefer to avoid them, especially caffeine which can worsen anxiety.",
              },
              {
                q: "What about medications?",
                a: "Continue essential medications as prescribed. Some medications require food—consult your doctor before fasting. Never stop prescribed medications without medical guidance.",
              },
              {
                q: "Can I brush my teeth?",
                a: "Yes! Brush normally. The small amount of toothpaste won't break your fast. Maintaining oral hygiene is important, especially with tongue coating.",
              },
              {
                q: "Will I lose muscle?",
                a: 'Minimal muscle loss occurs during water fasting due to elevated HGH. Most "muscle loss" reported is actually glycogen and water from muscles. True protein breakdown is limited.',
              },
              {
                q: "What if I have to attend a food event?",
                a: "Either avoid it, attend and just drink water (with electrolytes), or consider if this is the right time to fast. Social situations are challenging but manageable with preparation.",
              },
              {
                q: "How do I know when to break my fast?",
                a: "Break when: you've reached your goal, you experience warning signs that don't resolve with electrolytes, or your intuition strongly tells you to stop. Trust your body.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <h4 className="font-semibold text-cyan-400 mb-2">{item.q}</h4>
                <p className="text-gray-300 text-sm">{item.a}</p>
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
              Most Symptoms Are Electrolyte-Related
            </h3>
            <p className="text-white/90">
              Before breaking your fast due to symptoms, try more electrolytes
              first. Headache? Salt. Heart palpitations? Potassium. Muscle
              cramps? Magnesium. The vast majority of unpleasant fasting
              symptoms are caused by electrolyte deficiency, not the fast
              itself.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🌡️</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Module Summary
            </h3>
            <p className="text-white/90">
              During your fast, expect physical changes (tongue coating, feeling
              cold, sleep changes) and mental shifts (initial irritability
              followed by clarity and potential euphoria). Most unpleasant
              symptoms are electrolyte-related and easily fixed. Keep activity
              light, especially Days 1-3. Know the warning signs that indicate
              you should break your fast, but don't confuse them with normal
              electrolyte deficiency symptoms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFModule7;
