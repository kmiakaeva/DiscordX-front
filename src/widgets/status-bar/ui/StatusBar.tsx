import { ReactNode } from '@tanstack/react-router';

import { SettingsButton } from './SettingsButton';

export function StatusBar({ leftSide, rightSide }: { leftSide: ReactNode; rightSide: ReactNode }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg shadow-sm max-w-72">
      <div className="leftSide">{leftSide}</div>
      <div className="rightSide">
        <div className="flex items-center">
          {rightSide}
          <SettingsButton />
        </div>
      </div>
    </div>
  );
}
