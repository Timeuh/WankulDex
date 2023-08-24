import {useEffect, useState} from 'react';
import {Character, Characters} from '@/app/_utils/appTypes';
import {API_BASE_URL} from '@/app/_utils/appConsts';
import CharacterSchema from '@/app/_zod/CharacterSchema';

export default function useCharacters() {
  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/character`)
      .then((response) => {
        return response.json();
      })
      .then((charactersData: Characters) => {
        charactersData.characters.forEach((character: Character) => {
          const parseTest = CharacterSchema.safeParse(character);
          if (parseTest.success) {
            setCharacters((previous) => {
              return [...previous, character];
            });
          }
        });
      });
  }, []);

  return {characters};
}
