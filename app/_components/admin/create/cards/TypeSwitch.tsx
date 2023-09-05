import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import {useState} from 'react';
import {CardType} from '@/app/_utils/appTypes';

type Props = {
  changeType: () => void;
};

export default function TypeSwitch({changeType}: Props) {
  const typeImages = {
    Terrain: '/img/admin/create/cards/type-light.png',
    Personnage: '/img/admin/create/cards/wankul-light.png',
  };

  const [typeName, setTypeName] = useState<CardType>('Terrain');
  const [typeImage, setTypeImage] = useState<string>(typeImages[typeName]);

  const switchType = () => {
    let newType: CardType;

    if (typeName === 'Terrain') {
      newType = 'Personnage';
    } else {
      newType = 'Terrain';
    }

    setTypeName(newType);
    setTypeImage(typeImages[newType]);
    changeType();
  };

  return (
    <div
      className={'flex h-10 w-full flex-row items-center overflow-hidden rounded-lg bg-dark xl:h-12'}
      onClick={switchType}
    >
      <div
        className={`${
          typeName === 'Terrain' ? 'translate-x-0' : 'translate-x-[39.1vw] xl:translate-x-[13.4vw]'
        } h-full w-full transition-transform duration-300`}
      >
        <LightContainer height={'h-full'} width={'w-1/2'} hover={true}>
          <div className={'flex flex-row items-center space-x-2'}>
            <Image
              src={typeImage}
              alt={typeName}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-6 xl:w-8'}
            />
            <h2 className={'text-xl text-dark xl:text-2xl'}>{typeName}</h2>
          </div>
        </LightContainer>
      </div>
    </div>
  );
}
