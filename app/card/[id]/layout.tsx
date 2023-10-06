import {ReactNode} from 'react';
import {Metadata} from 'next';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Wankuldex - Carte',
  description: 'Page pour voir une carte en détails',
};

export default function CardByIdLayout({children}: Props) {
  return (
    <div className={'flex flex-col items-center bg-gradient-to-b from-light-blue to-light-purple'}>{children}</div>
  );
}
