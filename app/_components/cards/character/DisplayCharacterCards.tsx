'use client';

import CharacterCard from '@components/cards/character/CharacterCard';
import CharacterCardLoading from '@components/cards/character/CharacterCardLoading';
import {Card} from '@utils/appTypes';
import {useCardsContext} from '@providers/CardProvider';

export default function DisplayCharacterCards() {
  const {cards, isFetching} = useCardsContext();
  const loadingCards: Array<number> = [];
  const placeholderCardsNumber = 8;

  for (let i = 0; i < placeholderCardsNumber; i++) {
    loadingCards.push(i);
  }

  return (
    <section
      id={'character-cards-display'}
      className={
        'grid h-full w-full grid-cols-1 place-items-center gap-2 space-y-6 xl:grid-cols-4 xl:gap-10 xl:space-y-0'
      }
    >
      {isFetching
        ? loadingCards.map((id: number) => {
            return <CharacterCardLoading key={id} />;
          })
        : cards.map((card: Card) => {
            if (card.card.type.name === 'Personnage') {
              return <CharacterCard key={card.card.id} card={card} />;
            }
          })}
    </section>
  );
}
