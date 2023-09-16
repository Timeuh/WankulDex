import Image from 'next/image';
import {Card} from '@/app/_utils/appTypes';
import {API_DOMAIN} from '@/app/_utils/appGlobals';
import CardInfos from '@components/cards/CardInfos';

type Props = {
  card: Card;
};

export default function FieldCard({card}: Props) {
  return (
    <div id={`card-${card.card.id}`} className={'flex flex-col items-center'}>
      <Image
        src={API_DOMAIN + card.links.image}
        alt={card.card.name}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'h-auto w-5/6 rounded-t-lg border-2 border-dark'}
      />
      <CardInfos card={card} />
    </div>
  );
}