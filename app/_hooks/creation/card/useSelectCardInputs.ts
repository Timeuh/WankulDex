import {ChangeEvent, useState} from 'react';
import {SelectCardInputs, SelectCardInputsKey} from '@/app/_utils/appTypes';

export default function useSelectCardInputs() {
  const [selectCardInputs, setSelectCardInputs] = useState<SelectCardInputs>({
    artist_id: 1,
    character_id: 1,
    rarity_id: 1,
  });

  const handleSelectInputsChange = (event: ChangeEvent<HTMLSelectElement>, key: SelectCardInputsKey) => {
    switch (key) {
      case 'Artist':
        setSelectCardInputs((prevState) => {
          return {...prevState, artist_id: parseInt(event.target.value)};
        });
        break;

      case 'Character':
        setSelectCardInputs((prevState) => {
          return {...prevState, character_id: parseInt(event.target.value)};
        });
        break;

      case 'Rarity':
        setSelectCardInputs((prevState) => {
          return {...prevState, rarity_id: parseInt(event.target.value)};
        });
        break;

      default:
        break;
    }
  };

  return {selectCardInputs, handleSelectInputsChange};
}
