'use client';

import Image from 'next/image';
import LightContainer from '@components/LightContainer';
import Link from 'next/link';
import Filter from '@components/home/Filter';
import SearchBar from '@components/home/SearchBar';
import useCards from '@/app/_hooks/useCards';

export default function Home() {
  const {cards, setCards} = useCards();

  return (
    <main>
      <section
        id={'landing'}
        className={
          'flex h-screen w-full flex-col items-center space-y-4 overflow-hidden bg-gradient-to-b from-light-purple to-light-blue xl:space-y-8'
        }
      >
        <Image
          src='/img/home/wankul-logo-light.png'
          alt='wankul logo'
          className={'h-auto w-3/4 pt-20 xl:w-1/4'}
          width={300}
          height={0}
          priority={true}
        />
        <div
          id={'wankul-infos'}
          className={
            'flex h-1/5 w-[75%] flex-col items-center justify-center rounded-md border-2 border-dark-purple text-center xl:w-1/3'
          }
        >
          <p className={'p-2 text-xl text-dark-blue xl:text-2xl xl:leading-normal'}>
            Le <span className={'font-bold text-dark-purple'}>WankulDex</span>, c&apos;est le site qui te permet
            d&apos;admirer les magnifiques cartes&nbsp;
            <span className={'font-bold text-dark-purple'}>Wankul</span> avec de jolis effets !
          </p>
        </div>
        <div
          id={'wankul-warning'}
          className={`relative flex h-1/4 w-[75%] flex-col items-center space-y-2 rounded-md border-2 border-dark 
          bg-yellow-400 p-4 pt-12 text-center text-xl text-dark xl:w-1/3 xl:space-y-4 xl:text-2xl`}
        >
          <h2 className={'absolute top-0 w-full bg-dark py-2 font-bold text-yellow-400'}>⚠️ ATTENTION !</h2>
          <p>Ce site n&apos;est en aucun cas affilié aux cartes Wankul !</p>
          <p>Pour consulter le site officiel :</p>
          <LightContainer width={'w-1/2'} height={'h-12'} hover={true}>
            <Link href={'https://wankul.fr/'} className={'h-full w-full py-1'}>
              Wankul.fr
            </Link>
          </LightContainer>
        </div>
        <Image src={'/img/home/down-light.png'} alt={'go down'} width={125} height={400} className={'pt-8 xl:pt-0'} />
      </section>
      <section
        id={'cards-display'}
        className={
          'flex h-screen w-full flex-col items-center space-y-8 overflow-hidden bg-gradient-to-b from-light-blue to-light-purple'
        }
      >
        <div className={'flex w-5/6 flex-row items-center justify-between xl:w-1/2'}>
          <Filter />
          <SearchBar />
        </div>
        <section id={'field cards'} className={'flex w-[83%] flex-col items-center xl:w-full'}>
          <LightContainer height={'h-12'} width={'w-full xl:w-1/3'} hover={false}>
            <div className={'flex h-full w-full flex-row items-center justify-center space-x-2'}>
              <Image src={'/img/home/type-dark.png'} alt={'terrain'} width={28} height={28} />
              <h1 className={'text-3xl text-dark'}>Terrains</h1>
            </div>
          </LightContainer>
        </section>
        <section id={'character cards'} className={'flex w-[83%] flex-col items-center xl:w-full'}>
          <LightContainer height={'h-12'} width={'w-full xl:w-1/3'} hover={false}>
            <div className={'flex h-full w-full flex-row items-center justify-center space-x-2'}>
              <Image src={'/img/home/wankul-dark.png'} alt={'terrain'} width={28} height={28} />
              <h1 className={'text-3xl text-dark'}>Personnages</h1>
            </div>
          </LightContainer>
        </section>
      </section>
    </main>
  );
}
