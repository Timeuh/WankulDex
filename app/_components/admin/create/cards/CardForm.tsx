'use client';

import FormInput from '@components/form/FormInput';
import useArtists from '@/app/_hooks/useArtists';
import {Artist, Character, Rarity} from '@/app/_utils/appTypes';
import useCharacters from '@/app/_hooks/useCharacters';
import useRarities from '@/app/_hooks/useRarities';
import TypeSwitch from '@components/admin/create/cards/TypeSwitch';
import {MouseEvent, useState} from 'react';
import CharacterFormInputs from '@components/admin/create/cards/CharacterFormInputs';
import FieldFormInputs from '@components/admin/create/cards/FieldFormInputs';
import LightContainer from '@components/LightContainer';
import Image from 'next/image';

export default function CardForm() {
  const {artists} = useArtists();
  const {characters} = useCharacters();
  const {rarities} = useRarities();
  const [isCharacter, setIsCharacter] = useState<boolean>(false);

  const changeType = () => {
    setIsCharacter(!isCharacter);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form action={'noredirect'} className={'flex h-fit w-full flex-col items-center'}>
      <div className={'grid-cols-3 gap-6 space-y-6 xl:grid xl:h-full xl:w-5/6 xl:space-y-0'}>
        <div className={'space-y-6'}>
          <FormInput name={'ID'} image={'/img/admin/create/cards/hashtag-light.png'}>
            <input type='text' placeholder={'ID'} className={'form-input'} />
          </FormInput>
          <FormInput name={'Nom'} image={'/img/admin/create/cards/name-light.png'}>
            <input type='text' placeholder={'Nom'} className={'form-input'} />
          </FormInput>
          <FormInput name={'Collection'} image={'/img/admin/create/cards/collection-light.png'}>
            <input type='text' placeholder={'Collection'} className={'form-input'} />
          </FormInput>
          <FormInput name={'Nom de l’image'} image={'/img/admin/create/cards/picture-light.png'}>
            <input type='text' placeholder={'Nom de l’image'} className={'form-input'} />
          </FormInput>
        </div>
        <div className={'space-y-6'}>
          <FormInput name={'Artiste'} image={'/img/admin/create/cards/pen-light.png'}>
            <select
              name='artist'
              id='artist'
              className={'me-2 h-10 w-full bg-transparent text-center text-xl text-dark outline-none xl:h-12'}
            >
              {artists.map((artist: Artist) => {
                return (
                  <option key={artist.artist.id} value={artist.artist.name}>
                    {artist.artist.name}
                  </option>
                );
              })}
            </select>
          </FormInput>
          <FormInput name={'Personnage'} image={'/img/admin/create/cards/wankul-light.png'}>
            <select
              name='character'
              id='character'
              className={'me-2 h-10 w-full bg-transparent text-center text-xl text-dark outline-none xl:h-12'}
            >
              {characters.map((character: Character) => {
                return (
                  <option key={character.character.id} value={character.character.name}>
                    {character.character.name}
                  </option>
                );
              })}
            </select>
          </FormInput>
          <FormInput name={'Rareté'} image={'/img/admin/create/cards/rarity-light.png'}>
            <select
              name='rarity'
              id='rarity'
              className={'me-2 h-10 w-full bg-transparent text-center text-xl text-dark outline-none xl:h-12'}
            >
              {rarities.map((rarity: Rarity) => {
                return (
                  <option key={rarity.rarity.id} value={rarity.rarity.name}>
                    {rarity.rarity.name}
                  </option>
                );
              })}
            </select>
          </FormInput>
          <TypeSwitch changeType={changeType} />
        </div>
        {isCharacter ? <CharacterFormInputs /> : <FieldFormInputs />}
      </div>
      <button className={'mt-6 h-12 w-5/6 px-3 xl:mb-[5.1vh] xl:mt-20 xl:h-14 xl:w-1/3'} onClick={handleSubmit}>
        <LightContainer height={'h-full'} width={'w-full'} hover={true}>
          <div className={'flex h-full w-full flex-row items-center justify-center space-x-2 xl:space-x-4'}>
            <Image
              src={'/img/admin/create/cards/add-light.png'}
              alt={''}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
            <h1 className={'text-xl text-dark xl:text-3xl'}>Créer</h1>
          </div>
        </LightContainer>
      </button>
    </form>
  );
}
