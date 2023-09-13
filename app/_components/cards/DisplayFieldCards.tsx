'use client';

import useCards from '@/app/_hooks/useCards';

export default function DisplayFieldCards() {
  const {data, error, isFetching} = useCards('Terrain');

  if (!isFetching) {
    console.log(data);
  }

  return (
    <section id={'field-cards-display'}>
      <h1>terrains</h1>
    </section>
  );
}
