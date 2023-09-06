import FormInput from '@components/form/FormInput';
import {FieldCardInputs, FieldCardInputsKey} from '@/app/_utils/appTypes';
import {ChangeEvent} from 'react';

type Props = {
  fieldCardInputs: FieldCardInputs;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>, key: FieldCardInputsKey) => void;
};

export default function FieldFormInputs({fieldCardInputs, handleChange}: Props) {
  return (
    <div className={'flex w-full flex-col items-center space-y-6 xl:space-y-16'}>
      <FormInput image={'/img/admin/create/cards/first-light.png'} name={'Effet Gagnant'}>
        <textarea
          name='winner_effect'
          id='winner_effect'
          cols={30}
          rows={10}
          className={'h-32 w-full resize-none bg-transparent p-2 text-xl text-dark outline-none'}
          value={fieldCardInputs.winner_effect}
          onChange={(event) => {
            handleChange(event, 'Winner');
          }}
        ></textarea>
      </FormInput>
      <FormInput image={'/img/admin/create/cards/last-light.png'} name={'Effet Perdant'}>
        <textarea
          name='looser_effect'
          id='looser_effect'
          cols={30}
          rows={10}
          className={'h-32 w-full resize-none bg-transparent p-2 text-xl text-dark outline-none'}
          value={fieldCardInputs.looser_effect}
          onChange={(event) => {
            handleChange(event, 'Looser');
          }}
        ></textarea>
      </FormInput>
      <FormInput image={'/img/admin/create/cards/special-light.png'} name={'Special'}>
        <textarea
          name='special'
          id='special'
          cols={30}
          rows={10}
          className={'h-32 w-full resize-none bg-transparent p-2 text-xl text-dark outline-none'}
          value={fieldCardInputs.special}
          onChange={(event) => {
            handleChange(event, 'Special');
          }}
        ></textarea>
      </FormInput>
    </div>
  );
}
