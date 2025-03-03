"use client";

import Image from 'next/image';
import { ArrowUpRightIcon } from 'lucide-react';

import ProjectImage from '@/assets/images/project.jpg'
import { Container } from './ui';

interface Project {
    thumbnail: string;
    title: string;
    tags: string[];
    description: string;
}

const projects: Project[] = [
    {
        thumbnail: '',
        title: 'PymePILOT',
        tags: ["fullstack", "design", "ux/ui", "saas"],
        description: 'Gestiona tu pyme o negocio con esta plataforma sencilla y funcional. Controla tu stock, gestiona tus clientes y recibe analíticas en tiempo real.',
    },
    {
        thumbnail: '',
        title: 'eMPRENDER.io',
        tags: ["fullstack", "design", "ux/ui", "saas"],
        description: '¿Tienes una idea y no tienes con quien comenzar a trabajar? En eMPRENDER conecta con profesionales/emprendores de todo el mundo para encontrar tu socio ideal.',
    },
    {
        thumbnail: '',
        title: 'Portfolio Personal',
        tags: ["fullstack", "design", "ux/ui"],
        description: 'No importa que tan talentoso seas, si no te das a conocer al mundo nunca vas a ayudar a nadie. Mi portfolio es una parte de mí destinada a mostrarle al mundo mi trabajo.',
    },
]


const ProjectCardChip = ({ name }: { name: string }) => {
    return (
        <span className='px-3 py-1 border border-foreground rounded-full'>{name}</span>
    );
}

export const ProjectCard = ({ title, description, tags }: Project) => {

    return (
        <article className='rounded-base group'>
            <Image src={ProjectImage} alt={`Foto de portada - ${title}`} className='rounded-base md:max-h-1/2 mb-4 md:grayscale-100 group-hover:grayscale-0 transition-all duration-300' />
            <div className='my-4 flex gap-4 flex-wrap'>
                {
                    tags.map(e => <ProjectCardChip name={e} key={e} />)
                }
            </div>
            <h2 className='text-2xl mb-2'>{title}</h2>
            <p>{description}</p>
            <button
                className='
                    mt-6
                    ml-auto
                    text-xl 
                    text-accent 
                    flex gap-2 
                    relative 
                    group 
                    cursor-pointer 
                    before:content-[""] 
                    before:h-0.5 
                    before:bg-accent 
                    before:w-full 
                    before:absolute 
                    before:bottom-0 
                    before:translate-y-2 
                    before:rounded-full 
                    before:scale-0 
                    hover:before:scale-100 
                    before:transition-all 
                    before:duration-300 
                    before:origin-left'
                onClick={() => console.log('click')}
            >
                Ver detalles
                <ArrowUpRightIcon className='text-accent' />
            </button>
        </article>
    );
};

export const ProjectsSection = () => {
    return (
        <section data-section id='projects' className='relative'>
            <div className='bg-[url(../assets/images/projects-header-image.webp)] bg-center bg-cover absolute top-0 left-0 right-0 h-[40%] -z-50 after:content-[""] after:absolute after:top-0 after:left-0 after:-right-0 after:h-full after:bg-gradient-to-t after:from-background after:via-background/60 after:to-background' />
            <Container className='py-12 md:py-20'>
                <div className=''>
                    <h2 className='text-xl text-primary mb-4'>SERVICIOS</h2>
                    <div className='flex gap-6 flex-col md:flex-row'>
                        <h3 className='text-xl md:text-3xl font-bold'>explora mis creaciones.</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 md:mt-20'>
                    {
                        projects.map(({ description, tags, title }) => <ProjectCard key={title} title={title} description={description} tags={tags} thumbnail='' />)
                    }
                </div>
            </Container>
        </section>
    )
}