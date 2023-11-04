import {API_BASE_URL} from '@utils/appGlobals';

export const fetchCharactersById = async (id: string) => {
  return await fetch(`${API_BASE_URL}/character/${id}/cards`).then((response) => {
    return response.json();
  });
};
