import {useCardDescriptionContext} from '@providers/admin/creation/card/CardDescriptionContextProvider';
import FormTextArea from '@components/form/FormTextArea';

export default function CharacterRowInputs() {
  const {cardDescription, updateDescription} = useCardDescriptionContext();

  return (
    <section id={'character-textareas'} className={'space-y-6'}>
      <FormTextArea
        text={'Effet'}
        value={cardDescription.effect.value as string}
        error={cardDescription.effect.error}
        image={'/img/admin/create/cards/description-light.png'}
        changeValue={(event) => {
          updateDescription(event.target.value, 'effect');
        }}
      />
      <FormTextArea
        text={'Citation'}
        value={cardDescription.citation.value as string}
        error={cardDescription.citation.error}
        image={'/img/admin/create/cards/citation-light.png'}
        changeValue={(event) => {
          updateDescription(event.target.value, 'citation');
        }}
      />
    </section>
  );
}
