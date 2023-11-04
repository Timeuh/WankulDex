import {Artist, Character, GenericFilter, Rarity, Type} from '@utils/appTypes';
import BaseContainer from '@components/BaseContainer';
import useArtists from '@hooks/useArtists';
import useCharacters from '@hooks/useCharacters';
import useRarities from '@hooks/useRarities';
import FilterMenuCategory from '@components/home/filter/FilterMenuCategory';
import useTypes from '@hooks/useTypes';

export default function FilterMenu() {
  const {data: types} = useTypes();
  const {data: artists} = useArtists();
  const {data: characters} = useCharacters();
  const {data: rarities} = useRarities();

  if (!types || !artists || !characters || !rarities) {
    return;
  }

  const convertedTypes: Array<GenericFilter> = types.map((type: Type) => {
    return type.type;
  });
  const convertedCharacters: Array<GenericFilter> = characters.map((character: Character) => {
    return character.character;
  });
  const convertedArtists: Array<GenericFilter> = artists.map((artist: Artist) => {
    return artist.artist;
  });
  const convertedRarities: Array<GenericFilter> = rarities.map((rarity: Rarity) => {
    return rarity.rarity;
  });

  return (
    <BaseContainer>
      <div className={'grid h-full w-[80vw] grid-cols-2'}>
        <FilterMenuCategory
          categories={convertedTypes}
          image={'/img/home/types-filter-light.png'}
          titleColor={'text-wankil-purple'}
          title={'Types'}
        />
        <FilterMenuCategory
          categories={convertedCharacters}
          image={'/img/home/wankul-filter-light.png'}
          titleColor={'text-wankil-blue'}
          title={'Personnages'}
        />
        <FilterMenuCategory
          categories={convertedArtists}
          image={'/img/home/pen-filter-light.png'}
          titleColor={'text-wankil-purple'}
          title={'Artistes'}
        />
        <FilterMenuCategory
          categories={convertedRarities}
          image={'/img/home/rarity-light.png'}
          titleColor={'text-wankil-blue'}
          title={'Raretés'}
        />
      </div>
    </BaseContainer>
  );
}
