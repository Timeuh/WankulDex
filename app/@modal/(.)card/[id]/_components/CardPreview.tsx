'use client';

import {useCardsContext} from '@providers/CardProvider';
import {Card} from '@utils/appTypes';
import LoadingPage from '@components/loading/LoadingPage';
import FieldCardPreview from '@app/@modal/(.)card/[id]/_components/cards/FieldCardPreview';
import CharacterCardPreview from '@app/@modal/(.)card/[id]/_components/cards/CharacterCardPreview';

type Props = {
  id: string;
};

export default function CardPreview({id}: Props) {
  const {cards} = useCardsContext();

  const card = cards?.find((card: Card) => {
    return card.card.id === parseInt(id);
  });

  if (!card) {
    return <LoadingPage />;
  }

  if (card.card.type.name === 'Terrain') {
    return <FieldCardPreview card={card} />;
  }

  return <CharacterCardPreview card={card} />;
}
