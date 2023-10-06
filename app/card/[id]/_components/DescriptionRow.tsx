import {ReactNode} from 'react';
import {DescriptionRowType} from '@utils/appTypes';

type Props = {
  image: ReactNode;
  text: ReactNode;
  type?: DescriptionRowType;
};

export default function DescriptionRow({image, text, type = 'Small'}: Props) {
  return (
    <div className={`flex w-full flex-row ${type === 'Big' ? 'h-40' : 'h-10'} mb-2`}>
      <div className={'w-14 border-e-2 border-gray-200 p-2'}>{image}</div>
      <div className={'w-full p-2 text-center text-xl'}>{text}</div>
    </div>
  );
}
