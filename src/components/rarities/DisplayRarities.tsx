'use client';

import {useCardsContext} from '@providers/CardProvider';
import useRarities from '@hooks/useRarities';
import {Card, Rarity} from '@utils/appTypes';
import DisplayRarityCard from '@components/DisplayRarityCard';

export default function DisplayRarities() {
  const {cards} = useCardsContext();
  const {data} = useRarities();

  const getRarityCard = (rarity: number) => {
    return cards?.find((card: Card) => {
      return card.card.description.rarity.id === rarity;
    });
  };

  return (
    <section
      id={'rarities'}
      className={'grid h-full w-full grid-cols-2 place-items-center gap-6 px-4 pb-6 xl:grid-cols-4 xl:gap-12'}
    >
      {data!.map((rarity: Rarity) => {
        return <DisplayRarityCard key={rarity.rarity.id} card={getRarityCard(rarity.rarity.id)} />;
      })}
    </section>
  );
}
