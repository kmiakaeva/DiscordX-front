import { create } from 'zustand';

import { UserState } from './types';
import { UserStatus } from '@/shared/model';

export const useUserStore = create<UserState>(set => ({
  name: 'Andy',
  username: 'a_username',
  status: 'invisible',
  avatarImage: 'string',
  changeStatus: (newStatus: UserStatus) => set({ status: newStatus }),
  changeCustomStatus: (newCustomStatus: string) => set({ customStatus: newCustomStatus }),
}));
