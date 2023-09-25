import {useQuery} from 'react-query';
import {API_BASE_URL, QUERY_STALE_TIME} from '@/app/_utils/appGlobals';
import {Rarities, Rarity} from '@/app/_utils/appTypes';
import raritySchema from '@/app/_zod/RaritySchema';

const getRarities = async () => {
  return await fetch(`${API_BASE_URL}/rarity`)
    .then((response) => {
      return response.json();
    })
    .then((rarities: Rarities) => {
      const allRarities: Array<Rarity> = [];

      rarities.rarities.forEach((rarity: Rarity) => {
        if (raritySchema.safeParse(rarity).success) {
          allRarities.push(rarity);
        }
      });

      return allRarities;
    });
};

export default function useRarities() {
  return useQuery(['rarities'], () => {
    return getRarities();
  });
}
