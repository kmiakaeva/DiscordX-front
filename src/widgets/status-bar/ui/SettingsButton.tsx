import { Settings } from 'lucide-react';

import { Button } from '@/shared/ui';
import { useSettingsStore } from '@/entities/settings';

export function SettingsButton() {
  const { openSettings } = useSettingsStore();

  return (
    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={openSettings}>
      <Settings className="h-4 w-4" />
      <span className="sr-only">Settings</span>
    </Button>
  );
}
