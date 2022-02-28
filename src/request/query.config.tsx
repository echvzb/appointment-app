import {FC, ReactElement} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export const RequestProvider: FC<{children: ReactElement}> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
