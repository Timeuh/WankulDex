import LoadingListItem from '@components/LoadingListItem';

export default function ArtistsLoading() {
  const loadingRarities = [1, 2, 3, 4, 5, 6];

  return (
    <div className={'grid h-full w-full grid-cols-2 place-items-center gap-6 px-4 pb-6 xl:grid-cols-4'}>
      {loadingRarities.map((id: number) => {
        return <LoadingListItem key={id} />;
      })}
    </div>
  );
}
