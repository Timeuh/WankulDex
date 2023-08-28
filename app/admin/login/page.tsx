import {Metadata} from 'next';
import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WankulDex - Connexion Admin',
};

export default function Login() {
  return (
    <main
      className={
        'flex h-screen w-full flex-col items-center space-y-12 bg-gradient-to-b from-light-purple to-light-blue xl:space-y-16'
      }
    >
      <LightContainer height={'h-12 mt-24'} width={'w-1/3 xl:w-1/5'} hover={true}>
        <Link href={'/'} className={'flex h-full w-full flex-col items-center justify-center'}>
          <div className={'flex flex-row items-center justify-center space-x-2'}>
            <div className={'relative h-4 w-4'}>
              <Image src={'/img/back-light.png'} alt={'arrow-home'} fill={true} />
            </div>
            <h2>Retour</h2>
          </div>
        </Link>
      </LightContainer>
      <div className={'flex flex-col items-center'}>
        <div className={'relative h-20 w-20'}>
          <Image src={'/img/admin/login/admin-light.png'} alt={'admin icon'} fill={true} />
        </div>
        <h1 className={'text-6xl text-dark'}>Connexion</h1>
      </div>
      <form className={'flex w-full flex-col items-center space-y-12 xl:w-1/3'}>
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
              placeholder={'Email'}
              required
              className={'h-full w-full bg-transparent ps-2 text-dark placeholder-dark-purple outline-none'}
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
              placeholder={'Mot de passe'}
              required
              className={'h-full w-full bg-transparent ps-2 text-dark placeholder-dark-blue outline-none'}
            />
          </LightContainer>
        </div>
        <LightContainer height={'h-14'} width={'w-4/5'} hover={true}>
          <h1 className={'h-full w-full pt-2 text-3xl text-dark'}>Connexion</h1>
        </LightContainer>
      </form>
    </main>
  );
}
