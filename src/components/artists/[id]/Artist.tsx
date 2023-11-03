'use client';

import {useQuery} from '@tanstack/react-query';
import {fetchArtistById} from '@utils/artists/[id]/fetchArtistById';
import ArtistSummary from '@components/artists/[id]/ArtistSummary';
import {ArtistCards, Card} from '@utils/appTypes';
import CharacterCardsTitle from '@components/CharacterCardsTitle';
import FieldCardsTitle from '@components/FieldCardsTitle';
import HomeCard from '@components/cards/HomeCard';

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
        artistName={<h2 className={'w-3/4 text-center text-2xl xl:w-full xl:text-3xl'}>{data.artist.name}</h2>}
        totalCards={
          <h2 className={'w-3/4 text-center text-2xl xl:w-full xl:text-3xl'}>{data.cards.length} Cartes au total</h2>
        }
        fieldCards={
          <h2 className={'w-3/4 text-center text-2xl xl:w-full xl:text-3xl'}>{fieldNumber} Cartes Terrain</h2>
        }
        characterCards={
          <h2 className={'w-5/6 text-center text-2xl xl:w-full xl:text-3xl'}>{characterNumber} Cartes Personnage</h2>
        }
      />
      <FieldCardsTitle />
      <div className={'w-[80vw] grid-cols-3 gap-12 space-y-6 xl:grid xl:w-5/6 xl:space-y-0'}>
        {data.cards.cards.map((card: Card) => {
          if (card.card.type.name === 'Terrain') {
            return <HomeCard key={card.card.id} card={card} />;
          }
        })}
      </div>
      <CharacterCardsTitle />
      <div className={'w-[80vw] grid-cols-4 gap-12 space-y-6 pb-6 xl:grid xl:w-5/6 xl:space-y-0'}>
        {data.cards.cards.map((card: Card) => {
          if (card.card.type.name === 'Personnage') {
            return <HomeCard key={card.card.id} card={card} />;
          }
        })}
      </div>
    </section>
  );
}
