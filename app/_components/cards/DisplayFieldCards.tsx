'use client';

import useCards from '@/app/_hooks/useCards';
import {Card} from '@/app/_utils/appTypes';
import FieldCard from '@components/cards/FieldCard';

export default function DisplayFieldCards() {
  const {data, error, isFetching} = useCards('Terrain');

  return (
    <section
      id={'field-cards-display'}
      className={'grid h-full w-full grid-cols-1 gap-12 space-y-6 xl:grid-cols-3 xl:space-y-0'}
    >
      {data?.map((card: Card) => {
        return <FieldCard key={card.card.id} card={card} />;
      })}
    </section>
  );
}
