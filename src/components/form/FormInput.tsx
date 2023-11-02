import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';
import {ChangeEvent} from 'react';
import {cva, VariantProps} from 'class-variance-authority';

type Props = {
  image: string;
  text: string;
  type: string;
  value: string | number;
  valueType: string;
  changeValue: (event: ChangeEvent<HTMLInputElement>, valueType: string) => void;
  error: string;
} & VariantProps<typeof variants>;

const variants = cva('', {
  variants: {
    size: {
      login: 'xl:w-[30vw]',
      card: 'xl:w-[25vw]',
    },
  },
  defaultVariants: {
    size: 'login',
  },
});

export default function FormInput({image, text, type, value, changeValue, valueType, error, size}: Props) {
  return (
    <div className={'flex h-fit w-full flex-col space-y-2'}>
      <div className={'flex flex-row items-center space-x-4'}>
        <Image src={image} alt={text} height={0} width={0} sizes={'100vw'} className={'h-auto w-12 xl:w-16'} />
        <h2 className={'pt-2 text-3xl xl:text-4xl'}>{text}</h2>
      </div>
      <BaseContainer interaction={'hover'} borderColor={error !== '' ? 'error' : undefined}>
        <input
          type={type}
          className={`${variants({
            size,
          })} h-10 w-[80vw] border-none bg-transparent p-2 placeholder-red-500 outline-none xl:h-14 xl:text-2xl `}
          value={value}
          onChange={(event) => {
            changeValue(event, valueType);
          }}
          placeholder={error}
        />
      </BaseContainer>
    </div>
  );
}
