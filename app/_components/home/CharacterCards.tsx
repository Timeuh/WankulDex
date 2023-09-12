import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';

export default function CharacterCards() {
  return (
    <section id={'character-cards'}>
      <BaseContainer>
        <div className={'flex h-12 w-[83vw] flex-row items-center justify-center space-x-4 xl:w-[30vw]'}>
          <Image
            src={'/img/home/wankul-light.png'}
            alt={'logo terrains'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={'h-auto w-10'}
          />
          <h1 className={'text-3xl text-dark'}>Personnages</h1>
        </div>
      </BaseContainer>
    </section>
  );
}
