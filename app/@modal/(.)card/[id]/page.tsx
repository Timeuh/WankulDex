import Modal from '@components/Modal';
import DetailsButton from '@app/@modal/(.)card/[id]/_components/DetailsButton';

type Props = {
  params: {
    id: string;
  };
};

export default function Page({params}: Props) {
  return (
    <Modal>
      <h1 className={'w-[80vw] bg-light'}>{params.id}</h1>
      <DetailsButton />
    </Modal>
  );
}
