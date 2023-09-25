import {useEffect, useState} from 'react';
import {Rarity, SelectOption} from '@/app/_utils/appTypes';
import useRarities from '@hooks/useRarities';

export default function useRaritySelect() {
  const {data} = useRarities();
  const [raritySelectOptions, setRaritySelectOptions] = useState<Array<SelectOption>>([]);

  useEffect(() => {
    const convertRarityToOptions = () => {
      data?.forEach((rarity: Rarity) => {
        setRaritySelectOptions((prevState) => {
          return [...prevState, {name: rarity.rarity.name, id: rarity.rarity.id}];
        });
      });
    };

    convertRarityToOptions();
  }, [data]);

  return {raritySelectOptions};
}
