import {useEffect, useState} from 'react';
import {Character, SelectOption} from '@/app/_utils/appTypes';
import useCharacters from '@hooks/useCharacters';

export default function useCharacterSelect() {
  const {data} = useCharacters();
  const [characterSelectOptions, setCharacterSelectOptions] = useState<Array<SelectOption>>([]);

  useEffect(() => {
    const convertCharacterToOptions = () => {
      const characters: Array<SelectOption> = [];

      data?.forEach((character: Character) => {
        characters.push({name: character.character.name, id: character.character.id});
      });

      setCharacterSelectOptions(characters);
    };

    convertCharacterToOptions();
  }, [data]);

  return {characterSelectOptions};
}
