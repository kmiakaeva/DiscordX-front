import { StatusBar } from '@/widgets/status-bar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui';
import { AudioControl } from '@/features/audio-control';
import { UserCard } from '@/entities/user';

export function Home() {
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
      <PopoverContent>Future content.</PopoverContent>
    </Popover>
  );
}

// Make Popover
