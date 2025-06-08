
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 section-padding border-t border-border">
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
