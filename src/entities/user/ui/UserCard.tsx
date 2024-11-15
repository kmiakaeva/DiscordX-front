import { AvatarWithBadge } from '@/shared/ui/AvatarWithBadge';
import { useUserStore } from '../model/store';

export function UserCard() {
  const { name, status } = useUserStore();

  return (
    <div className="flex space-x-3">
      <AvatarWithBadge fallback={name[0]} avatarImage="https://github.com/shadcn.png" status={status} />
      <div className="flex flex-col items-start">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-sm">{status}</div>
      </div>
    </div>
  );
}
