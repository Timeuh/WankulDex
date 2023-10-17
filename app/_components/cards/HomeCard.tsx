'use client';

import Image from 'next/image';
import CardInfos from '@components/cards/CardInfos';
import {Card, CardRarity} from '@utils/appTypes';
import {API_DOMAIN} from '@utils/appGlobals';
import {useState} from 'react';
import CardPreview from '@components/cards/CardPreview';

type Props = {
  card: Card;
};

export default function HomeCard({card}: Props) {
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <>
      <div
        // scroll={false}
        // href={`/card/${card.card.id}`}
        id={`card-${card.card.id}`}
        className={'card-shadow flex flex-col items-center rounded-lg transition duration-100 ease-in hover:scale-90'}
        onClick={togglePreview}
      >
        <Image
          src={API_DOMAIN + card.links.image}
          alt={card.card.name}
          width={0}
          height={0}
          sizes={'100vw'}
          className={'h-auto w-auto rounded-t-lg border-2 border-dark'}
        />
        {card.card.type.name === 'Personnage' ? (
          <CardInfos
            card={card}
            size={'character'}
            cardName={'character'}
            textColor={card.card.description.rarity.name as CardRarity}
            borderColor={card.card.description.rarity.name as CardRarity}
            image={card.card.description.rarity.name as CardRarity}
          />
        ) : (
          <CardInfos card={card} image={undefined} />
        )}
      </div>
      {showPreview ? <CardPreview card={card} hide={togglePreview} /> : null}
    </>
  );
}
