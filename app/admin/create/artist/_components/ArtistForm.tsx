'use client';

import FormInput from '@components/form/FormInput';
import {ChangeEvent, MouseEvent, useState} from 'react';
import {ArtistForm} from '@utils/appTypes';
import BaseContainer from '@components/BaseContainer';
import Image from 'next/image';

export default function ArtistForm() {
  const [artistData, setArtistData] = useState<ArtistForm>({
    id: {
      value: 1,
      error: '',
    },
    name: {
      value: '',
      error: '',
    },
  });

  const updateArtist = (event: ChangeEvent<HTMLInputElement>, type: keyof ArtistForm) => {
    setArtistData((prevState) => {
      if (type === 'id') {
        const newValue = parseInt(event.target.value);
        if (isNaN(newValue) || newValue <= 0) {
          return prevState;
        }

        return {...prevState, [type]: {...prevState[type], value: newValue}};
      }

      return {...prevState, [type]: {...prevState[type], value: event.target.value}};
    });
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(artistData);
  };

  return (
    <form action='noredirect' className={'space-y-6'}>
      <FormInput
        value={artistData.id.value}
        changeValue={(event) => {
          updateArtist(event, 'id');
        }}
        error={artistData.id.error}
        valueType={'number'}
        type={'number'}
        image={'/img/admin/create/artists/hashtag-light.png'}
        text={'ID'}
      />
      <FormInput
        value={artistData.name.value}
        changeValue={(event) => {
          updateArtist(event, 'name');
        }}
        error={artistData.name.error}
        valueType={'string'}
        type={'text'}
        image={'/img/admin/create/artists/name-light.png'}
        text={'Nom'}
      />
      <div className={'absolute bottom-20'}>
        <BaseContainer interaction={'hover'}>
          <button
            className={'flex h-10 w-[80vw] flex-row items-center justify-center space-x-2 xl:h-14 xl:w-[30vw]'}
            onClick={handleSubmit}
          >
            <Image
              src={'/img/admin/create/cards/add-light.png'}
              alt={'créer une carte'}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
            <h2 className={'text-xl xl:text-2xl'}>Créer</h2>
          </button>
        </BaseContainer>
      </div>
    </form>
  );
}
