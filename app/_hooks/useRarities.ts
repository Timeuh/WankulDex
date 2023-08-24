import {useEffect, useState} from 'react';
import {Rarities, Rarity} from '@/app/_utils/appTypes';
import {API_BASE_URL} from '@/app/_utils/appConsts';
import RaritySchema from '@/app/_zod/RaritySchema';

export default function useRarities() {
  const [rarities, setRarities] = useState<Array<Rarity>>([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/rarity`)
      .then((response) => {
        return response.json();
      })
      .then((raritiesData: Rarities) => {
        raritiesData.rarities.forEach((rarity: Rarity) => {
          const parseTest = RaritySchema.safeParse(rarity);
          if (parseTest.success) {
            setRarities((previous) => {
              return [...previous, rarity];
            });
          }
        });
      });
  }, []);

  return {rarities};
}
