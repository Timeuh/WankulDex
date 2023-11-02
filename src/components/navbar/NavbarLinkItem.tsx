import Image from 'next/image';
import Link from 'next/link';
import BaseContainer from '@components/BaseContainer';
import {NavbarLink} from '@utils/appTypes';

type Props = {
  link: NavbarLink;
  isLast: boolean;
};

export default function NavbarLinkItem({link, isLast}: Props) {
  return (
    <BaseContainer interaction={'hover'} border={'none'}>
      <Link
        href={link.link}
        className={`flex h-12 w-[52vw] flex-row items-center justify-end pe-4 xl:h-16 xl:w-[22vw] xl:pe-10 ${
          isLast ? '' : 'border-b-2 border-dark'
        }`}
      >
        <Image src={link.image} alt={link.name} width={0} height={0} sizes={'100vw'} className={'me-4 h-auto w-10'} />
        <h1 className={'text-xl xl:text-2xl'}>{link.name}</h1>
      </Link>
    </BaseContainer>
  );
}
