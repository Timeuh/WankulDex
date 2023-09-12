import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import Link from 'next/link';

export default function Landing() {
  return (
    <section
      id={'Landing'}
      className={
        'flex h-screen w-full flex-col items-center space-y-6 bg-gradient-to-b from-light-blue to-light-purple'
      }
    >
      <Image
        src={'/img/home/wankul-logo-light.png'}
        alt={'logo wankul'}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'h-auto w-4/5 pt-24 xl:w-1/4 xl:pt-20'}
        priority
      />
      <div
        id={'wankuldex-description'}
        className={'w-4/5 rounded-lg border-2 border-dark-purple py-6 text-center xl:w-1/3'}
      >
        <p className={'p-2 text-xl text-dark-blue xl:text-2xl'}>
          Le <span className={'font-bold text-dark-purple'}>WankulDex</span>, c&apos;est le site qui te permet
          d&apos;admirer les magnifiques cartes <span className={'font-bold text-dark-purple'}>Wankul </span>
          avec de jolis effets !
        </p>
      </div>
      <div
        id={'wankul-link'}
        className={
          'flex h-fit w-4/5 flex-col items-center rounded-lg border-2 border-dark bg-[#FFD231] text-center text-xl text-dark xl:w-1/3 xl:text-2xl'
        }
      >
        <div
          className={
            'flex h-16 w-full flex-col items-center justify-center rounded-b-lg bg-dark text-2xl font-bold text-[#FFD231] xl:text-3xl'
          }
        >
          <h1>⚠️ ATTENTION !</h1>
        </div>
        <p className={'w-4/5 py-2'}>Ce site n&apos;est en aucun cas affilié aux cartes Wankul !</p>
        <h2 className={'w-4/5'}>
          Pour voir le <span className={'font-bold'}>site officiel</span> :
        </h2>
        <BaseContainer margin={'small'} interaction={'hover'}>
          <Link href={'https://wankul.fr/'} className={'h-12 w-[50vw] bg-transparent pt-3 xl:w-[20vw] xl:pt-2'}>
            Wankul.fr
          </Link>
        </BaseContainer>
      </div>
      <Image
        src={'/img/home/down-light.png'}
        alt={'voir la suite'}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'h-auto w-1/4 pt-6 xl:w-44 xl:pt-0'}
      />
    </section>
  );
}
