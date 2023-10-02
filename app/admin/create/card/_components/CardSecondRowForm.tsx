import FormSelect from '@components/form/FormSelect';
import useArtistSelect from '@hooks/admin/create/cards/useArtistSelect';
import useCharacterSelect from '@hooks/admin/create/cards/useCharacterSelect';
import useRaritySelect from '@hooks/admin/create/cards/useRaritySelect';
import {useCardDescriptionContext} from '@providers/admin/creation/card/CardDescriptionContextProvider';
import {useCardContext} from '@providers/admin/creation/card/CardContextProvider';
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
