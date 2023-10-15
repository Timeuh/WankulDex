'use client';

import Image from 'next/image';
import {API_DOMAIN} from '@utils/appGlobals';
import {CardType} from '@utils/appTypes';
import {MouseEvent, useRef} from 'react';

type Props = {
  image: string;
  name: string;
  type: CardType;
};

export default function CardImage({image, name, type}: Props) {
  const imageContainer = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!imageContainer.current) {
      return;
    }

    const xAxis = (window.innerWidth / 2 - event.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - event.pageY) / 25;

    imageContainer.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const handleEnter = () => {
    if (!imageContainer.current) {
      return;
    }

    imageContainer.current.style.transition = 'none';
  };

  const handleLeave = () => {
    if (!imageContainer.current) {
      return;
    }

    imageContainer.current.style.transition = 'all 0.5s ease';
    imageContainer.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <div
      className={`image-container ${
        type === 'Terrain' ? 'xl:w-[50vw]' : 'xl:w-[40vw]'
      } flex flex-col items-center justify-center xl:h-[80vh]`}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      ref={imageContainer}
    >
      <Image
        src={`${API_DOMAIN}/${image}`}
        alt={name}
        width={0}
        height={0}
        sizes={'100vw'}
        className={`relative h-auto w-[80vw] rounded-lg border-2 border-dark ${
          type === 'Terrain' ? 'xl:w-[35vw]' : 'xl:w-[22vw]'
        }`}
        priority
      />
    </div>
  );
}
