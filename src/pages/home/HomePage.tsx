import { StatusBar } from '@/widgets/status-bar';
import { UserProfile } from '@/widgets/user-profile';
import { AudioControl } from '@/features/audio-control';
import { UserCard, useFetchUser } from '@/entities/user';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui';

export function HomePage() {
  const { isPending, isError, error } = useFetchUser(6);

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
