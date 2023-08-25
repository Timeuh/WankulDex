import Image from 'next/image';
import {Card} from '@/app/_utils/appTypes';
import {API_DOMAIN} from '@/app/_utils/appConsts';

type Props = {
  card: Card;
  handleActivation?: () => void;
  shouldPoint: boolean;
};

export default function CharacterCard({card, handleActivation, shouldPoint}: Props) {
  return (
    <div
      id={`field_${card.card.id}`}
      className={`${
        shouldPoint ? 'cursor-pointer' : ''
      } my-6 flex h-[65vh] w-[82vw] flex-col items-center xl:h-[60vh] xl:w-[20vw]`}
      onClick={handleActivation}
    >
      <div className={'relative h-[65vh] w-[82vw] rounded-t-lg border-2 border-b-0 border-dark xl:w-[20vw]'}>
        <Image src={`${API_DOMAIN}${card.links.image}`} alt={card.card.name} className={'rounded-t-lg'} fill={true} />
      </div>
      <div
        className={
          'flex w-[82vw] flex-row items-center justify-between rounded-b-lg border-2 border-dark bg-light px-2 xl:w-[20vw]'
        }
      >
        <div className={'flex h-12 flex-row items-center justify-start space-x-2'}>
          <div className={'relative h-10 w-10'}>
            <Image src={'/img/cards-light.png'} alt={'cards-logo'} fill={true} />
          </div>
          <h1 className={'font-bold xl:text-xl'}>{card.card.name.toUpperCase()}</h1>
        </div>
        <h2 className={'h-10 w-10 rounded-full border-2 border-dark pt-2 text-center font-bold'}>{card.card.id}</h2>
      </div>
    </div>
  );
}
