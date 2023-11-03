import LoadingListItem from '@components/LoadingListItem';
import {Card} from '@utils/appTypes';
import ListItem from '@components/ListItem';

type Props = {
  card: Card | undefined;
};

export default function DisplayCharacterCard({card}: Props) {
  if (!card) {
    return <LoadingListItem />;
  }

  return (
    <ListItem
      alt={card.card.description.character.name}
      image={card.links.image}
      text={card.card.description.character.name}
      seeLink={`/characters/${card.card.description.character.id}`}
    />
  );
}
