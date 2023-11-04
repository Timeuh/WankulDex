import {API_BASE_URL} from '@utils/appGlobals';

export const fetchRaritiesById = async (id: string) => {
  return await fetch(`${API_BASE_URL}/rarity/${id}/cards`).then((response) => {
    return response.json();
  });
};
