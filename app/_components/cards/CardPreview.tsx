import {ReactNode} from 'react';
import Image from 'next/image';
import LightContainer from '@components/LightContainer';

type Props = {
  componentBase: ReactNode;
  componentPreview: ReactNode;
  isActive: boolean;
  handleActivation: () => void;
  isCharacter: boolean;
};

export default function CardPreview({componentBase, componentPreview, isActive, handleActivation, isCharacter}: Props) {
  return (
    <div>
      {componentBase}
      <div
        className={`fixed bg-light/30 backdrop-blur-sm ${
          isActive ? 'block' : 'hidden'
        } left-0 top-0 z-20 flex h-screen w-full flex-col items-center justify-center`}
      >
        <div
          className={`${
            isCharacter ? 'self-end pe-9 pt-12 xl:self-center xl:pe-0 xl:ps-[21rem]' : 'absolute'
          } right-10 top-32 z-10 xl:right-1/3`}
          onClick={handleActivation}
        >
          <LightContainer height={'h-14'} width={'w-14'} hover={true}>
            <Image
              src={'/img/cards/close-light.png'}
              alt={'fermer'}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-full w-full'}
            />
          </LightContainer>
        </div>
        {componentPreview}
        <LightContainer height={'h-24'} width={'w-4/5 xl:w-1/3'} hover={true}>
          <div className={'flex h-full w-full flex-row items-center justify-center space-x-4'}>
            <Image
              src={'/img/cards/details-light.png'}
              alt={'details'}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-10 xl:w-14'}
            />
            <h1 className={'text-3xl text-dark'}>Voir les détails</h1>
          </div>
        </LightContainer>
      </div>
    </div>
  );
}
