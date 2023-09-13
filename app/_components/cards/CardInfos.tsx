import Image from 'next/image';
import {Card} from '@/app/_utils/appTypes';

type Props = {
  card: Card;
};

export default function CardInfos({card}: Props) {
  return (
    <div
      className={
        'flex w-5/6 flex-row items-center justify-between rounded-b-lg border-2 border-t-0 border-dark bg-light p-1'
      }
    >
      <div className={'flex flex-row items-center space-x-2'}>
        <Image
          src={'/img/cards-light.png'}
          alt={'cartes'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={'h-auto w-10'}
        />
        <h2 className={'text-xl font-bold'}>{card.card.name.toUpperCase()}</h2>
      </div>
      <span className={'h-10 w-10 rounded-full border-2 border-dark pt-1 text-center text-lg font-bold'}>
        {card.card.id}
      </span>
    </div>
  );
}
