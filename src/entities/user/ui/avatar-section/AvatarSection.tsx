import { CirclePlus } from 'lucide-react';

import { AvatarWithBadge, Button, Dialog, DialogOverlay, DialogPortal, DialogTrigger, Size } from '@/shared/ui';
import { CustomStatusPopup, useFetchUser } from '../../';

type Props = {
  size: Size;
};

export function AvatarSection({ size }: Props) {
  const { isPending, isError, data, error } = useFetchUser(1);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex items-start justify-between">
      <div className="relative mb-4">
        <AvatarWithBadge
          className="w-[76px] h-[76px]"
          fallback={data.name[0]}
          avatarImage={data.avatarImage}
          status={data.status}
          size={size}
        />
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" className="!bg-zinc-800 text-zinc-400 hover:text-zinc-100">
            <CirclePlus className="h-4 w-4 mr-1" />
            <span className="text-xs">Добавить статус</span>
          </Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay>
            <CustomStatusPopup />
          </DialogOverlay>
        </DialogPortal>
      </Dialog>
    </div>
  );
}
