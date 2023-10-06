'use client';

import useCard from '@hooks/useCard';
import Image from 'next/image';
import {API_DOMAIN} from '@utils/appGlobals';

type Props = {
  id: string;
};

export default function Card({id}: Props) {
  const {data} = useCard(id);

  return (
    <div className={'flex h-screen w-full flex-col items-center'}>
      <Image
        src={`${API_DOMAIN}/${data!.links.image}`}
        alt={data!.card.name}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'mt-24 h-auto w-[80vw] rounded-lg border-2 border-dark'}
      />
    </div>
  );
}
