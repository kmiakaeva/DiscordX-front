import { UserStatus } from '@/shared/model';

export type UserState = {
  name: string;
  username: string;
  status: UserStatus;
  avatarImage: string;
  game: string;
  playingTime: string;
  changeStatus: (newStatus: UserStatus) => void;
};
