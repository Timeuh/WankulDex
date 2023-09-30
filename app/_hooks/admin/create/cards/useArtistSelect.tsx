import useArtists from '@hooks/useArtists';
import {useEffect, useState} from 'react';
import {Artist, SelectOption} from '@/app/_utils/appTypes';

export default function useArtistSelect() {
  const {data} = useArtists();
  const [artistSelectOptions, setArtistSelectOptions] = useState<Array<SelectOption>>([]);

  useEffect(() => {
    const convertArtistToOptions = () => {
      const artists: Array<SelectOption> = [];

      data?.forEach((artist: Artist) => {
        artists.push({name: artist.artist.name, id: artist.artist.id});
      });

      setArtistSelectOptions(artists);
    };

    convertArtistToOptions();
  }, [data]);

  return {artistSelectOptions};
}
