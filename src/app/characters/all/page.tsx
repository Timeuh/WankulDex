import {QUERY_STALE_TIME} from '@utils/appGlobals';
import {HydrationBoundary} from '@tanstack/react-query';
import {dehydrate, QueryClient} from '@tanstack/query-core';
import DisplayCharacters from '@components/characters/DisplayCharacters';
import {getCharacters} from '@hooks/useCharacters';

export default async function GetAllCharacters() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: QUERY_STALE_TIME,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ['characters'],
    queryFn: () => {
      return getCharacters();
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DisplayCharacters />
    </HydrationBoundary>
  );
}
