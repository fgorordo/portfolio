import { AboutMeSection, ContactSection, HeroSection, ProjectsSection, ServicesSection, StackSection } from '@/components';

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
