import {API_BASE_URL} from '@/app/_utils/appConsts';
import {useEffect, useState} from 'react';
import CardSchema from '@/app/_zod/CardSchema';
import {Card, Cards} from '@/app/_utils/appTypes';

export default function useCards() {
  const [cards, setCards] = useState<Array<Card>>([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/card`)
      .then((response) => {
        return response.json();
      })
      .then((cardsData: Cards) => {
        cardsData.cards.forEach((card: Card) => {
          const parseTest = CardSchema.safeParse(card);
          if (parseTest.success) {
            setCards((previous) => {
              return [...previous, card];
            });
          }
        });
      });
  }, []);

  return {cards, setCards};
}
