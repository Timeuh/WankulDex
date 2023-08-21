import LightContainer from '@components/LightContainer';
import Image from 'next/image';

export default function SearchBar() {
  return (
    <LightContainer height={'h-14'} width={'w-3/4'} hover={true}>
      <div className={'flex h-full w-full flex-row items-center justify-end space-x-2 pe-2'}>
        <input type='text' className={'h-full w-full rounded-s-md bg-transparent ps-2 text-dark outline-none'} />
        <Image src={'/img/home/search-light.png'} alt={'search'} width={24} height={24} />
      </div>
    </LightContainer>
  );
}
