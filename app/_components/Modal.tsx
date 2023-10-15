'use client';

import {MouseEventHandler, ReactNode, useCallback, useEffect, useRef} from 'react';
import {useRouter} from 'next/navigation';

type Props = {
  children: ReactNode;
};

export default function Modal({children}: Props) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      return document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className='fixed bottom-0 left-0 right-0 top-0 z-10 bg-light/30 backdrop-blur-sm'
      onClick={onClick}
    >
      <div ref={wrapper} className='absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2'>
        <div className={'flex h-fit w-fit flex-col items-center'}>{children}</div>
      </div>
    </div>
  );
}
