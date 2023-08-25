import Image from 'next/image';
import {Card} from '@/app/_utils/appTypes';
import {API_DOMAIN} from '@/app/_utils/appConsts';
import {useState} from 'react';

type Props = {
  card: Card;
  handleActivation?: () => void;
};

export default function FieldCard({card, handleActivation}: Props) {
  return (
    <div
      id={`field_${card.card.id}`}
      className={'relative z-10 my-6 flex h-[32vh] w-[82vw] flex-col items-center xl:h-[40vh] xl:w-[25vw]'}
      onClick={handleActivation}
    >
      <div className={'relative h-[50vh] w-[82vw] rounded-t-lg border-2 border-b-0 border-dark xl:w-[25vw]'}>
        <Image src={`${API_DOMAIN}${card.links.image}`} alt={card.card.name} className={'rounded-t-lg'} fill={true} />
      </div>
      <div
        className={
          'flex w-[82vw] flex-row items-center justify-between rounded-b-lg border-2 border-dark bg-light px-2 xl:w-[25vw]'
        }
      >
        <div className={'flex h-12 flex-row items-center justify-start space-x-2'}>
          <div className={'relative h-10 w-10'}>
            <Image src={'/img/cards-light.png'} alt={'cards-logo'} fill={true} />
          </div>
          <h1 className={'font-bold xl:text-xl'}>{card.card.name.toUpperCase()}</h1>
        </div>
        <h2 className={'h-10 w-10 rounded-full border-2 border-dark pt-2 text-center font-bold'}>{card.card.id}</h2>
      </div>
    </div>
  );
}
