import {ReactNode} from 'react';

type Props = {
  image: ReactNode;
  text: ReactNode;
};

export default function DescriptionRow({image, text}: Props) {
  return (
    <div className={'flex h-fit w-full flex-row'}>
      <div className={'w-14 border-e-2 border-gray-200 p-2'}>{image}</div>
      <div className={'border-grey-300 w-full border-b-2 p-2 text-center text-xl'}>{text}</div>
    </div>
  );
}
