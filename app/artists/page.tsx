import DisplayArtists from '@components/DisplayArtists';

export default function GetAllArtists() {
  return (
    <section
      id={'artists'}
      className={'flex h-full w-full flex-col items-center bg-gradient-to-b from-light-blue to-light-purple'}
    >
      <DisplayArtists />
    </section>
  );
}
