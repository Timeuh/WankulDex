import {API_BASE_URL} from '@/app/_utils/appGlobals';
import {useQuery} from '@tanstack/react-query';
import {ArtistCards} from '@utils/appTypes';

const getArtistCards = async (id: number) => {
  return await fetch(`${API_BASE_URL}/artist/${id}/cards`).then((response) => {
    return response.json();
  });
};

export default function useArtistCards(id: number) {
  return useQuery<ArtistCards>({
    queryKey: ['artistsCards', id],
    queryFn: () => {
      return getArtistCards(id);
    },
  });
}
