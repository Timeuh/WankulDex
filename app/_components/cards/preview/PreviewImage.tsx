import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

export default function PreviewImage({src, alt}: Props) {
  return (
    <div className={'w-[80vw] rounded-lg border-2 border-dark'}>
      <Image src={src} alt={alt} width={0} height={0} sizes={'100vw'} className={'h-auto w-full'} />
    </div>
  );
}
