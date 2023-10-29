import LoadingCard from '@components/loading/LoadingCard';
import CardDescription from '@components/CardDescription';

export default function CardLoading() {
  return (
    <div
      className={'flex h-full flex-col items-center space-y-6 xl:h-screen xl:w-[80vw] xl:flex-row xl:justify-around'}
    >
      <LoadingCard />
      <CardDescription>
        <CardDescription.Id isForLoading={true} />
        <CardDescription.Name isForLoading={true} />
        <CardDescription.Collection isForLoading={true} />
        <CardDescription.Artist isForLoading={true} />
        <CardDescription.CharacterFields effect={{isForLoading: true}} citation={{isForLoading: true}} />
        <CardDescription.Character isForLoading={true} />
        <CardDescription.Rarity isForLoading={true} />
        <CardDescription.Type isForLoading={true} />
      </CardDescription>
    </div>
  );
}
