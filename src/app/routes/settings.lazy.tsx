import { createLazyFileRoute } from '@tanstack/react-router';

import { withReactQuery } from '../providers/withReactQuery';
import { SettingsPage } from '@/pages/settings';

const SettingsPageWithQuery = withReactQuery(SettingsPage);

export const Route = createLazyFileRoute('/settings')({
  component: SettingsPageWithQuery,
});
