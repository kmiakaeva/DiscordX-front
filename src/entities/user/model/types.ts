import { UserStatus } from '@/shared/model';

export type UserStoreState = {
  id: number | undefined;
  name: string;
  username: string;
  status: UserStatus;
  avatarImage: string;
  customStatus?: string | null;
  changeStatus: (newStatus: UserStatus) => void;
  changeCustomStatus: (newCustomStatus: string) => void;
  setUser: (user: User) => void;
};

export type User = Pick<UserStoreState, 'id' | 'name' | 'username' | 'status' | 'avatarImage' | 'customStatus'>;
