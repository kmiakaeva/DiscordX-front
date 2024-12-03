import { Settings } from 'lucide-react';

import { Button } from '@/shared/ui';

export function SettingsButton() {
  return (
    <Button variant="ghost" size="icon" className="h-8 w-8">
      <Settings className="h-4 w-4" />
      <span className="sr-only">Settings</span>
    </Button>
  );
}
