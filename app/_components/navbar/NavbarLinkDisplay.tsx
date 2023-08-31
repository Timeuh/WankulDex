import Link from 'next/link';
import Image from 'next/image';
import {NavbarLink} from '@/app/_utils/appTypes';

type Props = {
  link: NavbarLink;
  isLast: boolean;
  isAdmin?: boolean;
};

export default function NavbarLinkDisplay({link, isLast, isAdmin = false}: Props) {
  return (
    <Link
      href={link.link}
      className={`${isLast ? '' : 'border-b-2 border-dark'} ${
        isAdmin ? 'w-[35vw] ps-6 xl:w-[10vw]' : 'w-[50vw] justify-end pe-6 xl:w-[15vw]'
      } flex h-12 flex-row items-center space-x-2 transition duration-500 hover:bg-gray-300 xl:h-16`}
    >
      <Image src={link.image} alt={link.name} width={0} height={0} sizes={'100vw'} className={'h-8 w-8'} />
      <h1 className={'text-xl xl:text-2xl'}>{link.name}</h1>
    </Link>
  );
}
