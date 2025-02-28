"use client";

import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logo.svg';
import { FC } from 'react';
import clsx from 'clsx';
import { useActiveSection } from '@/hooks';
import { useScroll } from 'framer-motion';

interface SitePage {
    text: string;
    id: string;
};

const siteMap: SitePage[] = [
    {
        text: 'Inicio',
        id: 'home'
    },
    {
        text: 'Servicios',
        id: 'services'
    },
    {
        text: 'Proyectos',
        id: 'projects'
    },
    {
        text: 'Sobre Mí',
        id: 'about-me'
    },
];

interface DesktopNavItemProps {
    text: string;
    id: string;
}

const DesktopNavItem: FC<DesktopNavItemProps> = ({ text, id }) => {
    const activeSection = useActiveSection();

    return (
        <Link href={`#${id}`} className={clsx('p-2 transition-all duration-300', activeSection === id ? "text-primary" : 'hover:text-foreground-muted')}>{text} <span className={clsx('text-accent', activeSection === id ? 'inline-block' : 'hidden')}>//</span></Link>
    );
}



const DesktopNav = () => {
    return (
        <nav className='hidden md:flex gap-4'>
            {
                siteMap.map(e => <li className='list-none' key={e.id}><DesktopNavItem text={e.text} id={e.id} /></li>)
            }
        </nav>
    );
}

const MobileNav = () => {
    return (
        <div className='block md:hidden'>mobile</div>
    );
}

export const Header = () => {
    //! TODO: Change color when scrollY is over 30%
    return (
        <header className={clsx('py-4 px-4 md:px-6 lg:px-32 flex items-center justify-between sticky top-0 left-0 right-0 bg-background')}>
            <Link href={"/"}><Image src={Logo} alt='Logo de Fernando Gorordo' width={100} /></Link>
            <DesktopNav/>
            <MobileNav />
        </header>
    )
}