import { StatusBar } from '@/widgets/status-bar';
import { SPopover, PopoverContent, PopoverTrigger } from '@/shared/ui';
import { AudioControl } from '@/features/audio-control';
import { UserCard } from '@/entities/user';
import { ProfileCard } from '@/features/user-profile';

export function Home() {
  return (
    <SPopover>
      <StatusBar
        leftSide={
          <PopoverTrigger>
            <UserCard />
          </PopoverTrigger>
        }
        rightSide={<AudioControl />}
      />
      <PopoverContent className="bg-zinc-900 border-none">
        <ProfileCard />
      </PopoverContent>
    </SPopover>
  );
}
