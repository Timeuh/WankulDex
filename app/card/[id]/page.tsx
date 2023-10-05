import Card from '@components/Card';

type Props = {
  params: {
    id: string;
  };
};

export default function Page({params}: Props) {
  return <Card id={params.id} />;
}
