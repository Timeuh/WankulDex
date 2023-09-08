'use client';

import FormInput from '@components/form/FormInput';
import useArtists from '@/app/_hooks/useArtists';
import {Artist, CardResponse, Character, DescriptionResponse, FormState, Rarity} from '@/app/_utils/appTypes';
import useCharacters from '@/app/_hooks/useCharacters';
import useRarities from '@/app/_hooks/useRarities';
import TypeSwitch from '@components/admin/create/cards/TypeSwitch';
import {MouseEvent, useState} from 'react';
import CharacterFormInputs from '@components/admin/create/cards/CharacterFormInputs';
import FieldFormInputs from '@components/admin/create/cards/FieldFormInputs';
import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import useTextCardInputs from '@/app/_hooks/creation/card/useTextCardInputs';
import useSelectCardInputs from '@/app/_hooks/creation/card/useSelectCardInputs';
import useCharacterCardInputs from '@/app/_hooks/creation/card/useCharacterCardInputs';
import useFieldCardInputs from '@/app/_hooks/creation/card/useFieldCardInputs';
import createCardDescription from '@/app/_utils/createCardDescription';
import LoadingAnimation from '@components/LoadingAnimation';
import createCard from '@/app/_utils/createCard';

export default function CardForm() {
  const {artists} = useArtists();
  const {characters} = useCharacters();
  const {rarities} = useRarities();

  const [isCharacter, setIsCharacter] = useState<boolean>(false);
  const [status, setStatus] = useState<FormState>(FormState.WAITING);
  const {textCardInputs, handleTextInputsChange} = useTextCardInputs();
  const {selectCardInputs, handleSelectInputsChange} = useSelectCardInputs();
  const {characterCardInputs, handleCharacterInputsChange} = useCharacterCardInputs();
  const {fieldCardInputs, handleFieldInputsChange} = useFieldCardInputs();

  const changeType = () => {
    setIsCharacter(!isCharacter);
  };

  const convertCardInputsForDescription = () => {
    return {...selectCardInputs, ...characterCardInputs, ...fieldCardInputs, id: textCardInputs.id};
  };

  const convertCardInputsForCard = () => {
    return {
      ...textCardInputs,
      artist_id: selectCardInputs.artist_id,
      description_id: textCardInputs.id,
      type_id: isCharacter ? 2 : 1,
    };
  };

  const checkNotEmpty = () => {
    for (const key in textCardInputs) {
      if (textCardInputs.hasOwnProperty(key) && textCardInputs[key] === '') {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus(FormState.LOADING);

    if (!checkNotEmpty()) {
      setStatus(FormState.EMPTY);
      return;
    }

    const convertedData = convertCardInputsForDescription();
    createCardDescription(convertedData).then((responseData: DescriptionResponse) => {
      if (responseData.error) {
        setStatus(FormState.ERROR);
        return;
      }

      const cardCreationData = convertCardInputsForCard();
      createCard(cardCreationData).then((responseData: CardResponse) => {
        if (responseData.error) {
          setStatus(FormState.ERROR);
          return;
        }
        console.log('card created');
        // TODO redirect to card page details
        setStatus(FormState.WAITING);
      });
    });
  };

  return (
    <div className={`${status === FormState.LOADING ? 'h-[63vh]' : 'h-full'} w-full`}>
      <div className={'flex h-1/2 w-full flex-row items-center justify-center'}>
        <LoadingAnimation isLoading={status === FormState.LOADING} type={'Creation'} />
      </div>
      <form
        action={'noredirect'}
        className={`flex h-fit w-full flex-col items-center ${status === FormState.LOADING ? 'hidden' : 'block'}`}
      >
        <h1
          className={`py-6 text-center text-2xl text-red-500 xl:py-12 xl:text-4xl ${
            status === FormState.ERROR ? 'block' : 'hidden'
          }`}
        >
          Erreur lors de la création de la carte, veuillez réessayer
        </h1>
        <h1
          className={`py-6 text-center text-2xl text-red-500 xl:py-12 xl:text-4xl ${
            status === FormState.EMPTY ? 'block' : 'hidden'
          }`}
        >
          Veuillez remplir les nom, collection et nom de l&apos;image
        </h1>
        <div className={'grid-cols-3 gap-6 space-y-6 xl:grid xl:h-full xl:w-5/6 xl:space-y-0'}>
          <div className={'space-y-6'}>
            <FormInput name={'ID'} image={'/img/admin/create/cards/hashtag-light.png'}>
              <input
                type='number'
                placeholder={'ID'}
                className={'form-input'}
                value={textCardInputs.id}
                onChange={(event) => {
                  handleTextInputsChange(event, 'ID');
                }}
              />
            </FormInput>
            <FormInput name={'Nom'} image={'/img/admin/create/cards/name-light.png'}>
              <input
                type='text'
                placeholder={'Nom'}
                className={'form-input'}
                value={textCardInputs.name}
                onChange={(event) => {
                  handleTextInputsChange(event, 'Name');
                }}
              />
            </FormInput>
            <FormInput name={'Collection'} image={'/img/admin/create/cards/collection-light.png'}>
              <input
                type='text'
                placeholder={'Collection'}
                className={'form-input'}
                value={textCardInputs.collection}
                onChange={(event) => {
                  handleTextInputsChange(event, 'Collection');
                }}
              />
            </FormInput>
            <FormInput name={'Nom de l’image'} image={'/img/admin/create/cards/picture-light.png'}>
              <input
                type='text'
                placeholder={'Nom de l’image'}
                className={'form-input'}
                value={textCardInputs.image}
                onChange={(event) => {
                  handleTextInputsChange(event, 'Image');
                }}
              />
            </FormInput>
          </div>
          <div className={'space-y-6'}>
            <FormInput name={'Artiste'} image={'/img/admin/create/cards/pen-light.png'}>
              <select
                name='artist'
                id='artist'
                className={'me-2 h-10 w-full bg-transparent text-center text-xl text-dark outline-none xl:h-12'}
                onChange={(event) => {
                  handleSelectInputsChange(event, 'Artist');
                }}
              >
                {artists.map((artist: Artist) => {
                  return (
                    <option key={artist.artist.id} value={artist.artist.id}>
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
                onChange={(event) => {
                  handleSelectInputsChange(event, 'Character');
                }}
              >
                {characters.map((character: Character) => {
                  return (
                    <option key={character.character.id} value={character.character.id}>
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
                onChange={(event) => {
                  handleSelectInputsChange(event, 'Rarity');
                }}
              >
                {rarities.map((rarity: Rarity) => {
                  return (
                    <option key={rarity.rarity.id} value={rarity.rarity.id}>
                      {rarity.rarity.name}
                    </option>
                  );
                })}
              </select>
            </FormInput>
            <TypeSwitch changeType={changeType} />
          </div>
          {isCharacter ? (
            <CharacterFormInputs characterCardInputs={characterCardInputs} handleChange={handleCharacterInputsChange} />
          ) : (
            <FieldFormInputs fieldCardInputs={fieldCardInputs} handleChange={handleFieldInputsChange} />
          )}
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
    </div>
  );
}
