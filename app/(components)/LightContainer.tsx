'use client';

import {ReactNode, useRef} from 'react';

type Props = {
  children: ReactNode;
  width: string;
  height: string;
};

export default function LightContainer({children, width, height}: Props) {
  const containerRef = useRef<HTMLButtonElement>(null);

  const handleMove = (event: {clientX: number; clientY: number}) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const bounds = containerRef.current!.getBoundingClientRect();

    containerRef.current!.style.setProperty('--rx', `${(mouseX - bounds.x) / bounds.width}`);
    containerRef.current!.style.setProperty('--x', `${(mouseX - bounds.x) / bounds.width}`);
    containerRef.current!.style.setProperty('--y', `${(mouseY - bounds.y) / bounds.height}`);
  };

  return (
    <button
      className={`container-background rounded-lg border-2 border-[#CCCCCCFF] ${width} ${height} group flex flex-col 
      items-center justify-center hover:border-opacity-30`}
      onMouseMove={handleMove}
      ref={containerRef}
    >
      <div
        className={`flex h-full w-full flex-col items-center justify-center rounded-md bg-light group-hover:bg-opacity-80
           group-hover:backdrop-blur-sm`}
      >
        {children}
      </div>
    </button>
  );
}
