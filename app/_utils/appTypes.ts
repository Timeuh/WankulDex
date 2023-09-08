export type Card = {
  card: {
    artist: {
      id: number;
      name: string;
    };
    collection: string;
    description: {
      character: {
        id: number;
        name: string;
      };
      citation: string;
      effect: string;
      id: number;
      looser_effect: string;
      rarity: {
        id: number;
        name: string;
      };
      special: string;
      winner_effect: string;
    };
    id: number;
    image: string;
    name: string;
    type: {
      id: number;
      name: string;
    };
  };
  links: {
    all: string;
    image: string;
    self: string;
  };
};

export type Cards = {
  cards: Array<Card>;
  length: number;
  type: string;
};

export type Artist = {
  artist: {
    id: number;
    name: string;
  };
  links: {
    self: string;
    all: string;
    cards: string;
  };
};

export type Artists = {
  artists: Array<Artist>;
  length: number;
  type: string;
};

export type Character = {
  character: {
    id: number;
    name: string;
  };
  links: {
    self: string;
    all: string;
    cards: string;
  };
};

export type Characters = {
  characters: Array<Character>;
  length: number;
  type: string;
};

export type Rarity = {
  rarity: {
    id: number;
    name: string;
  };
  links: {
    self: string;
    all: string;
    cards: string;
  };
};

export type Rarities = {
  rarities: Array<Rarity>;
  length: number;
  type: string;
};

export type Type = {
  type: {
    id: number;
    name: string;
  };
  links: {
    self: string;
    all: string;
    cards: string;
  };
};

export type Types = {
  types: Array<Type>;
  length: number;
  type: string;
};

export type LoginResponse = {
  code: number;
  token?: string;
  error?: string;
};

export type AuthMessage = {
  code: number;
  message: string;
};

export type NavbarLink = {
  image: string;
  name: string;
  link: string;
};

export type CardType = 'Terrain' | 'Personnage';

export type TextCardInputs = {
  [key: string]: string | number | undefined;
  id: number;
  name: string;
  collection: string;
  image: string;
};

export type TextCardInputsKey = 'ID' | 'Name' | 'Collection' | 'Image';

export type SelectCardInputs = {
  artist_id: number;
  character_id: number;
  rarity_id: number;
};

export type SelectCardInputsKey = 'Artist' | 'Character' | 'Rarity';

export type FieldCardInputs = {
  winner_effect: string;
  looser_effect: string;
  special: string;
};

export type FieldCardInputsKey = 'Winner' | 'Looser' | 'Special';

export type CharacterCardInputs = {
  effect: string;
  citation: string;
};

export type CharacterCardInputsKey = 'Effect' | 'Citation';

export type DescriptionResponse = {
  code: number;
  error?: string;
  data?: {
    character_id: number;
    citation: string;
    effect: string;
    id: number;
    looser_effect: string;
    rarity_id: number;
    special: string;
    winner_effect: string;
  };
};

export enum FormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  WAITING = 'WAITING',
  EMPTY = 'EMPTY',
}

export type CardResponse = {
  code: number;
  error?: string;
  data?: {
    artist_id: number;
    collection: string;
    description_id: number;
    id: number;
    image: string;
    name: string;
    type_id: number;
  };
};
