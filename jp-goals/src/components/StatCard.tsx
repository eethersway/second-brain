import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function StatCard({ title, value, subtitle, children }: StatCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{title}</div>
      {value && (
        <div className="text-4xl font-bold text-emerald-400">
          {value}
          {subtitle && <span className="text-lg text-gray-500 ml-1">{subtitle}</span>}
        </div>
      )}
      {children}
    </div>
  );
}
