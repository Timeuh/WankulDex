import BaseContainer from '@components/BaseContainer';
import DescriptionComposition from '@components/DescriptionComposition';
import {ReactNode} from 'react';
import {
  DescriptionCompositionCharacterProps,
  DescriptionCompositionFieldProps,
  DescriptionCompositionProps,
} from '@utils/appTypes';

type Props = {
  children: ReactNode;
};

export default function CardDescription({children}: Props) {
  return (
    <div className={'pb-10'}>
      <BaseContainer>
        <div className={'h-full w-[80vw] rounded-lg xl:w-[30vw]'}>{children}</div>
      </BaseContainer>
    </div>
  );
}

CardDescription.Id = function CardDescriptionId({image, text, isForLoading}: DescriptionCompositionProps) {
  return <DescriptionComposition image={image} text={text} isForLoading={isForLoading} />;
};

CardDescription.Name = function CardDescriptionName({image, text, isForLoading}: DescriptionCompositionProps) {
  return <DescriptionComposition image={image} text={text} isForLoading={isForLoading} />;
};

CardDescription.Collection = function CardDescriptionCollection({
  image,
  text,
  isForLoading,
}: DescriptionCompositionProps) {
  return <DescriptionComposition image={image} text={text} isForLoading={isForLoading} />;
};

CardDescription.Artist = function CardDescriptionArtist({image, text, isForLoading}: DescriptionCompositionProps) {
  return <DescriptionComposition image={image} text={text} isForLoading={isForLoading} />;
};

CardDescription.CharacterFields = function CardDescriptionCharacterFields({
  effect,
  citation,
}: DescriptionCompositionCharacterProps) {
  return (
    <>
      <DescriptionComposition image={effect.image} text={effect.text} isForLoading={effect.isForLoading} />
      <DescriptionComposition image={citation.image} text={citation.text} isForLoading={citation.isForLoading} />
    </>
  );
};

CardDescription.FieldFields = function CardDescriptionFieldFields({
  winner_effect,
  looser_effect,
  special,
}: DescriptionCompositionFieldProps) {
  return (
    <>
      <DescriptionComposition image={winner_effect.image} text={winner_effect.text} />
      <DescriptionComposition image={looser_effect.image} text={looser_effect.text} />
      <DescriptionComposition image={special.image} text={special.text} />
    </>
  );
};

CardDescription.Character = function CardDescriptionCharacter({
  image,
  text,
  isForLoading,
}: DescriptionCompositionProps) {
  return <DescriptionComposition image={image} text={text} isForLoading={isForLoading} />;
};

CardDescription.Rarity = function CardDescriptionRarity({image, text, isForLoading}: DescriptionCompositionProps) {
  return <DescriptionComposition image={image} text={text} isForLoading={isForLoading} />;
};

CardDescription.Type = function CardDescriptionType({image, text, isForLoading}: DescriptionCompositionProps) {
  return <DescriptionComposition image={image} text={text} isForLoading={isForLoading} />;
};
