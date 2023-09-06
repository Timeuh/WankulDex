import {ChangeEvent, useState} from 'react';
import {CharacterCardInputs, CharacterCardInputsKey} from '@/app/_utils/appTypes';

export default function useCharacterCardInputs() {
  const [characterCardInputs, setCharacterCardInputs] = useState<CharacterCardInputs>({
    effect: '',
    citation: '',
  });

  const handleCharacterInputsChange = (event: ChangeEvent<HTMLTextAreaElement>, key: CharacterCardInputsKey) => {
    switch (key) {
      case 'Effect':
        setCharacterCardInputs((prevState) => {
          return {...prevState, effect: event.target.value};
        });
        break;

      case 'Citation':
        setCharacterCardInputs((prevState) => {
          return {...prevState, citation: event.target.value};
        });
        break;

      default:
        break;
    }
  };

  return {characterCardInputs, handleCharacterInputsChange};
}
