import {API_BASE_URL} from '@utils/appGlobals';
import {Card} from '@utils/appTypes';
import cardSchema from '@/zod/CardSchema';

export const fetchArtistById = async (id: string) => {
  return await fetch(`${API_BASE_URL}/artist/${id}/cards`)
    .then((response) => {
      return response.json();
    })
    .then((card: Card) => {
      if (cardSchema.safeParse(card).success) {
        return card;
      }
    });
};
