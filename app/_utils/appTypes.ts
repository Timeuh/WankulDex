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
  | 'default'
  | null
  | undefined;

export type NavbarLink = {
  image: string;
  name: string;
  link: string;
};
