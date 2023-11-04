'use client';

import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import {useCardsContext} from '@providers/CardProvider';
import {ChangeEvent, useState} from 'react';

export default function SearchBar() {
  const {searchCards} = useCardsContext();
  const [search, setSearch] = useState<string>('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    searchCards(event.target.value);
  };

  const clearSearch = () => {
    setSearch('');
    searchCards('');
  };

  return (
    <BaseContainer interaction={'hover'}>
      <div id={'searchbar'} className={'flex h-12 w-[65vw] flex-row items-center justify-end space-x-2 xl:w-[30vw]'}>
        <input
          type={'text'}
          className={'h-full w-full bg-transparent ps-2 text-dark outline-none'}
          onChange={handleSearch}
          value={search}
        />
        <Image
          src={'/img/home/close-light.png'}
          alt={'filtrer'}
          height={0}
          width={0}
          sizes={'100vw'}
          className={'h-auto w-8 cursor-pointer rounded-full border-2 border-dark'}
          onClick={clearSearch}
        />
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
