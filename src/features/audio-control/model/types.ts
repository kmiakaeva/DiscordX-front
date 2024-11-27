export type AudioState = {
  isMicMuted: boolean;
  isAudioOff: boolean;
  toggleMic: () => void;
  toggleAudio: () => void;
};
