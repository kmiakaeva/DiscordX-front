import { createLazyFileRoute } from '@tanstack/react-router';

import { withReactQuery } from '../providers/withReactQuery';
import { RegisterPage } from '@/pages/auth';

const RegisterPageWithQuery = withReactQuery(RegisterPage);

export const Route = createLazyFileRoute('/auth/register')({
  component: RegisterPageWithQuery,
});
