import { useCallback } from 'react';
import { ChevronRight } from 'lucide-react';

import {
  PopoverContent,
  PopoverTrigger,
  Button,
  SPopover,
  StatusIcon,
  StatusText,
  Size,
  userStatuses,
} from '@/shared/ui';
import { useUserStore } from '@/entities/user/model/store';
import { UserStatus } from '@/shared/model/types';

type StatusButtonProps = {
  status: UserStatus;
  size: Size;
  onClick: (status: UserStatus) => void;
};

function StatusButton({ status, size, onClick }: StatusButtonProps) {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
      onClick={() => onClick(status)}
    >
      <StatusIcon status={status} size={size} />
      <StatusText status={status} />
    </Button>
  );
}

type UserStatusPopupProps = {
  size: Size;
};

export function UserStatusPopup({ size }: UserStatusPopupProps) {
  const { status, changeStatus } = useUserStore();

  const handleStatusChange = useCallback(
    (newStatus: UserStatus) => {
      changeStatus(newStatus);
    },
    [changeStatus],
  );

  return (
    <SPopover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 group"
          aria-label="Select user status"
        >
          <div className="flex items-center gap-2">
            <StatusIcon status={status} size={size} />
            <StatusText status={status} />
          </div>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side="right"
        align="start"
        className="w-72 p-2 bg-zinc-900 border-zinc-800"
        aria-label="User status options"
      >
        <div className="space-y-2">
          {(Object.keys(userStatuses) as UserStatus[]).map(statusKey => (
            <StatusButton key={statusKey} status={statusKey} size={size} onClick={handleStatusChange} />
          ))}
        </div>
      </PopoverContent>
    </SPopover>
  );
}
