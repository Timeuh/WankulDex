import FormInput from '@components/form/FormInput';

export default function CharacterFormInputs() {
  return (
    <div className={'flex w-full flex-col items-center space-y-6 xl:space-y-12'}>
      <FormInput image={'/img/admin/create/cards/description-light.png'} name={'Effet'}>
        <textarea
          name='winner_effect'
          id='winner_effect'
          cols={30}
          rows={10}
          className={'h-32 w-full resize-none bg-transparent p-2 text-xl text-dark outline-none'}
        ></textarea>
      </FormInput>
      <FormInput image={'/img/admin/create/cards/citation-light.png'} name={'Citation'}>
        <textarea
          name='looser_effect'
          id='looser_effect'
          cols={30}
          rows={10}
          className={'h-32 w-full resize-none bg-transparent p-2 text-xl text-dark outline-none'}
        ></textarea>
      </FormInput>
    </div>
  );
}
