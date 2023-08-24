'use client';

import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import {useState} from 'react';
import useArtists from '@/app/_hooks/useArtists';
import {Artist, Artists} from '@/app/_utils/appTypes';

export default function Filter() {
  const [isActive, setActive] = useState<boolean>(false);
  const {artists, setArtists} = useArtists();

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
                <div className={'relative h-8 w-8 xl:h-10 xl:w-10'}>
                  <Image src={'/img/home/types-filter-light.png'} alt={'type icon'} fill={true} />
                </div>
                <h1 className={'text-xl text-wankil-purple xl:text-3xl'}>Types</h1>
              </div>
            </div>
            <div className={'m-2 flex h-3/4 w-5/6 flex-col border-b-2 border-[#CCCCCCFF] py-2'}>
              <div className={'flex w-full flex-row items-center'}>
                <div className={'relative h-8 w-8 xl:h-10 xl:w-10'}>
                  <Image src={'/img/home/wankul-filter-light.png'} alt={'type icon'} fill={true} />
                </div>
                <h1 className={'text-xl text-wankil-blue xl:text-3xl'}>Personnages</h1>
              </div>
            </div>
            <div className={'m-2 flex h-3/4 w-5/6 flex-col overflow-hidden border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4'}>
                <div className={'relative h-8 w-8 xl:h-10 xl:w-10'}>
                  <Image src={'/img/home/pen-filter-light.png'} alt={'type icon'} fill={true} />
                </div>
                <h1 className={'text-xl text-wankil-purple xl:text-3xl'}>Artistes</h1>
              </div>
              {artists.map((artist: Artist) => {
                return (
                  <div key={artist.artist.id} className={'flex flex-row-reverse items-center justify-between py-1'}>
                    <label htmlFor={artist.artist.name} className={'xl:text-xl'}>
                      {artist.artist.name}
                    </label>
                    <input
                      type='checkbox'
                      value={artist.artist.name}
                      className={'h-4 w-4 rounded-md accent-dark xl:h-6 xl:w-6'}
                    />
                  </div>
                );
              })}
            </div>
            <div className={'m-2 flex h-3/4 w-5/6 flex-col border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4'}>
                <div className={'relative h-8 w-8 xl:h-10 xl:w-10'}>
                  <Image src={'/img/home/rarity-light.png'} alt={'type icon'} fill={true} />
                </div>
                <h1 className={'text-xl text-wankil-blue xl:text-3xl'}>Raretés</h1>
              </div>
            </div>
          </div>
        </LightContainer>
      </div>
    </div>
  );
}
