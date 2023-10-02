'use client';

import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import NavbarLinkItem from '@components/navbar/NavbarLinkItem';
import {useEffect, useState} from 'react';
import isAdminLogged from '@utils/isAdminLogged';
import {NavbarLink} from '@utils/appTypes';

export default function NavbarMenu() {
  const [isActive, setActive] = useState<boolean>(false);
  const [isAdmin, setAdmin] = useState<boolean>(false);

  useEffect(() => {
    const checkAdminStatus = () => {
      setAdmin(isAdminLogged());
    };

    checkAdminStatus();

    const intervalId = setInterval(checkAdminStatus, 1000);
    return () => {
      return clearInterval(intervalId);
    };
  }, []);

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

  const adminLinks: Array<NavbarLink> = [
    {
      name: 'Carte',
      image: '/img/navbar/alternate-add-light.png',
      link: '/admin/create/card',
    },
    {
      name: 'Artiste',
      image: '/img/navbar/alternate-add-light.png',
      link: '/admin/create/artist',
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
            return <NavbarLinkItem key={index} link={link} isLast={isAdmin ? false : index === links.length - 1} />;
          })}
          {isAdmin
            ? adminLinks.map((link: NavbarLink, index: number) => {
                return <NavbarLinkItem key={index} link={link} isLast={index === adminLinks.length - 1} />;
              })
            : null}
        </nav>
      </div>
    </section>
  );
}
