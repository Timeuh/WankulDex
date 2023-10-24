import Image from 'next/image';
import {MouseEvent, useRef} from 'react';
import {CardType} from '@utils/appTypes';

type Props = {
  src: string;
  alt: string;
  cardType: CardType;
};

export default function PreviewImage({src, alt, cardType}: Props) {
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
      className={`image-container w-[80vw] rounded-lg border-2 border-dark ${
        cardType === 'Personnage' ? 'xl:w-[25vw]' : 'xl:w-[40vw]'
      }`}
      ref={imageContainer}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Image src={src} alt={alt} width={0} height={0} sizes={'100vw'} className={'h-auto w-full'} />
    </div>
  );
}
