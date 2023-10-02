import FormSelect from '@components/form/FormSelect';
import useArtistSelect from '@/app/admin/create/card/_hooks/useArtistSelect';
import useCharacterSelect from '@/app/admin/create/card/_hooks/useCharacterSelect';
import useRaritySelect from '@/app/admin/create/card/_hooks/useRaritySelect';
import {useCardDescriptionContext} from '@/app/admin/create/card/_providers/CardDescriptionContextProvider';
import {useCardContext} from '@/app/admin/create/card/_providers/CardContextProvider';
import CardTypeSwitch from '@/app/admin/create/card/_components/CardTypeSwitch';

export default function CardSecondRowForm() {
  const {artistSelectOptions} = useArtistSelect();
  const {characterSelectOptions} = useCharacterSelect();
  const {raritySelectOptions} = useRaritySelect();
  const {cardDescription, updateDescription} = useCardDescriptionContext();
  const {cardContext, updateCard} = useCardContext();

  return (
    <div className={'space-y-6 xl:space-y-12'}>
      <FormSelect
        image={'/img/admin/create/cards/pen-light.png'}
        text={'Artiste'}
        options={artistSelectOptions}
        value={cardContext.artist_id.value as number}
        changeValue={(event) => {
          updateCard(event.target.value, 'artist_id');
        }}
        size={'card'}
      />
      <FormSelect
        image={'/img/admin/create/cards/wankul-light.png'}
        text={'Personnage'}
        options={characterSelectOptions}
        value={cardDescription.character_id.value as number}
        changeValue={(event) => {
          updateDescription(event.target.value, 'character_id');
        }}
        size={'card'}
      />
      <FormSelect
        image={'/img/admin/create/cards/rarity-light.png'}
        text={'Rareté'}
        options={raritySelectOptions}
        value={cardDescription.rarity_id.value as number}
        changeValue={(event) => {
          updateDescription(event.target.value, 'rarity_id');
        }}
        size={'card'}
      />
      <CardTypeSwitch />
    </div>
  );
}
