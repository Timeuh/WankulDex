import {ChangeEvent, useState} from 'react';
import {FieldCardInputs, FieldCardInputsKey} from '@/app/_utils/appTypes';

export default function useFieldCardInputs() {
  const [fieldCardInputs, setFieldCardInputs] = useState<FieldCardInputs>({
    winner_effect: '',
    looser_effect: '',
    special: '',
  });

  const handleFieldInputsChange = (event: ChangeEvent<HTMLTextAreaElement>, key: FieldCardInputsKey) => {
    switch (key) {
      case 'Winner':
        setFieldCardInputs((prevState) => {
          return {...prevState, winner_effect: event.target.value};
        });
        break;

      case 'Looser':
        setFieldCardInputs((prevState) => {
          return {...prevState, looser_effect: event.target.value};
        });
        break;

      case 'Special':
        setFieldCardInputs((prevState) => {
          return {...prevState, special: event.target.value};
        });
        break;

      default:
        break;
    }
  };

  return {fieldCardInputs, handleFieldInputsChange};
}
