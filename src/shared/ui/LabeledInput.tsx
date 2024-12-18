import { Input, Label } from '@/shared/ui';

type Props = {
  id: string;
  label: string;
  type?: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function LabeledInput({ id, label, type = 'text', value, onChange, required }: Props) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs font-bold uppercase text-zinc-400">
        {label} {required && '*'}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-zinc-800 border-none h-10 focus-visible:ring-1 focus-visible:ring-indigo-500"
      />
    </div>
  );
}
