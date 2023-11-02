import Image from 'next/image';
import {cva, VariantProps} from 'class-variance-authority';
import {Card, CardRarity} from '@utils/appTypes';

type Props = {
  card: Card;
  image: CardRarity;
} & VariantProps<typeof variants>;

const variants = cva('', {
  variants: {
    theme: {
      light: 'border-dark bg-light',
    },
    size: {
      field: 'w-full',
      character: 'w-full',
    },
    cardName: {
      field: 'text-xl xl:text-2xl',
      character: 'text-lg xl:text-xl',
    },
    textColor: {
      'Ultra Rare Holo 1': 'text-wankil-purple',
      'Ultra Rare Holo 2': 'text-wankil-purple',
      'Légendaire Bronze': 'text-bronze',
      'Légendaire Argent': 'text-light-silver',
      'Légendaire Or': 'text-gold',
    },
    borderColor: {
      'Ultra Rare Holo 1': 'border-wankil-purple',
      'Ultra Rare Holo 2': 'border-wankil-purple',
      'Légendaire Bronze': 'border-bronze',
      'Légendaire Argent': 'border-light-silver',
      'Légendaire Or': 'border-gold',
    },
  },
});

export default function CardInfos({
  card,
  theme = 'light',
  size = 'field',
  cardName = 'field',
  textColor,
  borderColor,
  image,
}: Props) {
  let imageSrc: string;

  switch (image) {
    case 'Ultra Rare Holo 1':
    case 'Ultra Rare Holo 2':
      imageSrc = '/img/cards/ur-light.png';
      break;

    case 'Légendaire Bronze':
      imageSrc = '/img/cards/bronze-light.png';
      break;

    case 'Légendaire Argent':
      imageSrc = '/img/cards/silver-light.png';
      break;

    case 'Légendaire Or':
      imageSrc = '/img/cards/gold-light.png';
      break;

    default:
      imageSrc = '/img/cards/cards-light.png';
      break;
  }

  return (
    <div
      className={`${variants({
        theme,
        size,
      })} flex flex-row items-center justify-between rounded-b-lg border-2 border-t-0 p-1`}
    >
      <div className={'flex flex-row items-center space-x-2'}>
        <Image src={imageSrc} alt={'cartes'} width={0} height={0} sizes={'100vw'} className={'h-auto w-10 xl:w-12'} />
        <h2 className={`${variants({cardName, textColor})} font-bold`}>{card.card.name.toUpperCase()}</h2>
      </div>
      <span
        className={`border-dark ${variants({
          borderColor,
          textColor,
        })} h-10 w-10 rounded-full border-2 pt-1 text-center text-lg font-bold xl:h-12 xl:w-12 xl:pt-[10px] xl:text-xl`}
      >
        {card.card.id}
      </span>
    </div>
  );
}
