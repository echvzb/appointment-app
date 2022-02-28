import {FC, ReactElement} from 'react';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from 'react-query';

export const queryCache = new QueryCache();
export const mutationCache = new MutationCache();
export const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const RequestProvider: FC<{children: ReactElement}> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
