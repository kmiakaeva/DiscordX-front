import { Select, SelectContent, SelectTrigger, SelectValue } from './';
import { UserStatus } from '../model';

type Props = {
  label: string;
  value: string;
  onChange: (value: UserStatus) => void;
  children: React.ReactNode;
};

export function LabeledSelect({ label, value, onChange, children }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-xs text-zinc-400 uppercase">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-zinc-800 border-none text-zinc-100">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-zinc-800 border-zinc-700">{children}</SelectContent>
      </Select>
    </div>
  );
}
