import { AvatarSection } from '@/features/avatar-section';
import { UserGameInfo } from '@/features/user-game-info';
import { UserInfo } from '@/features/user-info';
import { UserProfileActions } from '@/features/user-profile-actions';
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
