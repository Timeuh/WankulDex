'use client';

import {ReactNode, useState} from 'react';
import {QUERY_STALE_TIME} from '@utils/appGlobals';
import {ReactQueryStreamedHydration} from '@tanstack/react-query-next-experimental';
import {QueryClient} from '@tanstack/query-core';
import {QueryClientProvider} from '@tanstack/react-query';

type Props = {
  children: ReactNode;
};

export default function Providers({children}: Props) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          staleTime: QUERY_STALE_TIME,
          suspense: true,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
