'use client';

import FormInput from '@components/form/FormInput';
import {MouseEvent, useState} from 'react';
import {ArtistCreationResponse, ArtistForm} from '@utils/appTypes';
import BaseContainer from '@components/BaseContainer';
import Image from 'next/image';
import useArtistCreation from '@hooks/useArtistCreation';
import Loading from '@components/Loading';
import {useRouter} from 'next/navigation';

export default function ArtistForm() {
  const [artistData, setArtistData] = useState<ArtistForm>({
    id: {
      value: 1,
      error: '',
    },
    name: {
      value: '',
      error: '',
    },
  });
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const {refetch} = useArtistCreation(artistData);
  const router = useRouter();

  const updateArtist = (value: string, type: keyof ArtistForm, error: string = '') => {
    setArtistData((prevState) => {
      if (type === 'id') {
        const newValue = parseInt(value);
        if (isNaN(newValue) || newValue <= 0) {
          return prevState;
        }

        return {...prevState, [type]: {...prevState[type], value: newValue, error: error}};
      }

      return {...prevState, [type]: {...prevState[type], value: value, error: error}};
    });
  };

  const updateErrors = () => {
    let isError = false;

    updateArtist(artistData.id.value as string, 'id', '');
    updateArtist(artistData.name.value as string, 'name', '');

    if (artistData.name.value === '') {
      updateArtist('', 'name', 'Vous devez remplir ce champ');
      isError = true;
    }

    return isError;
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    const submitError = updateErrors();

    if (submitError) {
      setLoading(false);
      return;
    }

    refetch().then((response) => {
      const responseData = response.data as ArtistCreationResponse;

      if (responseData.error) {
        setError(true);
        setLoading(false);
        return;
      }

      router.push(`/artist/${responseData.data?.id}`);
    });
  };

  return (
    <>
      {isLoading ? (
        <>
          <Loading text={'Création en cours'} />
        </>
      ) : (
        <>
          <h1 className={`text-center text-2xl text-red-500 ${isError ? 'block' : 'hidden'}`}>
            Erreur pendant la création de l&apos;artiste, veuillez réessayer
          </h1>
          <form action='noredirect' className={'space-y-6'}>
            <FormInput
              value={artistData.id.value}
              changeValue={(event) => {
                updateArtist(event.target.value, 'id');
              }}
              error={artistData.id.error}
              valueType={'number'}
              type={'number'}
              image={'/img/admin/create/artists/hashtag-light.png'}
              text={'ID'}
            />
            <FormInput
              value={artistData.name.value}
              changeValue={(event) => {
                updateArtist(event.target.value, 'name');
              }}
              error={artistData.name.error}
              valueType={'string'}
              type={'text'}
              image={'/img/admin/create/artists/name-light.png'}
              text={'Nom'}
            />
            <div className={'absolute bottom-20'}>
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
