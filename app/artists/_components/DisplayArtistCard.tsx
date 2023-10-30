'use client';

import useArtistCards from '@app/artists/_hooks/useArtistCards';
import LoadingListItem from '@components/LoadingListItem';
import Image from 'next/image';
import {API_DOMAIN} from '@utils/appGlobals';
import {Card} from '@utils/appTypes';
import SeeButton from '@components/SeeButton';

type Props = {
  artistId: number;
};

export default function DisplayArtistCard({artistId}: Props) {
  const {data} = useArtistCards(artistId);

  if (!data) {
    return <LoadingListItem />;
  }

  const firstCharacterCard = data.cards.cards.find((card: Card) => {
    return card.card.type.name === 'Personnage';
  });

  return (
    <div
      className={
        'flex flex-col items-center space-y-2 rounded-lg border-2 border-dark bg-light p-4 xl:w-5/6 xl:space-y-6 xl:p-6'
      }
    >
      <Image
        src={`${API_DOMAIN}${firstCharacterCard!.links.image}`}
        alt={data.artist.name}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'h-auto w-full rounded-lg xl:w-3/4'}
      />
      <h1 className={'text-center text-2xl xl:text-3xl'}>{data.artist.name}</h1>
      <SeeButton link={`/artists/${data.artist.id}`} />
    </div>
  );
}
