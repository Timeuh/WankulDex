import Image from 'next/image';
import {Card} from '@/app/_utils/appTypes';
import {API_DOMAIN} from '@/app/_utils/appConsts';

type Props = {
  card: Card;
};

export default function FieldCard({card}: Props) {
  return (
    <div id={`field_${card.card.id}`} className={'relative mt-6 flex h-[305px] flex-col items-center justify-end'}>
      <Image
        src={`${API_DOMAIN}${card.links.image}`}
        alt={card.card.name}
        width={250}
        height={250}
        className={'absolute -top-[44px] h-[82vw] rotate-90 rounded-l-lg border-2 border-dark'}
      />
      <div
        className={
          'flex w-[82vw] flex-row items-center justify-between rounded-b-lg border-2 border-dark bg-light px-2'
        }
      >
        <div className={'flex h-12 flex-row items-center justify-start space-x-2'}>
          <Image src={'/img/cards-light.png'} alt={'cards-logo'} width={24} height={24} />
          <h1 className={'font-bold'}>{card.card.name.toUpperCase()}</h1>
        </div>
        <h2 className={'h-10 w-10 rounded-full border-2 border-dark pt-2 text-center font-bold'}>{card.card.id}</h2>
      </div>
    </div>
  );
}
