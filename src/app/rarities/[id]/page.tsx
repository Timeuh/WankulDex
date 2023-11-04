import {dehydrate, QueryClient} from '@tanstack/query-core';
import {QUERY_STALE_TIME} from '@utils/appGlobals';
import {HydrationBoundary} from '@tanstack/react-query';
import {fetchRaritiesById} from '@utils/rarities/[id]/fetchRaritiesById';
import Rarity from '@components/rarities/[id]/Rarity';

interface Props {
  params: {
    id: string;
  };
}

export default async function RaritiesById({params}: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: QUERY_STALE_TIME,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ['rarity', params.id],
    queryFn: () => {
      return fetchRaritiesById(params.id);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Rarity id={params.id} />
    </HydrationBoundary>
  );
}
