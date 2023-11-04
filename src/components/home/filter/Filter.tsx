'use client';

import Image from 'next/image';
import {useState} from 'react';
import useArtists from '@hooks/useArtists';
import useCharacters from '@hooks/useCharacters';
import useRarities from '@hooks/useRarities';
import BaseContainer from '@components/BaseContainer';
import {Artist, Character, Rarity} from '@utils/appTypes';

export default function Filter() {
  const [isActive, setActive] = useState<boolean>(false);
  const types = [
    {name: 'Terrain', id: 1},
    {name: 'Personnage', id: 2},
  ];

  const {data: artists} = useArtists();
  const {data: characters} = useCharacters();
  const {data: rarities} = useRarities();

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
        <BaseContainer>
          <div className={'grid h-full w-[80vw] grid-cols-2'}>
            <div className={'m-2 flex h-fit w-5/6 flex-col overflow-hidden border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4 pb-2'}>
                <Image
                  src={'/img/home/types-filter-light.png'}
                  alt={'type'}
                  height={0}
                  width={0}
                  sizes={'100vw'}
                  className={'h-auto w-8 xl:w-10'}
                />
                <h1 className={'text-xl text-wankil-purple xl:text-3xl'}>Types</h1>
              </div>
              {types.map((type: {name: string; id: number}) => {
                return (
                  <div key={type.id} className={'flex flex-row-reverse items-center justify-between py-1'}>
                    <label htmlFor={type.name} className={'xl:text-xl'}>
                      {type.name}
                    </label>
                    <input
                      type='checkbox'
                      value={type.name}
                      className={'h-4 w-4 rounded-md accent-dark xl:h-6 xl:w-6'}
                    />
                  </div>
                );
              })}
            </div>
            <div className={'m-2 flex h-fit w-5/6 flex-col border-b-2 border-[#CCCCCCFF] py-2'}>
              <div className={'flex w-full flex-row items-center pb-2'}>
                <Image
                  src={'/img/home/wankul-filter-light.png'}
                  alt={'personnage'}
                  height={0}
                  width={0}
                  sizes={'100vw'}
                  className={'h-auto w-8 xl:w-10'}
                />
                <h1 className={'text-xl text-wankil-blue xl:text-3xl'}>Personnages</h1>
              </div>
              {characters !== undefined
                ? characters.map((character: Character) => {
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
                  })
                : null}
            </div>
            <div className={'m-2 flex h-fit w-5/6 flex-col overflow-hidden border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4 pb-2'}>
                <Image
                  src={'/img/home/pen-filter-light.png'}
                  alt={'artiste'}
                  height={0}
                  width={0}
                  sizes={'100vw'}
                  className={'h-auto w-8 xl:w-10'}
                />
                <h1 className={'text-xl text-wankil-purple xl:text-3xl'}>Artistes</h1>
              </div>
              {artists !== undefined
                ? artists.map((artist: Artist) => {
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
                  })
                : null}
            </div>
            <div className={'m-2 flex h-fit w-5/6 flex-col border-b-2 border-[#CCCCCCFF] p-2'}>
              <div className={'flex flex-row items-center space-x-4 pb-2'}>
                <Image
                  src={'/img/home/rarity-light.png'}
                  alt={'rarete'}
                  height={0}
                  width={0}
                  sizes={'100vw'}
                  className={'h-auto w-8 xl:w-10'}
                />
                <h1 className={'text-xl text-wankil-blue xl:text-3xl'}>Raretés</h1>
              </div>
              {rarities !== undefined
                ? rarities.map((rarity: Rarity) => {
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
                  })
                : null}
            </div>
          </div>
        </BaseContainer>
      </div>
    </div>
  );
}
