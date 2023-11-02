import {useQuery} from '@tanstack/react-query';
import {API_BASE_URL} from '@utils/appGlobals';
import {Artist, Artists} from '@utils/appTypes';
import artistSchema from '@/zod/ArtistSchema';

export const getArtists = async () => {
  return await fetch(`${API_BASE_URL}/artist`)
    .then((response) => {
      return response.json();
    })
    .then((artists: Artists) => {
      const allArtists: Array<Artist> = [];

      artists.artists.forEach((artist: Artist) => {
        if (artistSchema.safeParse(artist).success) {
          allArtists.push(artist);
        }
      });

      return allArtists;
    });
};

export default function useArtists() {
  return useQuery({
    queryKey: ['artists'],
    queryFn: () => {
      return getArtists();
    },
  });
}
