import FormTextArea from '@components/form/FormTextArea';
import {useCardDescriptionContext} from '@providers/admin/creation/card/CardDescriptionContextProvider';

export default function FieldRowInputs() {
  const {cardDescription, updateDescription} = useCardDescriptionContext();

  return (
    <section id={'field-textareas'} className={'space-y-6 xl:space-y-12'}>
      <FormTextArea
        text={'Effet Gagnant'}
        value={cardDescription.winner_effect.value as string}
        error={cardDescription.winner_effect.error}
        image={'/img/admin/create/cards/first-light.png'}
        changeValue={(event) => {
          updateDescription(event.target.value, 'winner_effect');
        }}
        size={'card'}
      />
      <FormTextArea
        text={'Effet Perdant'}
        value={cardDescription.looser_effect.value as string}
        error={cardDescription.looser_effect.error}
        image={'/img/admin/create/cards/last-light.png'}
        changeValue={(event) => {
          updateDescription(event.target.value, 'looser_effect');
        }}
        size={'card'}
      />
      <FormTextArea
        text={'Special'}
        value={cardDescription.special.value as string}
        error={cardDescription.special.error}
        image={'/img/admin/create/cards/special-light.png'}
        changeValue={(event) => {
          updateDescription(event.target.value, 'special');
        }}
        size={'card'}
      />
    </section>
  );
}
