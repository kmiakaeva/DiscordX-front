import { create } from 'zustand';

import { User, UserStoreState } from './types';
import { UserStatus } from '@/shared/model';

export const useUserStore = create<UserStoreState>(set => ({
  id: undefined,
  name: '',
  username: '',
  status: 'online',
  avatarImage: '',
  customStatus: null,
  changeStatus: (newStatus: UserStatus) => set({ status: newStatus }),
  changeCustomStatus: (newCustomStatus: string) => set({ customStatus: newCustomStatus }),
  setUser: (user: User) => set({ ...user }),
}));
