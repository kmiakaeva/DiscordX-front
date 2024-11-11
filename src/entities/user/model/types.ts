import { UserStatus } from '@/shared/model/types';

export interface UserState {
  name: string;
  username: string;
  status: UserStatus;
  avatar: string;
  changeStatus: () => void;
}
