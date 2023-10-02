import BackButton from '@components/BackButton';
import Image from 'next/image';

export default function CreateArtist() {
  return (
    <section id={'create-artist'} className={'h-screen w-full bg-gradient-to-b from-light-blue to-light-purple'}>
      <div className={'flex h-full w-full flex-col items-center space-y-12 pt-24'}>
        <BackButton />
        <div className={'flex flex-col items-center'}>
          <Image
            src={'/img/admin/create/artists/pen-light.png'}
            alt={'artistes'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={'h-auto w-16'}
          />
          <h1 className={'pt-1 text-5xl'}>Nouvel Artiste</h1>
        </div>
      </div>
    </section>
  );
}
