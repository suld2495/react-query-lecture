import { QueryClientProvider as Provider, QueryClient } from '@tanstack/react-query';

const QueryClientProvider = ({ children }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      }
    }
  });

  return (
    <Provider client={client}>{children}</Provider>
  )
};

export default QueryClientProvider;
