import Image from 'next/image';
import {Card} from '@/app/_utils/appTypes';
import {API_DOMAIN} from '@/app/_utils/appConsts';
import {useState} from 'react';

type Props = {
  card: Card;
  handleActivation?: () => void;
  shouldPoint: boolean;
};

export default function FieldCard({card, handleActivation, shouldPoint}: Props) {
  return (
    <div
      id={`field_${card.card.id}`}
      className={`relative z-10 mb-14 mt-6 flex h-[32vh] w-[82vw] xl:mb-0 ${
        shouldPoint ? 'cursor-pointer' : ''
      } flex-col items-center xl:h-[40vh] xl:w-[25vw]`}
      onClick={handleActivation}
    >
      <Image
        src={`${API_DOMAIN}${card.links.image}`}
        alt={card.card.name}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'h-[30vh] w-[82vw] rounded-t-lg border-2 border-b-0 border-dark xl:w-[25vw]'}
      />
      <div
        className={
          'flex w-[82vw] flex-row items-center justify-between rounded-b-lg border-2 border-dark bg-light px-2 xl:w-[25vw]'
        }
      >
        <div className={'flex h-12 flex-row items-center justify-start space-x-2'}>
          <Image
            src={'/img/cards-light.png'}
            alt={'cartes'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={'h-10 w-10'}
          />
          <h1 className={'font-bold xl:text-xl'}>{card.card.name.toUpperCase()}</h1>
        </div>
        <h2 className={'h-10 w-10 rounded-full border-2 border-dark pt-2 text-center font-bold'}>{card.card.id}</h2>
      </div>
    </div>
  );
}
