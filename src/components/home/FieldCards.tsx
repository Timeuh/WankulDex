import DisplayCards from '@components/cards/DisplayCards';
import FieldCardsTitle from '@components/FieldCardsTitle';

export default function FieldCards() {
  return (
    <section id={'field-cards'} className={'flex flex-col items-center space-y-6'}>
      <FieldCardsTitle />
      <DisplayCards loadingCardsNumber={6} cardType={'Terrain'} />
    </section>
  );
}
