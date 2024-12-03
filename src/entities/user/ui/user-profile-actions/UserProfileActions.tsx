import { PenSquare, ArrowRightLeft, ChevronRight } from 'lucide-react';

import { Button, Size, UserStatusPopup } from '@/shared/ui';
import { useUserStore } from '../../';

type Props = {
  size: Size;
};

export function UserProfileActions({ size }: Props) {
  const { status, changeStatus } = useUserStore();

  return (
    <>
      <div className="p-2 mb-3 rounded-md flex flex-col bg-zinc-800 text-xs">
        <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-zinc-100">
          <PenSquare className="h-4 w-4" />
          Редактировать профиль
        </Button>

        <UserStatusPopup size={size} status={status} changeStatus={changeStatus} />
      </div>

      <div className="p-2 mb-3 rounded-md flex flex-col bg-zinc-800 text-xs">
        <Button variant="ghost" className="w-full justify-between text-zinc-400 hover:text-zinc-100 group">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <ArrowRightLeft className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">Переключение между учётными записями</span>
          </div>
          <ChevronRight className="h-4 w-4 flex-shrink-0" />
        </Button>
      </div>
    </>
  );
}
