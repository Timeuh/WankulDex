'use client';

import {useQuery} from '@tanstack/react-query';
import {fetchArtistById} from '@utils/artists/[id]/fetchArtistById';
import ArtistSummary from '@components/artists/[id]/ArtistSummary';
import {ArtistCards, Card} from '@utils/appTypes';
import CharacterCardsTitle from '@components/CharacterCardsTitle';
import FieldCardsTitle from '@components/FieldCardsTitle';

interface Props {
  id: string;
}

export default function Artist({id}: Props) {
  const {data} = useQuery<ArtistCards>({
    queryKey: ['artist', id],
    queryFn: () => {
      return fetchArtistById(id);
    },
  });

  if (!data) {
    return;
  }

  let fieldNumber = 0;
  let characterNumber = 0;

  data.cards.cards.forEach((card: Card) => {
    card.card.type.name === 'Terrain' ? (fieldNumber += 1) : (characterNumber += 1);
  });

  return (
    <section id={`artist-${id}`} className={'flex h-full w-full flex-col items-center space-y-6'}>
      <ArtistSummary
        artistName={<h2 className={'w-3/4 text-center text-2xl'}>{data.artist.name}</h2>}
        totalCards={<h2 className={'w-3/4 text-center text-2xl'}>{data.cards.length}</h2>}
        fieldCards={<h2 className={'w-3/4 text-center text-2xl'}>{fieldNumber}</h2>}
        characterCards={<h2 className={'w-3/4 text-center text-2xl'}>{characterNumber}</h2>}
      />
      <FieldCardsTitle />
      <CharacterCardsTitle />
    </section>
  );
}
