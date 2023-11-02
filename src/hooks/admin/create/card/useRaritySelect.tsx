import {useEffect, useState} from 'react';
import useRarities from '@hooks/useRarities';
import {Rarity, SelectOption} from '@utils/appTypes';

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
