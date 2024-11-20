import { StatusBar } from '@/widgets/status-bar';
import { SPopover, PopoverContent, PopoverTrigger } from '@/shared/ui';
import { AudioControl } from '@/features/audio-control';
import { UserCard } from '@/entities/user';
import { UserProfile } from '@/widgets/user-profile';
import { SettingsPanel } from '@/widgets/settings-panel';

export function Home() {
  return (
    <>
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
          <UserProfile />
        </PopoverContent>
      </SPopover>
      <SettingsPanel />
    </>
  );
}
