"use client";

import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { FC, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
    onClick?: (args: any) => any;
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`
                w-full
                md:w-max
                p-4 
                border-2 
                border-primary 
                text-primary 
                rounded-base 
                shadow-xl 
                shadow-primary/20 
                hover:shadow-primary/50 
                transition-all 
                duration-300 
                cursor-pointer
                ${className}
            `}>
            {children}
        </button>
    );
};

export const HeroSection = () => {
    return (
        <section className='py-12 md:py-20 bg-[url(../assets/images/hero-background-image.webp)] bg-cover bg-no-repeat flex items-center justify-center' id='home' data-section>
            <div className='mx-4 md:mx-8 lg:mx-32 xl:mx-auto flex flex-col justify-between gap-12 max-w-[1440px]'>
                <div>
                    <h4 className='text-4xl md:text-6xl lg:text-7xl font-bold font-onest text-primary mb-12 text-center'>tus proyectos digitales merecen más que soluciones prefabricadas.</h4>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl text-center'>soy <span className='font-bold'>fernando gorordo;</span></h3>
                    <h2 className='text-center mt-6 text-2xl md:text-3xl lg:text-4xl font-bold'>Diseñador Web y Desarrollador Full Stack.</h2>
                </div>

                <div className='flex items-center justify-center'>
                    <Button className=''>Agenda tu reunion <span className='font-bold'>gratuita</span> ahora</Button>
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

            </div>
        </section>
    )
}