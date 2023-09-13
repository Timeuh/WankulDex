'use client';

import useCards from '@/app/_hooks/useCards';
import {Card} from '@/app/_utils/appTypes';
import FieldCard from '@components/cards/FieldCard';
import FieldCardLoading from '@components/cards/FieldCardLoading';

export default function DisplayFieldCards() {
  const {data, error, isFetching} = useCards('Terrain');
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
        : data?.map((card: Card) => {
            return <FieldCard key={card.card.id} card={card} />;
          })}
    </section>
  );
}
