import {useQuery} from '@tanstack/react-query';
import {API_BASE_URL} from '@utils/appGlobals';
import {Character, Characters} from '@utils/appTypes';
import characterSchema from '@/zod/CharacterSchema';

const getCharacters = async () => {
  return await fetch(`${API_BASE_URL}/character`)
    .then((response) => {
      return response.json();
    })
    .then((characters: Characters) => {
      const allCharacters: Array<Character> = [];

      characters.characters.forEach((character: Character) => {
        if (characterSchema.safeParse(character).success) {
          allCharacters.push(character);
        }
      });

      return allCharacters;
    });
};

export default function useCharacters() {
  return useQuery({
    queryKey: ['characters'],
    queryFn: () => {
      return getCharacters();
    },
  });
}
