import Image from 'next/image';
import {Card} from '@/app/_utils/appTypes';
import {cva, VariantProps} from 'class-variance-authority';

type Props = {
  card: Card;
} & VariantProps<typeof variants>;

const variants = cva('', {
  variants: {
    theme: {
      light: 'border-dark bg-light',
    },
    size: {
      field: 'w-5/6',
      character: 'w-3/4',
    },
    cardName: {
      field: 'text-xl xl:text-2xl',
      character: 'text-lg xl:text-xl',
    },
  },
  defaultVariants: {
    theme: 'light',
    size: 'field',
    cardName: 'field',
  },
});

export default function CardInfos({card, theme, size, cardName}: Props) {
  return (
    <div
      className={`${variants({
        theme,
        size,
      })} flex flex-row items-center justify-between rounded-b-lg border-2 border-t-0 p-1`}
    >
      <div className={'flex flex-row items-center space-x-2'}>
        <Image
          src={'/img/cards-light.png'}
          alt={'cartes'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={'h-auto w-10 xl:w-12'}
        />
        <h2 className={`${variants({cardName})} font-bold`}>{card.card.name.toUpperCase()}</h2>
      </div>
      <span
        className={
          'h-10 w-10 rounded-full border-2 border-dark pt-1 text-center text-lg font-bold xl:h-12 xl:w-12 xl:pt-[10px] xl:text-xl'
        }
      >
        {card.card.id}
      </span>
    </div>
  );
}
