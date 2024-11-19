import { ChevronRight } from 'lucide-react';

import { PopoverContent, PopoverTrigger, Button, SPopover, StatusIcon } from '@/shared/ui';
import { StatusText } from '@/shared/ui/StatusText';
import { Size, UserStatus } from '@/shared/model/types';
import { userStatusInfo } from '@/shared/model/userStatusInfo';

type Props = {
  status: UserStatus;
  size: Size;
};

function StatusButton({ status, size }: Props) {
  return (
    <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-zinc-100">
      <StatusIcon status={status} size={size} />
      <StatusText status={status} />
    </Button>
  );
}

export function UserStatusSelectorPopover({ status, size }: Props) {
  return (
    <SPopover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="w-full justify-between text-zinc-400 hover:text-zinc-100 group">
          <div className="flex items-center gap-2">
            <StatusIcon status={status} size={size} />
            <StatusText status={status} />
          </div>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent side="right" align="start" className="w-72 p-2 bg-zinc-900 border-zinc-800">
        <div className="space-y-2">
          {Object.keys(userStatusInfo).map(statusKey => {
            const status = statusKey as UserStatus;
            return <StatusButton key={status} status={status} size={size} />;
          })}
        </div>
      </PopoverContent>
    </SPopover>
  );
}
