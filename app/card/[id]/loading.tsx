import LoadingCard from '@components/loading/LoadingCard';
import CardDescription from '@components/CardDescription';
import LoadingImage from '@components/loading/LoadingImage';
import LoadingText from '@components/loading/LoadingText';

export default function CardLoading() {
  return (
    <div
      className={'flex h-full flex-col items-center space-y-6 xl:h-screen xl:w-[80vw] xl:flex-row xl:justify-around'}
    >
      <LoadingCard />
      <CardDescription
        idImage={<LoadingImage />}
        idText={<LoadingText />}
        nameImage={<LoadingImage />}
        nameText={<LoadingText />}
        collectionImage={<LoadingImage />}
        collectionText={<LoadingText />}
        artistImage={<LoadingImage />}
        artistText={<LoadingText />}
        effectImage={<LoadingImage />}
        effectText={<LoadingText />}
        citationImage={<LoadingImage />}
        citationText={<LoadingText />}
        winnerImage={<LoadingImage />}
        winnerText={<LoadingText />}
        looserImage={<LoadingImage />}
        looserText={<LoadingText />}
        specialImage={<LoadingImage />}
        specialText={<LoadingText />}
        characterImage={<LoadingImage />}
        characterText={<LoadingText />}
        rarityImage={<LoadingImage />}
        rarityText={<LoadingText />}
        typeImage={<LoadingImage />}
        typeText={<LoadingText />}
      />
    </div>
  );
}
