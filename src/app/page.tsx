import Landing from '@components/home/Landing';
import HomeSearch from '@components/home/HomeSearch';
import FieldCards from '@components/home/FieldCards';
import CharacterCards from '@components/home/CharacterCards';

export default function Home() {
  return (
    <section id={'home'}>
      <Landing />
      <section
        id={'cards-wrapper'}
        className={
          'flex h-full w-full flex-col items-center space-y-6 bg-gradient-to-b from-light-purple to-light-blue'
        }
      >
        <HomeSearch />
        <FieldCards />
        <CharacterCards />
      </section>
    </section>
  );
}
