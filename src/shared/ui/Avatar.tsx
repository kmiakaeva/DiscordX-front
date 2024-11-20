import { ReactNode } from '@tanstack/react-router';

import { SAvatar, AvatarImage, AvatarFallback } from './index';

type Props = {
  className?: string;
  avatarImage: string;
  fallback: ReactNode;
};

export function Avatar({ className, avatarImage, fallback }: Props) {
  return (
    <SAvatar className={className}>
      <AvatarImage src={avatarImage} alt="Avatar" />
      <AvatarFallback className="text-zinc-800">{fallback}</AvatarFallback>
    </SAvatar>
  );
}
