import {ReactNode, useContext, createContext, useState, ChangeEvent} from 'react';
import {CardDescription, CardDescriptionContextType, CardDescriptionKey} from '@/app/_utils/appTypes';

type Props = {
  children: ReactNode;
};

export const CardDescriptionContext = createContext<CardDescriptionContextType | null>(null);

export default function CardDescriptionContextProvider({children}: Props) {
  const [cardDescription, setCardDescription] = useState<CardDescription>({
    id: {
      value: 1,
      error: '',
    },
    winner_effect: {
      value: '',
      error: '',
    },
    looser_effect: {
      value: '',
      error: '',
    },
    special: {
      value: '',
      error: '',
    },
    character_id: {
      value: 1,
      error: '',
    },
    effect: {
      value: '',
      error: '',
    },
    citation: {
      value: '',
      error: '',
    },
    rarity_id: {
      value: 1,
      error: '',
    },
  });

  const updateDescription = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
    field: CardDescriptionKey,
    error: string = '',
  ) => {
    if (error !== '') {
      setCardDescription((prevState) => {
        return {...prevState, [field]: {...prevState[field], error: error}};
      });
      return;
    }

    setCardDescription((prevState) => {
      if (field === 'id' || field === 'rarity_id' || field === 'character_id') {
        return {...prevState, [field]: {...prevState[field], value: parseInt(event.target.value)}};
      }

      return {...prevState, [field]: {...prevState[field], value: event.target.value}};
    });
  };

  return (
    <CardDescriptionContext.Provider value={{cardDescription, updateDescription}}>
      {children}
    </CardDescriptionContext.Provider>
  );
}

export function useCardDescriptionContext() {
  const context = useContext(CardDescriptionContext);
  if (!context) {
    throw new Error('useCardDescriptionContext must be used inside a CardDescriptionContextProvider');
  }
  return context;
}