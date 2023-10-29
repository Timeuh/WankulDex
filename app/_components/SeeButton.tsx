import BaseContainer from '@components/BaseContainer';
import Link from 'next/link';

type Props = {
  link: string;
};

export default function SeeButton({link}: Props) {
  return (
    <BaseContainer interaction={'hover'}>
      <Link href={link} className={'h-8 w-[35vw] text-center text-2xl'}>
        Consulter
      </Link>
    </BaseContainer>
  );
}
