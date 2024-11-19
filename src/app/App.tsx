import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h2>App</h2>
      <a href="home">Go to Home Page</a>
    </QueryClientProvider>
  );
}

export default App;
