import {dehydrate, QueryClient} from '@tanstack/query-core';
import {QUERY_STALE_TIME} from '@utils/appGlobals';
import {HydrationBoundary} from '@tanstack/react-query';
import {fetchCharactersById} from '@utils/characters/[id]/fetchCharactersById';
import Character from '@components/characters/[id]/Character';

interface Props {
  params: {
    id: string;
  };
}

export default async function CharacterById({params}: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: QUERY_STALE_TIME,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ['character', params.id],
    queryFn: () => {
      return fetchCharactersById(params.id);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Character id={params.id} />
    </HydrationBoundary>
  );
}
