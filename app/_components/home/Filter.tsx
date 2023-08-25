'use client';

import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import {useState} from 'react';
import useArtists from '@/app/_hooks/useArtists';
import {Artist, Character, Rarity, Type} from '@/app/_utils/appTypes';
import useTypes from '@/app/_hooks/useTypes';
import useCharacters from '@/app/_hooks/useCharacters';
import useRarities from '@/app/_hooks/useRarities';

export default function Filter() {
  const [isActive, setActive] = useState<boolean>(false);
  const {artists} = useArtists();
  const {types} = useTypes();
  const {characters} = useCharacters();
  const {rarities} = useRarities();

  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <div id={'filter'} className={'relative'}>
      <LightContainer height={'h-14'} width={'w-14'} hover={true} onClick={toggleActive}>
        <Image src={'/img/home/filter-light.png'} alt={'filter'} width={24} height={24} />
      </LightContainer>
      <div
        className={`absolute top-16 z-20 w-[83vw] transition-all duration-500 xl:w-[49.5vw] ${
          isActive ? 'h-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <LightContainer height={'h-full'} width={'w-full'} hover={false}>
          <div className={'grid h-full w-full grid-cols-2'}>
            <div className={'m-2 flex h-fit w-5/6 flex-col overflow-hidden border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4 pb-2'}>
                <div className={'relative h-8 w-8 xl:h-10 xl:w-10'}>
                  <Image src={'/img/home/types-filter-light.png'} alt={'type icon'} fill={true} />
                </div>
                <h1 className={'text-xl text-wankil-purple xl:text-3xl'}>Types</h1>
              </div>
              {types.map((type: Type) => {
                return (
                  <div key={type.type.id} className={'flex flex-row-reverse items-center justify-between py-1'}>
                    <label htmlFor={type.type.name} className={'xl:text-xl'}>
                      {type.type.name}
                    </label>
                    <input
                      type='checkbox'
                      value={type.type.name}
                      className={'h-4 w-4 rounded-md accent-dark xl:h-6 xl:w-6'}
                    />
                  </div>
                );
              })}
            </div>
            <div className={'m-2 flex h-fit w-5/6 flex-col border-b-2 border-[#CCCCCCFF] py-2'}>
              <div className={'flex w-full flex-row items-center pb-2'}>
                <div className={'relative h-8 w-8 xl:h-10 xl:w-10'}>
                  <Image src={'/img/home/wankul-filter-light.png'} alt={'type icon'} fill={true} />
                </div>
                <h1 className={'text-xl text-wankil-blue xl:text-3xl'}>Personnages</h1>
              </div>
              {characters.map((character: Character) => {
                return (
                  <div
                    key={character.character.id}
                    className={'flex flex-row-reverse items-center justify-between py-1'}
                  >
                    <label htmlFor={character.character.name} className={'xl:text-xl'}>
                      {character.character.name}
                    </label>
                    <input
                      type='checkbox'
                      value={character.character.name}
                      className={'h-4 w-4 rounded-md accent-dark xl:h-6 xl:w-6'}
                    />
                  </div>
                );
              })}
            </div>
            <div className={'m-2 flex h-fit w-5/6 flex-col overflow-hidden border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4 pb-2'}>
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
            <div className={'m-2 flex h-fit w-5/6 flex-col border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4 pb-2'}>
                <div className={'relative h-8 w-8 xl:h-10 xl:w-10'}>
                  <Image src={'/img/home/rarity-light.png'} alt={'type icon'} fill={true} />
                </div>
                <h1 className={'text-xl text-wankil-blue xl:text-3xl'}>Raretés</h1>
              </div>
              {rarities.map((rarity: Rarity) => {
                return (
                  <div key={rarity.rarity.id} className={'flex flex-row-reverse items-center justify-between py-1'}>
                    <label htmlFor={rarity.rarity.name} className={'xl:text-xl'}>
                      {rarity.rarity.name}
                    </label>
                    <input
                      type='checkbox'
                      value={rarity.rarity.name}
                      className={'h-4 w-4 rounded-md accent-dark xl:h-6 xl:w-6'}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </LightContainer>
      </div>
    </div>
  );
}
