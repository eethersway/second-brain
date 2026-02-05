import { goals, meta, baselines, categoryLabels } from '@/lib/data';
import ProgressBar from '@/components/ProgressBar';
import GoalCard from '@/components/GoalCard';
import StatCard from '@/components/StatCard';
import FitnessProgress from '@/components/FitnessProgress';

export default function Home() {
  // Group goals by category
  const goalsByCategory = goals.reduce((acc, goal) => {
    if (!acc[goal.category]) acc[goal.category] = [];
    acc[goal.category].push(goal);
    return acc;
  }, {} as Record<string, typeof goals>);

  const xpPercent = (meta.currentXP / meta.totalXP) * 100;
  const toNextLevel = meta.nextLevelAt - meta.currentXP;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 pb-6 border-b border-gray-800">
          <h1 className="text-3xl font-bold">
            JP&apos;s <span className="text-emerald-400">2026</span> Goals
          </h1>
          <div className="bg-emerald-400/20 text-emerald-400 px-4 py-2 rounded-full font-semibold">
            ⚡ Level {meta.level} — Beginner
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Experience Points"
            value={meta.currentXP.toString()}
            subtitle={`of ${meta.totalXP.toLocaleString()} total XP`}
          >
            <ProgressBar value={xpPercent} className="mt-3" />
            <p className="text-sm text-gray-500 mt-2">{toNextLevel} XP to Level 2</p>
          </StatCard>

          <StatCard title="Streaks" value="">
            <div className="flex gap-8 mt-2">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">{meta.checkInStreak}</div>
                <div className="text-xs text-gray-500">🔥 Check-in</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">{meta.workoutStreak}</div>
                <div className="text-xs text-gray-500">💪 Workout</div>
              </div>
            </div>
          </StatCard>

          <StatCard
            title="Goals Completed"
            value={`${meta.goalsCompleted}`}
            subtitle={`/ ${meta.totalGoals}`}
          >
            <p className="text-sm text-gray-500 mt-2">
              {goals.filter(g => g.status === 'in_progress').length} in progress
            </p>
          </StatCard>

          <StatCard
            title="Ad Sales"
            value="$250K"
            subtitle="of $2M (12.5%)"
          >
            <ProgressBar value={12.5} className="mt-3" />
            <p className="text-xs text-gray-500 mt-2">Pace: ~$159K/month</p>
          </StatCard>
        </div>

        {/* Fitness Section */}
        <FitnessProgress baselines={baselines} />

        {/* Categories */}
        {Object.entries(goalsByCategory)
          .filter(([cat]) => cat !== 'free')
          .map(([category, catGoals]) => (
            <section key={category} className="mb-8">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                {categoryLabels[category] || category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {catGoals.map(goal => (
                  <GoalCard key={goal.id} goal={goal} />
                ))}
              </div>
            </section>
          ))}

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 mt-12 pt-6 border-t border-gray-800">
          Last updated: {new Date().toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })} at {new Date().toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            timeZoneName: 'short'
          })}
        </footer>
      </div>
    </main>
  );
}
