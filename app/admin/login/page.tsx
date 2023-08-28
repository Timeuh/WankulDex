import {Metadata} from 'next';
import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import Link from 'next/link';
import {MouseEvent} from 'react';
import LoginForm from '@components/admin/login/LoginForm';

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
      <LoginForm />
    </main>
  );
}
