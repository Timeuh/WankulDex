'use client';

import useArtistCards from '@app/artists/_hooks/useArtistCards';
import LoadingArtist from '@components/LoadingArtist';
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
    return <LoadingArtist />;
  }

  const firstCharacterCard = data.cards.cards.find((card: Card) => {
    return card.card.type.name === 'Personnage';
  });

  return (
    <div className={'flex flex-col items-center space-y-2 rounded-lg border-2 border-dark bg-light p-4'}>
      <Image
        src={`${API_DOMAIN}${firstCharacterCard!.links.image}`}
        alt={data.artist.name}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'h-auto w-full rounded-lg'}
      />
      <h1 className={'text-center text-2xl'}>{data.artist.name}</h1>
      <SeeButton link={`/artists/${data.artist.id}`} />
    </div>
  );
}
