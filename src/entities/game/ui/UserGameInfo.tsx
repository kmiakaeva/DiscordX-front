import { FileQuestion, Gamepad2 } from 'lucide-react';

import { useGameStore } from '../';

export function UserGameInfo() {
  const { gameName, playingTime } = useGameStore();

  return (
    <div className="p-2 mb-3 rounded-md flex flex-col bg-zinc-800 text-xs">
      <span className="mb-3">Играет в </span>
      <div className="flex items-center gap-3">
        <div className="rounded-md p-1 bg-white">
          <FileQuestion className="h-10 w-10 text-zinc-800" />
        </div>
        <div>
          <div className="font-medium mb-1">{gameName}</div>
          <div className="flex gap-1 text-xs font-bold text-green-500">
            <Gamepad2 className="h-4 w-4" />
            {playingTime}
          </div>
        </div>
      </div>
    </div>
  );
}
