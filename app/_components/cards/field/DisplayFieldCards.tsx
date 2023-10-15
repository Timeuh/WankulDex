'use client';

import FieldCard from '@components/cards/field/FieldCard';
import FieldCardLoading from '@components/cards/field/FieldCardLoading';
import {Card} from '@utils/appTypes';
import {useCardsContext} from '@providers/CardProvider';

export default function DisplayFieldCards() {
  const {cards, isFetching} = useCardsContext();
  const loadingCards: Array<number> = [];
  const placeholderCardsNumber = 3;

  for (let i = 0; i < placeholderCardsNumber; i++) {
    loadingCards.push(i);
  }

  return (
    <section
      id={'field-cards-display'}
      className={'grid h-full w-full grid-cols-1 gap-2 space-y-6 xl:grid-cols-3 xl:gap-10 xl:space-y-0'}
    >
      {isFetching
        ? loadingCards.map((id: number) => {
            return <FieldCardLoading key={id} />;
          })
        : cards.map((card: Card) => {
            if (card.card.type.name === 'Terrain') {
              return <FieldCard key={card.card.id} card={card} />;
            }
          })}
    </section>
  );
}
