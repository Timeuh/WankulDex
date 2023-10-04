import BackButton from '@components/BackButton';

type Props = {
  params: {
    id: string;
  };
};

export default function DisplayCard({params}: Props) {
  return (
    <section id={`card-${params.id}`} className={'to-light-pink  h-screen w-full  bg-gradient-to-b from-light-blue'}>
      <div className={'flex flex-col items-center pt-24'}>
        <BackButton />
      </div>
    </section>
  );
}
