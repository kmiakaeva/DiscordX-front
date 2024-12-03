import { DialogContent } from '@/shared/ui';

type Props = {
  username: string;
};

export function CustomStatusDialog({ username }: Props) {
  return (
    <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-zinc-100 border-zinc-800">{username}</DialogContent>
  );
}
