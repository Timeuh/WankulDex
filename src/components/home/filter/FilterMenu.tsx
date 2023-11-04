import {FilterTitle} from '@utils/appTypes';
import BaseContainer from '@components/BaseContainer';
import FilterMenuCategory from '@components/home/filter/FilterMenuCategory';
import {useFilterMenuContext} from '@providers/home/filter/FilterMenuProvider';

export default function FilterMenu() {
  const {convertedTypes, convertedCharacters, convertedArtists, convertedRarities} = useFilterMenuContext();

  return (
    <BaseContainer>
      <div className={'grid h-full w-[83vw] grid-cols-2 xl:w-[34vw]'}>
        <FilterMenuCategory
          categories={convertedTypes}
          image={'/img/home/types-filter-light.png'}
          titleColor={'text-wankil-purple'}
          title={FilterTitle.TYPES}
        />
        <FilterMenuCategory
          categories={convertedCharacters}
          image={'/img/home/wankul-filter-light.png'}
          titleColor={'text-wankil-blue'}
          title={FilterTitle.CHARACTERS}
        />
        <FilterMenuCategory
          categories={convertedArtists}
          image={'/img/home/pen-filter-light.png'}
          titleColor={'text-wankil-purple'}
          title={FilterTitle.ARTISTS}
        />
        <FilterMenuCategory
          categories={convertedRarities}
          image={'/img/home/rarity-light.png'}
          titleColor={'text-wankil-blue'}
          title={FilterTitle.RARITIES}
        />
      </div>
    </BaseContainer>
  );
}
