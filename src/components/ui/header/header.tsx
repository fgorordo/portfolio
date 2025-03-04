"use client";

import { useState } from 'react';
import { Container, Divider, FLogo } from '../common';
import { NavigationLink } from '../interfaces'
import { DesktopNavigation } from './desktop-navigation';
import { MobileMenu } from './mobile-menu';
import { MobileNavigation } from './mobile-navigation';

const headerNavigation: NavigationLink[] = [
    {
        text: 'Inicio',
        url: '#home'
    },
    {
        text: 'Servicios',
        url: '#services'
    },
    {
        text: 'Proyectos',
        url: '#projects'
    },
    {
        text: 'Sobre Mí',
        url: '#about-me'
    },
    {
        text: 'Contacto',
        url: '#contact'
    }
];


export const Header = () => {

      const [isOpen, setIsOpen] = useState<boolean>(false);
    
      const handleOpen = () => {
        setIsOpen(!isOpen)
      }

    return (
        <header className='sticky top-0 z-50 bg-background'>
            <Container className='py-4 md:py-6 flex justify-between items-center'>
                <FLogo />
                <MobileNavigation isOpen={isOpen} handleOpen={handleOpen}/>
                <DesktopNavigation navigationItems={headerNavigation}/>
            </Container>
            <Divider />
            <MobileMenu navigationItems={headerNavigation} isOpen={isOpen} handleOpen={handleOpen}/>
        </header>
    )
}