import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { StatusBar } from '@/widgets/status-bar';
import { UserProfile } from '@/widgets/user-profile';
import { AudioControl } from '@/features/audio-control';
import { fetchUser, UserCard, useUserStore } from '@/entities/user';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui';
import { User } from '@/entities/user/model/types';

export function HomePage() {
  const { setUser } = useUserStore();

  const {
    isPending,
    isError,
    data: user,
    error,
  } = useQuery<User, Error>({
    queryKey: ['user', 4],
    queryFn: () => fetchUser(4),
  });

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Popover>
      <StatusBar
        leftSide={
          <PopoverTrigger>
            <UserCard />
          </PopoverTrigger>
        }
        rightSide={<AudioControl />}
      />
      <PopoverContent className="bg-zinc-900 border-none">
        <UserProfile />
      </PopoverContent>
    </Popover>
  );
}
