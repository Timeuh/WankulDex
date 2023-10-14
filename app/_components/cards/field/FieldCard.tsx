import Image from 'next/image';
import CardInfos from '@components/cards/CardInfos';
import {Card} from '@utils/appTypes';
import {API_DOMAIN} from '@utils/appGlobals';
import Link from 'next/link';

type Props = {
  card: Card;
};

export default function FieldCard({card}: Props) {
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
        className={'h-auto w-5/6 rounded-t-lg border-2 border-dark'}
      />
      <CardInfos card={card} image={undefined} />
    </Link>
  );
}
