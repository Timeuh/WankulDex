'use client';

import {ReactNode} from 'react';
import {CookiesProvider} from 'react-cookie';
import {QueryClient, QueryClientProvider} from 'react-query';

type Props = {
  children: ReactNode;
};

export default function Providers({children}: Props) {
  const queryClient = new QueryClient();

  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CookiesProvider>
  );
}
