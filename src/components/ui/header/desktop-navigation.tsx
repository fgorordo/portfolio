"use client";

import Link from 'next/link';
import clsx from 'clsx';

import { useActiveSection } from '@/hooks';
import { NavigationLink } from '../interfaces';

const DesktopNavItem = ({ text, url }: NavigationLink) => {
  const activeSection = useActiveSection();

  return (
    <Link href={url} className={clsx('p-2 transition-all duration-300', activeSection === url.split('#')[1] ? "text-primary" : 'hover:text-foreground-muted')}>{text} <span className={clsx('text-accent', activeSection === url.split('#')[1] ? 'inline-block' : 'hidden')}>//</span></Link>
  );
}

interface DesktopNavigationProps {
  navigationItems: NavigationLink[]
}

export const DesktopNavigation = ({navigationItems}: DesktopNavigationProps) => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-4'>
        {
          navigationItems.map(e => <li className='list-none' key={e.url}><DesktopNavItem text={e.text} url={e.url} /></li>)
        }
      </ul>
    </nav>
  )
}