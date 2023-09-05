import {Metadata} from 'next';
import Image from 'next/image';
import BackButton from '@components/BackButton';
import FormInput from '@components/form/FormInput';
import CardForm from '@components/admin/create/cards/CardForm';

export const metadata: Metadata = {
  title: 'Wankuldex - Créer un carte',
};

export default function CreateCard() {
  return (
    <main
      className={
        'flex h-full w-full flex-col items-center space-y-6 bg-gradient-to-b from-light-purple to-light-blue pb-6'
      }
    >
      <BackButton />
      <div className={'flex flex-col items-center space-y-2'}>
        <Image
          src={'/img/cards-light.png'}
          alt={'carte'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={'h-auto w-14'}
        />
        <h1 className={'text-3xl text-dark'}>Nouvelle Carte</h1>
      </div>
      <CardForm />
    </main>
  );
}
