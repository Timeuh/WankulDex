import Image from 'next/image';
import {MouseEvent, useRef} from 'react';
import {CardRarity, CardType} from '@utils/appTypes';

type Props = {
  src: string;
  alt: string;
  cardType: CardType;
  cardRarity: CardRarity;
};

export default function PreviewImage({src, alt, cardType, cardRarity}: Props) {
  const imageShine = useRef<HTMLDivElement>(null);
  const image3d = useRef<HTMLDivElement>(null);
  const shineClasses = 'xl:shine-classes';

  const getGradient = () => {
    switch (cardRarity) {
      case 'Ultra Rare Holo 1':
      case 'Ultra Rare Holo 2':
        return 'shine-classic';

      case 'Légendaire Bronze':
        return 'shine-bronze';

      case 'Légendaire Argent':
        return 'shine-silver';

      case 'Légendaire Or':
        return 'shine-gold';

      default:
        return 'no-shine';
    }
  };

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!image3d.current) {
      return;
    }

    const b = image3d.current.getBoundingClientRect();
    const X = (event.clientX - b.left) / image3d.current.clientWidth;
    const Y = (event.clientY - b.top) / image3d.current.clientHeight;

    const rX = -(X - 0.5) * 26;
    const rY = (Y - 0.5) * 26;

    image3d.current.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;

    if (!imageShine.current) {
      return;
    }

    const bgX = 40 + 20 * X;
    const bgY = 40 + 20 * Y;

    imageShine.current.style.setProperty('--bg-x', `${bgX}%`);
    imageShine.current.style.setProperty('--bg-y', `${bgY}%`);
    imageShine.current.style.setProperty('--gradient', `var(--${getGradient()})`);
  };

  const handleEnter = () => {
    if (!image3d.current) {
      return;
    }

    image3d.current.style.transition = 'none';

    if (!imageShine.current) {
      return;
    }

    imageShine.current.className = shineClasses;
  };

  const handleLeave = () => {
    if (!image3d.current) {
      return;
    }

    image3d.current.style.transition = 'all 0.5s ease';
    image3d.current.style.transform = 'rotateY(0deg) rotateX(0deg)';

    if (!imageShine.current) {
      return;
    }

    imageShine.current.className = '';
  };

  return (
    <div
      className={`box-border h-auto w-[80vw] xl:relative ${
        cardType === 'Personnage' ? 'xl:h-[50vh] xl:w-[20vw]' : 'xl:h-[30vh] xl:w-[30vw]'
      }`}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className={`image-container rounded-lg xl:absolute xl:inset-0 ${cardType === 'Personnage' ? '' : 'xl:-top-24'}`}
      >
        <div className='rounded-lg xl:absolute xl:inset-0' ref={image3d}>
          <div className='rounded-lg'>
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-full rounded-lg border-2 border-dark xl:relative'}
            />
          </div>
          {cardType === 'Personnage' ? <div ref={imageShine}></div> : null}
        </div>
      </div>
    </div>
  );
}
