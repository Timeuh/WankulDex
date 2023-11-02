'use client';

import {Artist, Card} from '@utils/appTypes';
import useArtists from '@hooks/useArtists';
import {useCardsContext} from '@providers/CardProvider';
import DisplayArtistCard from '@components/artists/DisplayArtistCard';

export default function DisplayArtists() {
  const {data} = useArtists();
  const {cards} = useCardsContext();

  const getArtistCard = (artist: number) => {
    return cards?.find((card: Card) => {
      return card.card.artist.id === artist && card.card.type.name !== 'Terrain';
    });
  };

  return (
    <div className={'grid h-full w-full grid-cols-2 place-items-center gap-6 px-4 pb-6 xl:grid-cols-4 xl:gap-12'}>
      {data!.map((artist: Artist) => {
        return <DisplayArtistCard key={artist.artist.id} card={getArtistCard(artist.artist.id)} />;
      })}
    </div>
  );
}
