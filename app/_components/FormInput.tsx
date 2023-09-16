import Image from 'next/image';
import BaseContainer from '@components/BaseContainer';

type Props = {
  image: string;
  text: string;
  type: string;
};

export default function FormInput({image, text, type}: Props) {
  return (
    <div className={'flex h-fit w-full flex-col space-y-2'}>
      <div className={'flex flex-row items-center space-x-4'}>
        <Image src={image} alt={''} height={0} width={0} sizes={'100vw'} className={'h-auto w-12'} />
        <h2 className={'pt-2 text-3xl'}>{text}</h2>
      </div>
      <BaseContainer interaction={'hover'}>
        <input type={type} className={'h-10 w-[80vw] border-none bg-transparent p-2 outline-none'} />
      </BaseContainer>
    </div>
  );
}
