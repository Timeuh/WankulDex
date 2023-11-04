'use client';

import Image from 'next/image';
import {useState} from 'react';
import BaseContainer from '@components/BaseContainer';
import FilterMenu from '@components/home/filter/FilterMenu';

export default function Filter() {
  const [isActive, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <div id={'filter'} className={'relative'}>
      <BaseContainer interaction={'hover'}>
        <Image
          src={'/img/home/filter-light.png'}
          alt={'filter'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={'h-auto w-8'}
          onClick={toggleActive}
        />
      </BaseContainer>
      <div
        className={`absolute top-16 z-20 w-[83vw] transition-all duration-500 xl:w-[49.5vw] ${
          isActive ? 'h-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <FilterMenu />
      </div>
    </div>
  );
}
