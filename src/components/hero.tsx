"use client";

import { FC, PropsWithChildren, useRef } from 'react';

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
        <section className='py-12 md:py-20 bg-[url(../assets/images/hero-image.jpg)] bg-cover bg-no-repeat min-h-[calc(100vh_-_1.5rem)]' id='home' data-section>
            <div className='mx-4 md:mx-8 lg:mx-32'>
                <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold font-onest text-primary mb-8'>tus proyectos digitales merecen más que soluciones prefabricadas.</h2>
                <h3 className='text-2xl md:text-3xl lg:text-4xl'>soy <span className='font-bold'>fernando gorordo;</span> Diseñador Web y Desarrollador Full Stack</h3>

                <div className='flex items-center justify-center mt-12'>
                    <Button className=''>Agenda tu reunion <span className='font-bold'>gratuita</span> ahora</Button>
                </div>

            </div>
        </section>
    )
}