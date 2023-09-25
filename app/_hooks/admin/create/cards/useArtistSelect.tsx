import useArtists from '@hooks/useArtists';
import {useEffect, useState} from 'react';
import {Artist, SelectOption} from '@/app/_utils/appTypes';

export default function useArtistSelect() {
  const {data, isFetching} = useArtists();
  const [artistSelectOptions, setArtistSelectOptions] = useState<Array<SelectOption>>([]);

  useEffect(() => {
    convertArtistToOptions();
  }, [isFetching]);

  const convertArtistToOptions = () => {
    data?.forEach((artist: Artist) => {
      setArtistSelectOptions((prevState) => {
        return [...prevState, {name: artist.artist.name, id: artist.artist.id}];
      });
    });
  };

  return {artistSelectOptions};
}
