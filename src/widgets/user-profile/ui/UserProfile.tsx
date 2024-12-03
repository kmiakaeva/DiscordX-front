import { AvatarSection, UserInfo, UserProfileActions } from '@/entities/user';
import { UserGameInfo } from '@/entities/game';
import { Card } from '@/shared/ui';

export function UserProfile() {
  return (
    <Card className="border-none bg-zinc-900 text-zinc-100 shadow-none">
      <AvatarSection size="lg" />
      <UserInfo />
      <UserGameInfo />
      <UserProfileActions size="md" />
    </Card>
  );
}
