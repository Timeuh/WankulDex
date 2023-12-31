'use client';

import {ChangeEvent, MouseEvent, useState} from 'react';
import BaseContainer from '@components/BaseContainer';
import FormInput from '@components/form/FormInput';
import Loading from '@components/Loading';
import {useRouter} from 'next/navigation';
import {LoginResult} from '@utils/appTypes';
import setAuthCookie from '@utils/setAuthCookie';
import login from '@utils/login';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const router = useRouter();

  const changeValue = (event: ChangeEvent<HTMLInputElement>, valueType: string) => {
    if (valueType === 'email') {
      setEmail(event.target.value);
      return;
    }

    setPassword(event.target.value);
  };

  const handleError = (loginResult: LoginResult) => {
    setEmailError('');
    setPasswordError('');

    if (loginResult.error) {
      if (loginResult.code === 400) {
        setPasswordError('Mauvais mot de passe');
        setPassword('');
        return true;
      }

      setEmailError('Aucun utilisateur avec cette adresse mail');
      setEmail('');
      return true;
    }

    return false;
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    login(email, password).then((loginResult: LoginResult) => {
      const error = handleError(loginResult);

      if (error || !loginResult.token) {
        setIsLoading(false);
        return;
      }

      if (setAuthCookie(loginResult.token)) {
        router.push('/admin/create/card');
      } else {
        setIsLoading(false);
        setError('Erreur de création de cookie, veuillez réessayer');
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading text={'Connexion'} />
      ) : (
        <form action='noredirect' className={'flex w-full flex-col items-center px-8'}>
          <h1 className={`py-4 text-center text-2xl text-red-500 xl:text-4xl ${error === '' ? 'hidden' : 'block'}`}>
            {error}
          </h1>
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
      )}
    </>
  );
}
