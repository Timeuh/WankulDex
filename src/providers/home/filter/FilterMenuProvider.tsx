import {createContext, ReactNode, useContext} from 'react';
import useTypes from '@hooks/useTypes';
import useArtists from '@hooks/useArtists';
import useCharacters from '@hooks/useCharacters';
import useRarities from '@hooks/useRarities';
import {Artist, Character, FilterMenuContext, GenericFilter, Rarity, Type} from '@utils/appTypes';

interface Props {
  children: ReactNode;
}

const FilterMenuContext = createContext<FilterMenuContext | null>(null);

export default function FilterMenuProvider({children}: Props) {
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
    <FilterMenuContext.Provider value={{convertedTypes, convertedCharacters, convertedArtists, convertedRarities}}>
      {children}
    </FilterMenuContext.Provider>
  );
}

export function useFilterMenuContext() {
  const filterMenuContext = useContext(FilterMenuContext);
  if (!filterMenuContext) {
    throw new Error('The hook useFilterMenuContext must be used within a FilterMenuProvider');
  }
  return filterMenuContext;
}
