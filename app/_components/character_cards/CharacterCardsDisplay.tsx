import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import {Card} from '@/app/_utils/appTypes';
import {CARD_TYPE_FIELD} from '@/app/_utils/appConsts';
import CharacterCard from '@components/character_cards/CharacterCard';
import CharacterCardsLoading from '@components/character_cards/CharacterCardsLoading';

type Props = {
  cards: Array<Card>;
};

export default function CharacterCardsDisplay({cards}: Props) {
  return (
    <section id={'character cards'} className={'flex w-[83%] flex-col items-center xl:w-full'}>
      <LightContainer height={'h-12'} width={'w-full xl:w-1/3'} hover={false}>
        <div className={'flex h-full w-full flex-row items-center justify-center space-x-2'}>
          <Image src={'/img/home/wankul-dark.png'} alt={'terrain'} width={28} height={28} />
          <h1 className={'text-3xl text-dark'}>Personnages</h1>
        </div>
      </LightContainer>
      {cards.length === 0 ? (
        <CharacterCardsLoading />
      ) : (
        <div className={'flex grid-cols-4 flex-col items-center xl:grid xl:gap-8'}>
          {cards.map((card: Card) => {
            if (card.card.type.name !== CARD_TYPE_FIELD) {
              return <CharacterCard key={card.card.id} card={card} />;
            }
          })}
        </div>
      )}
    </section>
  );
}
