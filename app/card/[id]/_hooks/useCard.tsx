import {useQuery} from 'react-query';
import {Card} from '@utils/appTypes';
import cardSchema from '@app/_zod/CardSchema';
import {API_BASE_URL} from '@utils/appGlobals';

const fetchCardById = async (id: string) => {
  return await fetch(`${API_BASE_URL}/card/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((card: Card) => {
      if (cardSchema.safeParse(card).success) {
        return card;
      }

      return false;
    });
};

export default function useCard(id: string) {
  return useQuery(['card', id], () => {
    return fetchCardById(id);
  });
}
