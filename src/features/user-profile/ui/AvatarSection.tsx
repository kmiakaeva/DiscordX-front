import { CirclePlus } from 'lucide-react';

import { AvatarWithBadge, Button } from '@/shared/ui';
import { Size, UserStatus } from '@/shared/model/types';

type Props = {
  name: string;
  status: UserStatus;
  size: Size;
};

export function AvatarSection({ name, status, size }: Props) {
  return (
    <div className="flex items-start justify-between">
      <div className="relative mb-4">
        <AvatarWithBadge
          className="w-[76px] h-[76px]"
          fallback={name[0]}
          avatarImage="https://github.com/shadcn.png"
          status={status}
          size={size}
        />
      </div>
      <Button size="sm" className="!bg-zinc-800 text-zinc-400 hover:text-zinc-100">
        <CirclePlus className="h-4 w-4 mr-1" />
        <span className="text-xs">Добавить статус</span>
      </Button>
    </div>
  );
}
