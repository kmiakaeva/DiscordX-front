import { createLazyFileRoute } from '@tanstack/react-router';

import { RegisterPage } from '@/pages/auth';

export const Route = createLazyFileRoute('/auth/register')({
  component: RegisterPage,
});
