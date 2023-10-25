import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import DisplayCards from '@components/cards/DisplayCards';

export default function CharacterCards() {
  return (
    <section id={'character-cards'} className={'flex flex-col items-center space-y-6 pb-6'}>
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
      <DisplayCards loadingCardsNumber={8} cardType={'Personnage'} />
    </section>
  );
}
