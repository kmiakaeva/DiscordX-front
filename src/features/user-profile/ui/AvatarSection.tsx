import { CirclePlus } from 'lucide-react';

import { AvatarWithBadge, Button, Size } from '@/shared/ui';
import { useUserStore } from '@/entities/user/model/store';

type Props = {
  size: Size;
};

export function AvatarSection({ size }: Props) {
  const { name, status } = useUserStore();

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
