'use client';

import {useCardsContext} from '@providers/CardProvider';
import {Card, Character} from '@utils/appTypes';
import DisplayCharacterCard from '@components/characters/DisplayCharacterCard';
import useCharacters from '@hooks/useCharacters';

export default function DisplayCharacters() {
  const {cards} = useCardsContext();
  const {data} = useCharacters();

  const getCharacterCard = (character: number) => {
    return cards?.find((card: Card) => {
      return card.card.description.character.id === character;
    });
  };

  return (
    <section
      id={'rarities'}
      className={'grid h-full w-full grid-cols-2 place-items-center gap-6 px-4 pb-6 xl:grid-cols-4 xl:gap-12'}
    >
      {data!.map((character: Character) => {
        return <DisplayCharacterCard key={character.character.id} card={getCharacterCard(character.character.id)} />;
      })}
    </section>
  );
}
