import { useSettingsStore } from '../model/settingsStore';

export function SettingsPanel() {
  const { isSettingsOpen, closeSettings } = useSettingsStore();

  if (!isSettingsOpen) return null;

  return (
    <div>
      <div>
        <button onClick={closeSettings}>Закрыть</button>
        <h2>Настройки</h2>
      </div>
    </div>
  );
}
