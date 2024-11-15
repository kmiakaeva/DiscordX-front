import { create } from 'zustand';

import { UserState } from './types';

export const useUserStore = create<UserState>(set => ({
  name: 'Andy',
  username: 'a_username',
  status: 'online',
  avatarImage: 'string',
  changeStatus: () => set(state => ({ status: state.status })),
}));
