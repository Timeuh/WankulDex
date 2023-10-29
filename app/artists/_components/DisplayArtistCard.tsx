'use client';

import useArtistCards from '@app/artists/_hooks/useArtistCards';

type Props = {
  artistId: number;
};

export default function DisplayArtistCard({artistId}: Props) {
  const {data} = useArtistCards(artistId);

  if (!data) {
    return <h1>cartes chargement</h1>;
  }

  return (
    <div>
      <h1>{data!.cards.length}</h1>
    </div>
  );
}
