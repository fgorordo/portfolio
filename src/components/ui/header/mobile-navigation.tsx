"use client";

import clsx from 'clsx';

interface MobileNavigationProps {
  isOpen: boolean;
  handleOpen: () => void;
};

interface HamburgerMenuProps {
  isOpen: boolean;
  handleOpen: () => void;
};

const HamburgerMenu = ({ isOpen, handleOpen }: HamburgerMenuProps) => {
  return (
    <button className='h-12 w-12 rounded-base border-2 border-accent p-2' onClick={handleOpen}>
      <div className={clsx(`
        transition-all
        duration-300
        min-h-[3px]
        bg-foreground
        relative
        rounded-full
        before:content-[""]
        before:absolute
        before:left-0
        before:right-0
        before:h-[3px]
        before:bg-foreground
        before:translate-y-[10px]
        before:rounded-full
        before:transition-all
        before:duration-300
        after:content-[""]
        after:absolute
        after:left-0
        after:right-0
        after:h-[3px]
        after:bg-foreground
        after:translate-y-[-10px]
        after:rounded-full
        after:transition-all
        after:duration-300
        `,
        isOpen ? 'after:translate-y-[0] after:rotate-[45deg] before:translate-y-[100] before:rotate-[-45deg] bg-transparent' : 'after:translate-y-[-10px] before:translate-y-[10px]'
      )} />
    </button>
  );
};

export const MobileNavigation = ({ isOpen, handleOpen }: MobileNavigationProps) => {

  return (
    <div className='md:hidden'>
      <HamburgerMenu isOpen={isOpen} handleOpen={handleOpen} />
    </div>
  )
}