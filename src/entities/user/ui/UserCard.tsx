import { Badge, EntityAvatar } from '@/shared';

export function UserCard() {
  const status = 'inactive';
  const username = 'Kristina';

  return (
    <div className="flex items-center space-x-2 text-base">
      <div className="relative">
        <EntityAvatar />
        <Badge status={status} />
      </div>
      <div className="font-medium">{username}</div>
    </div>
  );
}
