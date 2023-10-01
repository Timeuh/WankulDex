import {useEffect, useState} from 'react';
import {Rarity, SelectOption} from '@/app/_utils/appTypes';
import useRarities from '@hooks/useRarities';

export default function useRaritySelect() {
  const {data} = useRarities();
  const [raritySelectOptions, setRaritySelectOptions] = useState<Array<SelectOption>>([]);

  useEffect(() => {
    const convertRarityToOptions = () => {
      const rarities: Array<SelectOption> = [];

      data?.forEach((rarity: Rarity) => {
        rarities.push({name: rarity.rarity.name, id: rarity.rarity.id});
      });

      setRaritySelectOptions(rarities);
    };

    convertRarityToOptions();
  }, [data]);

  return {raritySelectOptions};
}
