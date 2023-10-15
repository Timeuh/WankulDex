import Modal from '@components/Modal';
import DetailsButton from '@app/@modal/(.)card/[id]/_components/DetailsButton';
import CardPreview from '@app/@modal/(.)card/[id]/_components/CardPreview';
import CloseButton from '@app/@modal/(.)card/[id]/_components/CloseButton';

type Props = {
  params: {
    id: string;
  };
};

export default function Page({params}: Props) {
  return (
    <Modal>
      <div className={'relative flex flex-col items-center space-y-8'}>
        <CloseButton />
        <CardPreview id={params.id} />
        <DetailsButton />
      </div>
    </Modal>
  );
}
