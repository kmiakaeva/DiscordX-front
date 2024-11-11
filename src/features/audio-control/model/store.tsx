import { create } from 'zustand';

import { AudioState } from './types';

export const useAudioStore = create<AudioState>(set => ({
  isMicMuted: false,
  isAudioOff: false,
  toggleMic: () => set(state => ({ isMicMuted: !state.isMicMuted })),
  toggleAudio: () => set(state => ({ isAudioOff: !state.isAudioOff })),
}));
