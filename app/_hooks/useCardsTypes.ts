import {Card} from '@/app/_utils/appTypes';
import {CARD_TYPE_FIELD} from '@/app/_utils/appConsts';
import {useEffect, useState} from 'react';

export default function useCardsTypes(cards: Array<Card>) {
  const [fieldCards, setFieldsCards] = useState<Array<Card>>([]);
  const [characterCards, setCharacterCards] = useState<Array<Card>>([]);

  useEffect(() => {
    setFieldsCards([]);
    setCharacterCards([]);

    cards.forEach((card: Card) => {
      if (card.card.type.name === CARD_TYPE_FIELD) {
        setFieldsCards((previous) => {
          return {...previous, card};
        });
      } else {
        setCharacterCards((previous) => {
          return {...previous, card};
        });
      }
    });
  }, [cards]);

  return {fieldCards, characterCards};
}
