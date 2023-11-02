import {useQuery} from '@tanstack/react-query';
import {API_BASE_URL} from '@utils/appGlobals';
import {Card, Cards} from '@utils/appTypes';
import cardSchema from '@/zod/CardSchema';

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
