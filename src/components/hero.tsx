"use client";

import Link from 'next/link';
import { Container } from './ui/common';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {

    return (
        <section className='relative' id='home' data-section>
            <Container className='py-12 md:py-16 flex flex-col gap-12 items-center'>
                <div className='text-sm md:text-base px-4 py-2 border-2 border-foreground-muted rounded-full max-w-max'><strong>Abierto a oportunidades:</strong> freelance & fulltime</div>
                <div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className='text-xl mb-4'>
                        Hola, soy<span className='text-accent'> fernando gorordo</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='text-5xl mb-6'>
                        <strong>Full Stack Developer</strong><span className='text-primary'> & Web Designer.</span>
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Desarrollador full-stack con una curiosidad insaciable. Desde Buenos Aires, Argentina busco acercar mis experiencias y conocimientos a traves de mi blog a todo aquel que quiera prestarme unos minutos de su tiempo.
                    </motion.h3>
                </div>
                <div className='flex gap-6 flex-col md:flex-row items-center'>

                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                    >

                        <Link href={'#'} className='border-2 px-4 py-3 rounded-full transition-all duration-300'>Agendar llamada <strong>gratuita</strong></Link>
                    </motion.div>

                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                    >

                        <Link href={'#projects'} className='flex gap-2 items-center text-lg font-medium hover:text-accent transition-colors duration-300 group'>Explora mi trabajo<ArrowRightIcon className='group-hover:translate-x-1 transition-transform duration-300 ' /></Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}