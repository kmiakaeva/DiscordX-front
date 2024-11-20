import { Card } from '@/shared/ui';
import { GameInfo, ProfileActions, UserInfo, AvatarSection } from '../index';

export function ProfileCard() {
  return (
    <Card className="border-none bg-zinc-900 text-zinc-100 shadow-none">
      <AvatarSection size="lg" />
      <UserInfo />
      <GameInfo />
      <ProfileActions size="md" />
    </Card>
  );
}
