import BaseContainer from '@components/BaseContainer';
import Image from 'next/image';
import {useCardContext} from '@providers/admin/creation/card/CardContextProvider';
import {useEffect, useState} from 'react';

export default function CardTypeSwitch() {
  const {cardContext, updateCard} = useCardContext();
  const [isField, setField] = useState<boolean>(true);

  useEffect(() => {
    setField(cardContext.type_id.value === 1);
  }, [cardContext.type_id.value]);

  return (
    <div
      id={'card-type-switch'}
      className={'w-full overflow-hidden rounded-lg bg-dark'}
      onClick={() => {
        updateCard(isField ? '2' : '1', 'type_id');
      }}
    >
      <div className={`${isField ? 'translate-x-0' : 'translate-x-[10.6rem]'} transition-transform duration-300`}>
        <BaseContainer interaction={'hover'}>
          <div className={'flex h-10 w-[40vw] flex-row items-center justify-center space-x-2 '}>
            <Image
              src={`/img/admin/create/cards/${isField ? 'type-light' : 'wankul-light'}.png`}
              alt={''}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8'}
            />
            <h1 className={'text-xl'}>{isField ? 'Terrain' : 'Personnage'}</h1>
          </div>
        </BaseContainer>
      </div>
    </div>
  );
}
