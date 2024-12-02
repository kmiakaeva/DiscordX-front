import { create } from 'zustand';

import { GameState } from './types';

export const useGameStore = create<GameState>(() => ({
  gameName: 'The Witcher: Enhanced Edition',
  playingTime: 10000,
}));
