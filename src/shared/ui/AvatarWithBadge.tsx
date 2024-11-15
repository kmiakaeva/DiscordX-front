import { StatusBadge, Avatar } from './index';
import { UserStatus } from '../model/types';

type Props = {
  avatarImage: string;
  fallback: React.ReactNode;
  status: UserStatus;
};

export function AvatarWithBadge({ avatarImage, fallback, status }: Props) {
  return (
    <div className="relative">
      <Avatar avatarImage={avatarImage} fallback={fallback} />
      <StatusBadge status={status} />
    </div>
  );
}
