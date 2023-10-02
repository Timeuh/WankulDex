import BaseContainer from '@components/BaseContainer';
import Image from 'next/image';
import {useCardContext} from '@/app/admin/create/card/_providers/CardContextProvider';
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
      className={'w-full overflow-hidden rounded-xl bg-dark xl:w-[97%]'}
      onClick={() => {
        updateCard(isField ? '2' : '1', 'type_id');
      }}
    >
      <div
        className={`${
          isField ? 'translate-x-0' : 'translate-x-[10.6rem] xl:translate-x-[16.5rem]'
        } transition-transform duration-300`}
      >
        <BaseContainer interaction={'hover'}>
          <div
            className={
              'flex h-10 w-[40vw] cursor-pointer flex-row items-center justify-center space-x-2 xl:h-14 xl:w-[12vw]'
            }
          >
            <Image
              src={`/img/admin/create/cards/${isField ? 'type-light' : 'wankul-light'}.png`}
              alt={`${isField ? 'Terrain' : 'Personage'}`}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
            <h1 className={'text-xl xl:text-2xl'}>{isField ? 'Terrain' : 'Personnage'}</h1>
          </div>
        </BaseContainer>
      </div>
    </div>
  );
}
