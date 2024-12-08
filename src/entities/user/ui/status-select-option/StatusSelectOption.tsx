import { SelectItem, StatusIcon, StatusText } from '@/shared/ui';
import { UserStatus } from '@/shared/model';

type Props = {
  statusKey: UserStatus;
};

export function StatusSelectOption({ statusKey }: Props) {
  return (
    <SelectItem value={statusKey} className="text-zinc-100 focus:bg-zinc-700 focus:text-zinc-100">
      <div className="flex items-center gap-x-2">
        <StatusIcon status={statusKey} />
        <StatusText status={statusKey} />
      </div>
    </SelectItem>
  );
}
