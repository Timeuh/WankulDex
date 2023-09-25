'use client';

import FormSelect from '@components/form/FormSelect';
import useArtistSelect from '@hooks/admin/create/cards/useArtistSelect';
import {ChangeEvent, useState} from 'react';
import useCharacterSelect from '@hooks/admin/create/cards/useCharacterSelect';

export default function CardSecondRowForm() {
  const {artistSelectOptions} = useArtistSelect();
  const {characterSelectOptions} = useCharacterSelect();

  const [currentArtist, setCurrentArtist] = useState<number>(1);
  const [currentCharacter, setCurrentCharacter] = useState<number>(1);

  const changeArtist = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentArtist(parseInt(event.target.value));
  };

  const changeCharacter = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentCharacter(parseInt(event.target.value));
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
      <FormSelect
        image={'/img/admin/create/cards/wankul-light.png'}
        text={'Personnage'}
        options={characterSelectOptions}
        value={currentCharacter}
        changeValue={changeCharacter}
      />
    </div>
  );
}
