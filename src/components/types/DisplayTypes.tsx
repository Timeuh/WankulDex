'use client';

import {useCardsContext} from '@providers/CardProvider';
import {Card} from '@utils/appTypes';
import DisplayTypesCard from '@components/types/DisplayTypesCard';

export default function DisplayTypes() {
  const {cards} = useCardsContext();

  const getTypeCard = (type: string) => {
    return cards?.find((card: Card) => {
      return card.card.type.name === type;
    });
  };

  return (
    <section
      id={'rarities'}
      className={'grid h-auto w-full grid-cols-2 place-items-center gap-6 px-4 pb-6 xl:grid-cols-4 xl:gap-12'}
    >
      <DisplayTypesCard card={getTypeCard('Terrain')} />
      <DisplayTypesCard card={getTypeCard('Personnage')} />
    </section>
  );
}
