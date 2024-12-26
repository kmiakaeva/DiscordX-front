import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@tanstack/react-router';

import { Button, LabeledInput } from '@/shared/ui';
import { useRegisterUser } from '../api/useRegisterUser';
import { registerSchema, RegisterFormData } from '../model/shema';

export function RegisterForm() {
  const registerUser = useRegisterUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    try {
      await registerUser.mutateAsync(data);
    } catch (error) {
      if (error instanceof Error) {
        const serverError = error.message;

        if (serverError.includes('email')) {
          setError('email', { type: 'server', message: serverError });
        } else if (serverError.includes('password')) {
          setError('password', { type: 'server', message: serverError });
        } else if (serverError.includes('name')) {
          setError('name', { type: 'server', message: serverError });
        } else {
          setError('root', { type: 'server', message: serverError });
        }
      }
    }
  });

  return (
    <div className="w-full max-w-[480px] bg-zinc-700 rounded-md p-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Создать аккаунт</h1>
        <p className="text-zinc-400 text-sm">Присоединяйтесь к сообществу!</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <LabeledInput id="name" label="Имя*" error={errors.name?.message} {...register('name')} />

        <LabeledInput id="email" label="Email*" type="email" error={errors.email?.message} {...register('email')} />

        <LabeledInput
          id="password"
          label="Пароль*"
          type="password"
          error={errors.password?.message}
          {...register('password')}
        />

        <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 mt-6 h-10" disabled={isSubmitting}>
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
