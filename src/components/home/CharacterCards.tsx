import DisplayCards from '@components/cards/DisplayCards';
import CharacterCardsTitle from '@components/CharacterCardsTitle';

export default function CharacterCards() {
  return (
    <section id={'character-cards'} className={'flex flex-col items-center space-y-6 pb-6'}>
      <CharacterCardsTitle />
      <DisplayCards loadingCardsNumber={8} cardType={'Personnage'} />
    </section>
  );
}
