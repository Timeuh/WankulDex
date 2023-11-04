import {ReactNode} from 'react';
import BackButton from '@components/BackButton';
import {Metadata} from 'next';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'WankulDex - Détails artiste',
  description: 'Voir les détails de l’artiste de carte Wankul',
};

export default function Layout({children}: Props) {
  return (
    <section
      className={'flex h-full w-full flex-col items-center space-y-6 bg-gradient-to-b from-light-purple to-light-blue'}
    >
      <div className={'pt-24'}>
        <BackButton link={'/artists/all'} />
      </div>
      {children}
    </section>
  );
}
