import FormInput from '@components/form/FormInput';
import {CharacterCardInputs, CharacterCardInputsKey} from '@/app/_utils/appTypes';
import {ChangeEvent} from 'react';

type Props = {
  characterCardInputs: CharacterCardInputs;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>, key: CharacterCardInputsKey) => void;
};

export default function CharacterFormInputs({characterCardInputs, handleChange}: Props) {
  return (
    <div className={'flex w-full flex-col items-center space-y-6 xl:space-y-12'}>
      <FormInput image={'/img/admin/create/cards/description-light.png'} name={'Effet'}>
        <textarea
          name='description'
          id='description'
          cols={30}
          rows={10}
          className={'h-32 w-full resize-none bg-transparent p-2 text-xl text-dark outline-none'}
          value={characterCardInputs.effect}
          onChange={(event) => {
            handleChange(event, 'Effect');
          }}
        ></textarea>
      </FormInput>
      <FormInput image={'/img/admin/create/cards/citation-light.png'} name={'Citation'}>
        <textarea
          name='citation'
          id='citation'
          cols={30}
          rows={10}
          className={'h-32 w-full resize-none bg-transparent p-2 text-xl text-dark outline-none'}
          value={characterCardInputs.citation}
          onChange={(event) => {
            handleChange(event, 'Citation');
          }}
        ></textarea>
      </FormInput>
    </div>
  );
}
