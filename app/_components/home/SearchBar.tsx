import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';

export default function SearchBar() {
  return (
    <BaseContainer interaction={'hover'}>
      <div id={'searchbar'} className={'flex h-12 w-[65vw] flex-row items-center justify-end space-x-2 xl:w-[30vw]'}>
        <input type={'text'} className={'h-full w-full bg-transparent ps-2 text-dark outline-none'} />
        <Image
          src={'/img/home/search-light.png'}
          alt={'filtrer'}
          height={0}
          width={0}
          sizes={'100vw'}
          className={'h-auto w-10 pe-2'}
        />
      </div>
    </BaseContainer>
  );
}
