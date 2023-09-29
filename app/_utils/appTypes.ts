import {ChangeEvent} from 'react';

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

export type CardType = 'Terrain' | 'Personnage' | 'None';

export type CardRarity =
  | 'Ultra Rare Holo 1'
  | 'Ultra Rare Holo 2'
  | 'Légendaire Bronze'
  | 'Légendaire Argent'
  | 'Légendaire Or'
  | null
  | undefined;

export type NavbarLink = {
  image: string;
  name: string;
  link: string;
};

export type LoginResult = {
  code: number;
  error?: string;
  token?: string;
};

export type DecodedToken = {
  time: Date;
  user: string;
  name: string;
  lastname: string;
  iat: number;
  exp: number;
};

export type InputField = {
  value: string | number;
  error: string;
};

export type SelectOption = {
  name: string;
  id: number;
};

export type Artist = {
  artist: {
    name: string;
    id: number;
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
    name: string;
    id: number;
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
    name: string;
    id: number;
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

export type CardDescription = {
  id: InputField;
  winner_effect: InputField;
  looser_effect: InputField;
  special: InputField;
  character_id: InputField;
  effect: InputField;
  citation: InputField;
  rarity_id: InputField;
};

export type CardDescriptionContextType = {
  cardDescription: CardDescription;
  updateDescription: (value: string, field: CardDescriptionKey, error?: string) => void;
};

export type CardDescriptionKey = keyof CardDescription;

export type CardContext = {
  id: InputField;
  name: InputField;
  collection: InputField;
  description_id: InputField;
  type_id: InputField;
  artist_id: InputField;
  image: InputField;
};

export type CardContextType = {
  cardContext: CardContext;
  updateCard: (value: string, field: CardContextKey, error?: string) => void;
};

export type CardContextKey = keyof CardContext;

export type ErrorUpdateType = 'display' | 'reset';
