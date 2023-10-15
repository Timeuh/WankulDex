'use client';

import BaseContainer from '@components/BaseContainer';
import Image from 'next/image';

export default function DetailsButton() {
  return (
    <BaseContainer interaction={'hover'}>
      <button className={'flex h-16 w-[80vw] flex-row items-center justify-center space-x-4 bg-light text-2xl'}>
        <Image
          src={'/img/card/details-light.png'}
          alt={'voir les détails'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={'h-auto w-10'}
        />
        <h1
          onClick={() => {
            window.location.reload();
          }}
        >
          Voir les détails
        </h1>
      </button>
    </BaseContainer>
  );
}
