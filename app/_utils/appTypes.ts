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
