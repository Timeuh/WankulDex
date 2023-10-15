import Image from 'next/image';
import CardInfos from '@components/cards/CardInfos';
import {Card, CardRarity} from '@utils/appTypes';
import {API_DOMAIN} from '@utils/appGlobals';
import Link from 'next/link';

type Props = {
  card: Card;
};

export default function CharacterCard({card}: Props) {
  return (
    <Link
      scroll={false}
      href={`/card/${card.card.id}`}
      id={`card-${card.card.id}`}
      className={'flex flex-col items-center'}
    >
      <Image
        src={API_DOMAIN + card.links.image}
        alt={card.card.name}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'h-auto w-auto rounded-t-lg border-2 border-dark'}
      />
      <CardInfos
        card={card}
        size={'character'}
        cardName={'character'}
        textColor={card.card.description.rarity.name as CardRarity}
        borderColor={card.card.description.rarity.name as CardRarity}
        image={card.card.description.rarity.name as CardRarity}
      />
    </Link>
  );
}
