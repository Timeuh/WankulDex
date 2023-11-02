'use client';

import LoadingListItem from '@components/LoadingListItem';
import {Card} from '@utils/appTypes';
import ListItem from '@components/ListItem';

type Props = {
  card: Card | undefined;
};

export default function DisplayArtistCard({card}: Props) {
  if (!card) {
    return <LoadingListItem />;
  }

  return (
    <ListItem
      alt={card.card.artist.name}
      image={card.links.image}
      text={card.card.artist.name}
      seeLink={`/artists/${card.card.artist.id}`}
    />
  );
}
