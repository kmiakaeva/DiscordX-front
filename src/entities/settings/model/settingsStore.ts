import { create } from 'zustand';

import { SettingsStore } from './types';

export const useSettingsStore = create<SettingsStore>(set => ({
  isSettingsOpen: false,
  openSettings: () => set({ isSettingsOpen: true }),
  closeSettings: () => set({ isSettingsOpen: false }),
}));
