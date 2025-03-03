import { MailIcon } from 'lucide-react';
import { Divider, FLogo } from '../common';
import { Container } from '../common/container';
import { FooterNavigation } from './footer-navigation';

const footerNavigation = {
    general: {
        title: 'General',
        links: [
            {
                text: 'Inicio',
                url: '/'
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
            },
        ]
    },
    website: {
        title: 'Sitio Web',
        links: [
            {
                text: 'Libro de visitas',
                url: '#'
            },
            {
                text: 'Blog',
                url: '#'
            },
            {
                text: 'Links',
                url: '#'
            }
        ]
    }
};

export const Footer = () => {
    return (
        <footer className=''>
            <Divider />
            <Container className='flex flex-col gap-6 md:flex-row md:justify-between my-12'>
                <div className='max-w-[400px]'>
                    <FLogo />
                    <p className='mt-2 text-foreground-muted'>Creando soluciones y experiencias digitales desde Argentina para el mundo.</p>
                </div>
                <div className='flex flex-col gap-6 md:gap-20 md:flex-row'>
                    <FooterNavigation navigationTitle={footerNavigation.general.title} links={footerNavigation.general.links} />
                    <FooterNavigation navigationTitle={footerNavigation.website.title} links={footerNavigation.website.links} />
                </div>
                <div className='max-w-[400px]'>
                    <p className='mb-2'>No dude en comunicarse conmigo para cualquier consulta u oportunidad de colaboración.</p>
                    <p className='flex items-center gap-2 text-primary font-semibold'><MailIcon />flgorordo@gmail.com</p>
                </div>
            </Container>
            <Divider />
            <Container className='my-8'>
                <p className='text-foreground-muted'>Copyright © 2025 Fernando Gorordo. Todos los derechos reservados</p>
            </Container>
        </footer>
    )
}