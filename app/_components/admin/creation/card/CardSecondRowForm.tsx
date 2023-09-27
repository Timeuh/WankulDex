'use client';

import FormSelect from '@components/form/FormSelect';
import useArtistSelect from '@hooks/admin/create/cards/useArtistSelect';
import {ChangeEvent, useState} from 'react';
import useCharacterSelect from '@hooks/admin/create/cards/useCharacterSelect';
import useRaritySelect from '@hooks/admin/create/cards/useRaritySelect';
import {useCardDescriptionContext} from '@providers/admin/creation/card/CardDescriptionContextProvider';

export default function CardSecondRowForm() {
  const {artistSelectOptions} = useArtistSelect();
  const {characterSelectOptions} = useCharacterSelect();
  const {raritySelectOptions} = useRaritySelect();
  const {cardDescription, updateDescription} = useCardDescriptionContext();

  const [currentArtist, setCurrentArtist] = useState<number>(1);
  const [currentRarity, setCurrentRarity] = useState<number>(1);

  const changeArtist = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentArtist(parseInt(event.target.value));
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
        value={cardDescription.character_id.value as number}
        changeValue={(event) => {
          updateDescription(event, 'character_id');
        }}
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
