import FormInput from '@components/form/FormInput';
import {useCardContext} from '@providers/admin/creation/card/CardContextProvider';

export default function CardFirstRowForm() {
  const {cardContext, updateCard} = useCardContext();

  return (
    <div className={'space-y-6'}>
      <FormInput
        text={'ID'}
        error={''}
        value={cardContext.id.value}
        type={'number'}
        image={'/img/admin/create/cards/hashtag-light.png'}
        valueType={'number'}
        changeValue={(event) => {
          updateCard(event.target.value, 'id');
        }}
      />
      <FormInput
        text={'Nom'}
        error={''}
        value={cardContext.name.value}
        type={'text'}
        image={'/img/admin/create/cards/name-light.png'}
        valueType={'string'}
        changeValue={(event) => {
          updateCard(event.target.value, 'name');
        }}
      />
      <FormInput
        text={'Collection'}
        error={''}
        value={cardContext.collection.value}
        type={'text'}
        image={'/img/admin/create/cards/collection-light.png'}
        valueType={'string'}
        changeValue={(event) => {
          updateCard(event.target.value, 'collection');
        }}
      />
      <FormInput
        text={'Nom de l’image'}
        error={''}
        value={cardContext.image.value}
        type={'text'}
        image={'/img/admin/create/cards/picture-light.png'}
        valueType={'string'}
        changeValue={(event) => {
          updateCard(event.target.value, 'image');
        }}
      />
    </div>
  );
}
