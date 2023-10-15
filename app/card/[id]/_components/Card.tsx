'use client';

import useCard from '@hooks/useCard';
import Image from 'next/image';
import {API_DOMAIN} from '@utils/appGlobals';
import CardDescription from '@components/CardDescription';
import {CardType} from '@utils/appTypes';
import BackButton from '@components/BackButton';
import EditButton from '@components/EditButton';
import isAdminLogged from '@utils/isAdminLogged';

type Props = {
  id: string;
};

export default function Card({id}: Props) {
  const isAdmin = isAdminLogged();
  const {data} = useCard(id);

  return (
    <div className={'flex h-full w-full flex-col items-center space-y-6 xl:h-screen'}>
      <div className={'mt-20 flex w-[80vw] flex-row justify-between'}>
        <BackButton link={`/#card-${id}`} />
        {isAdmin ? <EditButton link={`/admin/edit/card/${id}`} /> : <></>}
      </div>
      <div className={'flex w-[80vw] flex-col items-center space-y-6 xl:flex-row xl:justify-around'}>
        <Image
          src={`${API_DOMAIN}/${data!.links.image}`}
          alt={data!.card.name}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`h-auto w-[80vw] rounded-lg border-2 border-dark ${
            data!.card.type.name === 'Terrain' ? 'xl:w-[35vw]' : 'xl:w-[22vw]'
          }`}
          priority
        />
        <CardDescription
          idImage={
            <Image
              src={'/img/card/hashtag-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          idText={<h2 className={'border-grey-300'}>{data?.card.id}</h2>}
          nameImage={
            <Image
              src={'/img/card/name-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          nameText={<h2 className={'border-grey-300'}>{data?.card.name}</h2>}
          collectionImage={
            <Image
              src={'/img/card/collection-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          collectionText={<h2 className={'border-grey-300'}>{data?.card.collection}</h2>}
          artistImage={
            <Image
              src={'/img/card/pen-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          artistText={<h2 className={'border-grey-300'}>{data?.card.artist.name}</h2>}
          effectImage={
            <Image
              src={'/img/card/description-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          effectText={<h2 className={'border-grey-300'}>{data?.card.description.effect}</h2>}
          citationImage={
            <Image
              src={'/img/card/citation-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          citationText={<h2 className={'border-grey-300'}>{data?.card.description.citation}</h2>}
          winnerImage={
            <Image
              src={'/img/card/first-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          winnerText={<h2 className={'border-grey-300'}>{data?.card.description.winner_effect}</h2>}
          looserImage={
            <Image
              src={'/img/card/last-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          looserText={<h2 className={'border-grey-300'}>{data?.card.description.looser_effect}</h2>}
          specialImage={
            <Image
              src={'/img/card/special-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          specialText={<h2 className={'border-grey-300'}>{data?.card.description.special}</h2>}
          characterImage={
            <Image
              src={'/img/card/wankul-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          characterText={<h2 className={'border-grey-300'}>{data?.card.description.character.name}</h2>}
          rarityImage={
            <Image
              src={'/img/card/rarity-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          rarityText={<h2 className={'border-grey-300'}>{data?.card.description.rarity.name}</h2>}
          typeImage={
            <Image
              src={'/img/card/cards-light.png'}
              alt={data!.card.name}
              width={0}
              height={0}
              sizes={'100vw'}
              className={'h-auto w-8 xl:w-10'}
            />
          }
          typeText={<h2 className={'border-grey-300'}>{data?.card.type.name}</h2>}
          cardType={data?.card.type.name as CardType}
        />
      </div>
    </div>
  );
}
