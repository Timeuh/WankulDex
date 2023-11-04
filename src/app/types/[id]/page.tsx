import Type from '@components/types/[id]/Type';

interface Props {
  params: {
    id: string;
  };
}

export default function TypesById({params}: Props) {
  return <Type id={params.id} />;
}
