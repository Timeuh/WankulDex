'use client';

import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import {useRouter} from 'next/navigation';

export default function CloseButton() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className={'absolute -top-8 right-[2rem] xl:-right-20 xl:-top-6'}>
      <BaseContainer interaction={'hover'}>
        <button className={'flex h-12 w-12 flex-col items-center justify-center'} onClick={handleClose}>
          <Image
            src={'/img/card/close-light.png'}
            alt={'fermer'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={'h-auto w-10'}
          />
        </button>
      </BaseContainer>
    </div>
  );
}
