import {dehydrate, QueryClient} from '@tanstack/query-core';
import {QUERY_STALE_TIME} from '@utils/appGlobals';
import {HydrationBoundary} from '@tanstack/react-query';
import {fetchCardById} from '@utils/card/[id]/fetchCardById';
import Card from '@components/card/[id]/Card';

type Props = {
  params: {
    id: string;
  };
};

export default async function CardById({params}: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: QUERY_STALE_TIME,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ['card', params.id],
    queryFn: () => {
      return fetchCardById(params.id);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Card id={params.id} />
    </HydrationBoundary>
  );
}
