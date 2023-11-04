import {QUERY_STALE_TIME} from '@utils/appGlobals';
import {HydrationBoundary} from '@tanstack/react-query';
import {getRarities} from '@hooks/useRarities';
import {dehydrate, QueryClient} from '@tanstack/query-core';
import DisplayRarities from '@components/rarities/DisplayRarities';

export default async function GetAllRarities() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: QUERY_STALE_TIME,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ['rarities'],
    queryFn: () => {
      return getRarities();
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DisplayRarities />
    </HydrationBoundary>
  );
}
