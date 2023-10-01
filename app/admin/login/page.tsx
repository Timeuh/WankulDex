import BackButton from '@components/BackButton';
import Image from 'next/image';
import LoginForm from '@components/admin/login/LoginForm';

export default function Login() {
  return (
    <section className={'h-screen w-full bg-gradient-to-b from-light-purple to-light-blue'}>
      <div className={'flex h-full w-full flex-col items-center space-y-12 pt-24'}>
        <BackButton />
        <div className={'flex flex-col items-center'}>
          <Image
            src={'/img/admin/login/admin-light.png'}
            alt={'administrateur'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={'h-auto w-16 xl:w-20'}
          />
          <h1 className={'text-5xl'}>Administrateur</h1>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
