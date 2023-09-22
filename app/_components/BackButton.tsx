import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import Link from 'next/link';

export default function BackButton() {
  return (
    <BaseContainer interaction={'hover'}>
      <Link
        href={'/'}
        className={'flex h-12 w-[30vw] flex-row items-center justify-center space-x-2 xl:h-16 xl:w-[15vw] xl:space-x-4'}
      >
        <Image
          src={'/img/back-light.png'}
          alt={'retour'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={'h-auto w-6 xl:w-8'}
        />
        <h2 className={'text-xl xl:text-2xl'}>Retour</h2>
      </Link>
    </BaseContainer>
  );
}
