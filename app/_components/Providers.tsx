'use client';

import {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {QUERY_STALE_TIME} from '@utils/appGlobals';

type Props = {
  children: ReactNode;
};

export default function Providers({children}: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: QUERY_STALE_TIME,
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
