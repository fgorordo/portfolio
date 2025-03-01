import { QuoteIcon, TextQuoteIcon } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface Testimony {
    testimony: string;
    fullName: string;
    companyAndPosition: string;
    avatarUrl: string;
}

const testimonies: Testimony[] = [
    {
        testimony: '"Fernando mostró una capacidad técnica y compromiso excepcionales. Su enfoque innovador y atención a los detalles impulsaron el rendimiento de nuestro equipo, superando expectativas en cada etapa."',
        fullName: 'Renato Bellini',
        avatarUrl: '',
        companyAndPosition: 'Gerente de Proyectos, NovaBit Solutions',
    },
    {
        testimony: '"El trabajo de Fernando se distinguió por su creatividad y precisión técnica. Su profesionalismo y puntualidad fueron clave para el éxito de nuestro proyecto digital."',
        fullName: 'Ariadna Castellani',
        avatarUrl: '',
        companyAndPosition: 'Directora de Innovación, Mente Digital',
    },
    {
        testimony: '"La colaboración con Fernando fue altamente productiva. Su capacidad para transformar ideas en soluciones tecnológicas demostró un impacto positivo que fortaleció significativamente nuestro equipo."',
        fullName: 'Esteban Monti',
        avatarUrl: '',
        companyAndPosition: 'Líder de Desarrollo & CTO, Circuito Digital',
    }
];

const TestimonyCard: FC<Testimony> = ({ avatarUrl, companyAndPosition, fullName, testimony }) => {
    return (
        <article className='p-4 rounded-base flex flex-col gap-4 relative'>
            {/* <QuoteIcon className='h-20 w-20 absolute right-2 text-accent -top-12'/> */}
            <p className='h-full mt-8'>{testimony}</p>
            <div className='flex items-center justify-between gap-4'>
                <Image alt={`Avatar de ${fullName}`} src={'https://i.pravatar.cc/300'} width={300} height={300} className='w-12 h-12 rounded-full'/>
                <div>
                    <h4 className='text-xl font-semibold'>{fullName}</h4>
                    <p className='text-primary'>{companyAndPosition}</p>
                </div>

            </div>
        </article>
    );
}

export const AboutMeSection = () => {
    return (
        <div data-section id='about-me'>
            <section className='mx-4 md:mx-8 lg:px-32 max-w-[1440px] lg:mx-auto py-12 flex flex-col gap-12'>
                <div className=''>
                    <h2 className='text-xl text-primary mb-4'>SOBRE MÍ</h2>
                    <h3 className='text-xl md:text-3xl font-bold'>fernando gorordo - full stack developer - web designer</h3>
                    <p className='mt-6'>Desde muy temprano descubrí mi pasión por la tecnología. Me formé en áreas relacionadas con la informática y programación, y durante mi carrera académica tuve la oportunidad de experimentar con proyectos reales. Este camino, construido paso a paso, me llevó a decidir que el desarrollo de software era mi vocación.</p>
                    <p className='mt-2'>Combino habilidades técnicas con una visión creativa para transformar ideas en proyectos digitales funcionales y atractivos. Disfruto el proceso de optimizar cada detalle, asegurando que cada solución aporte valor real a mis clientes, y me impulsa la constante búsqueda de mejora y excelencia en cada línea de código.</p>
                </div>
                <p>vale x 1 boton</p>
            </section>
            <section className='mx-4 md:mx-8 lg:px-32 max-w-[1440px] lg:mx-auto py-12 md:py-20 flex flex-col gap-12'>
                <div className=''>
                    <h2 className='text-xl text-primary mb-4'>TESTIMONIOS</h2>
                    <h3 className='text-xl md:text-3xl font-bold'>¿que dice la gente sobre mí?</h3>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6' >
                    {
                        testimonies.map((t) => <TestimonyCard key={t.fullName} avatarUrl='' companyAndPosition={t.companyAndPosition} fullName={t.fullName} testimony={t.testimony} />)
                    }
                </div>
            </section>

        </div>
    )
}