import Link from 'next/link';
import Image from 'next/image';
import {NavbarLink} from '@/app/_utils/appTypes';

type Props = {
  link: NavbarLink;
};

export default function NavbarLink({link}: Props) {
  return (
    <Link href={link.link} className={'flex flex-row items-center space-x-2'}>
      <Image src={link.image} alt={link.name} width={0} height={0} sizes={'100vw'} className={'h-8 w-8'} />
      <h1 className={'text-xl'}>{link.name}</h1>
    </Link>
  );
}
