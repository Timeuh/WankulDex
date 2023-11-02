import {useQuery} from '@tanstack/react-query';
import {fetchCardById} from '@utils/card/[id]/fetchCardById';

export default function useCard(id: string) {
  return useQuery({
    queryKey: ['card', id],
    queryFn: () => {
      return fetchCardById(id);
    },
  });
}
