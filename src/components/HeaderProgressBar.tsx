import React from 'react';

interface HeaderProgressBarProps {
  progress: number; // 0 to 100
}

export const HeaderProgressBar: React.FC<HeaderProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 pt-6 pb-2">
      <div className="h-2.5 w-full bg-[#e8eef8] rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-[#0072b2] transition-all duration-500 ease-out rounded-full"
          style={{ width: `${Math.max(5, Math.min(100, progress))}%` }}
        />
      </div>
    </div>
  );
};
