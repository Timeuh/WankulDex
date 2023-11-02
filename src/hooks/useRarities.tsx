import {useQuery} from '@tanstack/react-query';
import {API_BASE_URL} from '@utils/appGlobals';
import {Rarities, Rarity} from '@utils/appTypes';
import raritySchema from '@/zod/RaritySchema';

export const getRarities = async () => {
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
  return useQuery({
    queryKey: ['rarities'],
    queryFn: () => {
      return getRarities();
    },
  });
}
