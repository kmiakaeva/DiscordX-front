import { SAvatar, AvatarImage, AvatarFallback } from './index';

type Props = {
  avatarImage: string;
  fallback: React.ReactNode;
};

export function Avatar({ avatarImage, fallback }: Props) {
  return (
    <SAvatar className="h-10 w-10">
      <AvatarImage className="h-10 w-10" src={avatarImage} alt="Avatar" />
      <AvatarFallback className="text-zinc-800">{fallback}</AvatarFallback>
    </SAvatar>
  );
}
