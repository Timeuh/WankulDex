'use client';

import useArtistCards from '@app/artists/_hooks/useArtistCards';
import LoadingArtist from '@components/LoadingArtist';

type Props = {
  artistId: number;
};

export default function DisplayArtistCard({artistId}: Props) {
  const {data} = useArtistCards(artistId);

  if (!data) {
    return <LoadingArtist />;
  }

  return (
    <div>
      <h1>{data.cards.length}</h1>
    </div>
  );
}
