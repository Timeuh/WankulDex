import Link from 'next/link';
import Image from 'next/image';
import {NavbarLink} from '@/app/_utils/appTypes';

type Props = {
  link: NavbarLink;
  isLast: boolean;
};

export default function NavbarLinkDisplay({link, isLast}: Props) {
  return (
    <Link
      href={link.link}
      className={`${
        isLast ? '' : 'border-b-2 border-dark'
      } flex h-12 w-[50vw] flex-row items-center justify-end space-x-2 pe-6 transition duration-500 hover:bg-gray-300 xl:h-16 xl:w-[15vw]`}
    >
      <Image src={link.image} alt={link.name} width={0} height={0} sizes={'100vw'} className={'h-8 w-8'} />
      <h1 className={'text-xl xl:text-2xl'}>{link.name}</h1>
    </Link>
  );
}
