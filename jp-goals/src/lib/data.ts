// src/lib/data.ts
// Using simple JSON for now - easy swap to Supabase later

export interface Goal {
  id: number;
  name: string;
  category: string;
  type: 'milestone' | 'count' | 'highscore' | 'habit' | 'free';
  status: 'not_started' | 'in_progress' | 'complete';
  progress: number;
  target: number;
  unit: string;
  xp: number;
  earnedXP: number;
  icon?: string;
}

export const goals: Goal[] = [
  { id: 1, name: "Get Married", category: "life", type: "milestone", status: "not_started", progress: 0, target: 1, unit: "event", xp: 1000, earnedXP: 0, icon: "💒" },
  { id: 2, name: "Read 5 Books", category: "learning", type: "count", status: "not_started", progress: 0, target: 5, unit: "books", xp: 500, earnedXP: 0, icon: "📖" },
  { id: 3, name: "House Project w/ Andrew", category: "home", type: "milestone", status: "not_started", progress: 0, target: 100, unit: "percent", xp: 400, earnedXP: 0, icon: "🔨" },
  { id: 4, name: "Off Leash Garth", category: "garth", type: "milestone", status: "not_started", progress: 0, target: 100, unit: "percent", xp: 500, earnedXP: 0, icon: "🐕" },
  { id: 5, name: "Home Gym", category: "fitness", type: "milestone", status: "not_started", progress: 0, target: 100, unit: "percent", xp: 300, earnedXP: 0, icon: "🏠" },
  { id: 6, name: "Forage 5 Mushrooms", category: "adventure", type: "count", status: "not_started", progress: 0, target: 5, unit: "species", xp: 250, earnedXP: 0, icon: "🍄" },
  { id: 7, name: "Camp Oregon/Washington", category: "adventure", type: "milestone", status: "not_started", progress: 0, target: 1, unit: "trip", xp: 300, earnedXP: 0, icon: "⛺" },
  { id: 8, name: "Fix My Back", category: "fitness", type: "milestone", status: "in_progress", progress: 0, target: 100, unit: "percent", xp: 500, earnedXP: 0, icon: "🩺" },
  { id: 9, name: "30 Situps", category: "fitness", type: "highscore", status: "in_progress", progress: 10, target: 30, unit: "reps", xp: 300, earnedXP: 0, icon: "🔥" },
  { id: 10, name: "Invent Something", category: "learning", type: "milestone", status: "in_progress", progress: 25, target: 100, unit: "percent", xp: 1000, earnedXP: 0, icon: "💡" },
  { id: 11, name: "Rent Cabin w/ Friends", category: "adventure", type: "milestone", status: "not_started", progress: 0, target: 1, unit: "trip", xp: 300, earnedXP: 0, icon: "🏡" },
  { id: 12, name: "Go to 2 Raves", category: "adventure", type: "count", status: "not_started", progress: 0, target: 2, unit: "raves", xp: 200, earnedXP: 0, icon: "🎵" },
  { id: 13, name: "FREE", category: "free", type: "free", status: "complete", progress: 1, target: 1, unit: "", xp: 0, earnedXP: 0, icon: "✓" },
  { id: 14, name: "Lose 15 Lbs", category: "fitness", type: "count", status: "in_progress", progress: 0, target: 15, unit: "lbs", xp: 750, earnedXP: 0, icon: "⚖️" },
  { id: 15, name: "Sell $2M Ads", category: "work", type: "count", status: "in_progress", progress: 250000, target: 2000000, unit: "dollars", xp: 2000, earnedXP: 250, icon: "💰" },
  { id: 16, name: "Less TV/Videogame", category: "habits", type: "habit", status: "not_started", progress: 0, target: 100, unit: "percent", xp: 500, earnedXP: 0, icon: "📺" },
  { id: 17, name: "Make a Friend", category: "habits", type: "milestone", status: "not_started", progress: 0, target: 1, unit: "friend", xp: 300, earnedXP: 0, icon: "👋" },
  { id: 18, name: "5 Pullups", category: "fitness", type: "highscore", status: "in_progress", progress: 1, target: 5, unit: "reps", xp: 500, earnedXP: 0, icon: "🏋️" },
  { id: 19, name: "Landscape Backyard", category: "home", type: "milestone", status: "not_started", progress: 0, target: 100, unit: "percent", xp: 500, earnedXP: 0, icon: "🌿" },
  { id: 20, name: "5 Concerts", category: "adventure", type: "count", status: "not_started", progress: 0, target: 5, unit: "concerts", xp: 250, earnedXP: 0, icon: "🎤" },
  { id: 21, name: "Go Fishing 3 Times", category: "adventure", type: "count", status: "not_started", progress: 0, target: 3, unit: "trips", xp: 150, earnedXP: 0, icon: "🎣" },
  { id: 22, name: "PNW History", category: "learning", type: "milestone", status: "not_started", progress: 0, target: 100, unit: "percent", xp: 500, earnedXP: 0, icon: "🌲" },
  { id: 23, name: "40 Pushups", category: "fitness", type: "highscore", status: "in_progress", progress: 10, target: 40, unit: "reps", xp: 400, earnedXP: 0, icon: "💪" },
  { id: 24, name: "10 Polaroid Walks", category: "creative", type: "count", status: "not_started", progress: 0, target: 10, unit: "walks", xp: 200, earnedXP: 0, icon: "📷" },
  { id: 25, name: "Make a Photo Album", category: "creative", type: "milestone", status: "not_started", progress: 0, target: 100, unit: "percent", xp: 300, earnedXP: 0, icon: "📔" },
];

export const categoryLabels: Record<string, string> = {
  life: "💍 Life",
  learning: "📚 Learning",
  home: "🏠 Home",
  garth: "🐕 Garth",
  fitness: "🏋️ Fitness",
  adventure: "🏕️ Adventures",
  work: "💼 Work",
  habits: "🎯 Habits",
  creative: "📸 Creative",
  free: "✓ FREE",
};

export const meta = {
  currentXP: 250,
  totalXP: 10400,
  level: 1,
  nextLevelAt: 1000,
  goalsCompleted: 0,
  totalGoals: 24,
  checkInStreak: 1,
  workoutStreak: 1,
};

export const baselines = {
  pushups: 10,
  pullups: 1,
  situps: 10,
  weight: 205,
};
