'use client';

import {ChangeEvent, MouseEvent, useState} from 'react';
import BaseContainer from '@components/BaseContainer';
import FormInput from '@components/FormInput';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const changeValue = (event: ChangeEvent<HTMLInputElement>, valueType: string) => {
    if (valueType === 'email') {
      setEmail(event.target.value);
      return;
    }

    setPassword(event.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setEmailError('test erreur email');
    setPasswordError('test erreur password');
  };

  return (
    <form action='noredirect' className={'flex h-full w-full flex-col items-center px-8'}>
      <div className={'flex w-[80vw] flex-col space-y-12 xl:w-[30vw]'}>
        <FormInput
          image={'/img/admin/login/mail-light.png'}
          text={'Email'}
          type={'email'}
          value={email}
          valueType={'email'}
          changeValue={changeValue}
          error={emailError}
        />
        <FormInput
          image={'/img/admin/login/password-light.png'}
          text={'Mot de passe'}
          type={'password'}
          value={password}
          valueType={'password'}
          changeValue={changeValue}
          error={passwordError}
        />
      </div>
      <div className={'absolute bottom-6'}>
        <BaseContainer interaction={'hover'}>
          <button className={'h-12 w-[80vw] text-2xl xl:h-14 xl:w-[30vw] xl:text-3xl'} onClick={handleSubmit}>
            Connexion
          </button>
        </BaseContainer>
      </div>
    </form>
  );
}
