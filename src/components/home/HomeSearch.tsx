import SearchBar from '@components/home/SearchBar';

export default function HomeSearch() {
  return (
    <section id={'home-search'} className={'flex h-full w-full flex-row items-center justify-center space-x-6'}>
      <SearchBar />
    </section>
  );
}
