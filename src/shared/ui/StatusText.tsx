import { userStatusInfo } from '../model/userStatusInfo';
import { UserStatus } from '../model/types';

type Props = {
  status: UserStatus;
};

export function StatusText({ status }: Props) {
  return <span>{userStatusInfo[status]}</span>;
}
