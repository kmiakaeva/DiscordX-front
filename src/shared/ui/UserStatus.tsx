import { Moon } from 'lucide-react';

import { cn } from '../lib/utils';
import { UserStatus } from '../model/types';

export const userStatuses: Record<UserStatus, string> = {
  online: 'В сети',
  inactive: 'Неактивен',
  doNotDisturb: 'Не беспокоить',
  invisible: 'Невидимый',
};

export type Size = 'sm' | 'md' | 'lg';

type Props = {
  status: UserStatus;
  size?: Size;
};

const sizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

const iconSizeClasses = {
  sm: 'w-2.5 h-2.5',
  md: 'w-3.5 h-3.5',
  lg: 'w-4 h-4',
};

const barSizeClasses = {
  sm: 'w-2 h-0.5',
  md: 'w-2.5 h-[3px]',
  lg: 'w-3 h-1',
};

export function StatusText({ status }: Props) {
  return <span>{userStatuses[status]}</span>;
}

export function StatusIcon({ status, size = 'sm' }: Props) {
  const baseClasses = cn('rounded-full', sizeClasses[size]);

  switch (status) {
    case 'online':
      return <div className={cn(baseClasses, 'bg-green-500')} />;
    case 'inactive':
      return (
        <div className={cn(baseClasses, 'bg-zinc-800 flex items-center justify-center')}>
          <Moon className={cn('fill-yellow-500 text-yellow-500', iconSizeClasses[size])} />
        </div>
      );
    case 'doNotDisturb':
      return (
        <div className={cn(baseClasses, 'bg-red-500 flex items-center justify-center')}>
          <div className={cn('bg-zinc-800 rounded-sm', barSizeClasses[size])} />
        </div>
      );
    case 'invisible':
      return <div className={cn(baseClasses, 'bg-zinc-800 border-[3px] border-zinc-500')} />;
    default:
      return null;
  }
}

export function StatusBadge({ status, size = 'sm' }: Props) {
  return (
    <div className={cn('absolute bottom-0 right-0')}>
      <StatusIcon status={status} size={size} />
    </div>
  );
}
