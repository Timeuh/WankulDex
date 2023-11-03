import {ReactNode} from 'react';
import BackButton from '@components/BackButton';

interface Props {
  children: ReactNode;
}

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
