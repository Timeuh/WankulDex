import {ReactNode} from 'react';
import BackButton from '@components/BackButton';
import {Metadata} from 'next';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'WankulDex - Détails type',
  description: 'Voir les détails du type de carte Wankul',
};

export default function Layout({children}: Props) {
  return (
    <section
      className={'flex h-full w-full flex-col items-center space-y-6 bg-gradient-to-b from-light-purple to-light-blue'}
    >
      <div className={'pt-24'}>
        <BackButton link={'/types/all'} />
      </div>
      {children}
    </section>
  );
}
