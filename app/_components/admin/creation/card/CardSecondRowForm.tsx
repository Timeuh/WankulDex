'use client';

import FormSelect from '@components/form/FormSelect';
import useArtistSelect from '@hooks/admin/create/cards/useArtistSelect';
import {ChangeEvent, useState} from 'react';

export default function CardSecondRowForm() {
  const {artistSelectOptions} = useArtistSelect();
  const [currentArtist, setCurrentArtist] = useState<number>(1);

  const changeArtist = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentArtist(parseInt(event.target.value));
  };

  return (
    <div className={'space-y-6'}>
      <FormSelect
        image={'/img/admin/create/cards/pen-light.png'}
        text={'Artiste'}
        options={artistSelectOptions}
        value={currentArtist}
        changeValue={changeArtist}
      />
    </div>
  );
}
