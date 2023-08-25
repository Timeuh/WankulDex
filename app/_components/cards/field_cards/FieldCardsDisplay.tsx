import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import {Card} from '@/app/_utils/appTypes';
import {CARD_TYPE_FIELD} from '@/app/_utils/appConsts';
import FieldCard from '@components/cards/field_cards/FieldCard';
import FieldCardsLoading from '@components/cards/field_cards/FieldCardsLoading';
import CardPreview from '@components/cards/CardPreview';
import {useState} from 'react';

type Props = {
  cards: Array<Card>;
};

export default function FieldCardsDisplay({cards}: Props) {
  const [isActive, setActive] = useState<boolean>(false);

  const handleActivation = () => {
    setActive(!isActive);
  };

  return (
    <section id={'field cards'} className={'flex w-[83%] flex-col items-center xl:w-full'}>
      <LightContainer height={'h-12'} width={'w-full xl:w-1/3'} hover={false}>
        <div className={'flex h-full w-full flex-row items-center justify-center space-x-2'}>
          <Image src={'/img/home/type-dark.png'} alt={'terrain'} width={28} height={28} />
          <h1 className={'text-3xl text-dark'}>Terrains</h1>
        </div>
      </LightContainer>
      {cards.length === 0 ? (
        <FieldCardsLoading />
      ) : (
        <div className={'flex grid-cols-3 flex-col items-center xl:grid xl:gap-6'}>
          {cards.map((card: Card) => {
            if (card.card.type.name === CARD_TYPE_FIELD) {
              return (
                <CardPreview
                  key={card.card.id}
                  componentBase={<FieldCard card={card} handleActivation={handleActivation} />}
                  componentPreview={<FieldCard card={card} />}
                  isActive={isActive}
                  handleActivation={handleActivation}
                  isCharacter={false}
                />
              );
            }
          })}
        </div>
      )}
    </section>
  );
}
