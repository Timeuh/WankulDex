import {ChangeEvent, useState} from 'react';
import {TextCardInputs, TextCardInputsKey} from '@/app/_utils/appTypes';

export default function useTextCardInputs() {
  const [textCardInputs, setTextCardInputs] = useState<TextCardInputs>({
    id: 1,
    name: '',
    collection: '',
    image: '',
  });

  const handleTextInputsChange = (event: ChangeEvent<HTMLInputElement>, key: TextCardInputsKey) => {
    switch (key) {
      case 'ID':
        const newId = parseInt(event.target.value);
        if (newId < 1) {
          break;
        }

        setTextCardInputs((prevState) => {
          return {...prevState, id: newId};
        });
        break;

      case 'Name':
        setTextCardInputs((prevState) => {
          return {...prevState, name: event.target.value};
        });
        break;

      case 'Collection':
        setTextCardInputs((prevState) => {
          return {...prevState, collection: event.target.value};
        });
        break;

      case 'Image':
        setTextCardInputs((prevState) => {
          return {...prevState, image: event.target.value};
        });
        break;

      default:
        break;
    }
  };

  return {textCardInputs, handleTextInputsChange};
}
