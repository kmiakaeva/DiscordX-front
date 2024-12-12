import { ChevronRight } from 'lucide-react';

import {
  PopoverContent,
  PopoverTrigger,
  Button,
  Popover,
  StatusIcon,
  StatusText,
  Size,
  userStatuses,
} from '@/shared/ui';
import { useFetchUser, useUserMutation } from '../..';
import { UserStatus } from '@/shared/model';

type StatusButtonProps = {
  status: UserStatus;
  size: Size;
  changeStatus: (status: UserStatus) => void;
};

function StatusButton({ status, size, changeStatus }: StatusButtonProps) {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
      onClick={() => changeStatus(status)}
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
  const { data } = useFetchUser(1);
  const updateUser = useUserMutation();

  const changeStatus = (status: UserStatus) => {
    if (data?.id) {
      updateUser.mutate({
        id: data.id,
        data: { status },
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 group"
          aria-label="Select user status"
        >
          <div className="flex items-center gap-2">
            <StatusIcon status={data?.status ?? 'inactive'} size={size} />
            <StatusText status={data?.status ?? 'inactive'} />
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
          {Object.keys(userStatuses).map(statusKey => (
            <StatusButton key={statusKey} status={statusKey} size={size} changeStatus={changeStatus} />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
