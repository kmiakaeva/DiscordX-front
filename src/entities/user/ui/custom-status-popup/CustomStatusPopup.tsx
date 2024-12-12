import { Smile } from 'lucide-react';
import { useState } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  Button,
  SelectItem,
  userStatuses,
  CustomInput,
  LabeledSelect,
  DialogDescription,
} from '@/shared/ui';
import { UserStatus } from '@/shared/model';
import { StatusSelectOption, useFetchUser, useUserMutation } from '../../';

type CustomStatusFieldsProps = {
  inputStatus: string;
  setInputStatus: (value: string) => void;
  clearAfter: string;
  setClearAfter: (value: string) => void;
  userStatus: UserStatus;
  setUserStatus: (value: UserStatus) => void;
};

const clearOptions = [
  { value: 'today', label: 'Сегодня' },
  { value: '4 hour', label: '4 ч.' },
  { value: '1 hour', label: '1 ч.' },
  { value: '30 minutes', label: '30 мин.' },
  { value: 'never', label: 'Не удалять' },
];

function CustomStatusFields({
  inputStatus,
  setInputStatus,
  clearAfter,
  setClearAfter,
  userStatus,
  setUserStatus,
}: CustomStatusFieldsProps) {
  return (
    <div className="space-y-4 py-4">
      <CustomInput value={inputStatus} onChange={setInputStatus} placeholder="Поддержка прибыла!">
        <Smile className="h-4 w-4" />
      </CustomInput>

      <LabeledSelect label="Удалить через" value={clearAfter} onChange={setClearAfter}>
        {clearOptions.map(({ value, label }) => (
          <SelectItem key={value} value={value} className="text-zinc-100 focus:bg-zinc-700 focus:text-zinc-100">
            {label}
          </SelectItem>
        ))}
      </LabeledSelect>

      <LabeledSelect label="Состояние" value={userStatus} onChange={setUserStatus}>
        {Object.keys(userStatuses).map(statusKey => (
          <StatusSelectOption key={statusKey} statusKey={statusKey} />
        ))}
      </LabeledSelect>
    </div>
  );
}

export function CustomStatusPopup() {
  const { isPending, isError, data, error } = useFetchUser(1);
  const updateUser = useUserMutation();

  const [inputStatus, setInputStatus] = useState(data?.customStatus || '');
  const [clearAfter, setClearAfter] = useState(clearOptions[0].value);
  const [userStatus, setUserStatus] = useState<UserStatus>(data?.status || 'online');

  const saveCustomStatusChanges = () => {
    if (data?.id) {
      updateUser.mutate({
        id: data?.id,
        data: { customStatus: inputStatus, status: userStatus },
      });
    }
  };

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-zinc-100 border-zinc-800">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">Задать пользовательский статус</DialogTitle>
        <p className="text-sm text-zinc-400">КАК ЖИЗНЬ, {data.username.toUpperCase()}?</p>
        <VisuallyHidden>
          <DialogDescription>This is a hidden description for screen readers.</DialogDescription>
        </VisuallyHidden>
      </DialogHeader>

      <CustomStatusFields
        inputStatus={inputStatus}
        setInputStatus={setInputStatus}
        clearAfter={clearAfter}
        setClearAfter={setClearAfter}
        userStatus={userStatus}
        setUserStatus={setUserStatus}
      />

      <DialogFooter className="sm:justify-between">
        <DialogClose asChild>
          <Button variant="ghost" className="PopoverClose text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800">
            Отмена
          </Button>
        </DialogClose>

        <DialogClose asChild>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white" onClick={saveCustomStatusChanges}>
            Сохранить
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
