'use client';

import {Artist} from '@utils/appTypes';
import useArtists from '@hooks/useArtists';
import DisplayArtistCard from '@components/DisplayArtistCard';
import LoadingArtist from '@components/LoadingArtist';

export default function DisplayArtists() {
  const {data} = useArtists();
  const loadingArtists = [1, 2, 3, 4, 5, 6];

  return (
    <div className={'grid h-full w-full grid-cols-2 place-items-center gap-6 pt-24'}>
      {data
        ? data.map((artist: Artist) => {
            return <DisplayArtistCard key={artist.artist.id} artistId={artist.artist.id} />;
          })
        : loadingArtists.map((id: number) => {
            return <LoadingArtist key={id} />;
          })}
    </div>
  );
}
