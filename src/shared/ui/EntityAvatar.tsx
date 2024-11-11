import { useUserStore } from '@/entities/user/model/store';
import { Avatar, AvatarImage, AvatarFallback } from '../index';

export function EntityAvatar() {
  const { name, avatar } = useUserStore();

  return (
    <Avatar className="h-10 w-10">
      {!avatar ? (
        <AvatarImage className="h-10 w-10" src={avatar} alt="Entity avatar" />
      ) : (
        <AvatarFallback className="text-zinc-800">{name[0]}</AvatarFallback>
      )}
    </Avatar>
  );
}
