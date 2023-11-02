import LoadingListItem from '@components/LoadingListItem';
import {Card} from '@utils/appTypes';
import ListItem from '@components/ListItem';

type Props = {
  card: Card | undefined;
};

export default function DisplayRarityCard({card}: Props) {
  if (!card) {
    return <LoadingListItem />;
  }

  return (
    <ListItem
      alt={card.card.description.rarity.name}
      image={card.links.image}
      text={card.card.description.rarity.name}
      seeLink={`/rarities/${card.card.description.rarity.id}`}
    />
  );
}
