'use client';

import useCards from '@/app/_hooks/useCards';
import {Card} from '@/app/_utils/appTypes';
import CharacterCard from '@components/cards/character/CharacterCard';
import CharacterCardLoading from '@components/cards/character/CharacterCardLoading';

export default function DisplayCharacterCards() {
  const {data, error, isFetching} = useCards('Personnage');
  const loadingCards: Array<number> = [];
  const placeholderCardsNumber = 6;

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
        : data?.map((card: Card) => {
            return <CharacterCard key={card.card.id} card={card} />;
          })}
    </section>
  );
}
