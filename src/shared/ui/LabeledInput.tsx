import { InputHTMLAttributes, forwardRef } from 'react';

import { Input, Label } from '@/shared/ui';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const LabeledInput = forwardRef<HTMLInputElement, Props>(({ id, label, error, ...props }, ref) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs font-bold uppercase text-zinc-400">
        {label}
      </Label>
      <Input
        ref={ref}
        id={id}
        className="bg-zinc-800 border-none h-10 focus-visible:ring-1 focus-visible:ring-indigo-500"
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});
