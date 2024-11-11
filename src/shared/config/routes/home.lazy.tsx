import { createLazyFileRoute } from '@tanstack/react-router';

import { Home } from '@/pages';

export const Route = createLazyFileRoute('/home')({
  component: () => <Home />,
});
