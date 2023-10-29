import LoadingArtist from '@components/LoadingArtist';

export default function ArtistsLoading() {
  const loadingArtists = [1, 2, 3, 4, 5, 6];

  return (
    <div className={'grid h-full w-full grid-cols-2 place-items-center gap-6 px-4 pb-6 pt-24'}>
      {loadingArtists.map((id: number) => {
        return <LoadingArtist key={id} />;
      })}
    </div>
  );
}
