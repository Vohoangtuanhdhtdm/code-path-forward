
import { useEffect } from 'react';
import AOS from 'aos';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ParticlesBackground from '@/components/ParticlesBackground';
import { TimelineDemo } from '@/components/ui/timeline';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <div id="timeline" className="relative z-10">
        <TimelineDemo />
      </div>
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 section-padding border-t border-border relative z-10">
        <div className="container-width">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Portfolio. Built with passion for clean code and beautiful design.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
