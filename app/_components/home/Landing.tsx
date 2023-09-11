import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';

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
        className={'h-auto w-4/5 pt-24'}
        priority
      />
      <div id={'wankuldex-description'} className={'w-4/5 rounded-lg border-2 border-dark-purple py-6 text-center'}>
        <p className={'text-xl text-dark-blue'}>
          Le <span className={'font-bold text-dark-purple'}>WankulDex</span>, c&apos;est le site qui te permet
          d&apos;admirer les magnifiques cartes <span className={'font-bold text-dark-purple'}>Wankul </span>
          avec de jolis effets !
        </p>
      </div>
      <div
        id={'wankul-link'}
        className={
          'flex h-fit w-4/5 flex-col items-center rounded-lg border-2 border-dark bg-[#FFD231] text-center text-xl text-dark'
        }
      >
        <div
          className={
            'flex h-16 w-full flex-col items-center justify-center rounded-b-lg bg-dark text-2xl font-bold text-[#FFD231]'
          }
        >
          <h1>⚠️ ATTENTION !</h1>
        </div>
        <p className={'w-4/5 py-2'}>Ce site n&apos;est en aucun cas affilié aux cartes Wankul !</p>
        <h2 className={'w-4/5'}>
          Pour voir le <span className={'font-bold'}>site officiel</span> :
        </h2>
        <BaseContainer margin={'small'} interaction={'hover'}>
          <button className={'h-12 w-[50vw] bg-transparent'}>Wankul.fr</button>
        </BaseContainer>
      </div>
      <Image
        src={'/img/home/down-light.png'}
        alt={'voir la suite'}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'h-auto w-1/4 pt-6'}
      />
    </section>
  );
}
