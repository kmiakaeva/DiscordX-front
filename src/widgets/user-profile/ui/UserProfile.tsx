import { Card } from '@/shared/ui';
import { AvatarSection, GameInfo, ProfileActions, UserInfo } from '@/features/user-profile';

export function UserProfile() {
  return (
    <Card className="border-none bg-zinc-900 text-zinc-100 shadow-none">
      <AvatarSection size="lg" />
      <UserInfo />
      <GameInfo />
      <ProfileActions size="md" />
    </Card>
  );
}
