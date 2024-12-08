import { Input } from './';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  children?: React.ReactNode;
};

export function CustomInput({ value, onChange, placeholder, children }: Props) {
  return (
    <div className="relative">
      <Input
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="bg-zinc-800 border-none text-zinc-100 pl-10"
      />
      {children && <div className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400">{children}</div>}
    </div>
  );
}
