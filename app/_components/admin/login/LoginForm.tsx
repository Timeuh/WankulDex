'use client';

import Image from 'next/image';
import LightContainer from '@components/LightContainer';
import {MouseEvent, useRef, useState} from 'react';
import adminlogin from '@/app/_utils/adminlogin';
import {LoginResponse} from '@/app/_utils/appTypes';

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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
        setIsLoading(false);

        if (loginResponse.code === 400) {
          setError('Le mot de passe fourni ne correspond pas');
        }

        if (loginResponse.code === 404) {
          setError('Vous devez fournir un email administrateur');
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
      <div
        id={'loading-modal'}
        className={`${
          isLoading ? 'opacity-100' : 'pointer-events-none opacity-0'
        } absolute -top-10 flex h-3/5 w-3/5 flex-col items-center justify-center space-y-4`}
      >
        <svg
          aria-hidden='true'
          className={'mr-2 h-12 w-12 animate-spin fill-dark text-gray-300'}
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
        <h1 className={'text-4xl text-dark'}>Chargement</h1>
      </div>
    </section>
  );
}
