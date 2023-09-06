'use client';

import LightContainer from '@components/LightContainer';

type Props = {
  reset: () => void;
};

export default function Error({reset}: Props) {
  return (
    <main
      className={
        'flex h-screen w-full flex-col items-center justify-center space-y-6 bg-gradient-to-b from-light-blue to-light-purple xl:space-y-12'
      }
    >
      <h1 className={'text-center text-2xl text-red-500 xl:text-4xl'}>Erreur : Impossible de charger les cartes</h1>
      <LightContainer width={'w-4/6 xl:w-1/5'} height={'h-10 xl:h-14'} hover={true}>
        <button className={'h-full w-full bg-transparent text-xl text-dark xl:text-2xl'} onClick={reset}>
          Réessayer
        </button>
      </LightContainer>
    </main>
  );
}
