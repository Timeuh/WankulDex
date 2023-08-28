'use client';

import Image from 'next/image';
import LightContainer from '@components/LightContainer';
import {MouseEvent, useRef, useState} from 'react';

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const checkInputs = () => {
    if (!emailRef.current || !passwordRef.current) {
      return;
    }

    if (emailRef.current.value === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (passwordRef.current.value === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    console.log(`email ${emailRef.current.value}`);
    console.log(`password ${passwordRef.current.value}`);
  };

  const submitForm = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    checkInputs();
  };

  return (
    <form action={'noredirect'} className={'flex w-full flex-col items-center space-y-12 xl:w-1/3'}>
      <div className={'flex w-4/5 flex-col items-center'}>
        <div className={'flex flex-row items-center space-x-8 self-start'}>
          <div className={'relative h-20 w-20'}>
            <Image src={'/img/admin/login/mail-light.png'} alt={'mail icon'} fill={true} />
          </div>
          <label htmlFor='email' className={'text-4xl text-dark'}>
            Email
          </label>
        </div>
        <LightContainer height={'h-14'} width={'w-full'} hover={true}>
          <input
            type='text'
            name={'email'}
            placeholder={emailError ? "Renseignez l'email" : 'Email'}
            required
            className={`h-full w-full bg-transparent ps-2 text-dark outline-none ${
              emailError ? 'placeholder-red-600' : 'placeholder-dark-purple'
            }`}
            ref={emailRef}
          />
        </LightContainer>
      </div>
      <div className={'flex w-4/5 flex-col items-center'}>
        <div className={'flex flex-row items-center space-x-8 self-start'}>
          <div className={'relative mb-2 h-20 w-20'}>
            <Image src={'/img/admin/login/password-light.png'} alt={'mail icon'} fill={true} />
          </div>
          <label htmlFor='password' className={'pt-2 text-4xl text-dark'}>
            Mot de passe
          </label>
        </div>
        <LightContainer height={'h-14'} width={'w-full'} hover={true}>
          <input
            type='password'
            name={'password'}
            placeholder={passwordError ? 'Renseignez le mot de passe' : 'Mot de passe'}
            required
            className={`h-full w-full bg-transparent ps-2 text-dark outline-none ${
              passwordError ? 'placeholder-red-600' : 'placeholder-dark-blue'
            }`}
            ref={passwordRef}
          />
        </LightContainer>
      </div>
      <button
        type={'submit'}
        className={'h-14 w-4/5'}
        onClick={(event) => {
          submitForm(event);
        }}
      >
        <LightContainer height={'h-full'} width={'w-full'} hover={true}>
          <h1 className={'h-full w-full pt-2 text-3xl text-dark'}>Connexion</h1>
        </LightContainer>
      </button>
    </form>
  );
}
