import { ReactNode } from '@tanstack/react-router';

import { SettingsIcon } from '@/features/settings';

export function StatusBar({ leftSide, rightSide }: { leftSide: ReactNode; rightSide: ReactNode }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg shadow-sm max-w-72">
      <div className="leftSide">{leftSide}</div>
      <div className="rightSide">
        <div className="flex items-center">
          {rightSide}
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}
