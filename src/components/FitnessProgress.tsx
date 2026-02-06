'use client';

import ProgressBar from './ProgressBar';

interface FitnessProgressProps {
  baselines: {
    pushups: number;
    pullups: number;
    situps: number;
    weight: number;
  };
}

const fitnessGoals = [
  { name: 'Pushups', current: 10, target: 40, unit: 'reps' },
  { name: 'Pullups', current: 1, target: 5, unit: 'reps' },
  { name: 'Situps', current: 10, target: 30, unit: 'reps' },
  { name: 'Weight', current: 205, target: 190, unit: 'lbs', reverse: true },
];

export default function FitnessProgress({ baselines }: FitnessProgressProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
      <h2 className="text-sm text-gray-500 uppercase tracking-wide mb-4">🏋️ Fitness Progress</h2>
      <div className="space-y-4">
        {fitnessGoals.map(goal => {
          const percent = goal.reverse 
            ? ((goal.current - goal.target) / (baselines.weight - goal.target)) * 100
            : (goal.current / goal.target) * 100;
          
          return (
            <div key={goal.name} className="flex items-center gap-4">
              <span className="w-24 font-medium">{goal.name}</span>
              <div className="flex-1">
                <ProgressBar value={goal.reverse ? Math.max(0, 100 - percent) : percent} size="sm" />
              </div>
              <span className="w-24 text-right text-sm text-gray-500">
                {goal.current} / {goal.target} {goal.unit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
