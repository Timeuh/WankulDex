import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Card, CardsContext} from '@utils/appTypes';
import useCards from '@hooks/useCards';

type Props = {
  children: ReactNode;
};

const CardContext = createContext<CardsContext | null>(null);

export default function CardProvider({children}: Props) {
  const {data, isFetching} = useCards();
  const [cards, setCards] = useState<Array<Card>>([]);

  useEffect(() => {
    if (!isFetching && data) {
      setCards(data);
    }
  }, [isFetching]);

  return <CardContext.Provider value={{cards, isFetching}}>{children}</CardContext.Provider>;
}

export function useCardsContext() {
  const cardContext = useContext(CardContext);
  if (!cardContext) {
    throw new Error('The hook useCardContext must be used within a CardProvider');
  }
  return cardContext;
}
