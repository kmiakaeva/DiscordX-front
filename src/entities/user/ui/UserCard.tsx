import { AvatarWithBadge } from '@/shared/ui/AvatarWithBadge';
import { useUserStore } from '../model/store';
import { StatusText } from '@/shared/ui/StatusText';

export function UserCard() {
  const { name, status } = useUserStore();

  return (
    <div className="flex space-x-3">
      <AvatarWithBadge
        className="w-10 h-10"
        fallback={name[0]}
        avatarImage="https://github.com/shadcn.png"
        status={status}
      />
      <div className="flex flex-col items-start">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-sm">
          <StatusText status={status} />
        </div>
      </div>
    </div>
  );
}
