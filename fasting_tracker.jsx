import React, { useState, useEffect } from 'react';

const FastingTracker = () => {
  // ============ GLOBAL PROFILE DATA ============
  const defaultProfile = {
    height: 72, // inches (6 feet)
    startingWeight: 220,
    goalWeight: 150,
    startingWaist: 42,
    goalWaist: 32,
    fastStartTime: "2025-12-29T22:00:00", // 10 PM PST Dec 29
    units: "imperial" // or "metric"
  };

  // ============ STATE ============
  const [profile, setProfile] = useState(defaultProfile);
  const [dailyLogs, setDailyLogs] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [showYearView, setShowYearView] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  
  // Form state for daily log
  const [logForm, setLogForm] = useState({
    weight: '',
    waist: '',
    notes: '',
    energy: 5,
    mood: 5
  });

  // ============ LOCALSTORAGE SIMULATION ============
  // Note: In Claude preview, localStorage doesn't work. 
  // This will work when you run the file locally.
  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem('fastingProfile');
      const savedLogs = localStorage.getItem('fastingDailyLogs');
      if (savedProfile) setProfile(JSON.parse(savedProfile));
      if (savedLogs) setDailyLogs(JSON.parse(savedLogs));
    } catch (e) {
      console.log('localStorage not available - using session state');
    }
  }, []);

  const saveToStorage = (newProfile, newLogs) => {
    try {
      localStorage.setItem('fastingProfile', JSON.stringify(newProfile || profile));
      localStorage.setItem('fastingDailyLogs', JSON.stringify(newLogs || dailyLogs));
    } catch (e) {
      console.log('localStorage not available - data saved to session only');
    }
  };

  // ============ COLORS & TYPES ============
  const colors = {
    pdf: { bg: '#EF4444', light: '#FEE2E2', text: '#991B1B', name: 'Prolonged Dry Fast' },
    wf: { bg: '#3B82F6', light: '#DBEAFE', text: '#1E40AF', name: 'Water Fast' },
    sdf: { bg: '#F97316', light: '#FFEDD5', text: '#9A3412', name: 'Short Dry Fast' },
    '1r': { bg: '#10B981', light: '#D1FAE5', text: '#065F46', name: '1-Day Refeed' },
    fr: { bg: '#8B5CF6', light: '#EDE9FE', text: '#5B21B6', name: 'Full Refeed' }
  };

  // ============ PHYSIOLOGY DATA ============
  const physiology = {
    pdf: {
      1: {
        title: "Initial Glycogen Depletion",
        symptoms: "Mild hunger, slight fatigue, normal energy",
        whatHappens: "Your body burns through liver glycogen (stored carbs). Blood sugar stabilizes. Initial water weight loss begins as glycogen releases water.",
        benefits: "Digestive system gets a break. Insulin levels start dropping.",
        tips: "Stay busy. Hunger is often habitual, not physical. Avoid food triggers.",
        expectedLoss: "2-3 lbs"
      },
      2: {
        title: "Ketosis Begins - Transition Phase",
        symptoms: "Increased hunger, headache possible, lower energy, irritability",
        whatHappens: "Glycogen depleted. Body switches from glucose to fat burning. Ketone production ramps up. This is the hardest day mentally and physically.",
        benefits: "Fat burning begins. Autophagy (cellular cleanup) starts. Insulin at low levels.",
        tips: "Hardest day. Rest more. Avoid strenuous activity. This discomfort is temporary.",
        expectedLoss: "4-6 lbs total"
      },
      3: {
        title: "Deep Ketosis - The Acidotic Crisis",
        symptoms: "Hunger disappears, mental clarity improves, possible nausea, acetone breath",
        whatHappens: "Full ketosis achieved. Ketone bodies flooding bloodstream. pH drops slightly (metabolic acidosis - expected). This is THE most challenging moment. Autophagy accelerates significantly.",
        benefits: "Autophagy at 300% normal levels. Inflammation decreases. Visceral fat breakdown begins.",
        tips: "STAY RESTING. This discomfort will pass within 12-24 hours. You're switching fuel sources.",
        expectedLoss: "7-9 lbs total"
      },
      4: {
        title: "Peak Autophagy - Deep Cleaning",
        symptoms: "Excellent mental clarity, no hunger, good energy, possible euphoria",
        whatHappens: "Maximum autophagy. Body aggressively breaks down damaged cells, proteins, and organelles. Stem cell regeneration begins. Immune system renewal starts.",
        benefits: "Damaged cells recycled. Growth hormone 5x normal. Anti-aging effects maximize.",
        tips: "Peak benefits. Listen to your body. Light activity is fine.",
        expectedLoss: "9-11 lbs total"
      },
      5: {
        title: "Maximum Fat Burning",
        symptoms: "Mental clarity peaks, sustained energy, no hunger, enhanced mood",
        whatHappens: "Peak fat oxidation. Body efficiently burns fat for fuel. Metabolic water production high. Ketones provide clean energy. Cellular repair in overdrive.",
        benefits: "Maximum fat loss. Cognitive enhancement. Mitochondrial biogenesis begins.",
        tips: "You're in the zone. Light walking okay. Measure your waist - should be 1.5-2\" down.",
        expectedLoss: "11-13 lbs total"
      },
      6: {
        title: "Deep Cellular Repair",
        symptoms: "Calm energy, zero hunger, improved skin, deep mental focus",
        whatHappens: "Immune system reset intensifies. Old immune cells broken down, new ones regenerated. Damaged mitochondria removed. Skin regeneration accelerating.",
        benefits: "Immune system rejuvenation. Anti-cancer effects. Longevity pathways activated.",
        tips: "Deep healing phase. Rest is productive. Clothes should be noticeably looser.",
        expectedLoss: "13-15 lbs total"
      },
      7: {
        title: "Growth Hormone Surge",
        symptoms: "Powerful mental clarity, euphoric feeling, minimal physical discomfort",
        whatHappens: "Growth hormone peaks (up to 2000% normal). Preserves muscle mass while burning fat. Brain-derived neurotrophic factor elevated. Neuroplasticity increases.",
        benefits: "Muscle preservation during fat loss. Maximum cognitive enhancement. Anti-aging peak.",
        tips: "Light stretching or gentle yoga. Energy may feel surprisingly high.",
        expectedLoss: "15-17 lbs total"
      },
      8: {
        title: "Advanced Autophagy - Tumor Suppression",
        symptoms: "Sustained clarity, light feeling, deep sense of wellbeing",
        whatHappens: "Pre-cancerous cells targeted. Deep tissue autophagy. Immune system completing reset. Metabolic efficiency at maximum.",
        benefits: "Cancer prevention. Deep genetic repair. Complete metabolic reset.",
        tips: "You're in rare territory. Monitor closely. Pride in your discipline.",
        expectedLoss: "17-19 lbs total"
      },
      9: {
        title: "Mitochondrial Renewal",
        symptoms: "Stable energy, profound peace, body feels light and clean",
        whatHappens: "Mitochondria (cell energy factories) being replaced with new, efficient ones. Old damaged components fully cleared. Maximum cellular renewal.",
        benefits: "New mitochondria = better energy long-term. Complete immune reset. Deep detoxification.",
        tips: "Almost there. Begin mentally preparing for refeed. Stay rested.",
        expectedLoss: "19-21 lbs total"
      },
      10: {
        title: "Final Cleanup - Completion",
        symptoms: "Peak mental state, ready to refeed, profound sense of achievement",
        whatHappens: "All dry fasting benefits maximized. Final autophagy wave. Body primed for nutrient absorption. Complete metabolic and cellular reset achieved.",
        benefits: "Maximum cellular renewal. Insulin sensitivity restored. Body ready for optimal nutrient uptake.",
        tips: "Congratulations! Break fast SLOWLY. Start with water, then bone broth.",
        expectedLoss: "20-25 lbs total"
      }
    },
    wf: {
      1: { title: "Glycogen Depletion", symptoms: "Hunger present, normal energy, thirst (drink water!)", whatHappens: "Body uses up stored glycogen. Water weight begins dropping.", benefits: "Digestive rest begins. Insulin levels declining.", tips: "Drink plenty of water. Stay occupied.", expectedLoss: "1-2 lbs" },
      2: { title: "Ketosis Transition", symptoms: "Hunger peaks, possible headache, lower energy", whatHappens: "Glycogen depleted. Body switching to fat burning.", benefits: "Fat burning begins. Autophagy starts.", tips: "Difficult but manageable. Rest more.", expectedLoss: "3-4 lbs total" },
      3: { title: "Full Ketosis Achieved", symptoms: "Hunger fading, energy stabilizing, mental clarity improving", whatHappens: "Brain running on ketones. Autophagy accelerating.", benefits: "Autophagy at 200% normal. Mental clarity increases.", tips: "Over the hump. Maintain hydration.", expectedLoss: "4-6 lbs total" },
      4: { title: "Peak Autophagy & Mental Clarity", symptoms: "Sharp mental focus, minimal hunger, good energy", whatHappens: "Maximum autophagy for water fasting. Growth hormone increasing.", benefits: "Cellular repair peak. HGH elevated 300-500%.", tips: "Sweet spot. Work, create, think.", expectedLoss: "6-8 lbs total" },
      5: { title: "Deep Cellular Cleaning", symptoms: "Sustained energy, no significant hunger, excellent sleep", whatHappens: "Deep autophagy continues. Stem cells activating.", benefits: "Immune system renewal. Anti-aging effects.", tips: "Maintain electrolytes. Listen to body.", expectedLoss: "8-10 lbs total" },
      6: { title: "Growth Hormone & Fat Burning Peak", symptoms: "Mental sharpness, stable mood", whatHappens: "Growth hormone peaks (up to 1250%).", benefits: "Muscle preservation. Maximum fat loss.", tips: "Excellent day. Benefits accumulating.", expectedLoss: "10-12 lbs total" },
      7: { title: "Maximum Benefits - Completion", symptoms: "Peak mental state, ready for food", whatHappens: "All water fasting benefits maximized.", benefits: "Complete metabolic reset. Insulin sensitivity maximized.", tips: "Final day. Great job! Plan refeed.", expectedLoss: "12-14 lbs total" }
    },
    sdf: {
      1: { title: "Rapid Glycogen Depletion", symptoms: "Mild hunger, normal energy, slight thirst", whatHappens: "Dry fasting depletes glycogen faster. Metabolic water production starts.", benefits: "Rapid ketosis onset. Complete digestive rest.", tips: "Stay occupied. No water - your body makes it.", expectedLoss: "2-3 lbs" },
      2: { title: "Deep Ketosis & Autophagy Surge", symptoms: "Hunger fades, thirst manageable, energy stabilizes", whatHappens: "Full ketosis achieved rapidly. Autophagy 2-3x faster than water fasting.", benefits: "Autophagy 2x water fasting rate. Fat burning maximized.", tips: "Difficult but manageable. Rest more.", expectedLoss: "4-6 lbs total" },
      3: { title: "Peak Autophagy & Cellular Repair", symptoms: "Mental clarity excellent, minimal hunger/thirst", whatHappens: "Maximum autophagy for short dry fast. Growth hormone surging.", benefits: "Rapid cellular renewal. Immune system reset.", tips: "Peak benefits achieved. Listen to your body.", expectedLoss: "6-8 lbs total" },
      4: { title: "Advanced Cellular Cleanup", symptoms: "Stable energy, sharp mind, body feels light", whatHappens: "Extended autophagy. Mitochondrial renewal accelerating.", benefits: "Cancer prevention. Genetic repair.", tips: "Excellent territory. Honor your limits.", expectedLoss: "8-10 lbs total" },
      5: { title: "Maximum Benefits - Final Cleanup", symptoms: "Peak mental state, ready to refeed", whatHappens: "All short dry fast benefits maximized.", benefits: "Complete reset achieved. Maximum cellular renewal.", tips: "Break fast carefully. Start with water slowly.", expectedLoss: "10-12 lbs total" }
    },
    '1r': {
      1: { 
        title: "Strategic Nutritional Reset", 
        symptoms: "Return of appetite, energy boost, satisfaction", 
        whatHappens: "Nutrients absorbed with maximum efficiency due to fasting-enhanced insulin sensitivity. Protein synthesis activated. Glycogen replenishment begins.", 
        benefits: "Muscle repair and growth. Nutrient absorption maximized. Mental satisfaction.", 
        tips: "Focus on protein (150-200g). Keep carbs under 30g. Don't overeat - your stomach has shrunk!", 
        expectedLoss: "May gain 1-2 lbs (normal - water/glycogen)",
        meals: {
          overview: "High protein, low carb. ~150-200g protein, <30g carbs.",
          meal1: {
            time: "Break-fast (Morning)",
            food: "3-4 whole eggs scrambled with butter, 1/2 avocado",
            protein: "~25g",
            notes: "Eat slowly. Wait 20 mins before more food."
          },
          meal2: {
            time: "Lunch",
            food: "8oz grilled chicken breast or thigh, side of sautéed spinach with garlic",
            protein: "~50g",
            notes: "Season simply with salt, pepper, herbs."
          },
          meal3: {
            time: "Dinner", 
            food: "8-10oz ribeye or NY strip steak (medium-rare), roasted broccoli with olive oil",
            protein: "~70g",
            notes: "This is your main protein load. Enjoy it!"
          },
          snack: {
            time: "If needed",
            food: "Bone broth, beef jerky, or hard-boiled eggs",
            protein: "~15-20g",
            notes: "Only if genuinely hungry."
          }
        }
      }
    },
    fr: {
      1: { 
        title: "Refeed Day 1 - Gentle Reintroduction", 
        symptoms: "Increased energy, improved mood, gradual appetite return", 
        whatHappens: "Digestive system reactivating. Nutrient absorption at maximum efficiency. Body rebuilding glycogen stores carefully.", 
        benefits: "Optimal nutrient uptake. Metabolic flexibility maintained. Energy restoration.", 
        tips: "Start very slow. Your digestive system needs time to wake up.", 
        expectedLoss: "May stabilize or gain 1-2 lbs",
        meals: {
          overview: "Gentle reintroduction. ~100-120g protein. Easy to digest foods.",
          meal1: {
            time: "Break-fast",
            food: "1 cup warm bone broth (sip slowly over 30 mins)",
            protein: "~10g",
            notes: "CRITICAL: Start here. Don't skip this step."
          },
          meal2: {
            time: "2-3 hours later",
            food: "2-3 soft scrambled eggs with butter",
            protein: "~15-20g", 
            notes: "Eggs are gentle on the stomach."
          },
          meal3: {
            time: "Lunch/Afternoon",
            food: "4-6oz baked chicken breast (no skin), steamed zucchini",
            protein: "~35-45g",
            notes: "Chew thoroughly. Eat slowly."
          },
          meal4: {
            time: "Dinner",
            food: "6oz ground beef patty (90% lean), cooked carrots",
            protein: "~40g",
            notes: "Ground meat is easier to digest than steak."
          }
        }
      },
      2: { 
        title: "Refeed Day 2 - Building Nutrition", 
        symptoms: "Energy normalizing, digestion adjusting, strength returning", 
        whatHappens: "Digestive enzymes fully reactivated. Protein synthesis in high gear. Muscle glycogen being replenished.", 
        benefits: "Muscle repair accelerating. Full energy restoration. Metabolic rate normalizing.", 
        tips: "Increase portions gradually. Your digestion should be working better now.", 
        expectedLoss: "Weight stabilizing",
        meals: {
          overview: "Increased portions. ~150-180g protein. Add variety.",
          meal1: {
            time: "Breakfast",
            food: "4 eggs any style, 2 strips bacon, 1/2 avocado",
            protein: "~35g",
            notes: "Full breakfast - you've earned it!"
          },
          meal2: {
            time: "Lunch",
            food: "8oz grilled chicken thighs (with skin OK), large salad with olive oil",
            protein: "~50g",
            notes: "Dark meat has more nutrients than breast."
          },
          meal3: {
            time: "Dinner",
            food: "10oz ribeye steak, roasted asparagus, side of guacamole",
            protein: "~70g",
            notes: "Enjoy a proper steak dinner!"
          },
          snack: {
            time: "Anytime",
            food: "Cheese cubes, deli meat roll-ups, pork rinds",
            protein: "~15-20g",
            notes: "Snack if hungry between meals."
          }
        }
      },
      3: { 
        title: "Refeed Day 3 - Full Nutrition", 
        symptoms: "Full energy restored, normal appetite, strength back", 
        whatHappens: "Complete digestive function restored. Body fully utilizing nutrients. Metabolism running optimally.", 
        benefits: "Complete nutritional reset. Muscle fully repaired. Optimal metabolic state.", 
        tips: "Eat normally but stay clean. Start mental prep for next fast.", 
        expectedLoss: "Weight stable",
        meals: {
          overview: "Full eating day. ~180-220g protein. Normal portions.",
          meal1: {
            time: "Breakfast",
            food: "3-egg omelette with cheese & veggies, 4 strips bacon",
            protein: "~40g",
            notes: "Add mushrooms, peppers, onions to omelette."
          },
          meal2: {
            time: "Lunch",
            food: "Double burger patties (no bun), cheese, lettuce wrap, pickles",
            protein: "~60g",
            notes: "Fast food is OK - just skip the bun and fries."
          },
          meal3: {
            time: "Dinner",
            food: "12oz NY strip or T-bone, caesar salad (no croutons), grilled vegetables",
            protein: "~85g",
            notes: "Big dinner - loading up before next fast."
          },
          snack: {
            time: "Throughout day",
            food: "Greek yogurt, nuts, cheese, deli meats",
            protein: "~20-30g",
            notes: "Keep protein snacks handy."
          }
        }
      },
      4: { 
        title: "Refeed Day 4 - Final Preparation", 
        symptoms: "Optimal energy, clear mind, body feeling strong", 
        whatHappens: "All systems fully operational. Nutrient stores replenished. Body primed for next fasting phase.", 
        benefits: "Maximum strength for next fast. Complete recovery. Metabolic flexibility maintained.", 
        tips: "Last day before next fast. Eat well but don't stuff yourself.", 
        expectedLoss: "Ready for next fast",
        meals: {
          overview: "Strategic loading. ~200-250g protein. Prepare for fasting.",
          meal1: {
            time: "Breakfast",
            food: "5-egg scramble with ground beef, cheese, salsa",
            protein: "~55g",
            notes: "Hearty breakfast to start the day."
          },
          meal2: {
            time: "Lunch",
            food: "Chipotle-style bowl: double meat, no rice, extra guac, cheese, sour cream",
            protein: "~65g",
            notes: "High protein, moderate fat, low carb."
          },
          meal3: {
            time: "Early Dinner (finish by 6-7pm)",
            food: "12-16oz prime rib or ribeye, buttered broccoli, side salad",
            protein: "~100g",
            notes: "FINAL MEAL before fast. Make it count!"
          },
          note: {
            time: "Evening",
            food: "No more food after dinner",
            protein: "—",
            notes: "Begin mental preparation. Fast starts tonight/tomorrow."
          }
        }
      }
    }
  };

  // ============ SCHEDULE DATA ============
  const schedule = {
    "2025-12-29": { type: "pdf", day: 1 },
    "2025-12-30": { type: "pdf", day: 2 },
    "2025-12-31": { type: "pdf", day: 3 },
    "2026-01-01": { type: "pdf", day: 4 },
    "2026-01-02": { type: "pdf", day: 5 },
    "2026-01-03": { type: "pdf", day: 6 },
    "2026-01-04": { type: "pdf", day: 7 },
    "2026-01-05": { type: "pdf", day: 8 },
    "2026-01-06": { type: "pdf", day: 9 },
    "2026-01-07": { type: "pdf", day: 10 },
    "2026-01-08": { type: "1r", day: 1 },
    "2026-01-09": { type: "wf", day: 1 },
    "2026-01-10": { type: "wf", day: 2 },
    "2026-01-11": { type: "wf", day: 3 },
    "2026-01-12": { type: "wf", day: 4 },
    "2026-01-13": { type: "wf", day: 5 },
    "2026-01-14": { type: "wf", day: 6 },
    "2026-01-15": { type: "wf", day: 7 },
    "2026-01-16": { type: "1r", day: 1 },
    "2026-01-17": { type: "wf", day: 1 },
    "2026-01-18": { type: "wf", day: 2 },
    "2026-01-19": { type: "wf", day: 3 },
    "2026-01-20": { type: "wf", day: 4 },
    "2026-01-21": { type: "wf", day: 5 },
    "2026-01-22": { type: "wf", day: 6 },
    "2026-01-23": { type: "wf", day: 7 },
    "2026-01-24": { type: "1r", day: 1 },
    "2026-01-25": { type: "sdf", day: 1 },
    "2026-01-26": { type: "sdf", day: 2 },
    "2026-01-27": { type: "sdf", day: 3 },
    "2026-01-28": { type: "sdf", day: 4 },
    "2026-01-29": { type: "sdf", day: 5 },
    "2026-01-30": { type: "fr", day: 1 },
    "2026-01-31": { type: "fr", day: 2 },
    "2026-02-01": { type: "fr", day: 3 },
    "2026-02-02": { type: "wf", day: 1 },
    "2026-02-03": { type: "wf", day: 2 },
    "2026-02-04": { type: "wf", day: 3 },
    "2026-02-05": { type: "wf", day: 4 },
    "2026-02-06": { type: "wf", day: 5 },
    "2026-02-07": { type: "wf", day: 6 },
    "2026-02-08": { type: "wf", day: 7 },
    "2026-02-09": { type: "1r", day: 1 },
    "2026-02-10": { type: "wf", day: 1 },
    "2026-02-11": { type: "wf", day: 2 },
    "2026-02-12": { type: "wf", day: 3 },
    "2026-02-13": { type: "wf", day: 4 },
    "2026-02-14": { type: "wf", day: 5 },
    "2026-02-15": { type: "wf", day: 6 },
    "2026-02-16": { type: "wf", day: 7 },
    "2026-02-17": { type: "1r", day: 1 },
    "2026-02-18": { type: "sdf", day: 1 },
    "2026-02-19": { type: "sdf", day: 2 },
    "2026-02-20": { type: "sdf", day: 3 },
    "2026-02-21": { type: "sdf", day: 4 },
    "2026-02-22": { type: "sdf", day: 5 },
    "2026-02-23": { type: "1r", day: 1 },
    "2026-02-24": { type: "pdf", day: 1 },
    "2026-02-25": { type: "pdf", day: 2 },
    "2026-02-26": { type: "pdf", day: 3 },
    "2026-02-27": { type: "pdf", day: 4 },
    "2026-02-28": { type: "pdf", day: 5 },
    "2026-03-01": { type: "pdf", day: 6 },
    "2026-03-02": { type: "pdf", day: 7 },
    "2026-03-03": { type: "1r", day: 1 },
    "2026-03-04": { type: "wf", day: 1 },
    "2026-03-05": { type: "wf", day: 2 },
    "2026-03-06": { type: "wf", day: 3 },
    "2026-03-07": { type: "wf", day: 4 },
    "2026-03-08": { type: "wf", day: 5 },
    "2026-03-09": { type: "wf", day: 6 },
    "2026-03-10": { type: "wf", day: 7 },
    "2026-03-11": { type: "1r", day: 1 },
    "2026-03-12": { type: "sdf", day: 1 },
    "2026-03-13": { type: "sdf", day: 2 },
    "2026-03-14": { type: "sdf", day: 3 },
    "2026-03-15": { type: "sdf", day: 4 },
    "2026-03-16": { type: "sdf", day: 5 },
    "2026-03-17": { type: "1r", day: 1 },
    "2026-03-18": { type: "wf", day: 1 },
    "2026-03-19": { type: "wf", day: 2 },
    "2026-03-20": { type: "wf", day: 3 },
    "2026-03-21": { type: "wf", day: 4 },
    "2026-03-22": { type: "wf", day: 5 },
    "2026-03-23": { type: "wf", day: 6 },
    "2026-03-24": { type: "wf", day: 7 },
    "2026-03-25": { type: "fr", day: 1 },
    "2026-03-26": { type: "fr", day: 2 },
    "2026-03-27": { type: "fr", day: 3 },
    "2026-03-28": { type: "fr", day: 4 },
    "2026-03-29": { type: "sdf", day: 1 },
    "2026-03-30": { type: "sdf", day: 2 },
    "2026-03-31": { type: "sdf", day: 3 },
    "2026-04-01": { type: "1r", day: 1 },
    "2026-04-02": { type: "wf", day: 1 },
    "2026-04-03": { type: "wf", day: 2 },
    "2026-04-04": { type: "wf", day: 3 },
    "2026-04-05": { type: "wf", day: 4 },
    "2026-04-06": { type: "wf", day: 5 },
    "2026-04-07": { type: "wf", day: 6 },
    "2026-04-08": { type: "wf", day: 7 },
    "2026-04-09": { type: "1r", day: 1 },
    "2026-04-10": { type: "pdf", day: 1 },
    "2026-04-11": { type: "pdf", day: 2 },
    "2026-04-12": { type: "pdf", day: 3 },
    "2026-04-13": { type: "pdf", day: 4 },
    "2026-04-14": { type: "pdf", day: 5 },
    "2026-04-15": { type: "pdf", day: 6 },
    "2026-04-16": { type: "pdf", day: 7 },
    "2026-04-17": { type: "pdf", day: 8 },
    "2026-04-18": { type: "pdf", day: 9 },
    "2026-04-19": { type: "pdf", day: 10 },
    "2026-04-20": { type: "1r", day: 1 },
    "2026-04-21": { type: "wf", day: 1 },
    "2026-04-22": { type: "wf", day: 2 },
    "2026-04-23": { type: "wf", day: 3 },
    "2026-04-24": { type: "wf", day: 4 },
    "2026-04-25": { type: "wf", day: 5 },
    "2026-04-26": { type: "wf", day: 6 },
    "2026-04-27": { type: "wf", day: 7 },
    "2026-04-28": { type: "fr", day: 1 },
    "2026-04-29": { type: "fr", day: 2 },
    "2026-04-30": { type: "fr", day: 3 },
    "2026-05-01": { type: "wf", day: 1 },
    "2026-05-02": { type: "wf", day: 2 },
    "2026-05-03": { type: "wf", day: 3 },
    "2026-05-04": { type: "wf", day: 4 },
    "2026-05-05": { type: "wf", day: 5 },
    "2026-05-06": { type: "wf", day: 6 },
    "2026-05-07": { type: "wf", day: 7 },
    "2026-05-08": { type: "1r", day: 1 },
    "2026-05-09": { type: "sdf", day: 1 },
    "2026-05-10": { type: "sdf", day: 2 },
    "2026-05-11": { type: "sdf", day: 3 },
    "2026-05-12": { type: "sdf", day: 4 },
    "2026-05-13": { type: "sdf", day: 5 },
    "2026-05-14": { type: "1r", day: 1 },
    "2026-05-15": { type: "wf", day: 1 },
    "2026-05-16": { type: "wf", day: 2 },
    "2026-05-17": { type: "wf", day: 3 },
    "2026-05-18": { type: "wf", day: 4 },
    "2026-05-19": { type: "wf", day: 5 },
    "2026-05-20": { type: "wf", day: 6 },
    "2026-05-21": { type: "wf", day: 7 },
    "2026-05-22": { type: "1r", day: 1 },
    "2026-05-23": { type: "sdf", day: 1 },
    "2026-05-24": { type: "sdf", day: 2 },
    "2026-05-25": { type: "sdf", day: 3 },
    "2026-05-26": { type: "sdf", day: 4 },
    "2026-05-27": { type: "sdf", day: 5 },
    "2026-05-28": { type: "fr", day: 1 },
    "2026-05-29": { type: "fr", day: 2 },
    "2026-05-30": { type: "fr", day: 3 },
    "2026-05-31": { type: "fr", day: 4 },
    "2026-06-01": { type: "wf", day: 1 },
    "2026-06-02": { type: "wf", day: 2 },
    "2026-06-03": { type: "wf", day: 3 },
    "2026-06-04": { type: "wf", day: 4 },
    "2026-06-05": { type: "wf", day: 5 },
    "2026-06-06": { type: "wf", day: 6 },
    "2026-06-07": { type: "wf", day: 7 },
    "2026-06-08": { type: "1r", day: 1 },
    "2026-06-09": { type: "pdf", day: 1 },
    "2026-06-10": { type: "pdf", day: 2 },
    "2026-06-11": { type: "pdf", day: 3 },
    "2026-06-12": { type: "pdf", day: 4 },
    "2026-06-13": { type: "pdf", day: 5 },
    "2026-06-14": { type: "pdf", day: 6 },
    "2026-06-15": { type: "pdf", day: 7 },
    "2026-06-16": { type: "pdf", day: 8 },
    "2026-06-17": { type: "pdf", day: 9 },
    "2026-06-18": { type: "pdf", day: 10 },
    "2026-06-19": { type: "1r", day: 1 },
    "2026-06-20": { type: "wf", day: 1 },
    "2026-06-21": { type: "wf", day: 2 },
    "2026-06-22": { type: "wf", day: 3 },
    "2026-06-23": { type: "wf", day: 4 },
    "2026-06-24": { type: "wf", day: 5 },
    "2026-06-25": { type: "wf", day: 6 },
    "2026-06-26": { type: "wf", day: 7 },
    "2026-06-27": { type: "fr", day: 1 },
    "2026-06-28": { type: "fr", day: 2 },
    "2026-06-29": { type: "fr", day: 3 },
    "2026-06-30": { type: "fr", day: 4 },
    "2026-07-01": { type: "sdf", day: 1 },
    "2026-07-02": { type: "sdf", day: 2 },
    "2026-07-03": { type: "sdf", day: 3 },
    "2026-07-04": { type: "sdf", day: 4 },
    "2026-07-05": { type: "sdf", day: 5 },
    "2026-07-06": { type: "1r", day: 1 },
    "2026-07-07": { type: "wf", day: 1 },
    "2026-07-08": { type: "wf", day: 2 },
    "2026-07-09": { type: "wf", day: 3 },
    "2026-07-10": { type: "wf", day: 4 },
    "2026-07-11": { type: "wf", day: 5 },
    "2026-07-12": { type: "wf", day: 6 },
    "2026-07-13": { type: "wf", day: 7 },
    "2026-07-14": { type: "1r", day: 1 },
    "2026-07-15": { type: "wf", day: 1 },
    "2026-07-16": { type: "wf", day: 2 },
    "2026-07-17": { type: "wf", day: 3 },
    "2026-07-18": { type: "wf", day: 4 },
    "2026-07-19": { type: "wf", day: 5 },
    "2026-07-20": { type: "wf", day: 6 },
    "2026-07-21": { type: "wf", day: 7 },
    "2026-07-22": { type: "1r", day: 1 },
    "2026-07-23": { type: "sdf", day: 1 },
    "2026-07-24": { type: "sdf", day: 2 },
    "2026-07-25": { type: "sdf", day: 3 },
    "2026-07-26": { type: "sdf", day: 4 },
    "2026-07-27": { type: "sdf", day: 5 },
    "2026-07-28": { type: "fr", day: 1 },
    "2026-07-29": { type: "fr", day: 2 },
    "2026-07-30": { type: "fr", day: 3 },
    "2026-07-31": { type: "fr", day: 4 },
    "2026-08-01": { type: "wf", day: 1 },
    "2026-08-02": { type: "wf", day: 2 },
    "2026-08-03": { type: "wf", day: 3 },
    "2026-08-04": { type: "wf", day: 4 },
    "2026-08-05": { type: "wf", day: 5 },
    "2026-08-06": { type: "wf", day: 6 },
    "2026-08-07": { type: "wf", day: 7 },
    "2026-08-08": { type: "1r", day: 1 },
    "2026-08-09": { type: "pdf", day: 1 },
    "2026-08-10": { type: "pdf", day: 2 },
    "2026-08-11": { type: "pdf", day: 3 },
    "2026-08-12": { type: "pdf", day: 4 },
    "2026-08-13": { type: "pdf", day: 5 },
    "2026-08-14": { type: "pdf", day: 6 },
    "2026-08-15": { type: "pdf", day: 7 },
    "2026-08-16": { type: "pdf", day: 8 },
    "2026-08-17": { type: "pdf", day: 9 },
    "2026-08-18": { type: "pdf", day: 10 },
    "2026-08-19": { type: "1r", day: 1 },
    "2026-08-20": { type: "wf", day: 1 },
    "2026-08-21": { type: "wf", day: 2 },
    "2026-08-22": { type: "wf", day: 3 },
    "2026-08-23": { type: "wf", day: 4 },
    "2026-08-24": { type: "wf", day: 5 },
    "2026-08-25": { type: "wf", day: 6 },
    "2026-08-26": { type: "wf", day: 7 },
    "2026-08-27": { type: "1r", day: 1 },
    "2026-08-28": { type: "sdf", day: 1 },
    "2026-08-29": { type: "sdf", day: 2 },
    "2026-08-30": { type: "sdf", day: 3 },
    "2026-08-31": { type: "sdf", day: 4 },
    "2026-09-01": { type: "fr", day: 1 },
    "2026-09-02": { type: "fr", day: 2 },
    "2026-09-03": { type: "fr", day: 3 },
    "2026-09-04": { type: "fr", day: 4 },
    "2026-09-05": { type: "wf", day: 1 },
    "2026-09-06": { type: "wf", day: 2 },
    "2026-09-07": { type: "wf", day: 3 },
    "2026-09-08": { type: "wf", day: 4 },
    "2026-09-09": { type: "wf", day: 5 },
    "2026-09-10": { type: "wf", day: 6 },
    "2026-09-11": { type: "wf", day: 7 },
    "2026-09-12": { type: "1r", day: 1 },
    "2026-09-13": { type: "sdf", day: 1 },
    "2026-09-14": { type: "sdf", day: 2 },
    "2026-09-15": { type: "sdf", day: 3 },
    "2026-09-16": { type: "sdf", day: 4 },
    "2026-09-17": { type: "sdf", day: 5 },
    "2026-09-18": { type: "1r", day: 1 },
    "2026-09-19": { type: "wf", day: 1 },
    "2026-09-20": { type: "wf", day: 2 },
    "2026-09-21": { type: "wf", day: 3 },
    "2026-09-22": { type: "wf", day: 4 },
    "2026-09-23": { type: "wf", day: 5 },
    "2026-09-24": { type: "wf", day: 6 },
    "2026-09-25": { type: "wf", day: 7 },
    "2026-09-26": { type: "1r", day: 1 },
    "2026-09-27": { type: "sdf", day: 1 },
    "2026-09-28": { type: "sdf", day: 2 },
    "2026-09-29": { type: "sdf", day: 3 },
    "2026-09-30": { type: "sdf", day: 4 },
    "2026-10-01": { type: "1r", day: 1 },
    "2026-10-02": { type: "pdf", day: 1 },
    "2026-10-03": { type: "pdf", day: 2 },
    "2026-10-04": { type: "pdf", day: 3 },
    "2026-10-05": { type: "pdf", day: 4 },
    "2026-10-06": { type: "pdf", day: 5 },
    "2026-10-07": { type: "pdf", day: 6 },
    "2026-10-08": { type: "pdf", day: 7 },
    "2026-10-09": { type: "pdf", day: 8 },
    "2026-10-10": { type: "pdf", day: 9 },
    "2026-10-11": { type: "pdf", day: 10 },
    "2026-10-12": { type: "1r", day: 1 },
    "2026-10-13": { type: "wf", day: 1 },
    "2026-10-14": { type: "wf", day: 2 },
    "2026-10-15": { type: "wf", day: 3 },
    "2026-10-16": { type: "wf", day: 4 },
    "2026-10-17": { type: "wf", day: 5 },
    "2026-10-18": { type: "wf", day: 6 },
    "2026-10-19": { type: "wf", day: 7 },
    "2026-10-20": { type: "1r", day: 1 },
    "2026-10-21": { type: "wf", day: 1 },
    "2026-10-22": { type: "wf", day: 2 },
    "2026-10-23": { type: "wf", day: 3 },
    "2026-10-24": { type: "wf", day: 4 },
    "2026-10-25": { type: "wf", day: 5 },
    "2026-10-26": { type: "wf", day: 6 },
    "2026-10-27": { type: "wf", day: 7 },
    "2026-10-28": { type: "fr", day: 1 },
    "2026-10-29": { type: "fr", day: 2 },
    "2026-10-30": { type: "fr", day: 3 },
    "2026-10-31": { type: "fr", day: 4 },
    "2026-11-01": { type: "sdf", day: 1 },
    "2026-11-02": { type: "sdf", day: 2 },
    "2026-11-03": { type: "sdf", day: 3 },
    "2026-11-04": { type: "sdf", day: 4 },
    "2026-11-05": { type: "sdf", day: 5 },
    "2026-11-06": { type: "1r", day: 1 },
    "2026-11-07": { type: "wf", day: 1 },
    "2026-11-08": { type: "wf", day: 2 },
    "2026-11-09": { type: "wf", day: 3 },
    "2026-11-10": { type: "wf", day: 4 },
    "2026-11-11": { type: "wf", day: 5 },
    "2026-11-12": { type: "wf", day: 6 },
    "2026-11-13": { type: "wf", day: 7 },
    "2026-11-14": { type: "1r", day: 1 },
    "2026-11-15": { type: "wf", day: 1 },
    "2026-11-16": { type: "wf", day: 2 },
    "2026-11-17": { type: "wf", day: 3 },
    "2026-11-18": { type: "wf", day: 4 },
    "2026-11-19": { type: "wf", day: 5 },
    "2026-11-20": { type: "wf", day: 6 },
    "2026-11-21": { type: "wf", day: 7 },
    "2026-11-22": { type: "1r", day: 1 },
    "2026-11-23": { type: "sdf", day: 1 },
    "2026-11-24": { type: "sdf", day: 2 },
    "2026-11-25": { type: "sdf", day: 3 },
    "2026-11-26": { type: "sdf", day: 4 },
    "2026-11-27": { type: "sdf", day: 5 },
    "2026-11-28": { type: "fr", day: 1 },
    "2026-11-29": { type: "fr", day: 2 },
    "2026-11-30": { type: "fr", day: 3 },
    "2026-12-01": { type: "wf", day: 1 },
    "2026-12-02": { type: "wf", day: 2 },
    "2026-12-03": { type: "wf", day: 3 },
    "2026-12-04": { type: "wf", day: 4 },
    "2026-12-05": { type: "wf", day: 5 },
    "2026-12-06": { type: "wf", day: 6 },
    "2026-12-07": { type: "wf", day: 7 },
    "2026-12-08": { type: "1r", day: 1 },
    "2026-12-09": { type: "pdf", day: 1 },
    "2026-12-10": { type: "pdf", day: 2 },
    "2026-12-11": { type: "pdf", day: 3 },
    "2026-12-12": { type: "pdf", day: 4 },
    "2026-12-13": { type: "pdf", day: 5 },
    "2026-12-14": { type: "pdf", day: 6 },
    "2026-12-15": { type: "pdf", day: 7 },
    "2026-12-16": { type: "pdf", day: 8 },
    "2026-12-17": { type: "pdf", day: 9 },
    "2026-12-18": { type: "pdf", day: 10 },
    "2026-12-19": { type: "1r", day: 1 },
    "2026-12-20": { type: "sdf", day: 1 },
    "2026-12-21": { type: "sdf", day: 2 },
    "2026-12-22": { type: "sdf", day: 3 },
    "2026-12-23": { type: "sdf", day: 4 },
    "2026-12-24": { type: "sdf", day: 5 },
    "2026-12-25": { type: "fr", day: 1 },
    "2026-12-26": { type: "fr", day: 2 },
    "2026-12-27": { type: "fr", day: 3 },
    "2026-12-28": { type: "fr", day: 4 },
    "2026-12-29": { type: "sdf", day: 1 },
    "2026-12-30": { type: "sdf", day: 2 },
    "2026-12-31": { type: "sdf", day: 3 }
  };

  const months = [
    { name: 'January', days: 31, year: 2026, startDay: 4 },
    { name: 'February', days: 28, year: 2026, startDay: 0 },
    { name: 'March', days: 31, year: 2026, startDay: 0 },
    { name: 'April', days: 30, year: 2026, startDay: 3 },
    { name: 'May', days: 31, year: 2026, startDay: 5 },
    { name: 'June', days: 30, year: 2026, startDay: 1 },
    { name: 'July', days: 31, year: 2026, startDay: 3 },
    { name: 'August', days: 31, year: 2026, startDay: 6 },
    { name: 'September', days: 30, year: 2026, startDay: 2 },
    { name: 'October', days: 31, year: 2026, startDay: 4 },
    { name: 'November', days: 30, year: 2026, startDay: 0 },
    { name: 'December', days: 31, year: 2026, startDay: 2 }
  ];

  // ============ CALCULATIONS ============
  const getDateKey = (monthIndex, day) => {
    const m = String(monthIndex + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `2026-${m}-${d}`;
  };

  const getDayData = (dateKey) => schedule[dateKey] || null;
  
  const getPhysiologyInfo = (type, day) => {
    if (physiology[type] && physiology[type][day]) {
      return physiology[type][day];
    }
    return null;
  };

  // Calculate BMI
  const calculateBMI = (weight) => {
    if (!weight || !profile.height) return null;
    return (weight / (profile.height * profile.height) * 703).toFixed(1);
  };

  // Get latest weight from logs
  const getLatestWeight = () => {
    const sortedDates = Object.keys(dailyLogs).sort().reverse();
    for (const date of sortedDates) {
      if (dailyLogs[date]?.weight) {
        return { weight: dailyLogs[date].weight, date };
      }
    }
    return { weight: profile.startingWeight, date: null };
  };

  // Calculate progress stats
  const getProgressStats = () => {
    const { weight: currentWeight } = getLatestWeight();
    const totalToLose = profile.startingWeight - profile.goalWeight;
    const lostSoFar = profile.startingWeight - currentWeight;
    const progressPercent = Math.min(100, Math.max(0, (lostSoFar / totalToLose) * 100));
    const remaining = currentWeight - profile.goalWeight;
    
    // Calculate average loss rate
    const weightEntries = Object.entries(dailyLogs)
      .filter(([_, log]) => log.weight)
      .sort(([a], [b]) => a.localeCompare(b));
    
    let avgLossPerWeek = 0;
    if (weightEntries.length >= 2) {
      const first = weightEntries[0];
      const last = weightEntries[weightEntries.length - 1];
      const daysDiff = (new Date(last[0]) - new Date(first[0])) / (1000 * 60 * 60 * 24);
      if (daysDiff > 0) {
        const weightDiff = first[1].weight - last[1].weight;
        avgLossPerWeek = (weightDiff / daysDiff) * 7;
      }
    }

    // Estimated days to goal
    let daysToGoal = null;
    if (avgLossPerWeek > 0) {
      daysToGoal = Math.ceil((remaining / avgLossPerWeek) * 7);
    }

    return {
      currentWeight,
      totalToLose,
      lostSoFar,
      progressPercent,
      remaining,
      avgLossPerWeek,
      daysToGoal,
      bmi: calculateBMI(currentWeight),
      startBMI: calculateBMI(profile.startingWeight),
      goalBMI: calculateBMI(profile.goalWeight)
    };
  };

  const stats = getProgressStats();

  // Schedule stats
  const scheduleStats = { pdf: 0, wf: 0, sdf: 0, '1r': 0, fr: 0 };
  Object.values(schedule).forEach(d => {
    if (d && scheduleStats[d.type] !== undefined) scheduleStats[d.type]++;
  });
  const fastingDays = scheduleStats.pdf + scheduleStats.wf + scheduleStats.sdf;
  const eatingDays = scheduleStats['1r'] + scheduleStats.fr;

  // ============ HANDLERS ============
  const handleDayClick = (dateKey) => {
    setSelectedDay(dateKey);
    setActiveTab('log'); // Reset to log tab when opening
    const existingLog = dailyLogs[dateKey] || {};
    setLogForm({
      weight: existingLog.weight || '',
      waist: existingLog.waist || '',
      notes: existingLog.notes || '',
      energy: existingLog.energy || 5,
      mood: existingLog.mood || 5
    });
    setShowLogModal(true);
  };

  const handleSaveLog = () => {
    const newLogs = {
      ...dailyLogs,
      [selectedDay]: {
        weight: logForm.weight ? parseFloat(logForm.weight) : null,
        waist: logForm.waist ? parseFloat(logForm.waist) : null,
        notes: logForm.notes,
        energy: logForm.energy,
        mood: logForm.mood,
        savedAt: new Date().toISOString()
      }
    };
    setDailyLogs(newLogs);
    saveToStorage(profile, newLogs);
    setShowLogModal(false);
  };

  const handleSaveProfile = (newProfile) => {
    setProfile(newProfile);
    saveToStorage(newProfile, dailyLogs);
    setShowProfileModal(false);
  };

  // ============ RENDER HELPERS ============
  const renderCalendarDay = (dateKey, dayNum, isDecember2025 = false) => {
    const dayData = getDayData(dateKey);
    const hasLog = dailyLogs[dateKey]?.weight;

    return (
      <div
        key={dateKey}
        onClick={() => handleDayClick(dateKey)}
        className={`
          relative h-14 sm:h-16 rounded-lg cursor-pointer transition-all duration-200
          ${dayData ? 'hover:scale-105 hover:shadow-lg' : 'bg-gray-100 hover:bg-gray-200'}
          ${isDecember2025 ? 'ring-1 ring-amber-400/50' : ''}
        `}
        style={{
          backgroundColor: dayData ? colors[dayData.type].bg : '#F3F4F6'
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {isDecember2025 && (
            <span className="text-[8px] sm:text-[10px] font-medium opacity-75">Dec</span>
          )}
          <span className={`text-xs sm:text-sm font-medium ${!dayData && 'text-gray-400'}`}>
            {dayNum}
          </span>
          {dayData && (
            <span className="text-[10px] sm:text-xs font-bold opacity-90">
              D{dayData.day}
            </span>
          )}
        </div>
        {/* Indicator for logged data */}
        {hasLog && (
          <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-300 rounded-full shadow-sm" />
        )}
      </div>
    );
  };

  const renderMonth = (monthIndex) => {
    const month = months[monthIndex];
    const days = [];
    
    if (monthIndex === 0) {
      days.push(<div key="dec-empty" className="h-14 sm:h-16" />);
      days.push(renderCalendarDay("2025-12-29", 29, true));
      days.push(renderCalendarDay("2025-12-30", 30, true));
      days.push(renderCalendarDay("2025-12-31", 31, true));
    } else {
      for (let i = 0; i < month.startDay; i++) {
        days.push(<div key={`empty-${i}`} className="h-14 sm:h-16" />);
      }
    }
    
    for (let d = 1; d <= month.days; d++) {
      const dateKey = getDateKey(monthIndex, d);
      days.push(renderCalendarDay(dateKey, d, false));
    }

    return (
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          {monthIndex === 0 ? 'Dec 2025 → January 2026' : `${month.name} ${month.year}`}
        </h2>
        <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
            <div key={d} className="text-center text-xs font-medium text-gray-500 py-2">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {days}
        </div>
        <p className="text-xs text-gray-400 mt-3 text-center">
          <span className="inline-block w-2 h-2 bg-yellow-300 rounded-full mr-1" /> = Data logged
        </p>
      </div>
    );
  };

  // Tab state for modal
  const [activeTab, setActiveTab] = useState('log');

  // ============ MODALS ============
  const renderLogModal = () => {
    if (!showLogModal || !selectedDay) return null;
    
    const dayData = getDayData(selectedDay);
    const info = dayData ? getPhysiologyInfo(dayData.type, dayData.day) : null;
    const color = dayData ? colors[dayData.type] : { bg: '#6B7280', light: '#F3F4F6', text: '#374151', name: 'Rest Day' };
    const date = new Date(selectedDay + 'T00:00:00');
    const dateStr = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    
    // Check if this is a refeed day with meal info
    const isRefeedDay = dayData && (dayData.type === '1r' || dayData.type === 'fr');
    const hasMeals = info && info.meals;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowLogModal(false)}>
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full" onClick={e => e.stopPropagation()}>
          {/* Header */}
          <div className="p-4 rounded-t-2xl flex justify-between items-center" style={{ backgroundColor: color.light }}>
            <div>
              <p className="text-xs font-medium" style={{ color: color.text }}>{dateStr}</p>
              <div className="flex items-center gap-2 mt-1">
                <h3 className="text-lg font-bold" style={{ color: color.text }}>{color.name}</h3>
                {dayData && (
                  <span className="px-2 py-0.5 rounded-full text-white text-xs font-bold" style={{ backgroundColor: color.bg }}>
                    Day {dayData.day}
                  </span>
                )}
              </div>
            </div>
            <button onClick={() => setShowLogModal(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-600 hover:text-gray-800 text-xl leading-none">×</button>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('log')}
              className={`flex-1 py-2.5 text-xs font-medium transition-colors ${
                activeTab === 'log' 
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              📊 Log
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`flex-1 py-2.5 text-xs font-medium transition-colors ${
                activeTab === 'info' 
                  ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              🔬 Info
            </button>
            {hasMeals && (
              <button
                onClick={() => setActiveTab('meals')}
                className={`flex-1 py-2.5 text-xs font-medium transition-colors ${
                  activeTab === 'meals' 
                    ? 'text-green-600 border-b-2 border-green-600 bg-green-50' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                🍽️ Meals
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {/* LOG TAB */}
            {activeTab === 'log' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Weight (lbs)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={logForm.weight}
                      onChange={e => setLogForm({ ...logForm, weight: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="215.5"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Waist (inches)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={logForm.waist}
                      onChange={e => setLogForm({ ...logForm, waist: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="40.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Energy: {logForm.energy}/10</label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={logForm.energy}
                      onChange={e => setLogForm({ ...logForm, energy: parseInt(e.target.value) })}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Mood: {logForm.mood}/10</label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={logForm.mood}
                      onChange={e => setLogForm({ ...logForm, mood: parseInt(e.target.value) })}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Notes</label>
                  <textarea
                    value={logForm.notes}
                    onChange={e => setLogForm({ ...logForm, notes: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    rows={2}
                    placeholder="How are you feeling?"
                  />
                </div>

                <button
                  onClick={handleSaveLog}
                  className="w-full py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all text-sm"
                >
                  💾 Save Log
                </button>

                {dailyLogs[selectedDay]?.savedAt && (
                  <p className="text-xs text-gray-400 text-center">
                    Last saved: {new Date(dailyLogs[selectedDay].savedAt).toLocaleString()}
                  </p>
                )}
              </div>
            )}

            {/* INFO TAB */}
            {activeTab === 'info' && info && (
              <div className="space-y-3">
                <h4 className="text-base font-bold text-gray-800">{info.title}</h4>
                
                <div className="bg-yellow-50 rounded-lg p-3">
                  <h5 className="font-semibold text-yellow-800 text-xs mb-1">⚡ What You're Feeling</h5>
                  <p className="text-yellow-700 text-xs">{info.symptoms}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-3">
                  <h5 className="font-semibold text-blue-800 text-xs mb-1">🔬 What's Happening Inside</h5>
                  <p className="text-blue-700 text-xs">{info.whatHappens}</p>
                </div>

                <div className="bg-green-50 rounded-lg p-3">
                  <h5 className="font-semibold text-green-800 text-xs mb-1">✨ Benefits</h5>
                  <p className="text-green-700 text-xs">{info.benefits}</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-3">
                  <h5 className="font-semibold text-purple-800 text-xs mb-1">💡 Tips</h5>
                  <p className="text-purple-700 text-xs">{info.tips}</p>
                </div>

                {info.expectedLoss && (
                  <div className="bg-orange-50 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-xs mb-1">⚖️ Expected Weight</h5>
                    <p className="text-orange-700 text-xs">{info.expectedLoss}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'info' && !info && (
              <div className="text-center py-8 text-gray-500">
                <p className="text-4xl mb-2">📅</p>
                <p className="text-sm">No physiological info for this day type.</p>
              </div>
            )}

            {/* MEALS TAB */}
            {activeTab === 'meals' && hasMeals && (
              <div className="space-y-3">
                <div className="bg-emerald-100 rounded-lg p-2 text-center">
                  <p className="text-xs font-semibold text-emerald-800">{info.meals.overview}</p>
                </div>
                
                {info.meals.meal1 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-2.5">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-gray-700">{info.meals.meal1.time}</span>
                      <span className="text-xs font-semibold text-green-600">{info.meals.meal1.protein}</span>
                    </div>
                    <p className="text-xs text-gray-800 font-medium">{info.meals.meal1.food}</p>
                    <p className="text-xs text-gray-500 mt-1 italic">{info.meals.meal1.notes}</p>
                  </div>
                )}

                {info.meals.meal2 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-2.5">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-gray-700">{info.meals.meal2.time}</span>
                      <span className="text-xs font-semibold text-green-600">{info.meals.meal2.protein}</span>
                    </div>
                    <p className="text-xs text-gray-800 font-medium">{info.meals.meal2.food}</p>
                    <p className="text-xs text-gray-500 mt-1 italic">{info.meals.meal2.notes}</p>
                  </div>
                )}

                {info.meals.meal3 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-2.5">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-gray-700">{info.meals.meal3.time}</span>
                      <span className="text-xs font-semibold text-green-600">{info.meals.meal3.protein}</span>
                    </div>
                    <p className="text-xs text-gray-800 font-medium">{info.meals.meal3.food}</p>
                    <p className="text-xs text-gray-500 mt-1 italic">{info.meals.meal3.notes}</p>
                  </div>
                )}

                {info.meals.meal4 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-2.5">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-gray-700">{info.meals.meal4.time}</span>
                      <span className="text-xs font-semibold text-green-600">{info.meals.meal4.protein}</span>
                    </div>
                    <p className="text-xs text-gray-800 font-medium">{info.meals.meal4.food}</p>
                    <p className="text-xs text-gray-500 mt-1 italic">{info.meals.meal4.notes}</p>
                  </div>
                )}

                {info.meals.snack && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-amber-700">🥜 {info.meals.snack.time}</span>
                      <span className="text-xs font-semibold text-green-600">{info.meals.snack.protein}</span>
                    </div>
                    <p className="text-xs text-gray-800 font-medium">{info.meals.snack.food}</p>
                    <p className="text-xs text-gray-500 mt-1 italic">{info.meals.snack.notes}</p>
                  </div>
                )}

                {info.meals.note && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-2.5">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-red-700">⚠️ {info.meals.note.time}</span>
                    </div>
                    <p className="text-xs text-red-800 font-medium">{info.meals.note.food}</p>
                    <p className="text-xs text-red-600 mt-1 italic">{info.meals.note.notes}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Temp profile state for modal
  const [tempProfile, setTempProfile] = useState(defaultProfile);
  
  useEffect(() => {
    setTempProfile(profile);
  }, [showProfileModal]);

  const renderProfileModal = () => {
    if (!showProfileModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowProfileModal(false)}>
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6" onClick={e => e.stopPropagation()}>
          <h3 className="text-xl font-bold text-gray-800 mb-4">⚙️ Profile Settings</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Height (inches)</label>
              <input
                type="number"
                value={tempProfile.height}
                onChange={e => setTempProfile({ ...tempProfile, height: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-1">{Math.floor(tempProfile.height / 12)}'{tempProfile.height % 12}"</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Starting Weight</label>
                <input
                  type="number"
                  value={tempProfile.startingWeight}
                  onChange={e => setTempProfile({ ...tempProfile, startingWeight: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Goal Weight</label>
                <input
                  type="number"
                  value={tempProfile.goalWeight}
                  onChange={e => setTempProfile({ ...tempProfile, goalWeight: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Starting Waist</label>
                <input
                  type="number"
                  value={tempProfile.startingWaist}
                  onChange={e => setTempProfile({ ...tempProfile, startingWaist: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Goal Waist</label>
                <input
                  type="number"
                  value={tempProfile.goalWaist}
                  onChange={e => setTempProfile({ ...tempProfile, goalWaist: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <button
              onClick={() => handleSaveProfile(tempProfile)}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
            >
              💾 Save Profile
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderYearAtGlance = () => (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">2026 Year at a Glance</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {months.map((month, idx) => (
          <div 
            key={month.name}
            onClick={() => { setSelectedMonth(idx); setShowYearView(false); }}
            className="cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors"
          >
            <p className="text-xs font-medium text-gray-600 mb-1">
              {idx === 0 ? 'Dec→Jan' : month.name.slice(0, 3)}
            </p>
            <div className="grid grid-cols-7 gap-px">
              {idx === 0 && [29, 30, 31].map(d => {
                const dateKey = `2025-12-${d}`;
                const dayData = getDayData(dateKey);
                return (
                  <div 
                    key={`dec-${d}`}
                    className="h-2 w-2 rounded-sm ring-1 ring-amber-400/50"
                    style={{ backgroundColor: dayData ? colors[dayData.type].bg : '#E5E7EB' }}
                  />
                );
              })}
              {Array.from({ length: month.days }, (_, i) => {
                const dateKey = getDateKey(idx, i + 1);
                const dayData = getDayData(dateKey);
                return (
                  <div 
                    key={i}
                    className="h-2 w-2 rounded-sm"
                    style={{ backgroundColor: dayData ? colors[dayData.type].bg : '#E5E7EB' }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ============ MAIN RENDER ============
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
            2026 Fasting Journey
          </h1>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Started: Dec 29, 2025 @ 10:00 PM PST • {fastingDays} Fasting Days • {eatingDays} Eating Days
          </p>
          <button
            onClick={() => setShowProfileModal(true)}
            className="mt-2 px-4 py-1 bg-white/20 text-white text-sm rounded-full hover:bg-white/30 transition-colors"
          >
            ⚙️ Edit Profile
          </button>
        </div>

        {/* Progress Dashboard */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
          <h3 className="text-lg font-bold text-white mb-4">📈 Your Progress</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-2xl sm:text-3xl font-black text-white">{stats.currentWeight}</p>
              <p className="text-xs text-gray-300">Current (lbs)</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-2xl sm:text-3xl font-black text-green-400">-{stats.lostSoFar.toFixed(1)}</p>
              <p className="text-xs text-gray-300">Lost So Far</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">{stats.remaining.toFixed(1)}</p>
              <p className="text-xs text-gray-300">To Goal</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-2xl sm:text-3xl font-black text-purple-400">{stats.bmi || '--'}</p>
              <p className="text-xs text-gray-300">BMI</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>{profile.startingWeight} lbs</span>
              <span>{stats.progressPercent.toFixed(1)}% Complete</span>
              <span>{profile.goalWeight} lbs</span>
            </div>
            <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${stats.progressPercent}%` }}
              />
            </div>
          </div>

          {stats.avgLossPerWeek > 0 && (
            <p className="text-sm text-gray-300 text-center">
              Avg: {stats.avgLossPerWeek.toFixed(1)} lbs/week • 
              {stats.daysToGoal && ` Est. ${stats.daysToGoal} days to goal`}
            </p>
          )}
        </div>

        {/* Fast Type Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[
            { type: 'pdf', label: 'Prolonged Dry', days: scheduleStats.pdf },
            { type: 'wf', label: 'Water Fast', days: scheduleStats.wf },
            { type: 'sdf', label: 'Short Dry', days: scheduleStats.sdf },
            { type: '1r', label: '1-Day Refeed', days: scheduleStats['1r'] },
            { type: 'fr', label: 'Full Refeed', days: scheduleStats.fr }
          ].map(stat => (
            <div 
              key={stat.type}
              className="rounded-xl p-3 sm:p-4 text-white shadow-lg"
              style={{ backgroundColor: colors[stat.type].bg }}
            >
              <p className="text-xs sm:text-sm font-medium opacity-90">{stat.label}</p>
              <p className="text-2xl sm:text-3xl font-black">{stat.days}</p>
              <p className="text-xs opacity-75">days</p>
            </div>
          ))}
        </div>

        {/* Month Navigation */}
        <div className="flex flex-wrap justify-center gap-2">
          {months.map((month, idx) => (
            <button
              key={month.name}
              onClick={() => { setSelectedMonth(idx); setShowYearView(false); }}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
                ${selectedMonth === idx && !showYearView
                  ? 'bg-white text-gray-900 shadow-lg' 
                  : 'bg-white/20 text-white hover:bg-white/30'
                }`}
            >
              {idx === 0 ? 'Dec→Jan' : month.name.slice(0, 3)}
            </button>
          ))}
          <button
            onClick={() => setShowYearView(!showYearView)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
              ${showYearView
                ? 'bg-amber-400 text-gray-900 shadow-lg' 
                : 'bg-amber-400/20 text-amber-200 hover:bg-amber-400/30'
              }`}
          >
            Year View
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {Object.entries(colors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: color.bg }} />
              <span className="text-gray-300">{color.name}</span>
            </div>
          ))}
        </div>

        {/* Calendar or Year View */}
        {showYearView ? renderYearAtGlance() : renderMonth(selectedMonth)}

        {/* Modals */}
        {renderLogModal()}
        {showProfileModal && renderProfileModal()}

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm py-4">
          <p>Click any day to log data & see physiological info</p>
          <p className="mt-1">Dec 29, 2025 @ 10 PM PST → Dec 31, 2026</p>
          <p className="mt-2 text-xs text-gray-500">
            💡 Tip: Download this file and run locally for persistent localStorage
          </p>
        </div>
      </div>
    </div>
  );
};

export default FastingTracker;
