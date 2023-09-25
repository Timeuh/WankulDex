import {useQuery} from 'react-query';
import {API_BASE_URL} from '@/app/_utils/appGlobals';
import {Artist, Artists} from '@/app/_utils/appTypes';
import artistSchema from '@/app/_zod/ArtistSchema';

const getArtists = async () => {
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
  return useQuery(['artists'], () => {
    return getArtists();
  });
}
