import { div, span } from 'framer-motion/client';
import { FC, JSX } from 'react';
import { CSSIcon, DockerIcon, ExpressJSIcon, FirebaseIcon, FramerMotionIcon, GitIcon, HtmlIcon, JavaScriptIcon, JestIcon, JWTIcon, LinuxIcon, MaterialUIIcon, MongoDBIcon, MongooseIcon, MySQLIcon, NestJSIcon, NextJSIcon, NodeJSIcon, PostgreSQLIcon, PrismaIcon, ReactIcon, ReactRouterIcon, ReduxIcon, ShadcnUIIcon, SQLiteIcon, TailwindCSSIcon, TypeORMIcon, TypeScriptIcon, ZustandIcon } from './ui/common/tech-icons';
import { PlusIcon } from 'lucide-react';
import { Container } from './ui';

interface TechStack {
    techName: string;
    icon: JSX.Element
};

const techs: TechStack[] = [
    {
        techName: 'HTML',
        icon: <HtmlIcon />
    },
    {
        techName: 'CSS',
        icon: <CSSIcon />
    },
    {
        techName: 'JavaScript',
        icon: <JavaScriptIcon />
    },
    {
        techName: 'TypeScript',
        icon: <TypeScriptIcon />
    },
    {
        techName: 'Node.JS',
        icon: <NodeJSIcon />
    },
    {
        techName: 'Jest',
        icon: <JestIcon />
    },
    {
        techName: 'Git',
        icon: <GitIcon />
    },
    {
        techName: 'Docker',
        icon: <DockerIcon />
    },
    {
        techName: 'Linux',
        icon: <LinuxIcon />
    },
    {
        techName: 'Express.js',
        icon: <ExpressJSIcon />
    },
    {
        techName: 'NestJS',
        icon: <NestJSIcon />
    },
    {
        techName: 'JWT',
        icon: <JWTIcon />
    },
    {
        techName: 'Firebase',
        icon: <FirebaseIcon />
    },
    {
        techName: 'Prisma',
        icon: <PrismaIcon />
    },
    {
        techName: 'TypeORM',
        icon: <TypeORMIcon />
    },
    {
        techName: 'Mongoose',
        icon: <MongooseIcon />
    },
    {
        techName: 'MongoDB',
        icon: <MongoDBIcon />
    },
    {
        techName: 'MySQL',
        icon: <MySQLIcon />
    },
    {
        techName: 'PostgreSQL',
        icon: <PostgreSQLIcon />
    },
    {
        techName: 'SQLite',
        icon: <SQLiteIcon />
    },
    {
        techName: 'React',
        icon: <ReactIcon />
    },
    {
        techName: 'React Router',
        icon: <ReactRouterIcon />
    },
    {
        techName: 'Next.JS',
        icon: <NextJSIcon />
    },
    {
        techName: 'TailwindCSS',
        icon: <TailwindCSSIcon />
    },
    {
        techName: 'Zustand',
        icon: <ZustandIcon />
    },
    {
        techName: 'Redux',
        icon: <ReduxIcon />
    },
    {
        techName: 'Framer Motion',
        icon: <FramerMotionIcon />
    },
    {
        techName: 'Shadcn UI',
        icon: <ShadcnUIIcon />
    },
    {
        techName: 'Material UI',
        icon: <MaterialUIIcon />
    },
    {
        techName: 'Y más...',
        icon: <PlusIcon />
    },
];

const TechChip: FC<TechStack> = ({ icon, techName }) => {
    return (
        <span className='rounded-full px-4 py-2 border flex items-center gap-2'>{icon}{techName}</span>
    )
}


export const StackSection = () => {
    return (
        <section data-section id="stack">
            <Container className='py-12 md:py-20 flex flex-col gap-12 md:gap-20'>
                <div className=''>
                    <h2 className='text-xl text-primary mb-4 text-center'>STACK TECNOLOGÍCO</h2>
                    <h3 className='text-xl md:text-3xl font-bold text-center'>algunas de las tecnologías que domino</h3>
                </div>

                <div className='flex flex-wrap items-center gap-6 justify-center'>
                    {techs.map(({ techName, icon }) => <TechChip techName={techName} icon={icon} key={techName} />)}
                </div>
                <div>
                    <p className='text-foreground-muted text-center font-medium'>unas de las claves para mejorar es nunca dejar de aprender, por eso, mi stack se amplia día a día con estudio y  dedicación constante.</p>
                </div>
            </Container>
        </section>
    )
}