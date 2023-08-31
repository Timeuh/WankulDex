'use client';

import isAdminLogged from '@/app/_utils/isAdminLogged';
import {useEffect, useState} from 'react';
import {adminLinks, links} from '@/app/_utils/navbarLinks';
import {NavbarLink} from '@/app/_utils/appTypes';
import NavbarLinkDisplay from '@components/navbar/NavbarLinkDisplay';

type Props = {
  refresh: boolean;
};

export default function NavbarMenuAdmin({refresh}: Props) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    isAdminLogged().then((isLogged: boolean) => {
      setIsAdmin(isLogged);
    });
  }, [refresh]);

  return (
    <div>
      {isAdmin ? (
        <div className={'flex flex-row items-center'}>
          <div className={'flex h-full w-full flex-col items-center'}>
            {adminLinks.map((link: NavbarLink, index: number) => {
              return (
                <NavbarLinkDisplay key={link.name} link={link} isLast={index === links.length - 1} isAdmin={true} />
              );
            })}
          </div>
          <div className={'mx-4 h-[30vh] w-[2px] bg-dark xl:h-[35vh]'}></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
