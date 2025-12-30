import React from "react";

const Module9 = () => {
  return (
    <div className="space-y-8">
      {/* Section: Recommended Reading */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            📚
          </span>
          Recommended Reading & Research
        </h2>
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Deepen your understanding of dry fasting with these essential books
            and research sources from leading practitioners and scientists.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Dry Fasting: The Phoenix Protocol",
                author: "August Dunning",
                desc: "Comprehensive guide to dry fasting, including soft and hard protocols, with scientific explanations and practical advice.",
                type: "Book",
                icon: "📕",
              },
              {
                title: "20 Questions & Answers About Dry Fasting",
                author: "Dr. Sergey Filonov",
                desc: "Russian dry fasting expert shares decades of clinical experience. Translated from Russian, this is a foundational text.",
                type: "Book",
                icon: "📗",
              },
              {
                title: "The Complete Guide to Fasting",
                author: "Dr. Jason Fung",
                desc: "While focused on water fasting, provides excellent scientific foundation for understanding fasting mechanisms.",
                type: "Book",
                icon: "📘",
              },
              {
                title: "Fasting and Eating for Health",
                author: "Dr. Joel Fuhrman",
                desc: "Medical perspective on therapeutic fasting with emphasis on proper nutrition and refeeding.",
                type: "Book",
                icon: "📙",
              },
              {
                title: "Autophagy Research Papers",
                author: "Yoshinori Ohsumi (Nobel Prize)",
                desc: 'Scientific papers on autophagy mechanisms. Search PubMed for "autophagy fasting" for latest research.',
                type: "Research",
                icon: "🔬",
              },
              {
                title: "Fasting-Mimicking Diet Studies",
                author: "Dr. Valter Longo",
                desc: "USC research on fasting, stem cells, and longevity. Search for his published papers on fasting and regeneration.",
                type: "Research",
                icon: "🧬",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-orange-500/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <span className="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded-full">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-2">
                      {item.title}
                    </h3>
                    <p className="text-orange-400 text-sm">{item.author}</p>
                    <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Communities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            👥
          </span>
          Dry Fasting Communities & Forums
        </h2>
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Connect with other dry fasting practitioners to share experiences,
            get support, and learn from others' journeys.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "r/Dryfasting",
                platform: "Reddit",
                desc: "Active community of dry fasters sharing experiences, asking questions, and providing support. Great for beginners.",
                url: "reddit.com/r/dryfasting",
                icon: "🔴",
                members: "30k+ members",
              },
              {
                name: "r/fasting",
                platform: "Reddit",
                desc: "Larger fasting community covering all types. Good for general fasting information and motivation.",
                url: "reddit.com/r/fasting",
                icon: "🔴",
                members: "400k+ members",
              },
              {
                name: "Dry Fasting Club",
                platform: "Facebook",
                desc: "Private Facebook group dedicated to dry fasting. Request to join for access to discussions and resources.",
                url: "facebook.com/groups",
                icon: "🔵",
                members: "Private group",
              },
              {
                name: "Phoenix Protocol Community",
                platform: "Various",
                desc: "Community around August Dunning's dry fasting protocol. Active discussions on extended dry fasting.",
                url: "Search Phoenix Protocol",
                icon: "🟠",
                members: "Growing community",
              },
              {
                name: "Fasting Talk Podcast",
                platform: "Podcast",
                desc: "Jimmy Moore and Dr. Jason Fung discuss fasting topics. Episodes on dry fasting available.",
                url: "Available on podcast apps",
                icon: "🎙️",
                members: "Popular podcast",
              },
              {
                name: "YouTube Channels",
                platform: "YouTube",
                desc: 'Search "dry fasting" for numerous practitioner vlogs, day-by-day experiences, and educational content.',
                url: "youtube.com",
                icon: "📺",
                members: "Various creators",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.name}
                    </h3>
                    <p className="text-blue-400 text-sm">
                      {item.platform} • {item.members}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
            <h4 className="font-semibold text-blue-400 mb-2">
              💡 Community Tips
            </h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Read community rules before posting</li>
              <li>
                • Search for existing answers before asking common questions
              </li>
              <li>• Share your own experiences to help others</li>
              <li>
                • Take all advice with discernment—everyone's body is different
              </li>
              <li>• Be supportive and non-judgmental of others' journeys</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Tracking Tools */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            📱
          </span>
          Tracking Tools & Apps
        </h2>
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-500/30">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Use these tools to track your fasts, monitor your progress, and stay
            motivated throughout your fasting journey.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Zero",
                type: "App",
                desc: "Popular fasting timer with tracking, insights, and community features. Free with premium options.",
                features: [
                  "Fasting timer",
                  "Progress tracking",
                  "Health insights",
                ],
                icon: "⏱️",
              },
              {
                name: "Life Fasting",
                type: "App",
                desc: "Comprehensive fasting app with social features and detailed tracking. Great for accountability.",
                features: [
                  "Group challenges",
                  "Detailed stats",
                  "Journal feature",
                ],
                icon: "🎯",
              },
              {
                name: "Fastient",
                type: "App",
                desc: "Simple, clean fasting tracker focused on the essentials. Good for beginners.",
                features: ["Simple timer", "Weight tracking", "History log"],
                icon: "📊",
              },
              {
                name: "Keto-Mojo",
                type: "Device",
                desc: "Blood ketone and glucose meter. Track your ketosis levels accurately during fasts.",
                features: ["Ketone testing", "Glucose testing", "App sync"],
                icon: "🩸",
              },
              {
                name: "Smart Scale",
                type: "Device",
                desc: "Wi-Fi connected scale for tracking weight, body fat, and other metrics automatically.",
                features: ["Auto-sync", "Body composition", "Trends"],
                icon: "⚖️",
              },
              {
                name: "This Tracker!",
                type: "Web App",
                desc: "The fasting tracker you're using now. Track your fasts, log progress, and see your journey.",
                features: [
                  "Custom protocols",
                  "Daily logging",
                  "Visual calendar",
                ],
                icon: "🔥",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.name}
                    </h3>
                    <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
                <ul className="text-gray-500 text-xs space-y-1">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-1">
                      <span className="text-emerald-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Meal Plans */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center">
            🍽️
          </span>
          Sample Preparation & Refeeding Meal Plans
        </h2>
        <div className="bg-gradient-to-br from-lime-900/30 to-green-900/30 rounded-2xl p-6 border border-lime-500/30">
          {/* Pre-Fast Meal Plan */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-lime-400 mb-4">
              🥗 Pre-Fast Week Meal Plan
            </h3>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">
                    Days 7-5 Before Fast
                  </h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      <strong className="text-lime-400">Breakfast:</strong>{" "}
                      Smoothie with spinach, berries, banana, almond milk
                    </p>
                    <p>
                      <strong className="text-lime-400">Lunch:</strong> Large
                      salad with grilled chicken, olive oil dressing
                    </p>
                    <p>
                      <strong className="text-lime-400">Dinner:</strong> Baked
                      fish with steamed vegetables
                    </p>
                    <p>
                      <strong className="text-lime-400">Snacks:</strong> Fresh
                      fruit, raw nuts
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3">
                    Days 4-2 Before Fast
                  </h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      <strong className="text-lime-400">Breakfast:</strong>{" "}
                      Fresh fruit bowl with berries and melon
                    </p>
                    <p>
                      <strong className="text-lime-400">Lunch:</strong> Raw
                      vegetable salad, avocado, lemon dressing
                    </p>
                    <p>
                      <strong className="text-lime-400">Dinner:</strong>{" "}
                      Vegetable soup, small portion of fish
                    </p>
                    <p>
                      <strong className="text-lime-400">Snacks:</strong>{" "}
                      Cucumber, watermelon
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <h4 className="text-white font-medium mb-3">
                  Day 1 Before Fast (Final Day)
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>
                    <strong className="text-lime-400">Morning:</strong> Fresh
                    juice (apple, celery, ginger)
                  </p>
                  <p>
                    <strong className="text-lime-400">Afternoon:</strong>{" "}
                    Watermelon, cucumber, coconut water
                  </p>
                  <p>
                    <strong className="text-lime-400">Evening (by 6pm):</strong>{" "}
                    Light vegetable broth, small salad
                  </p>
                  <p>
                    <strong className="text-gray-500">
                      Then begin your fast
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Post-Fast Meal Plan */}
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              🍉 Post-Fast Refeeding Meal Plan
            </h3>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="space-y-6">
                {[
                  {
                    day: "Day 1 (Breaking Fast)",
                    meals: [
                      {
                        time: "Hour 0-2",
                        food: "Water (sipped slowly), then watermelon",
                        cal: "~100",
                      },
                      {
                        time: "Hour 2-4",
                        food: "More watermelon, coconut water",
                        cal: "~150",
                      },
                      {
                        time: "Hour 4-8",
                        food: "Bone broth, cucumber, melon",
                        cal: "~200",
                      },
                      {
                        time: "Hour 8-12",
                        food: "Fresh fruits (grapes, oranges)",
                        cal: "~200",
                      },
                      {
                        time: "Evening",
                        food: "Small raw salad with olive oil",
                        cal: "~150",
                      },
                    ],
                  },
                  {
                    day: "Day 2",
                    meals: [
                      {
                        time: "Breakfast",
                        food: "Fresh fruit smoothie",
                        cal: "~200",
                      },
                      {
                        time: "Lunch",
                        food: "Large salad with avocado",
                        cal: "~350",
                      },
                      {
                        time: "Dinner",
                        food: "Vegetable soup, fermented vegetables",
                        cal: "~300",
                      },
                      {
                        time: "Snacks",
                        food: "More fruit, coconut water",
                        cal: "~150",
                      },
                    ],
                  },
                  {
                    day: "Day 3",
                    meals: [
                      {
                        time: "Breakfast",
                        food: "2 soft-boiled eggs, fruit",
                        cal: "~250",
                      },
                      {
                        time: "Lunch",
                        food: "Salad with grilled vegetables, olive oil",
                        cal: "~400",
                      },
                      {
                        time: "Dinner",
                        food: "Steamed fish, cooked vegetables",
                        cal: "~450",
                      },
                      {
                        time: "Snacks",
                        food: "Greek yogurt, nuts (small portion)",
                        cal: "~200",
                      },
                    ],
                  },
                  {
                    day: "Days 4-5",
                    meals: [
                      {
                        time: "Breakfast",
                        food: "Eggs any style, vegetables, fruit",
                        cal: "~350",
                      },
                      {
                        time: "Lunch",
                        food: "Grilled chicken salad or fish",
                        cal: "~500",
                      },
                      {
                        time: "Dinner",
                        food: "Protein (fish/chicken) with vegetables",
                        cal: "~600",
                      },
                      {
                        time: "Snacks",
                        food: "Normal healthy snacks",
                        cal: "~250",
                      },
                    ],
                  },
                  {
                    day: "Days 6-7",
                    meals: [
                      {
                        time: "Breakfast",
                        food: "Full breakfast—eggs, meat, vegetables",
                        cal: "~450",
                      },
                      {
                        time: "Lunch",
                        food: "Normal lunch, any protein source",
                        cal: "~600",
                      },
                      {
                        time: "Dinner",
                        food: "Normal dinner, can include red meat",
                        cal: "~700",
                      },
                      {
                        time: "Snacks",
                        food: "Normal eating, avoid junk food",
                        cal: "~250",
                      },
                    ],
                  },
                ].map((day, i) => (
                  <div key={i} className="p-4 bg-gray-800/50 rounded-lg">
                    <h4 className="text-white font-semibold mb-3">{day.day}</h4>
                    <div className="space-y-2">
                      {day.meals.map((meal, j) => (
                        <div
                          key={j}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-green-400 w-24">
                            {meal.time}
                          </span>
                          <span className="text-gray-300 flex-1">
                            {meal.food}
                          </span>
                          <span className="text-gray-500 w-16 text-right">
                            {meal.cal}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Completion */}
      <section className="space-y-4">
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-8 text-center">
          <span className="text-6xl">🎉</span>
          <h2 className="text-3xl font-bold text-white mt-4 mb-2">
            Congratulations!
          </h2>
          <p className="text-xl text-white/90 mb-6">
            You've completed the Prolonged Dry Fasting Course
          </p>

          <div className="bg-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg mb-4">
              You now have the knowledge to safely undertake a 10-day dry fast.
              Remember:
            </p>
            <ul className="text-white/80 text-left space-y-2 mb-6">
              <li>✓ Prepare your body with proper pre-fast nutrition</li>
              <li>✓ Prepare your mind with clear intentions</li>
              <li>✓ Trust the process—discomfort is temporary</li>
              <li>✓ Break your fast slowly and carefully</li>
              <li>✓ Integrate the benefits with sustainable habits</li>
            </ul>
            <p className="text-white font-semibold">
              🔥 Your transformation journey begins now!
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Resources Summary
            </h3>
            <p className="text-white/90">
              You now have access to books, research, communities, apps, and
              meal plans to support your dry fasting journey. Use these
              resources to deepen your knowledge, connect with fellow
              practitioners, track your progress, and plan your meals. Knowledge
              is power—the more you understand about what's happening in your
              body, the more confident and successful you'll be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module9;
