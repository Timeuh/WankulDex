import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import Link from 'next/link';

type Props = {
  link: string;
};

export default function EditButton({link}: Props) {
  return (
    <BaseContainer interaction={'hover'}>
      <Link
        href={link}
        className={'flex h-12 w-12 flex-row items-center justify-center space-x-2 xl:h-16 xl:w-16 xl:space-x-4'}
      >
        <Image
          src={'/img/pen-light.png'}
          alt={'edit'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={'h-auto w-8 xl:w-10'}
        />
      </Link>
    </BaseContainer>
  );
}
