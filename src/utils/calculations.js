import { schedule } from "../data/schedule";
import { physiology } from "../data/physiology";

export const getDateKey = (monthIndex, day) => {
  const m = String(monthIndex + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `2026-${m}-${d}`;
};

export const getDayData = (dateKey) => schedule[dateKey] || null;

export const getPhysiologyInfo = (type, day) => {
  if (physiology[type] && physiology[type][day]) {
    return physiology[type][day];
  }
  return null;
};

export const calculateBMI = (weight, height) => {
  if (!weight || !height) return null;
  return ((weight / (height * height)) * 703).toFixed(1);
};

export const getLatestWeight = (dailyLogs, startingWeight) => {
  const sortedDates = Object.keys(dailyLogs).sort().reverse();
  for (const date of sortedDates) {
    if (dailyLogs[date]?.weight) {
      return { weight: dailyLogs[date].weight, date };
    }
  }
  return { weight: startingWeight, date: null };
};

export const getProgressStats = (profile, dailyLogs) => {
  const { weight: currentWeight } = getLatestWeight(
    dailyLogs,
    profile.startingWeight
  );
  const totalToLose = profile.startingWeight - profile.goalWeight;
  const lostSoFar = profile.startingWeight - currentWeight;
  const progressPercent = Math.min(
    100,
    Math.max(0, (lostSoFar / totalToLose) * 100)
  );
  const remaining = currentWeight - profile.goalWeight;

  const weightEntries = Object.entries(dailyLogs)
    .filter(([_, log]) => log.weight)
    .sort(([a], [b]) => a.localeCompare(b));

  let avgLossPerWeek = 0;
  if (weightEntries.length >= 2) {
    const first = weightEntries[0];
    const last = weightEntries[weightEntries.length - 1];
    const daysDiff =
      (new Date(last[0]) - new Date(first[0])) / (1000 * 60 * 60 * 24);
    if (daysDiff > 0) {
      const weightDiff = first[1].weight - last[1].weight;
      avgLossPerWeek = (weightDiff / daysDiff) * 7;
    }
  }

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
    bmi: calculateBMI(currentWeight, profile.height),
    startBMI: calculateBMI(profile.startingWeight, profile.height),
    goalBMI: calculateBMI(profile.goalWeight, profile.height),
  };
};

export const getScheduleStats = () => {
  const stats = { pdf: 0, wf: 0, sdf: 0, "1r": 0, fr: 0 };
  Object.values(schedule).forEach((d) => {
    if (d && stats[d.type] !== undefined) stats[d.type]++;
  });
  const fastingDays = stats.pdf + stats.wf + stats.sdf;
  const eatingDays = stats["1r"] + stats.fr;
  return { ...stats, fastingDays, eatingDays };
};

export const formatDate = (dateKey) => {
  const date = new Date(dateKey + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
