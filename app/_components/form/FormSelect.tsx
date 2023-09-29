import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import {SelectOption} from '@/app/_utils/appTypes';
import {ChangeEvent} from 'react';

type Props = {
  image: string;
  text: string;
  options: Array<SelectOption>;
  value: number;
  changeValue: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export default function FormSelect({image, text, options, value, changeValue}: Props) {
  return (
    <div className={'flex h-fit w-full flex-col space-y-2'}>
      <div className={'flex flex-row items-center space-x-4'}>
        <Image src={image} alt={text} height={0} width={0} sizes={'100vw'} className={'h-auto w-12 xl:w-16'} />
        <h2 className={'pt-2 text-3xl xl:text-4xl'}>{text}</h2>
      </div>
      <BaseContainer interaction={'hover'}>
        <select
          className={
            'h-10 w-[80vw] border-none bg-transparent p-2 text-xl placeholder-red-500 outline-none xl:h-14 xl:w-[30vw]'
          }
          value={value}
          onChange={(event) => {
            changeValue(event);
          }}
        >
          {options.map((option: SelectOption) => {
            return (
              <option key={option.id} value={option.id} className={'text-xl'}>
                {option.name}
              </option>
            );
          })}
        </select>
      </BaseContainer>
    </div>
  );
}
