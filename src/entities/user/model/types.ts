import { UserStatus } from '@/shared/model';

export type User = {
  id: number | undefined;
  name: string;
  username: string;
  status: UserStatus;
  avatarImage: string;
  customStatus?: string | null;
};
