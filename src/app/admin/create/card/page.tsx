import BackButton from '@components/BackButton';
import Image from 'next/image';
import CardFormProviders from '@components/admin/create/card/CardFormProviders';

export default function CreateCard() {
  return (
    <section id={'create-card'} className={'h-full w-full bg-gradient-to-b from-light-purple to-light-blue'}>
      <div className={'flex h-full w-full flex-col items-center space-y-12 pt-24'}>
        <BackButton />
        <div className={'flex flex-col items-center'}>
          <Image
            src={'/img/admin/create/cards/cards-light.png'}
            alt={'cartes'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={'h-auto w-16'}
          />
          <h1 className={'text-5xl'}>Nouvelle Carte</h1>
        </div>
        <CardFormProviders />
      </div>
    </section>
  );
}
