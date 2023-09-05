import Image from 'next/image';
import Link from 'next/link';
import LightContainer from '@components/LightContainer';

export default function BackButton() {
  return (
    <LightContainer height={'h-12 mt-24'} width={'w-1/3 xl:w-1/5'} hover={true}>
      <Link href={'/'} className={'flex h-full w-full flex-col items-center justify-center'}>
        <div className={'flex flex-row items-center justify-center space-x-2'}>
          <Image
            src={'/img/back-light.png'}
            alt={'accueil'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={'h-4 w-4 xl:h-8 xl:w-8'}
          />
          <h2 className={'xl:text-2xl'}>Retour</h2>
        </div>
      </Link>
    </LightContainer>
  );
}
