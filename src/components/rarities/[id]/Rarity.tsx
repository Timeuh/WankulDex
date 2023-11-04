'use client';

import {useQuery} from '@tanstack/react-query';
import {Card, RarityCards} from '@utils/appTypes';
import CharacterCardsTitle from '@components/CharacterCardsTitle';
import FieldCardsTitle from '@components/FieldCardsTitle';
import HomeCard from '@components/cards/HomeCard';
import {fetchRaritiesById} from '@utils/rarities/[id]/fetchRaritiesById';
import RaritySummary from '@components/rarities/[id]/RaritySummary';

interface Props {
  id: string;
}

export default function Rarity({id}: Props) {
  const {data} = useQuery<RarityCards>({
    queryKey: ['rarity', id],
    queryFn: () => {
      return fetchRaritiesById(id);
    },
  });

  if (!data) {
    return;
  }

  let fieldNumber = 0;
  let characterNumber = 0;

  data.cards.cards.forEach((card: Card) => {
    card.card.type.name === 'Terrain' ? (fieldNumber += 1) : (characterNumber += 1);
  });

  return (
    <section id={`artist-${id}`} className={'flex h-full w-full flex-col items-center space-y-6 pb-6'}>
      <RaritySummary
        rarityName={<h2 className={'w-3/4 text-center text-2xl xl:w-full xl:text-3xl'}>{data.rarity.name}</h2>}
        totalCards={
          <h2 className={'w-3/4 text-center text-2xl xl:w-full xl:text-3xl'}>{data.cards.length} Cartes au total</h2>
        }
      />
      {fieldNumber !== 0 ? (
        <>
          <FieldCardsTitle />
          <div className={'w-[80vw] grid-cols-3 gap-12 space-y-6 xl:grid xl:w-5/6 xl:space-y-0'}>
            {data.cards.cards.map((card: Card) => {
              if (card.card.type.name === 'Terrain') {
                return <HomeCard key={card.card.id} card={card} />;
              }
            })}
          </div>
        </>
      ) : null}
      {characterNumber !== 0 ? (
        <>
          <CharacterCardsTitle />
          <div className={'w-[80vw] grid-cols-4 gap-12 space-y-6 xl:grid xl:w-5/6 xl:space-y-0'}>
            {data.cards.cards.map((card: Card) => {
              if (card.card.type.name === 'Personnage') {
                return <HomeCard key={card.card.id} card={card} />;
              }
            })}
          </div>
        </>
      ) : null}
    </section>
  );
}
