import {NavbarLink} from '@/app/_utils/appTypes';

export const links: Array<NavbarLink> = [
  {
    image: '/img/navbar/home-light.png',
    name: 'Accueil',
    link: '/',
  },
  {
    image: '/img/navbar/pen-light.png',
    name: 'Artistes',
    link: '/artist',
  },
  {
    image: '/img/navbar/wankul-light.png',
    name: 'Personnages',
    link: '/character',
  },
  {
    image: '/img/navbar/rarity-navbar-light.png',
    name: 'Raretés',
    link: '/rarity',
  },
  {
    image: '/img/cards-light.png',
    name: 'Types',
    link: '/type',
  },
  {
    image: '/img/admin/login/admin-light.png',
    name: 'Admin',
    link: '/admin/login',
  },
];

export const adminLinks: Array<NavbarLink> = [
  {
    image: '/img/navbar/alternate-add-light.png',
    name: 'Artiste',
    link: '/admin/create/artist',
  },
  {
    image: '/img/navbar/alternate-add-light.png',
    name: 'Carte',
    link: '/admin/create/card',
  },
];
