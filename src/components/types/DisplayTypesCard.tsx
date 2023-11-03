import LoadingListItem from '@components/LoadingListItem';
import {Card} from '@utils/appTypes';
import ListItem from '@components/ListItem';

type Props = {
  card: Card | undefined;
};

export default function DisplayTypesCard({card}: Props) {
  if (!card) {
    return <LoadingListItem />;
  }

  return (
    <ListItem
      alt={card.card.type.name}
      image={card.links.image}
      text={card.card.type.name}
      seeLink={`/types/${card.card.type.id}`}
    />
  );
}
