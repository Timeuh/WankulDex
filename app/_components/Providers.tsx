'use client';

import {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

type Props = {
  children: ReactNode;
};

export default function Providers({children}: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
