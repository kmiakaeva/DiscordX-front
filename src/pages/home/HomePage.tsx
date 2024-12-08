import { StatusBar } from '@/widgets/status-bar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui';
import { AudioControl } from '@/features/audio-control';
import { UserProfile } from '@/widgets/user-profile';
import { UserCard } from '@/entities/user';

export function HomePage() {
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
