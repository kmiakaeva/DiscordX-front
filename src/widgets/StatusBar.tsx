import { ReactNode } from '@tanstack/react-router';

export function StatusBar({ leftSide, rightSide }: { leftSide: ReactNode; rightSide: ReactNode }) {
  return (
    <div>
      <div className="leftSide">{leftSide}</div>
      <div className="rightSide">
        {rightSide}
        <div className="setting">Settings</div>
      </div>
    </div>
  );
}
