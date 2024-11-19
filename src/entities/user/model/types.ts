import { UserStatus } from '@/shared/model/types';

export interface UserState {
  name: string;
  username: string;
  status: UserStatus;
  avatarImage: string;
  game: string;
  playingTime: string;
  changeStatus: () => void;
}
