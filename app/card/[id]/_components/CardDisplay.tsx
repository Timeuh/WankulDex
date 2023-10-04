'use client';

import CardDisplayProvider from '@providers/CardDisplayProvider';
import CardInfos from '@components/CardInfos';

type Props = {
  id: string;
};

export default function CardDisplay({id}: Props) {
  return (
    <CardDisplayProvider id={id}>
      <CardInfos />
    </CardDisplayProvider>
  );
}
