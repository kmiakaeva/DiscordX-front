import { useState } from 'react';

import { AvatarWithBadge, StatusText } from '@/shared/ui';
import { useFetchUser } from '../../';

export function UserCard() {
  const { isPending, isError, data, error } = useFetchUser(1);
  const [showUsername, setShowUsername] = useState(false);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="py-1 pr-6 flex space-x-3 rounded cursor-pointer duration-75 ease-in-out hover:bg-zinc-700">
      <AvatarWithBadge
        className="w-10 h-10"
        fallback={data.name[0]}
        avatarImage={data.avatarImage}
        status={data.status}
      />
      <div className="w-20 text-start text-sm">
        <div className="w-full truncate font-medium">{data.name}</div>
        <div
          className="w-full truncate"
          onMouseEnter={() => setShowUsername(true)}
          onMouseLeave={() => setShowUsername(false)}
        >
          {showUsername ? data.username : data.customStatus || <StatusText status={data.status} />}
        </div>
      </div>
    </div>
  );
}
