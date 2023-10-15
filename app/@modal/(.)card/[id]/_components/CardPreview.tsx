'use client';

import {useCardsContext} from '@providers/CardProvider';
import {Card} from '@utils/appTypes';
import LoadingPage from '@components/loading/LoadingPage';
import FieldCard from '@components/cards/field/FieldCard';
import CharacterCard from '@components/cards/character/CharacterCard';

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
    return <FieldCard card={card} />;
  }

  return <CharacterCard card={card} />;
}
