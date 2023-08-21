'use client';

import {ReactNode, useRef} from 'react';

type Props = {
  children: ReactNode;
  width: string;
  height: string;
  hover: boolean;
  onClick?: () => void;
};

export default function LightContainer({children, width, height, hover, onClick}: Props) {
  const containerRef = useRef<HTMLButtonElement>(null);

  const handleMove = (event: {clientX: number; clientY: number}) => {
    if (!hover) {
      return;
    }

    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const bounds = containerRef.current!.getBoundingClientRect();

    containerRef.current!.style.setProperty('--rx', `${(mouseX - bounds.x) / bounds.width}`);
    containerRef.current!.style.setProperty('--x', `${(mouseX - bounds.x) / bounds.width}`);
    containerRef.current!.style.setProperty('--y', `${(mouseY - bounds.y) / bounds.height}`);
  };

  return (
    <button
      className={`${
        hover ? 'container-background hover:border-light hover:border-opacity-50' : 'cursor-default'
      } rounded-lg border-2 border-[#CCCCCCFF] ${width} ${height} group box-border flex flex-col items-center justify-center`}
      onMouseMove={handleMove}
      ref={containerRef}
      onClick={onClick}
    >
      <div
        className={`flex h-full w-full flex-col items-center justify-center rounded-md bg-light transition
           ${hover ? 'group-hover:bg-opacity-80 group-hover:backdrop-blur-lg' : ''}`}
      >
        {children}
      </div>
    </button>
  );
}
