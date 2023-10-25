'use client';

import {Card, CardType} from '@utils/appTypes';
import {useEffect, useRef} from 'react';
import Link from 'next/link';
import BaseContainer from '@components/BaseContainer';
import Image from 'next/image';
import PreviewImage from '@components/cards/preview/PreviewImage';
import {API_DOMAIN} from '@utils/appGlobals';

type Props = {
  card: Card;
  hide: () => void;
};

export default function CardPreview({card, hide}: Props) {
  const detailsRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (!detailsRef.current) {
      return;
    }

    let node = event.target as Node | ParentNode | null;
    let isOutside = true;

    while (node !== null) {
      if (node === detailsRef.current) {
        isOutside = false;
        break;
      }
      node = node.parentNode;
    }

    if (isOutside) {
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
      <div className={'flex h-fit w-fit flex-col items-center space-y-6'}>
        <PreviewImage
          src={API_DOMAIN + card.links.image}
          alt={card.card.name}
          cardType={card.card.type.name as CardType}
        />
        <div className={'xl:pt-20'}>
          <BaseContainer interaction={'hover'}>
            <Link
              scroll={false}
              href={`/card/${card.card.id}`}
              className={'flex h-16 w-[80vw] flex-row items-center justify-center space-x-4 xl:w-[30vw]'}
              ref={detailsRef}
            >
              <Image
                src={'/img/card/details-light.png'}
                alt={'détails'}
                width={0}
                height={0}
                sizes={'100vw'}
                className={'h-auto w-10'}
              />
              <h1 className={'text-center text-2xl'}>Voir les détails</h1>
            </Link>
          </BaseContainer>
        </div>
      </div>
    </div>
  );
}
