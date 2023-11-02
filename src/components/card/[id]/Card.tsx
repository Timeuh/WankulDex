'use client';

import Image from 'next/image';
import {API_DOMAIN} from '@utils/appGlobals';
import BackButton from '@components/BackButton';
import useCard from '@hooks/card/[id]/useCard';
import CardDescription from '@components/card/[id]/CardDescription';

type Props = {
  id: string;
};

export default function Card({id}: Props) {
  const {data} = useCard(id);

  return (
    <div className={'flex h-full w-full flex-col items-center space-y-6 xl:h-screen'}>
      <div className={'mt-20 flex w-[80vw] flex-row justify-between'}>
        <BackButton link={`/#card-${id}`} />
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
        <CardDescription>
          <CardDescription.Id text={data!.card.id.toString()} image={'/img/card/hashtag-light.png'} />
          <CardDescription.Name text={data!.card.name} image={'/img/card/name-light.png'} />
          <CardDescription.Collection text={data!.card.collection} image={'/img/card/collection-light.png'} />
          <CardDescription.Artist text={data!.card.artist.name} image={'/img/card/pen-light.png'} />
          {data!.card.type.name === 'Terrain' ? (
            <CardDescription.FieldFields
              winner_effect={{
                text: data!.card.description.winner_effect,
                image: '/img/card/first-light.png',
              }}
              looser_effect={{
                text: data?.card.description.looser_effect,
                image: '/img/card/last-light.png',
              }}
              special={{
                text: data?.card.description.special,
                image: '/img/card/special-light.png',
              }}
            />
          ) : (
            <CardDescription.CharacterFields
              effect={{
                text: data?.card.description.effect,
                image: '/img/card/description-light.png',
              }}
              citation={{
                text: data?.card.description.citation,
                image: '/img/card/citation-light.png',
              }}
            />
          )}
          <CardDescription.Character
            text={data!.card.description.character.name}
            image={'/img/card/wankul-light.png'}
          />
          <CardDescription.Rarity text={data!.card.description.rarity.name} image={'/img/card/rarity-light.png'} />
          <CardDescription.Type text={data!.card.type.name} image={'/img/card/cards-light.png'} />
        </CardDescription>
      </div>
    </div>
  );
}
