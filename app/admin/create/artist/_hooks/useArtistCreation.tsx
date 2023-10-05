import Cookies from 'universal-cookie/lib';
import {ArtistDataForCreation, ArtistForm} from '@utils/appTypes';
import {API_DOMAIN} from '@utils/appGlobals';
import {useQuery} from '@tanstack/react-query';

const recordArtist = async (artistData: ArtistForm) => {
  const cookieName = process.env.NEXT_PUBLIC_API_COOKIE;
  const apiHeaderName = process.env.NEXT_PUBLIC_API_AUTH_HEADER;

  if (!cookieName || !apiHeaderName) {
    return false;
  }

  const cookies = new Cookies(null, {path: '/'});
  const token = cookies.get(cookieName);

  if (!token) {
    return false;
  }

  return await fetch(`${API_DOMAIN}/artists/new`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      [apiHeaderName]: token,
    },
    body: JSON.stringify(convertDataForCreation(artistData)),
  }).then((response) => {
    return response.json();
  });
};

const convertDataForCreation = (artistData: ArtistForm): ArtistDataForCreation => {
  return {
    id: artistData.id.value as number,
    name: artistData.name.value as string,
  };
};

export default function useArtistCreation(artistData: ArtistForm) {
  return useQuery(
    ['artistCreation', artistData],
    () => {
      return recordArtist(artistData);
    },
    {
      enabled: false,
    },
  );
}
