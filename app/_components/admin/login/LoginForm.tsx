'use client';

import Image from 'next/image';
import LightContainer from '@components/LightContainer';
import {MouseEvent, useRef, useState} from 'react';
import adminlogin from '@/app/_utils/adminlogin';
import {LoginResponse} from '@/app/_utils/appTypes';
import storeToken from '@/app/_utils/storeToken';
import {useRouter} from 'next/navigation';
import LoadingAnimation from '@components/LoadingAnimation';

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const checkInputs = () => {
    if (!emailRef.current || !passwordRef.current) {
      return false;
    }
    let hasError = false;

    if (emailRef.current.value === '') {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (passwordRef.current.value === '') {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    return !hasError;
  };

  const submitForm = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (checkInputs()) {
      setIsLoading(true);
      adminlogin(emailRef.current!.value, passwordRef.current!.value).then((loginResponse: LoginResponse) => {
        if (loginResponse.code === 400) {
          setError('Le mot de passe fourni ne correspond pas');
        }

        if (loginResponse.code === 404) {
          setError('Vous devez fournir un email administrateur');
        }

        if (loginResponse.code === 200) {
          storeToken(loginResponse.token!).then(() => {
            router.push('/admin/create/card');
            setIsLoading(false);
          });
        }
      });
    }
  };

  return (
    <section className={'relative flex w-full flex-col items-center justify-center xl:w-1/3'}>
      <form
        action={'noredirect'}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} flex w-full flex-col items-center space-y-6`}
      >
        <h1
          className={`${
            error !== '' ? 'block' : 'hidden'
          } h-10 w-4/5 rounded-lg border-2 border-red-500 pt-1 text-center text-red-500`}
        >
          {error}
        </h1>
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
              placeholder={emailError ? 'Renseignez un email' : 'Email'}
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
              placeholder={passwordError ? 'Renseignez un mot de passe' : 'Mot de passe'}
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
      <LoadingAnimation isLoading={isLoading} />
    </section>
  );
}
