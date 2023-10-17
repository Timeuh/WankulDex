'use client';

import {Card} from '@utils/appTypes';
import {useEffect, useRef} from 'react';
import Link from 'next/link';

type Props = {
  card: Card;
  hide: () => void;
};

export default function CardPreview({card, hide}: Props) {
  const cardRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
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
    <div
      className={
        'fixed left-0 top-0 z-20 !mt-0 flex h-full w-full flex-col items-center justify-center backdrop-blur-sm'
      }
    >
      <div className={'h-[50vh] w-[80vw] bg-dark text-light'} ref={cardRef}>
        {card.card.id}
        <Link scroll={false} href={`/card/${card.card.id}`} className={'h-10 w-40'}>
          <h1>voir les détails</h1>
        </Link>
      </div>
    </div>
  );
}
