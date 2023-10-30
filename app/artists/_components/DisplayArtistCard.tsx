'use client';

import useArtistCards from '@app/artists/_hooks/useArtistCards';
import LoadingListItem from '@components/LoadingListItem';
import {Card} from '@utils/appTypes';
import ListItem from '@components/ListItem';

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
    <ListItem
      alt={data.artist.name}
      image={firstCharacterCard!.links.image}
      text={data.artist.name}
      seeLink={`/artists/${data.artist.id}`}
    />
  );
}
