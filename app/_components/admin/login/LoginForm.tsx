'use client';

import {MouseEvent} from 'react';
import BaseContainer from '@components/BaseContainer';
import FormInput from '@components/FormInput';

export default function LoginForm() {
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form action='noredirect' className={'flex h-full w-full flex-col items-center px-8'}>
      <div className={'flex w-[80vw] flex-col space-y-12'}>
        <FormInput image={'/img/admin/login/mail-light.png'} text={'Email'} type={'email'} />
        <FormInput image={'/img/admin/login/password-light.png'} text={'Mot de passe'} type={'password'} />
      </div>
      <div className={'absolute bottom-6'}>
        <BaseContainer interaction={'hover'}>
          <button className={'h-12 w-[80vw] text-2xl'} onClick={handleSubmit}>
            Connexion
          </button>
        </BaseContainer>
      </div>
    </form>
  );
}
