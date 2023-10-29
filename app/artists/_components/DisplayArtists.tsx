'use client';

import {Artist} from '@utils/appTypes';
import useArtists from '@hooks/useArtists';

export default function DisplayArtists() {
  const {data} = useArtists();

  if (!data) {
    return <h1>chargement</h1>;
  }

  return (
    <div className={'grid h-full w-full grid-cols-2 pt-24'}>
      {data.map((artist: Artist) => {
        return <h1 key={artist.artist.id}>{artist.artist.name}</h1>;
      })}
    </div>
  );
}
