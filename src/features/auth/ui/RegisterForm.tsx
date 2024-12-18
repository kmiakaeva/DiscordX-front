import { useState } from 'react';
import { Link } from '@tanstack/react-router';

import { Button, LabeledInput } from '@/shared/ui';

type FormData = {
  name: string;
  email: string;
  password: string;
};

export function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-[480px] bg-zinc-700 rounded-md p-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Создать аккаунт</h1>
        <p className="text-zinc-400 text-sm">Присоединяйтесь к сообществу!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <LabeledInput
          id="name"
          label="Имя"
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
        />

        <LabeledInput
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />

        <LabeledInput
          id="password"
          label="Пароль"
          type="password"
          value={formData.password}
          onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
          required
        />

        <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 mt-6 h-10">
          Продолжить
        </Button>

        <p className="text-sm pt-2">
          Уже есть аккаунт?{' '}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}
