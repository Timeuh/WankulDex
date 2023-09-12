import Landing from '@components/home/Landing';
import HomeSearch from '@components/home/HomeSearch';

export default function Home() {
  return (
    <section id={'home'}>
      <Landing />
      <section id={'cards-wrapper'} className={'h-full w-full bg-gradient-to-b from-light-purple to-light-blue'}>
        <HomeSearch />
      </section>
    </section>
  );
}
