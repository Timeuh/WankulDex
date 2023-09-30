import CardFirstRowForm from '@components/admin/creation/card/CardFirstRowForm';
import CardSecondRowForm from '@components/admin/creation/card/CardSecondRowForm';
import {useCardDescriptionContext} from '@providers/admin/creation/card/CardDescriptionContextProvider';
import {useCardContext} from '@providers/admin/creation/card/CardContextProvider';
import CardThirdRowForm from '@components/admin/creation/card/CardThirdRowForm';
import BaseContainer from '@components/BaseContainer';
import Image from 'next/image';
import {MouseEvent} from 'react';
import useCardDescriptionCreation from '@hooks/admin/create/cards/useCardDescriptionCreation';
import Loading from '@/app/Loading';

export default function CardForm() {
  const {cardContext, updateCard} = useCardContext();
  const {cardDescription, updateDescription} = useCardDescriptionContext();
  const {isFetching: cardDescriptionFetching, refetch: refetchCardDescription} =
    useCardDescriptionCreation(cardDescription);

  const updateErrors = () => {
    updateCard(
      `${cardContext.name.value === '' ? '' : cardContext.name.value}`,
      'name',
      `${cardContext.name.value === '' ? 'Vous devez remplir ce champ' : ''}`,
    );

    updateCard(
      `${cardContext.collection.value === '' ? '' : cardContext.collection.value}`,
      'collection',
      `${cardContext.collection.value === '' ? 'Vous devez remplir ce champ' : ''}`,
    );

    updateCard(
      `${cardContext.image.value === '' ? '' : cardContext.image.value}`,
      'image',
      `${cardContext.image.value === '' ? 'Vous devez remplir ce champ' : ''}`,
    );
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    updateErrors();

    refetchCardDescription().then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      {cardDescriptionFetching ? (
        <Loading text={'Création en cours'} />
      ) : (
        <form action='noredirect' className={'grid-cols-3 gap-6 space-y-6 pb-6 xl:grid xl:w-5/6 xl:space-y-0'}>
          <CardFirstRowForm />
          <CardSecondRowForm />
          <CardThirdRowForm />
          <div className={'col-span-3 place-self-center py-6'}>
            <BaseContainer interaction={'hover'}>
              <button
                className={'flex h-10 w-[80vw] flex-row items-center justify-center space-x-2 xl:h-14 xl:w-[30vw]'}
                onClick={handleSubmit}
              >
                <Image
                  src={'/img/admin/create/cards/add-light.png'}
                  alt={'créer une carte'}
                  width={0}
                  height={0}
                  sizes={'100vw'}
                  className={'h-auto w-8 xl:w-10'}
                />
                <h2 className={'text-xl xl:text-2xl'}>Créer</h2>
              </button>
            </BaseContainer>
          </div>
        </form>
      )}
    </>
  );
}
