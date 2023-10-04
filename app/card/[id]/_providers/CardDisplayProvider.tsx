import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Card, CardDisplayContext} from '@utils/appTypes';
import useCard from '@hooks/useCard';

type Props = {
  children: ReactNode;
  id: string;
};

const CardContext = createContext<CardDisplayContext | null>(null);

export default function CardDisplayProvider({children, id}: Props) {
  const [card, setCard] = useState<Card>({
    card: {
      id: 0,
      name: '',
      collection: '',
      image: '',
      artist: {
        id: 0,
        name: '',
      },
      description: {
        id: 0,
        winner_effect: '',
        looser_effect: '',
        special: '',
        effect: '',
        citation: '',
        character: {
          id: 0,
          name: '',
        },
        rarity: {
          id: 0,
          name: '',
        },
      },
      type: {
        id: 0,
        name: '',
      },
    },
    links: {
      all: '',
      self: '',
      image: '',
    },
  });
  const {data, isFetching} = useCard(id);

  useEffect(() => {
    if (data) {
      setCard(data);
    }
  }, [data]);

  return <CardContext.Provider value={{card, isFetching}}>{children}</CardContext.Provider>;
}

export function useCardDisplayContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardDisplayContext must be used within a CardDisplayProvider');
  }
  return context;
}
