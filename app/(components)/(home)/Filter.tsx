'use client';

import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import {useState} from 'react';

export default function Filter() {
  const [isActive, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <div id={'filter'} className={'relative'}>
      <LightContainer height={'h-14'} width={'w-14'} hover={true} onClick={toggleActive}>
        <Image src={'/img/home/filter-light.png'} alt={'filter'} width={24} height={24} />
      </LightContainer>
      <div
        className={`absolute top-16 z-10 w-[83vw] transform duration-300 xl:w-[49.5vw] ${
          isActive ? 'h-[50vh] opacity-100' : 'h-0 opacity-0'
        }`}
      >
        <LightContainer height={'h-full'} width={'w-full'} hover={false}>
          <div className={'grid h-full w-full grid-cols-2'}>
            <div className={'m-2 flex h-3/4 w-5/6 flex-col border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4'}>
                <Image src={'/img/home/types-filter-light.png'} alt={'type icon'} width={30} height={30} />
                <h1 className={'text-wankil-purple text-xl'}>Types</h1>
              </div>
            </div>
            <div className={'m-2 flex h-3/4 w-5/6 flex-col border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center'}>
                <Image src={'/img/home/wankul-filter-light.png'} alt={'type icon'} width={30} height={30} />
                <h1 className={'text-wankil-blue ps-2 text-xl'}>Personnages</h1>
              </div>
            </div>
            <div className={'m-2 flex h-3/4 w-5/6 flex-col border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4'}>
                <Image src={'/img/home/pen-filter-light.png'} alt={'type icon'} width={30} height={30} />
                <h1 className={'text-wankil-purple text-xl'}>Artistes</h1>
              </div>
            </div>
            <div className={'m-2 flex h-3/4 w-5/6 flex-col border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4'}>
                <Image src={'/img/home/rarity-light.png'} alt={'type icon'} width={30} height={30} />
                <h1 className={'text-wankil-blue text-xl'}>Raretés</h1>
              </div>
            </div>
          </div>
        </LightContainer>
      </div>
    </div>
  );
}
