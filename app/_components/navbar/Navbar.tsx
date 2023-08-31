'use client';

import LightContainer from '@components/LightContainer';
import Image from 'next/image';
import NavbarMenu from '@components/navbar/NavbarMenu';
import {useState} from 'react';

export default function Navbar() {
  const [isActive, setActive] = useState<boolean>(false);

  const handleActivation = () => {
    setActive(!isActive);
  };

  return (
    <div className={'fixed z-30 h-16 w-full'}>
      <div className={'flex h-16 w-full flex-row items-center justify-between bg-light/30 px-6 backdrop-blur-sm'}>
        <LightContainer height={'h-12'} width={'w-12'} hover={true}>
          <Image src={'/img/navbar/moon.png'} alt={'moon'} className={'h-8 w-8'} width={32} height={32} />
        </LightContainer>
        <LightContainer height={'h-12'} width={'w-12'} hover={true} onClick={handleActivation}>
          <Image src={'/img/navbar/menu-light.png'} alt={'menu'} className={'h-8 w-8'} width={32} height={32} />
        </LightContainer>
      </div>
      <NavbarMenu isActive={isActive} onClick={handleActivation} />
    </div>
  );
}
