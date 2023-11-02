import {Card} from '@utils/appTypes';
import {API_BASE_URL} from '@utils/appGlobals';
import cardSchema from '@/zod/CardSchema';

export const fetchCardById = async (id: string) => {
  return await fetch(`${API_BASE_URL}/card/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((card: Card) => {
      if (cardSchema.safeParse(card).success) {
        return card;
      }
    });
};
