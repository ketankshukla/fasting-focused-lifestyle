import React, { useState } from "react";

const dryFastingFAQs = [
  {
    question: "What exactly is dry fasting?",
    answer:
      "Dry fasting is the practice of abstaining from both food AND water for a specific period. Unlike water fasting, your body cannot take in any external hydration, which forces it to produce 'metabolic water' by breaking down fat cells. This accelerates many fasting benefits including autophagy, ketosis, and cellular regeneration.",
    icon: "🔥",
  },
  {
    question: "Is dry fasting safe?",
    answer:
      "Short dry fasts (16-24 hours) are generally safe for healthy individuals. Extended dry fasts (3+ days) require careful preparation, prior fasting experience, and ideally supervision. Listen to your body—if you experience severe symptoms like rapid heartbeat, confusion, or extreme weakness, break your fast immediately. Always consult a healthcare provider before attempting extended fasts.",
    icon: "⚠️",
  },
  {
    question: "How long can I safely dry fast?",
    answer:
      "Beginners should start with intermittent dry fasting (16-20 hours). With experience, you can work up to 24-48 hours. Extended dry fasts of 3-10+ days are practiced by experienced fasters but require significant preparation, a clean diet beforehand, and proper refeeding protocols.",
    icon: "⏱️",
  },
  {
    question: "What's the difference between soft and hard dry fasting?",
    answer:
      "Soft dry fasting means no consuming water, but you can still shower, brush teeth, and have external water contact. Hard dry fasting means zero water contact—no showers, no teeth brushing, no swimming. Most extended dry fasters choose soft dry fasting as it's more practical and the benefits are similar.",
    icon: "💧",
  },
  {
    question: "Will I get dehydrated during a dry fast?",
    answer:
      "Your body produces 'metabolic water' by oxidizing fat—roughly 110g of water per 100g of fat burned. During ketosis, this internal water production helps sustain you. However, you will experience some dehydration, which is why proper preparation (hydrating well before) and breaking the fast correctly are crucial.",
    icon: "🧬",
  },
  {
    question: "How much weight will I lose dry fasting?",
    answer:
      "Expect to lose 2-3 lbs per day during a dry fast. About 40-50% is water weight (which returns after refeeding), and 50-60% is actual fat loss. A 10-day dry fast typically results in 20-28 lbs total loss, with 11-15 lbs being permanent fat loss.",
    icon: "⚖️",
  },
  {
    question: "What are the benefits of dry fasting over water fasting?",
    answer:
      "Dry fasting accelerates autophagy (cellular cleanup) by approximately 3x compared to water fasting. It also speeds up ketosis entry, enhances stem cell regeneration, reduces inflammation faster, and may have stronger anti-aging effects. However, it's more challenging and requires more careful execution.",
    icon: "✨",
  },
  {
    question: "How do I break a dry fast properly?",
    answer:
      "Start with small sips of water (room temperature), waiting 30-60 minutes between sips for the first few hours. Then progress to diluted fruit juice, coconut water, or bone broth. Avoid solid food for at least 24 hours after an extended dry fast. The refeeding period should be half the length of your fast.",
    icon: "🍉",
  },
  {
    question: "Can I exercise during a dry fast?",
    answer:
      "Light movement like walking is fine and can help with detox symptoms. However, avoid intense exercise as you have no way to rehydrate. Most people experience lower energy during dry fasts, especially after day 2-3. Rest is generally recommended for extended dry fasts.",
    icon: "🏃",
  },
  {
    question: "What symptoms are normal during dry fasting?",
    answer:
      "Common symptoms include: headaches (especially days 1-2), fatigue, dizziness when standing quickly, white-coated tongue, strong body odor, darker urine, mood swings, and vivid dreams. These are signs of detoxification. Severe symptoms like chest pain, extreme confusion, or inability to stand require breaking the fast.",
    icon: "🌡️",
  },
];

const waterFastingFAQs = [
  {
    question: "What is water fasting?",
    answer:
      "Water fasting means consuming only water (with electrolytes!) for an extended period while abstaining from all food. It triggers autophagy, deep ketosis, and cellular regeneration. The key difference from dry fasting is that you maintain hydration, allowing for longer and often safer extended fasts.",
    icon: "💧",
  },
  {
    question: "Why do I need electrolytes during water fasting?",
    answer:
      "This is CRITICAL: When you fast, insulin drops, causing your kidneys to flush sodium rapidly. Drinking plain water further dilutes your remaining electrolytes. Without supplementation, you'll experience headaches, fatigue, heart palpitations, muscle cramps, and potentially dangerous conditions like hyponatremia. Always add electrolytes!",
    icon: "⚡",
  },
  {
    question: "What electrolytes do I need and how much?",
    answer:
      "The 'Big Three' daily requirements are: Sodium (4,000-7,000mg, ~2-3 tsp salt), Potassium (2,000-4,000mg from potassium chloride or No-Salt), and Magnesium (400-600mg from magnesium citrate or glycinate). Many fasters use 'Snake Juice' or similar electrolyte mixes.",
    icon: "🧂",
  },
  {
    question: "How long can I safely water fast?",
    answer:
      "With proper electrolyte supplementation, water fasts can safely extend to 7-40+ days for experienced fasters. Beginners should start with 24-72 hour fasts. Extended fasts beyond 7 days ideally should be done under medical supervision or with significant fasting experience.",
    icon: "📅",
  },
  {
    question: "Won't I lose muscle during an extended water fast?",
    answer:
      "Minimal muscle loss occurs during water fasting due to elevated human growth hormone (HGH) levels—which can increase up to 5x during fasting. Your body preferentially burns fat for fuel. Most 'muscle loss' people report is actually glycogen and water depletion, which returns after refeeding.",
    icon: "💪",
  },
  {
    question: "What does autophagy do and when does it peak?",
    answer:
      "Autophagy is your body's cellular 'cleanup' process—it breaks down and recycles damaged proteins, organelles, and cellular debris. It begins around 24-48 hours into a fast and peaks around days 3-5. This process is linked to longevity, cancer prevention, and cellular rejuvenation.",
    icon: "🧬",
  },
  {
    question: "How do I know if I'm in ketosis?",
    answer:
      "Signs of ketosis include: metallic or fruity breath, reduced hunger (usually after day 2-3), increased mental clarity, stable energy without crashes, and darker/stronger-smelling urine. You can also test with urine strips or a blood ketone meter—readings above 0.5 mmol/L indicate ketosis.",
    icon: "🔬",
  },
  {
    question: "What should I eat to break an extended water fast?",
    answer:
      "Start with bone broth or diluted fruit juice. After a few hours, try small amounts of easily digestible foods: watermelon, cucumber, avocado, or soft-cooked eggs. Avoid: processed foods, heavy proteins, dairy, nuts, raw vegetables, and large portions. The refeeding period should equal half your fast length.",
    icon: "🥣",
  },
  {
    question: "Can I drink coffee or tea during a water fast?",
    answer:
      "Black coffee and plain tea technically don't break a fast and may even enhance autophagy. However, they're diuretics that can worsen electrolyte loss. If you drink them, increase your electrolyte intake accordingly. Strict water fasters avoid all beverages except electrolyte water.",
    icon: "☕",
  },
  {
    question: "What's refeeding syndrome and should I worry?",
    answer:
      "Refeeding syndrome is a dangerous shift in electrolytes (especially phosphorus) when eating after extended fasting. It's rare in fasts under 10 days but risk increases with longer fasts or malnourishment. Prevent it by: breaking your fast slowly, starting with small portions, avoiding high-carb foods initially, and continuing electrolytes during refeeding.",
    icon: "🏥",
  },
];

const AccordionItem = ({ item, isOpen, onToggle, colorScheme }) => {
  const colors = {
    dry: {
      border: "border-amber-500/30",
      hoverBorder: "hover:border-amber-500/60",
      bg: "bg-gradient-to-r from-amber-500/10 to-orange-500/10",
      activeBg: "bg-gradient-to-r from-amber-500/20 to-orange-500/20",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
      text: "text-amber-400",
      answerBg: "bg-amber-950/30",
    },
    water: {
      border: "border-cyan-500/30",
      hoverBorder: "hover:border-cyan-500/60",
      bg: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10",
      activeBg: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
      text: "text-cyan-400",
      answerBg: "bg-cyan-950/30",
    },
  };

  const c = colors[colorScheme];

  return (
    <div
      className={`rounded-2xl border ${c.border} ${
        c.hoverBorder
      } transition-all duration-300 overflow-hidden ${
        isOpen ? c.activeBg : c.bg
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-4 sm:p-5 flex items-start gap-4 text-left"
      >
        <span
          className={`${c.iconBg} w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 shadow-lg`}
        >
          {item.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white pr-8 leading-tight">
            {item.question}
          </h3>
        </div>
        <span
          className={`text-2xl ${
            c.text
          } transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`px-4 sm:px-5 pb-4 sm:pb-5`}>
          <div
            className={`${c.answerBg} rounded-xl p-4 sm:p-5 border border-white/5`}
          >
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openDryItems, setOpenDryItems] = useState({});
  const [openWaterItems, setOpenWaterItems] = useState({});
  const [activeTab, setActiveTab] = useState("dry");

  const toggleDryItem = (index) => {
    setOpenDryItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleWaterItem = (index) => {
    setOpenWaterItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const expandAll = (type) => {
    if (type === "dry") {
      const all = {};
      dryFastingFAQs.forEach((_, i) => (all[i] = true));
      setOpenDryItems(all);
    } else {
      const all = {};
      waterFastingFAQs.forEach((_, i) => (all[i] = true));
      setOpenWaterItems(all);
    }
  };

  const collapseAll = (type) => {
    if (type === "dry") {
      setOpenDryItems({});
    } else {
      setOpenWaterItems({});
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 p-6 sm:p-8 md:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl sm:text-5xl">❓</span>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Frequently Asked Questions
              </h1>
              <p className="text-white/80 text-sm sm:text-base mt-1">
                Everything you need to know about fasting
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 bg-amber-500/30 rounded-full text-amber-200 font-medium text-sm">
              🔥 10 Dry Fasting Q&As
            </span>
            <span className="px-4 py-2 bg-cyan-500/30 rounded-full text-cyan-200 font-medium text-sm">
              💧 10 Water Fasting Q&As
            </span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 p-1 bg-gray-800/50 rounded-2xl">
        <button
          onClick={() => setActiveTab("dry")}
          className={`flex-1 py-3 sm:py-4 px-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
            activeTab === "dry"
              ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          🔥 Dry Fasting
        </button>
        <button
          onClick={() => setActiveTab("water")}
          className={`flex-1 py-3 sm:py-4 px-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
            activeTab === "water"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          💧 Water Fasting
        </button>
      </div>

      {/* Dry Fasting FAQs */}
      {activeTab === "dry" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                🔥
              </span>
              Dry Fasting FAQ
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => expandAll("dry")}
                className="px-3 py-1.5 text-xs sm:text-sm bg-amber-500/20 text-amber-400 rounded-lg hover:bg-amber-500/30 transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={() => collapseAll("dry")}
                className="px-3 py-1.5 text-xs sm:text-sm bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Collapse
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {dryFastingFAQs.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openDryItems[index]}
                onToggle={() => toggleDryItem(index)}
                colorScheme="dry"
              />
            ))}
          </div>
        </div>
      )}

      {/* Water Fasting FAQs */}
      {activeTab === "water" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                💧
              </span>
              Water Fasting FAQ
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => expandAll("water")}
                className="px-3 py-1.5 text-xs sm:text-sm bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={() => collapseAll("water")}
                className="px-3 py-1.5 text-xs sm:text-sm bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Collapse
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {waterFastingFAQs.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openWaterItems[index]}
                onToggle={() => toggleWaterItem(index)}
                colorScheme="water"
              />
            ))}
          </div>

          {/* Electrolyte Warning */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-2 border-yellow-500/50 rounded-2xl p-5 mt-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="text-lg font-bold text-yellow-400 mb-1">
                  Remember: Electrolytes Are Non-Negotiable!
                </h3>
                <p className="text-gray-300 text-sm">
                  Never drink plain water during extended fasts. Always add
                  sodium, potassium, and magnesium to prevent dangerous
                  deficiencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-white/10 text-center">
        <p className="text-gray-400 mb-4">
          Want to learn more? Check out our comprehensive courses:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <div className="px-5 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl border border-amber-500/30">
            <span className="text-amber-400 font-semibold">
              🔥 Dry Fasting Course
            </span>
          </div>
          <div className="px-5 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
            <span className="text-cyan-400 font-semibold">
              💧 Water Fasting Course
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
