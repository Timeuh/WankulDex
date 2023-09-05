import {Metadata} from 'next';
import Image from 'next/image';
import LoginForm from '@components/admin/login/LoginForm';
import BackButton from '@components/BackButton';

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
      <BackButton />
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
