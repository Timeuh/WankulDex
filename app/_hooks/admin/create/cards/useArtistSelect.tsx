import useArtists from '@hooks/useArtists';
import {useEffect, useState} from 'react';
import {Artist, SelectOption} from '@/app/_utils/appTypes';

export default function useArtistSelect() {
  const {data} = useArtists();
  const [artistSelectOptions, setArtistSelectOptions] = useState<Array<SelectOption>>([]);

  useEffect(() => {
    const convertArtistToOptions = () => {
      data?.forEach((artist: Artist) => {
        setArtistSelectOptions((prevState) => {
          return [...prevState, {name: artist.artist.name, id: artist.artist.id}];
        });
      });
    };

    convertArtistToOptions();
  }, [data]);

  return {artistSelectOptions};
}
