import {dehydrate, QueryClient} from '@tanstack/query-core';
import {QUERY_STALE_TIME} from '@utils/appGlobals';
import {HydrationBoundary} from '@tanstack/react-query';
import {fetchArtistById} from '@utils/artists/[id]/fetchArtistById';
import Artist from '@components/artists/[id]/Artist';

interface Props {
  params: {
    id: string;
  };
}

export default async function ArtistById({params}: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: QUERY_STALE_TIME,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ['artist', params.id],
    queryFn: () => {
      return fetchArtistById(params.id);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Artist id={params.id} />
    </HydrationBoundary>
  );
}
