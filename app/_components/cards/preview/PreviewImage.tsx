import Image from 'next/image';
import {MouseEvent, useRef} from 'react';
import {CardType} from '@utils/appTypes';

type Props = {
  src: string;
  alt: string;
  cardType: CardType;
};

export default function PreviewImage({src, alt, cardType}: Props) {
  const imageContainer = useRef<HTMLImageElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!imageContainer.current) {
      return;
    }

    const xAxis = (window.innerWidth / 2 - event.clientX) / 10;
    const yAxis = (window.innerHeight / 2 - event.clientY) / 10;

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
      className={'flex flex-row items-center justify-center px-10 py-4'}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes={'100vw'}
        className={`image-container h-auto w-full rounded-lg border-2 border-dark ${
          cardType === 'Personnage' ? 'xl:w-[25vw]' : 'xl:w-[40vw]'
        }`}
        ref={imageContainer}
      />
    </div>
  );
}
