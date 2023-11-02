import Card from '@components/Card';
import {dehydrate, QueryClient} from '@tanstack/query-core';
import {QUERY_STALE_TIME} from '@utils/appGlobals';
import {fetchCardById} from '@app/card/[id]/_utils/fetchCardById';
import {HydrationBoundary} from '@tanstack/react-query';

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
