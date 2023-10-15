import Image from 'next/image';
import CardInfos from '@components/cards/CardInfos';
import {Card, CardRarity} from '@utils/appTypes';
import {API_DOMAIN} from '@utils/appGlobals';

type Props = {
  card: Card;
};

export default function CharacterCardPreview({card}: Props) {
  return (
    <div id={`card-${card.card.id}-preview`} className={'flex flex-col items-center'}>
      <Image
        src={API_DOMAIN + card.links.image}
        alt={card.card.name}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'h-auto w-5/6 rounded-t-lg border-2 border-dark xl:w-[20vw]'}
      />
      <CardInfos
        card={card}
        size={'characterPreview'}
        cardName={'character'}
        textColor={card.card.description.rarity.name as CardRarity}
        borderColor={card.card.description.rarity.name as CardRarity}
        image={card.card.description.rarity.name as CardRarity}
      />
    </div>
  );
}
