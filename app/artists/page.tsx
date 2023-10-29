import DisplayArtists from '@components/DisplayArtists';
import {dehydrate, QueryClient} from '@tanstack/query-core';
import {QUERY_STALE_TIME} from '@utils/appGlobals';
import {getArtists} from '@hooks/useArtists';
import {HydrationBoundary} from '@tanstack/react-query';

export default async function GetAllArtists() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: QUERY_STALE_TIME,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ['artists'],
    queryFn: () => {
      return getArtists();
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section
        id={'artists'}
        className={'flex h-full w-full flex-col items-center bg-gradient-to-b from-light-blue to-light-purple'}
      >
        <DisplayArtists />
      </section>
    </HydrationBoundary>
  );
}
