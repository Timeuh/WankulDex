'use client';

import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import {NavbarLink} from '@/app/_utils/appTypes';
import NavbarLinkItem from '@components/navbar/NavbarLinkItem';
import {useState} from 'react';

export default function NavbarMenu() {
  const [isActive, setActive] = useState<boolean>(false);

  const links: Array<NavbarLink> = [
    {
      name: 'Accueil',
      image: '/img/navbar/home-light.png',
      link: '/',
    },
    {
      name: 'Artistes',
      image: '/img/navbar/pen-light.png',
      link: '/artists/',
    },
    {
      name: 'Personnages',
      image: '/img/navbar/wankul-light.png',
      link: '/characters/',
    },
    {
      name: 'Raretés',
      image: '/img/navbar/rarity-navbar-light.png',
      link: '/rarities/',
    },
    {
      name: 'Types',
      image: '/img/navbar/types-light.png',
      link: '/types/',
    },
    {
      name: 'Admin',
      image: '/img/navbar/admin-light.png',
      link: '/admin/login/',
    },
  ];

  const handleActivation = () => {
    setActive(!isActive);
  };

  return (
    <section id={'navbar-menu'} className={'relative'}>
      <BaseContainer interaction={'hover'}>
        <button className={'h-auto w-12 p-1'} onClick={handleActivation}>
          <Image
            src={'/img/navbar/menu-light.png'}
            alt={'menu'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={'h-full w-full'}
          />
        </button>
      </BaseContainer>
      <div
        className={`absolute right-0 top-16 ${
          isActive ? 'translate-x-0' : 'translate-x-[60vw]'
        } transition-transform duration-500`}
      >
        <nav
          className={
            'flex h-full w-[50vw] flex-col items-center overflow-hidden rounded-lg border-2 border-[#CCCCCCFF] bg-light xl:w-[20vw]'
          }
          onClick={handleActivation}
        >
          {links.map((link: NavbarLink, index: number) => {
            return <NavbarLinkItem key={index} link={link} isLast={index === links.length - 1} />;
          })}
        </nav>
      </div>
    </section>
  );
}
