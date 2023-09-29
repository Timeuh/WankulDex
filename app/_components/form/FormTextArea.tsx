import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import {ChangeEvent} from 'react';

type Props = {
  image: string;
  text: string;
  error: string;
  value: string;
  changeValue: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function FormTextArea({image, text, error, value, changeValue}: Props) {
  return (
    <div className={'flex h-fit w-full flex-col space-y-2'}>
      <div className={'flex flex-row items-center space-x-4'}>
        <Image src={image} alt={''} height={0} width={0} sizes={'100vw'} className={'h-auto w-12 xl:w-16'} />
        <h2 className={'pt-2 text-3xl xl:text-4xl'}>{text}</h2>
      </div>
      <BaseContainer interaction={'hover'} borderColor={error !== '' ? 'error' : undefined}>
        <textarea
          className={
            'h-40 w-[80vw] border-none bg-transparent p-2 text-xl placeholder-red-500 outline-none xl:h-14 xl:w-[30vw]'
          }
          value={value}
          onChange={(event) => {
            changeValue(event);
          }}
          placeholder={error}
        />
      </BaseContainer>
    </div>
  );
}
