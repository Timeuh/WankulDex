import {ChangeEvent, useState} from 'react';
import {SelectCardInputs, SelectCardInputsKey} from '@/app/_utils/appTypes';

export default function useSelectCardInputs() {
  const [selectCardInputs, setSelectCardInputs] = useState<SelectCardInputs>({
    artist: 1,
    character: 1,
    rarity: 1,
  });

  const handleSelectInputsChange = (event: ChangeEvent<HTMLSelectElement>, key: SelectCardInputsKey) => {
    switch (key) {
      case 'Artist':
        setSelectCardInputs((prevState) => {
          return {...prevState, artist: parseInt(event.target.value)};
        });
        break;

      case 'Character':
        setSelectCardInputs((prevState) => {
          return {...prevState, character: parseInt(event.target.value)};
        });
        break;

      case 'Rarity':
        setSelectCardInputs((prevState) => {
          return {...prevState, rarity: parseInt(event.target.value)};
        });
        break;

      default:
        break;
    }
  };

  return {selectCardInputs, handleSelectInputsChange};
}
