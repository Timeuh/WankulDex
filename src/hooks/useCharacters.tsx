import {API_BASE_URL} from '@/app/_utils/appGlobals';
import {Character, Characters} from '@/app/_utils/appTypes';
import characterSchema from '@/app/_zod/CharacterSchema';
import {useQuery} from '@tanstack/react-query';

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