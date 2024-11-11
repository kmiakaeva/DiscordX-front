import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/SAvatar';

export function EntityAvatar() {
  return (
    <Avatar className="h-10 w-10">
      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Entity avatar" />
      <AvatarFallback className="text-zinc-800">K</AvatarFallback>
    </Avatar>
  );
}
