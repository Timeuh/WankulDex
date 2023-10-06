import {ReactNode} from 'react';

type Props = {
  image: ReactNode;
  text: ReactNode;
};

export default function DescriptionRow({image, text}: Props) {
  return (
    <div className={'flex w-full flex-row'}>
      <div className={'w-10 border-e-2 border-gray-200'}>{image}</div>
      <div className={'w-full text-center text-xl'}>{text}</div>
    </div>
  );
}
