import { Moon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Size, UserStatus } from '../model/types';

interface Props {
  status: UserStatus;
  size?: Size;
}

export function StatusIcon({ status, size = 'sm' }: Props) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const baseClasses = cn('rounded-full', sizeClasses[size]);

  switch (status) {
    case 'online':
      return <div className={cn(baseClasses, 'bg-green-500')} />;
    case 'inactive':
      return (
        <div className={cn(baseClasses, 'bg-zinc-800 flex items-center justify-center')}>
          <Moon
            className={cn('fill-yellow-500 text-yellow-500', {
              'w-2.5 h-2.5': size === 'sm',
              'w-3.5 h-3.5': size === 'md',
              'w-4 h-4': size === 'lg',
            })}
          />
        </div>
      );
    case 'doNotDisturb':
      return (
        <div className={cn(baseClasses, 'bg-red-500 flex items-center justify-center')}>
          <div
            className={cn('bg-zinc-800 rounded-sm', {
              'w-2 h-0.5': size === 'sm',
              'w-2.5 h-[3px]': size === 'md',
              'w-3 h-1': size === 'lg',
            })}
          />
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
