import {ReactNode} from 'react';
import BackButton from '@components/BackButton';

type Props = {
  children: ReactNode;
};

export default function ArtistsLayout({children}: Props) {
  return (
    <section
      id={'artists'}
      className={'flex h-full w-full flex-col items-center bg-gradient-to-b from-light-blue to-light-purple'}
    >
      <div className={'pt-24'}>
        <BackButton />
      </div>
      {children}
    </section>
  );
}
