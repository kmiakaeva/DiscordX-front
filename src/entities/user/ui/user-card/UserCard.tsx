import { useState } from 'react';

import { AvatarWithBadge, StatusText } from '@/shared/ui';
import { useUserStore } from '../../';

export function UserCard() {
  const { name, username, status, customStatus } = useUserStore();
  const [showUsername, setShowUsername] = useState(false);

  return (
    <div className="py-1 pr-6 flex space-x-3 rounded cursor-pointer duration-75 ease-in-out hover:bg-zinc-700">
      <AvatarWithBadge
        className="w-10 h-10"
        fallback={name[0]}
        avatarImage="https://github.com/shadcn.png"
        status={status}
      />
      <div className="w-20 text-start text-sm">
        <div className="font-medium">{name}</div>
        <div
          className="w-full truncate"
          onMouseEnter={() => setShowUsername(true)}
          onMouseLeave={() => setShowUsername(false)}
        >
          {showUsername ? username : customStatus || <StatusText status={status} />}
        </div>
      </div>
    </div>
  );
}
