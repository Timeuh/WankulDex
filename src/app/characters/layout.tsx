import {ReactNode} from 'react';
import BackButton from '@components/BackButton';
import BaseContainer from '@components/BaseContainer';
import Image from 'next/image';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'WankulDex - Personnages',
  description: 'Voir tous les personnages Wankul',
};

type Props = {
  children: ReactNode;
};

export default function CharactersLayout({children}: Props) {
  return (
    <section
      id={'artists'}
      className={'flex h-full w-full flex-col items-center space-y-6 bg-gradient-to-b from-light-blue to-light-purple'}
    >
      <div className={'pt-24'}>
        <BackButton />
      </div>
      <BaseContainer>
        <div className={'flex h-14 w-[80vw] flex-row items-center justify-center space-x-4 xl:h-16 xl:w-[30vw]'}>
          <Image
            src={'/img/wankul-light.png'}
            alt={'artistes'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={'h-auto w-10 xl:w-12'}
          />
          <h1 className={'text-2xl xl:text-3xl'}>Personnages</h1>
        </div>
      </BaseContainer>
      {children}
    </section>
  );
}
