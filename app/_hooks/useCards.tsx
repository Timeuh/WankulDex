import {API_BASE_URL} from '@/app/_utils/appGlobals';
import cardSchema from '@/app/_zod/CardSchema';
import {Card, Cards, CardType} from '@/app/_utils/appTypes';
import {useQuery} from '@tanstack/react-query';

const getCards = async (type: CardType) => {
  return await fetch(`${API_BASE_URL}/card`)
    .then((response) => {
      return response.json();
    })
    .then((cards: Cards) => {
      const allCards: Array<Card> = [];

      cards.cards.forEach((card: Card) => {
        if (cardSchema.safeParse(card).success) {
          if (type === 'None' || card.card.type.name === type) {
            allCards.push(card);
          }
        }
      });

      return allCards;
    });
};

export default function useCards(type: CardType = 'None') {
  return useQuery({
    queryKey: ['cards', type],
    queryFn: () => {
      return getCards(type);
    },
  });
}
