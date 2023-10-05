'use client';

import useCard from '@hooks/useCard';

type Props = {
  id: string;
};

export default function Card({id}: Props) {
  const {data} = useCard(id);

  return (
    <div className={'flex h-screen w-full flex-col items-center'}>
      <h1 className={'pt-24 text-6xl'}>{data?.card.name}</h1>
    </div>
  );
}
