'use client';

import {ReactNode, useRef} from 'react';
import {cva, VariantProps} from 'class-variance-authority';

type Props = {
  children: ReactNode;
} & VariantProps<typeof variants>;

const baseClasses: string =
  'flex flex-col items-center justify-center rounded-lg group box-border overflow-hidden h-fit w-fit';
const variants = cva(baseClasses, {
  variants: {
    theme: {
      light: 'bg-light',
    },
    margin: {
      none: 'm-0',
      small: 'm-2',
      normal: 'm-6',
    },
    padding: {
      none: 'p-0',
      small: 'p-2',
      normal: 'p-6',
    },
    interaction: {
      hover: 'container-background',
    },
    border: {
      base: 'border-2',
      none: 'border-0',
    },
    borderColor: {
      light: 'border-[#CCCCCCFF]',
      error: 'border-red-500',
    },
  },
  defaultVariants: {
    theme: 'light',
    margin: 'none',
    padding: 'none',
    border: 'base',
    borderColor: 'light',
  },
});

export default function BaseContainer({children, theme, margin, padding, interaction, border, borderColor}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: {clientX: number; clientY: number}) => {
    if (!interaction) {
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
    <div
      className={variants({theme, margin, padding, interaction, border, borderColor})}
      onMouseMove={handleMove}
      ref={containerRef}
    >
      <div
        className={`flex h-full w-full flex-col items-center justify-center bg-light transition ${
          interaction ? 'group-hover:bg-opacity-70 group-hover:backdrop-blur-lg' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}
