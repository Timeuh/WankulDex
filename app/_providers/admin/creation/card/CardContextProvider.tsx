import {ChangeEvent, createContext, ReactNode, useContext, useState} from 'react';
import {CardContext, CardContextKey, CardContextType} from '@/app/_utils/appTypes';

type Props = {
  children: ReactNode;
};

const CardContext = createContext<CardContextType | null>(null);

export default function CardContextProvider({children}: Props) {
  const [cardContext, setCardContext] = useState<CardContext>({
    id: {
      value: 1,
      error: '',
    },
    name: {
      value: '',
      error: '',
    },
    collection: {
      value: '',
      error: '',
    },
    description_id: {
      value: 1,
      error: '',
    },
    type_id: {
      value: 1,
      error: '',
    },
    artist_id: {
      value: 1,
      error: '',
    },
    image: {
      value: '',
      error: '',
    },
  });

  const updateCard = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
    field: CardContextKey,
    error: string = '',
  ) => {
    if (error !== '') {
      setCardContext((prevState) => {
        return {...prevState, [field]: {...prevState[field], error: error}};
      });
      return;
    }

    setCardContext((prevState) => {
      if (field === 'id' || field === 'description_id' || field === 'type_id' || field === 'artist_id') {
        return {...prevState, [field]: {...prevState[field], value: parseInt(event.target.value)}};
      }

      return {...prevState, [field]: {...prevState[field], value: event.target.value}};
    });
  };

  return <CardContext.Provider value={{cardContext, updateCard}}>{children}</CardContext.Provider>;
}

export function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardContextProvider');
  }
  return context;
}
