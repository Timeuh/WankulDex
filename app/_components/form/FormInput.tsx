import Image from 'next/image';
import LightContainer from '@components/LightContainer';
import {ReactNode} from 'react';

type Props = {
  image: string;
  name: string;
  children: ReactNode;
};

export default function FormInput({image, name, children}: Props) {
  return (
    <div className={'h-fit w-full space-y-2'}>
      <div className={'flex flex-row items-center space-x-2'}>
        <Image src={image} alt={name} width={0} height={0} sizes={'100vw'} className={'h-auto w-8'} />
        <h2 className={'text-2xl text-dark'}>{name}</h2>
      </div>
      <LightContainer height={'h-full'} width={'w-full'} hover={true}>
        {children}
      </LightContainer>
    </div>
  );
}
