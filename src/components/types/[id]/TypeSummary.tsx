import BaseContainer from '@components/BaseContainer';
import {SummaryLogo} from '@utils/appTypes';
import Image from 'next/image';
import {ReactNode} from 'react';

interface Props {
  typeName: ReactNode;
  totalCards: ReactNode;
}

export default function TypeSummary({typeName, totalCards}: Props) {
  const infos: Array<SummaryLogo> = [
    {
      logo: '/img/types/details/cards-light.png',
      name: 'type',
      text: typeName,
    },
    {
      logo: '/img/types/details/collection-light.png',
      name: 'nombre de cartes',
      text: totalCards,
    },
  ];

  return (
    <BaseContainer>
      <div className={'h-full w-[80vw] xl:w-[30vw]'}>
        {infos.map((logo: SummaryLogo, index: number) => {
          return (
            <div
              key={index}
              className={`flex h-14 w-full flex-row items-center justify-start space-x-4 p-4 xl:h-20 ${
                index === infos.length - 1 ? '' : 'border-b-2 border-[#CCCCCCFF]'
              }`}
            >
              <Image
                src={logo.logo}
                alt={logo.name}
                width={0}
                height={0}
                sizes={'100vw'}
                className={'h-auto w-8 xl:w-12'}
              />
              {logo.text}
            </div>
          );
        })}
      </div>
    </BaseContainer>
  );
}
