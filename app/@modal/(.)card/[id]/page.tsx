import Modal from '@components/Modal';

type Props = {
  params: {
    id: string;
  };
};

export default function Page({params}: Props) {
  return (
    <Modal>
      <h1 className={'w-[80vw] bg-light'}>{params.id}</h1>
    </Modal>
  );
}
