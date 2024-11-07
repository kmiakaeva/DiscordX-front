import { StatusBar } from '@/widgets';
import { AudioControl } from '@/features';
import { UserCard } from '@/entities/user';

export function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <StatusBar leftSide={<UserCard />} rightSide={<AudioControl />} />
    </div>
  );
}
