'use client';

import {ReactNode, useState} from 'react';
import {QUERY_STALE_TIME} from '@utils/appGlobals';
import {QueryClient} from '@tanstack/query-core';
import {QueryClientProvider} from '@tanstack/react-query';
import CardProvider from '@providers/CardProvider';

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
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <CardProvider>{children}</CardProvider>
    </QueryClientProvider>
  );
}
