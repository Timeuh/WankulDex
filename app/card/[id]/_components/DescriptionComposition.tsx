import DescriptionRow from '@components/DescriptionRow';
import LoadingImage from '@components/loading/LoadingImage';
import LoadingText from '@components/loading/LoadingText';
import Image from 'next/image';
import {DescriptionCompositionProps} from '@utils/appTypes';

export default function DescriptionComposition({image, text, isForLoading}: DescriptionCompositionProps) {
  if (isForLoading) {
    return <DescriptionRow image={<LoadingImage />} text={<LoadingText />} />;
  }

  return (
    <DescriptionRow
      image={<Image src={image!} alt={'ID'} width={0} height={0} sizes={'100vw'} className={'h-auto w-8 xl:w-10'} />}
      text={<h2 className={'border-grey-300'}>{text!}</h2>}
    />
  );
}
