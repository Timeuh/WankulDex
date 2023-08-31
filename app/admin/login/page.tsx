import {Metadata} from 'next';
import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import Link from 'next/link';
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
            <Image
              src={'/img/back-light.png'}
              alt={'accueil'}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-4 w-4 xl:h-8 xl:w-8'}
            />
            <h2 className={'xl:text-2xl'}>Retour</h2>
          </div>
        </Link>
      </LightContainer>
      <div className={'flex flex-col items-center'}>
        <Image
          src={'/img/admin/login/admin-light.png'}
          alt={'admin'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={'h-20 w-20'}
        />
        <h1 className={'text-6xl text-dark'}>Connexion</h1>
      </div>
      <LoginForm />
    </main>
  );
}
