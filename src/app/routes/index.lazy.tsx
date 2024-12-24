import { createLazyFileRoute } from '@tanstack/react-router';

import { withReactQuery } from '../providers/withReactQuery';
import { HomePage } from '@/pages/home';

const HomePageWithQuery = withReactQuery(HomePage);

export const Route = createLazyFileRoute('/')({
  component: HomePageWithQuery,
});
