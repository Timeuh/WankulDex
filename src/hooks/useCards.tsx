import {API_BASE_URL} from '@/app/_utils/appGlobals';
import cardSchema from '@/app/_zod/CardSchema';
import {Card, Cards} from '@/app/_utils/appTypes';
import {useQuery} from '@tanstack/react-query';

const getCards = async () => {
  return await fetch(`${API_BASE_URL}/card`)
    .then((response) => {
      return response.json();
    })
    .then((cards: Cards) => {
      const allCards: Array<Card> = [];

      cards.cards.forEach((card: Card) => {
        if (cardSchema.safeParse(card).success) {
          allCards.push(card);
        }
      });

      return allCards;
    });
};

export default function useCards() {
  return useQuery({
    queryKey: ['cards'],
    queryFn: () => {
      return getCards();
    },
  });
}
