'use client';

import {Card} from '@utils/appTypes';
import {useEffect, useRef} from 'react';

type Props = {
  card: Card;
  hide: () => void;
};

export default function CardPreview({card, hide}: Props) {
  const cardRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (!cardRef.current) {
      return;
    }

    if (cardRef.current !== event.target) {
      hide();
    }
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      hide();
    }
  };

  return (
    <div className={'fixed top-10 z-20 flex h-full w-full flex-col items-center justify-center'}>
      <h1 className={'h-[50vh] w-[80vw] bg-dark text-light'} ref={cardRef}>
        {card.card.id}
      </h1>
    </div>
  );
}
