'use client';

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
      <h1
        className={'h-14 w-14 bg-light'}
        onClick={() => {
          window.location.reload();
        }}
      >
        voir
      </h1>
    </Modal>
  );
}
