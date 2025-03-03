"use client";

import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { Button, Container } from './ui/common';

export const HeroSection = () => {
    return (
        <section className='relative' id='home' data-section>
            <div className='bg-[url(../assets/images/hero-background-image.webp)] bg-cover bg-no-repeat absolute top-0 right-0 bottom-0 left-0 -z-10 before:contents-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-t before:from-background before:via-transparent before:to-background before:w-full before:h-full'/>
            <Container className='py-12 md:py-20 flex flex-col gap-12'>
                <div>
                    <h4 className='text-4xl md:text-6xl lg:text-7xl font-bold font-onest text-primary mb-12 text-center'>tus proyectos digitales merecen más que soluciones prefabricadas.</h4>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl text-center'>soy <span className='font-bold'>fernando gorordo;</span></h3>
                    <h2 className='text-center mt-6 text-2xl md:text-3xl lg:text-4xl font-bold'>Diseñador Web y Desarrollador Full Stack.</h2>
                </div>

                <div className='flex items-center justify-center'>
                    <Button color='primary' type='outline'>Agenda tu reunion <span className='font-bold'>gratuita</span> ahora</Button>
                </div>

                <div className='ml-auto'>
                    <span className='mb-4 block text-foreground-muted'>Encuentrame en:</span>
                    <div className='flex gap-6 text-foreground'>
                        <InstagramIcon />
                        <TwitterIcon />
                        <GithubIcon />
                        <LinkedinIcon />
                    </div>
                </div>

            </Container>
        </section>
    )
}