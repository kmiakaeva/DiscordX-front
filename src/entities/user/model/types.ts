import { UserStatus } from '@/shared/model';

export type UserState = {
  name: string;
  username: string;
  status: UserStatus;
  avatarImage: string;
  customStatus?: string;
  changeStatus: (newStatus: UserStatus) => void;
  changeCustomStatus: (newCustomStatus: string) => void;
};
