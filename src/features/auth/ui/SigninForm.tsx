import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@tanstack/react-router';

import { Button, LabeledInput } from '@/shared/ui';
import { useSigninUser } from '../api/useSigninUser';
import { signinSchema, SigninFormData } from '../model/shema';

export function SigninForm() {
  const signinUser = useSigninUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    try {
      await signinUser.mutateAsync(data);
      alert('Вы успешно вошли в аккаунт!'); // TODO: replace
    } catch (error) {
      if (error instanceof Error) {
        const serverError = error.message;

        if (serverError.includes('email')) {
          setError('email', { type: 'server', message: serverError });
        } else if (serverError.includes('password')) {
          setError('password', { type: 'server', message: serverError });
        } else {
          setError('root', { type: 'server', message: serverError });
        }
      }
    }
  });

  return (
    <div className="w-full max-w-[480px] bg-zinc-700 rounded-md p-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-2">С возвращением!</h1>
        <p className="text-zinc-400 text-sm">Мы так рады видеть вас снова!</p>
      </div>

      {errors.root && <div className="mb-2 text-sm font-bold italic text-red-500">{errors.root?.message}</div>}

      <form onSubmit={onSubmit} className="space-y-4">
        <LabeledInput
          id="email"
          label="Адрес электронной почты*"
          type="email"
          error={errors.email?.message}
          {...register('email')}
        />

        <LabeledInput
          id="password"
          label="Пароль*"
          type="password"
          error={errors.password?.message}
          {...register('password')}
        />

        <Link to="/auth/reset" className="text-sm text-blue-500 hover:underline">
          Забыли пароль?
        </Link>

        <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 mt-6 h-10" disabled={isSubmitting}>
          Вход
        </Button>

        <p className="text-sm pt-2">
          Нужна учётная запись?{' '}
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </div>
  );
}
