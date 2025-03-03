import { AboutMeSection, ContactSection, HeroSection, ProjectsSection, ServicesSection, StackSection } from '@/components';
import { Container } from '@/components/ui';

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutMeSection />
      <StackSection />
      <ContactSection />
    </main>
  );
}
