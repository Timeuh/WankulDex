import Image from 'next/image';
import {API_DOMAIN} from '@utils/appGlobals';
import SeeButton from '@components/SeeButton';

type Props = {
  image: string;
  alt: string;
  text: string;
  seeLink: string;
};

export default function ListItem({image, alt, text, seeLink}: Props) {
  return (
    <div
      className={
        'flex flex-col items-center space-y-2 rounded-lg border-2 border-dark bg-light p-4 xl:w-5/6 xl:space-y-6 xl:p-6'
      }
    >
      <Image
        src={`${API_DOMAIN}${image}`}
        alt={alt}
        width={0}
        height={0}
        sizes={'100vw'}
        className={'h-auto w-full rounded-lg xl:w-3/4'}
      />
      <h1 className={'text-center text-2xl xl:text-3xl'}>{text}</h1>
      <SeeButton link={seeLink} />
    </div>
  );
}
