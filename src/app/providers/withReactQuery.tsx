import { ComponentType } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const globalQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: false,
    },
  },
});

export function withReactQuery<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {
  return function WithReactQueryComponent(props: T) {
    return (
      <QueryClientProvider client={globalQueryClient}>
        <Component {...props} />
      </QueryClientProvider>
    );
  };
}
