import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';

export default function FieldCards() {
  return (
    <section id={'field-cards'}>
      <BaseContainer>
        <div className={'flex h-12 w-[83vw] flex-row items-center justify-center space-x-4 xl:w-[30vw]'}>
          <Image
            src={'/img/home/type-light.png'}
            alt={'logo terrains'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={'h-auto w-10'}
          />
          <h1 className={'text-3xl text-dark'}>Terrains</h1>
        </div>
      </BaseContainer>
    </section>
  );
}
