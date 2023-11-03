import {dehydrate, QueryClient} from '@tanstack/query-core';
import {API_BASE_URL, QUERY_STALE_TIME} from '@utils/appGlobals';
import {HydrationBoundary} from '@tanstack/react-query';
import {Card} from '@utils/appTypes';
import cardSchema from '@/zod/CardSchema';

type Props = {
  params: {
    id: string;
  };
};

export default async function ArtistById({params}: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: QUERY_STALE_TIME,
      },
    },
  });

  const fetchArtistById = async (id: string) => {
    return await fetch(`${API_BASE_URL}/artist/${id}/cards`)
      .then((response) => {
        return response.json();
      })
      .then((card: Card) => {
        if (cardSchema.safeParse(card).success) {
          return card;
        }
      });
  };

  await queryClient.prefetchQuery({
    queryKey: ['artist', params.id],
    queryFn: () => {
      return fetchArtistById(params.id);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1>Artiste</h1>
    </HydrationBoundary>
  );
}
