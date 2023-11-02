import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';

export default function Filter() {
  return (
    <BaseContainer interaction={'hover'}>
      <button id={'filter'} className={'h-auto w-12 p-2'}>
        <Image
          src={'/img/home/filter-light.png'}
          alt={'filtrer'}
          height={0}
          width={0}
          sizes={'100vw'}
          className={'h-full w-full'}
        />
      </button>
    </BaseContainer>
  );
}
