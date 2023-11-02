'use client';

import FieldCardLoading from '@components/cards/FieldCardLoading';
import {Card, CardType} from '@utils/appTypes';
import {useCardsContext} from '@providers/CardProvider';
import HomeCard from '@components/cards/HomeCard';
import CharacterCardLoading from '@components/cards/CharacterCardLoading';

type Props = {
  loadingCardsNumber: number;
  cardType: CardType;
};

export default function DisplayCards({loadingCardsNumber, cardType}: Props) {
  const {cards, isFetching} = useCardsContext();
  const loadingCards: Array<number> = [];

  for (let i = 0; i < loadingCardsNumber; i++) {
    loadingCards.push(i);
  }

  return (
    <section
      id={'field-cards-display'}
      className={`grid h-full w-[83vw] grid-cols-1 gap-2 space-y-6 xl:w-[90vw] xl:gap-16 xl:space-y-0 ${
        cardType === 'Terrain' ? 'xl:grid-cols-3' : 'xl:grid-cols-4'
      }`}
    >
      {isFetching
        ? loadingCards.map((id: number) => {
            return cardType === 'Terrain' ? <FieldCardLoading key={id} /> : <CharacterCardLoading key={id} />;
          })
        : cards!.map((card: Card) => {
            if (card.card.type.name === cardType) {
              return <HomeCard key={card.card.id} card={card} />;
            }
          })}
    </section>
  );
}
