import FormInput from '@components/form/FormInput';
import {useCardContext} from '@/app/admin/create/card/_providers/CardContextProvider';
import {useCardDescriptionContext} from '@/app/admin/create/card/_providers/CardDescriptionContextProvider';

export default function CardFirstRowForm() {
  const {cardContext, updateCard} = useCardContext();
  const {updateDescription} = useCardDescriptionContext();

  return (
    <div className={'space-y-6 xl:space-y-12'}>
      <FormInput
        text={'ID'}
        error={cardContext.id.error}
        value={cardContext.id.value}
        type={'number'}
        image={'/img/admin/create/cards/hashtag-light.png'}
        valueType={'number'}
        changeValue={(event) => {
          updateCard(event.target.value, 'id');
          updateDescription(event.target.value, 'id');
        }}
        size={'card'}
      />
      <FormInput
        text={'Nom'}
        error={cardContext.name.error}
        value={cardContext.name.value}
        type={'text'}
        image={'/img/admin/create/cards/name-light.png'}
        valueType={'string'}
        changeValue={(event) => {
          updateCard(event.target.value, 'name');
        }}
        size={'card'}
      />
      <FormInput
        text={'Collection'}
        error={cardContext.collection.error}
        value={cardContext.collection.value}
        type={'text'}
        image={'/img/admin/create/cards/collection-light.png'}
        valueType={'string'}
        changeValue={(event) => {
          updateCard(event.target.value, 'collection');
        }}
        size={'card'}
      />
      <FormInput
        text={'Nom de l’image'}
        error={cardContext.image.error}
        value={cardContext.image.value}
        type={'text'}
        image={'/img/admin/create/cards/picture-light.png'}
        valueType={'string'}
        changeValue={(event) => {
          updateCard(event.target.value, 'image');
        }}
        size={'card'}
      />
    </div>
  );
}
