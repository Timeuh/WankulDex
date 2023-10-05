import Cookies from 'universal-cookie/lib';
import {CardContext, CardContextForCreation} from '@utils/appTypes';
import {API_DOMAIN} from '@utils/appGlobals';
import {useQuery} from '@tanstack/react-query';

const recordCard = async (cardContext: CardContext) => {
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

  return await fetch(`${API_DOMAIN}/cards/new`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      [apiHeaderName]: token,
    },
    body: JSON.stringify(convertDataForCreation(cardContext)),
  }).then((response) => {
    return response.json();
  });
};

const convertDataForCreation = (cardContext: CardContext): CardContextForCreation => {
  return {
    artist_id: cardContext.artist_id.value as number,
    collection: cardContext.collection.value as string,
    description_id: cardContext.description_id.value as number,
    id: cardContext.id.value as number,
    image: cardContext.image.value as string,
    name: cardContext.name.value as string,
    type_id: cardContext.type_id.value as number,
  };
};

export default function useCardCreation(cardContext: CardContext) {
  return useQuery(
    ['cardCreation'],
    () => {
      return recordCard(cardContext);
    },
    {
      enabled: false,
    },
  );
}
