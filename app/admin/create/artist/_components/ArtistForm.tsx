'use client';

import FormInput from '@components/form/FormInput';
import {ChangeEvent, useState} from 'react';
import {ArtistForm} from '@utils/appTypes';

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
    </form>
  );
}
