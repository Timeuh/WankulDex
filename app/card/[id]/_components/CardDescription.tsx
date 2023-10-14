import BaseContainer from '@components/BaseContainer';
import {ReactNode} from 'react';
import {CardType} from '@utils/appTypes';
import DescriptionRow from '@components/DescriptionRow';

type Props = {
  idImage: ReactNode;
  nameImage: ReactNode;
  collectionImage: ReactNode;
  artistImage: ReactNode;
  effectImage: ReactNode;
  citationImage: ReactNode;
  winnerImage: ReactNode;
  looserImage: ReactNode;
  specialImage: ReactNode;
  characterImage: ReactNode;
  rarityImage: ReactNode;
  typeImage: ReactNode;
  idText: ReactNode;
  nameText: ReactNode;
  collectionText: ReactNode;
  artistText: ReactNode;
  effectText: ReactNode;
  citationText: ReactNode;
  winnerText: ReactNode;
  looserText: ReactNode;
  specialText: ReactNode;
  characterText: ReactNode;
  rarityText: ReactNode;
  typeText: ReactNode;
  cardType?: CardType;
};

export default function CardDescription({cardType = 'Personnage', ...props}: Props) {
  return (
    <div className={'pb-10'}>
      <BaseContainer>
        <div className={'h-full w-[80vw] rounded-lg xl:w-[30vw]'}>
          <DescriptionRow image={props.idImage} text={props.idText} />
          <DescriptionRow image={props.nameImage} text={props.nameText} />
          <DescriptionRow image={props.collectionImage} text={props.collectionText} />
          <DescriptionRow image={props.artistImage} text={props.artistText} />
          {cardType === 'Terrain' ? (
            <>
              <DescriptionRow image={props.winnerImage} text={props.winnerText} />
              <DescriptionRow image={props.looserImage} text={props.looserText} />
              <DescriptionRow image={props.specialImage} text={props.specialText} />
            </>
          ) : (
            <>
              <DescriptionRow image={props.effectImage} text={props.effectText} />
              <DescriptionRow image={props.citationImage} text={props.citationText} />
            </>
          )}
          <DescriptionRow image={props.characterImage} text={props.characterText} />
          <DescriptionRow image={props.rarityImage} text={props.rarityText} />
          <DescriptionRow image={props.typeImage} text={props.typeText} />
        </div>
      </BaseContainer>
    </div>
  );
}
