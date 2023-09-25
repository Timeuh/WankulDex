'use client';

import FormSelect from '@components/form/FormSelect';
import useArtistSelect from '@hooks/admin/create/cards/useArtistSelect';
import {ChangeEvent, useState} from 'react';
import useCharacterSelect from '@hooks/admin/create/cards/useCharacterSelect';
import useRaritySelect from '@hooks/admin/create/cards/useRaritySelect';

export default function CardSecondRowForm() {
  const {artistSelectOptions} = useArtistSelect();
  const {characterSelectOptions} = useCharacterSelect();
  const {raritySelectOptions} = useRaritySelect();

  const [currentArtist, setCurrentArtist] = useState<number>(1);
  const [currentCharacter, setCurrentCharacter] = useState<number>(1);
  const [currentRarity, setCurrentRarity] = useState<number>(1);

  const changeArtist = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentArtist(parseInt(event.target.value));
  };

  const changeCharacter = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentCharacter(parseInt(event.target.value));
  };

  const changeRarity = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentRarity(parseInt(event.target.value));
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
      <FormSelect
        image={'/img/admin/create/cards/rarity-light.png'}
        text={'Rareté'}
        options={raritySelectOptions}
        value={currentRarity}
        changeValue={changeRarity}
      />
    </div>
  );
}
