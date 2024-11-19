import { StatusBadge, Avatar } from './index';
import { Size, UserStatus } from '../model/types';

type Props = {
  className: string;
  avatarImage: string;
  fallback: React.ReactNode;
  status: UserStatus;
  size?: Size;
};

export function AvatarWithBadge({ className, avatarImage, fallback, status, size }: Props) {
  return (
    <div className="relative">
      <Avatar className={className} avatarImage={avatarImage} fallback={fallback} />
      <StatusBadge status={status} size={size} />
    </div>
  );
}
