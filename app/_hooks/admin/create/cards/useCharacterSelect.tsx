import {useEffect, useState} from 'react';
import {Character, SelectOption} from '@/app/_utils/appTypes';
import useCharacters from '@hooks/useCharacters';

export default function useCharacterSelect() {
  const {data} = useCharacters();
  const [characterSelectOptions, setCharacterSelectOptions] = useState<Array<SelectOption>>([]);

  useEffect(() => {
    const convertCharacterToOptions = () => {
      data?.forEach((character: Character) => {
        setCharacterSelectOptions((prevState) => {
          return [...prevState, {name: character.character.name, id: character.character.id}];
        });
      });
    };

    convertCharacterToOptions();
  }, [data]);

  return {characterSelectOptions};
}
