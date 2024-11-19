import { Card } from '@/shared/ui';
import { useUserStore } from '@/entities/user/model/store';
import { GameInfo, ProfileActions, UserInfo } from '@/features/user-profile';
import { AvatarSection } from '@/features/user-profile/ui/AvatarSection';

export function ProfileCard() {
  const { name, username, status, game, playingTime } = useUserStore();

  return (
    <Card className="border-none bg-zinc-900 text-zinc-100 shadow-none">
      <AvatarSection name={name} status={status} size="lg" />
      <UserInfo name={name} username={username} />
      <GameInfo game={game} playingTime={playingTime} />
      <ProfileActions status={status} size="md" />
    </Card>
  );
}
