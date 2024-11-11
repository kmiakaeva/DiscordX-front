import { StatusBar } from '@/widgets/status-bar';
import { AudioControl } from '@/features/audio-control';
import { UserCard } from '@/entities/user';

export function Home() {
  return (
    <div>
      <StatusBar leftSide={<UserCard />} rightSide={<AudioControl />} />
    </div>
  );
}
