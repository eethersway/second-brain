interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  size?: 'sm' | 'md';
}

export default function ProgressBar({ 
  value, 
  max = 100, 
  className = '',
  size = 'md' 
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const height = size === 'sm' ? 'h-1.5' : 'h-2';
  
  return (
    <div className={`${height} bg-gray-800 rounded-full overflow-hidden ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
