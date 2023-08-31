import {links} from '@/app/_utils/navbarLinks';
import {NavbarLink} from '@/app/_utils/appTypes';
import NavbarLinkDisplay from '@components/navbar/NavbarLinkDisplay';
import LightContainer from '@components/LightContainer';
import NavbarMenuAdmin from '@components/navbar/NavbarMenuAdmin';

type Props = {
  isActive: boolean;
  onClick: () => void;
  refresh: boolean;
};

export default function NavbarMenu({isActive, onClick, refresh}: Props) {
  return (
    <div
      className={`absolute right-0 flex h-auto w-auto flex-row items-center transition-transform duration-500 ${
        isActive ? 'translate-x-0' : 'translate-x-[40rem]'
      }`}
      onClick={onClick}
    >
      <LightContainer width={'w-full'} height={'h-full'} hover={false}>
        <div className={'flex h-full w-full flex-row items-center'}>
          <NavbarMenuAdmin refresh={refresh} />
          <div className={'flex w-full flex-col items-center'}>
            {links.map((link: NavbarLink, index: number) => {
              return <NavbarLinkDisplay key={link.name} link={link} isLast={index === links.length - 1} />;
            })}
          </div>
        </div>
      </LightContainer>
    </div>
  );
}
