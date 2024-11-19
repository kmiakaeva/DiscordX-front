import { UserStatus } from './types';

export const userStatusInfo: Record<UserStatus, string> = {
  online: 'В сети',
  inactive: 'Неактивен',
  doNotDisturb: 'Не беспокоить',
  invisible: 'Невидимый',
};
