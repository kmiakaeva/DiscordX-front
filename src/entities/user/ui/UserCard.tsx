import { Badge, EntityAvatar } from '@/shared';
import { useUserStore } from '../model/store';

export function UserCard() {
  const { name, status } = useUserStore();

  return (
    <div className="flex space-x-3">
      <div className="relative">
        <EntityAvatar />
        <Badge />
      </div>
      <div className="flex flex-col items-start">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-sm">{status}</div>
      </div>
    </div>
  );
}
