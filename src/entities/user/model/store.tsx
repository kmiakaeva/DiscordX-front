import { create } from 'zustand';

import { UserState } from './types';

export const useUserStore = create<UserState>(set => ({
  name: 'Andy',
  username: 'a_username',
  status: 'invisible',
  avatarImage: 'string',
  game: 'The Witcher: Enhanced Edition',
  playingTime: '10:56',
  changeStatus: () => set(state => ({ status: state.status })),
}));
