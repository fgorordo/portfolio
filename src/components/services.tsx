import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';
import { Container } from './ui';

interface Services {
    title: string;
    description: string;
};

const services: Services[] = [
    {
        title: 'Desarrollo Web',
        description: 'Desarrollo sitios web modernos y responsivos, combinando diseño atractivo y funcionalidad óptima.',
    },
    {
        title: 'Desarrollo de software',
        description: 'Desarrollo software a medida que se ajusta a las necesidades específicas de tu negocio.',
    },
    {
        title: 'Diseño UX/UI',
        description: 'Diseño experiencias digitales intuitivas y atractivas, optimizando la usabilidad y la interacción para mejorar la conversión y satisfacción del usuario.',
    },
    {
        title: 'Optimización de SEO',
        description: 'Implemento estrategias SEO para mejorar el posicionamiento de tu sitio web en buscadores.',
    },
    {
        title: 'Soporte Dedicado',
        description: 'Ofrezco soporte dedicado para garantizar el funcionamiento continuo de tus soluciones digitales.',
    },
    {
        title: 'Actualizaciones',
        description: 'Realizo actualizaciones periódicas para mantener tus plataformas seguras y a la vanguardia.',
    },
    {
        title: 'Integraciones',
        description: 'Realizo la integración de soluciones y herramientas de terceros para ampliar las funcionalidades de tus proyectos.',
    },

];

interface ServiceItemProps {
    title: string;
    description: string;
}

const ServiceItem: FC<ServiceItemProps> = ({ title, description }) => {
    return (
        <article className='flex justify-between border-b-2 border-b-foreground pb-4 group flex-col md:flex-row cursor-pointer'>
            <h2 className='text-3xl md:text-4xl flex-1 group-hover:text-4xl group-hover:md:text-5xl transition-all duration-700'>{title}</h2>
            <p className='flex-1 opacity-0 group-hover:opacity-100 transition-opacity duration-1000'>{description}</p>
            <ChevronDownIcon className='text-accent h-8 w-8 group-hover:rotate-[180deg] group-hover:md:rotate-[90deg] transition-all duration-700' />
        </article>
    );
}


export const ServicesSection = () => {
    return (
        <section data-section id='services'>
            <Container className='py-12 md:py-20'>
                <div>
                    <h2 className='text-xl text-primary mb-4'>SERVICIOS</h2>
                    <div className='flex gap-6 flex-col md:flex-row'>
                        <div className='md:flex-1/2'>
                            <h3 className='text-xl md:text-3xl font-bold'>soluciones adaptadas a cada caso.</h3>
                            <h3 className='text-xl md:text-3xl font-bold'>potencia tu negocio ahora mismo.</h3>
                        </div>
                        <p className='md:flex-1/2'>ofrezco soluciones digitales personalizadas para empresas y emprendedores que buscan establecer una presencia online sólida y profesional. ayudo a expandir tu negocio, atraer nuevos clientes y optimizar procesos.</p>
                    </div>
                </div>

                <div className='flex gap-12 flex-col pt-12 md:pt-20'>
                    {
                        services.map(({ title, description }) => <ServiceItem description={description} title={title} key={title} />)
                    }
                </div>
            </Container>
        </section>
    )
}