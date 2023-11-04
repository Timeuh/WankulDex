'use client';

import {Card} from '@utils/appTypes';
import CharacterCardsTitle from '@components/CharacterCardsTitle';
import FieldCardsTitle from '@components/FieldCardsTitle';
import HomeCard from '@components/cards/HomeCard';
import {useCardsContext} from '@providers/CardProvider';
import TypeSummary from '@components/types/[id]/TypeSummary';

interface Props {
  id: string;
}

export default function Type({id}: Props) {
  const {cards} = useCardsContext();

  if (!cards) {
    return;
  }

  let fieldNumber = 0;
  let characterNumber = 0;
  let typeName = '';

  cards.forEach((card: Card) => {
    card.card.type.name === 'Terrain' ? (fieldNumber += 1) : (characterNumber += 1);

    if (card.card.type.id === parseInt(id) && typeName === '') {
      typeName = card.card.type.name;
    }
  });

  return (
    <section id={`artist-${id}`} className={'flex h-full w-full flex-col items-center space-y-6 pb-6'}>
      <TypeSummary
        typeName={<h2 className={'w-3/4 text-center text-2xl xl:w-full xl:text-3xl'}>{typeName}</h2>}
        totalCards={
          <h2 className={'w-3/4 text-center text-2xl xl:w-full xl:text-3xl'}>
            {typeName === 'Terrain' ? fieldNumber : characterNumber} Cartes au total
          </h2>
        }
      />
      {typeName === 'Terrain' ? (
        <>
          <FieldCardsTitle />
          <div className={'w-[80vw] grid-cols-3 gap-12 space-y-6 xl:grid xl:w-5/6 xl:space-y-0'}>
            {cards.map((card: Card) => {
              if (card.card.type.name === 'Terrain') {
                return <HomeCard key={card.card.id} card={card} />;
              }
            })}
          </div>
        </>
      ) : null}
      {typeName === 'Personnage' ? (
        <>
          <CharacterCardsTitle />
          <div className={'w-[80vw] grid-cols-4 gap-12 space-y-6 xl:grid xl:w-5/6 xl:space-y-0'}>
            {cards.map((card: Card) => {
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
