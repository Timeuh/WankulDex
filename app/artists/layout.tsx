import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export default function ArtistsLayout({children}: Props) {
  return (
    <section
      id={'artists'}
      className={'flex h-full w-full flex-col items-center bg-gradient-to-b from-light-blue to-light-purple'}
    >
      {children}
    </section>
  );
}
