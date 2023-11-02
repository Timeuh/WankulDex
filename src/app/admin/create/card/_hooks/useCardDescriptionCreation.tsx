import Cookies from 'universal-cookie/lib';
import {API_DOMAIN} from '@utils/appGlobals';
import {CardDescription, CardDescriptionForCreation} from '@utils/appTypes';
import {useQuery} from '@tanstack/react-query';

const recordCardDescription = async (cardDescription: CardDescription) => {
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

  return await fetch(`${API_DOMAIN}/descriptions/new`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      [apiHeaderName]: token,
    },
    body: JSON.stringify(convertDataForCreation(cardDescription)),
  }).then((response) => {
    return response.json();
  });
};

const convertDataForCreation = (cardDescription: CardDescription): CardDescriptionForCreation => {
  return {
    character_id: cardDescription.character_id.value as number,
    citation: cardDescription.citation.value as string,
    effect: cardDescription.citation.value as string,
    id: cardDescription.id.value as number,
    looser_effect: cardDescription.looser_effect.value as string,
    rarity_id: cardDescription.rarity_id.value as number,
    special: cardDescription.special.value as string,
    winner_effect: cardDescription.winner_effect.value as string,
  };
};

export default function useCardDescriptionCreation(cardDescription: CardDescription) {
  return useQuery({
    queryKey: ['cardDescription', cardDescription],
    queryFn: () => {
      return recordCardDescription(cardDescription);
    },
    enabled: false,
  });
}
