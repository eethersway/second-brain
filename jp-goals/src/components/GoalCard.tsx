import { Goal } from '@/lib/data';

interface GoalCardProps {
  goal: Goal;
}

export default function GoalCard({ goal }: GoalCardProps) {
  const isComplete = goal.status === 'complete';
  const inProgress = goal.status === 'in_progress';
  const progressPercent = (goal.progress / goal.target) * 100;
  
  const progressText = goal.type === 'count' || goal.type === 'highscore' 
    ? `${goal.progress}/${goal.target}`
    : inProgress ? 'In Progress' : 'Not Started';

  return (
    <div className={`
      bg-gray-900 border rounded-lg p-4 text-center transition-all hover:scale-[1.02] hover:border-emerald-500/50
      ${isComplete ? 'border-emerald-500 bg-emerald-500/10' : ''}
      ${inProgress ? 'border-amber-500/50' : ''}
      ${!isComplete && !inProgress ? 'border-gray-800' : ''}
    `}>
      <div className="text-2xl mb-2">{goal.icon}</div>
      <div className="font-medium text-sm mb-1 truncate">{goal.name}</div>
      <div className={`
        text-xs
        ${isComplete ? 'text-emerald-400' : 'text-gray-500'}
      `}>
        {isComplete ? '✓ Complete' : progressText}
      </div>
      {inProgress && progressPercent > 0 && progressPercent < 100 && (
        <div className="mt-2">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
