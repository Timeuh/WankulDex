import {createContext, ReactNode, useContext} from 'react';
import {CardsContext} from '@utils/appTypes';
import useCards from '@hooks/useCards';

type Props = {
  children: ReactNode;
};

const CardContext = createContext<CardsContext | null>(null);

export default function CardProvider({children}: Props) {
  const {data, isFetching} = useCards();

  return <CardContext.Provider value={{cards: data, isFetching}}>{children}</CardContext.Provider>;
}

export function useCardsContext() {
  const cardContext = useContext(CardContext);
  if (!cardContext) {
    throw new Error('The hook useCardContext must be used within a CardProvider');
  }
  return cardContext;
}
