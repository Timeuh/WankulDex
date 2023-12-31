import BaseContainer from '@components/BaseContainer';
import Image from 'next/image';
import {MouseEvent, useState} from 'react';
import Loading from '@components/Loading';
import {useRouter} from 'next/navigation';
import {CardCreationResponse, CardDescriptionCreationResponse} from '@utils/appTypes';
import {useCardContext} from '@providers/admin/create/card/CardContextProvider';
import {useCardDescriptionContext} from '@providers/admin/create/card/CardDescriptionContextProvider';
import useCardDescriptionCreation from '@hooks/admin/create/card/useCardDescriptionCreation';
import useCardCreation from '@hooks/admin/create/card/useCardCreation';
import CardFirstRowForm from '@components/admin/create/card/CardFirstRowForm';
import CardSecondRowForm from '@components/admin/create/card/CardSecondRowForm';
import CardThirdRowForm from '@components/admin/create/card/CardThirdRowForm';

export default function CardForm() {
  const [displayError, setDisplayError] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const router = useRouter();

  const {cardContext, updateCard} = useCardContext();
  const {cardDescription} = useCardDescriptionContext();
  const {refetch: refetchCardDescription} = useCardDescriptionCreation(cardDescription);
  const {refetch: refetchCardCreation} = useCardCreation(cardContext);

  const updateErrors = () => {
    let isError = false;

    setDisplayError(false);
    updateCard(cardContext.name.value as string, 'name', '');
    updateCard(cardContext.collection.value as string, 'collection', '');
    updateCard(cardContext.image.value as string, 'image', '');

    if (cardContext.name.value === '') {
      updateCard('', 'name', 'Vous devez remplir ce champ');
      isError = true;
    }

    if (cardContext.collection.value === '') {
      updateCard('', 'collection', 'Vous devez remplir ce champ');
      isError = true;
    }

    if (cardContext.image.value === '') {
      updateCard('', 'image', 'Vous devez remplir ce champ');
      isError = true;
    }

    return isError;
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFetching(true);

    if (updateErrors()) {
      setIsFetching(false);
      return;
    }

    refetchCardDescription().then((response) => {
      const responseData = response.data as CardDescriptionCreationResponse;

      if (responseData.error) {
        setDisplayError(true);
        setIsFetching(false);
        return;
      }

      refetchCardCreation().then((response) => {
        const cardResponseData = response.data as CardCreationResponse;

        if (cardResponseData.error) {
          setDisplayError(true);
          setIsFetching(false);
          return;
        }

        router.push(`/card/${cardResponseData.data?.id}`);
      });
    });
  };

  return (
    <>
      {isFetching ? (
        <>
          <div className={'h-[63vh] xl:h-[65vh]'}></div>
          <Loading text={'Création en cours'} />
        </>
      ) : (
        <>
          <h1 className={`text-center text-2xl text-red-500 xl:text-4xl ${displayError ? 'block' : 'hidden'}`}>
            Erreur lors de la création de la carte, veuillez réessayer
          </h1>
          <form
            action='noredirect'
            className={'items flex grid-cols-3 flex-col gap-6 space-y-6 pb-6 xl:grid xl:w-5/6 xl:space-y-0'}
          >
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
        </>
      )}
    </>
  );
}
