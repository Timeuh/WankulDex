import {useEffect, useState} from 'react';
import {Artist, Artists} from '@/app/_utils/appTypes';
import {API_BASE_URL} from '@/app/_utils/appConsts';
import ArtistSchema from '@/app/_zod/ArtistSchema';

export default function useArtists() {
  const [artists, setArtists] = useState<Array<Artist>>([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/artist`)
      .then((response) => {
        return response.json();
      })
      .then((artistsData: Artists) => {
        artistsData.artists.forEach((artist: Artist) => {
          const parseTest = ArtistSchema.safeParse(artist);
          if (parseTest.success) {
            setArtists((previous) => {
              return [...previous, artist];
            });
          }
        });
      });
  }, []);

  return {artists, setArtists};
}
