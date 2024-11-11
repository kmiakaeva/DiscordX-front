import { Mic, MicOff, Headphones, HeadphoneOff } from 'lucide-react';

import { Button } from '@/shared/ui/SButton';
import { useAudioStore } from '../model/store';

export function AudioControl() {
  const { isMicMuted, isAudioOff, toggleMic, toggleAudio } = useAudioStore();

  return (
    <>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleMic}>
        {!isMicMuted ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" color="tomato" />}
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleAudio}>
        {!isAudioOff ? <Headphones className="h-4 w-4" /> : <HeadphoneOff className="h-4 w-4" color="tomato" />}
      </Button>
    </>
  );
}
