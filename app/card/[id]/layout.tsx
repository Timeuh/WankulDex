import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export default function CardByIdLayout({children}: Props) {
  return (
    <div className={'flex flex-col items-center bg-gradient-to-b from-light-blue to-light-purple'}>{children}</div>
  );
}
