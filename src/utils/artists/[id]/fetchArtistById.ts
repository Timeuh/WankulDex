import {API_BASE_URL} from '@utils/appGlobals';

export const fetchArtistById = async (id: string) => {
  return await fetch(`${API_BASE_URL}/artist/${id}/cards`).then((response) => {
    return response.json();
  });
};
