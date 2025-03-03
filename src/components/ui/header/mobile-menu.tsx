"use client";

import Link from 'next/link';
import clsx from 'clsx';
import { NavigationLink } from '../interfaces';
import { ChevronRight, InstagramIcon, TwitterIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import { useActiveSection } from '@/hooks';
import { Divider } from '../common/divider';
import { Button } from '../common';

interface MobileMenuProps {
  isOpen: boolean;
  navigationItems: NavigationLink[]
  handleOpen: () => void;
}

export const MobileMenu = ({ isOpen, navigationItems, handleOpen }: MobileMenuProps) => {

  const activeSection = useActiveSection();

  return (
    <div className={clsx('bg-background absolute left-0 right-0 transition-all duration-300 overflow-y-scroll', isOpen ? 'translate-x-0' : '-translate-x-full')}>
      <nav>
        <ul className='flex flex-col gap-2 py-4'>
          {
            navigationItems.map(e => <li key={e.text}><Link href={e.url} onClick={handleOpen} className={clsx('flex items-center p-4 justify-between text-xl transition-all duration-300', activeSection === e.url.split('#')[1] ? 'text-primary' : 'text-foreground')}>{e.text} <ChevronRight className={clsx('transition-all duration-300', activeSection === e.url.split('#')[1] ? 'text-accent rotate-180' : 'text-primary')} /></Link></li>)
          }
        </ul>
      </nav>
      <Divider />
      <div className='my-6'>
        <Button color='accent' type='outline'>Agendar reunion <strong>gratis</strong></Button>
      </div>
      <div className='flex gap-6 w-full justify-center my-12 text-foreground-muted'>
        <InstagramIcon />
        <TwitterIcon />
        <GithubIcon />
        <LinkedinIcon />
      </div>
      <p className='text-foreground-muted text-center my-4'>Copyright © 2025 Fernando Gorordo. Todos los derechos reservados</p>
      <Divider />
    </div>
  )
}