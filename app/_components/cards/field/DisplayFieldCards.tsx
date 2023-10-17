'use client';

import FieldCardLoading from '@components/cards/field/FieldCardLoading';
import {Card} from '@utils/appTypes';
import {useCardsContext} from '@providers/CardProvider';
import HomeCard from '@components/cards/HomeCard';

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
      className={'grid h-full w-[83vw] grid-cols-1 gap-2 space-y-6 xl:w-[90vw] xl:grid-cols-3 xl:gap-16 xl:space-y-0'}
    >
      {isFetching
        ? loadingCards.map((id: number) => {
            return <FieldCardLoading key={id} />;
          })
        : cards!.map((card: Card) => {
            if (card.card.type.name === 'Terrain') {
              return <HomeCard key={card.card.id} card={card} />;
            }
          })}
    </section>
  );
}
