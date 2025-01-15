import { createLazyFileRoute } from '@tanstack/react-router';

import { withReactQuery } from '../providers/withReactQuery';
import { SigninPage } from '@/pages/auth';

const SigninPageWithQuery = withReactQuery(SigninPage);

export const Route = createLazyFileRoute('/auth/signin')({
  component: SigninPageWithQuery,
});
