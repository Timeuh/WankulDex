'use client';

import {Artist} from '@utils/appTypes';
import useArtists from '@hooks/useArtists';
import DisplayArtistCard from '@components/DisplayArtistCard';

export default function DisplayArtists() {
  const {data} = useArtists();

  return (
    <div className={'grid h-full w-full grid-cols-2 place-items-center gap-6 px-4 pb-6 xl:grid-cols-4 xl:gap-12'}>
      {data!.map((artist: Artist) => {
        return <DisplayArtistCard key={artist.artist.id} artistId={artist.artist.id} />;
      })}
    </div>
  );
}
