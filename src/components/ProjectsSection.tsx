
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Meditation Course Application (Backend System)",
      description: "Architected and developed a distributed backend system for a meditation app, focusing on high maintainability and scalability.",
      achievement: "My main achievement was the strategic implementation of Clean Architecture, which strictly follows SOLID principles, resulting in a highly testable and modular codebase.",
      technologies: ["C#", ".NET API", "Clean Architecture", "SQL Server", "JWT"],
      githubLink: "#",
      icon: "🧘"
    },
    {
      title: "Lemoo E-commerce Platform (Scientific Research Project)",
      description: "Developed the user-facing interface for a complex e-commerce platform built on a Microservices architecture.",
      achievement: "As a Frontend Developer, I was responsible for building responsive UI components in ReactJS and integrating data from multiple independent backend services (Product, Order, Identity) into a seamless user experience.",
      technologies: ["ReactJS", "REST API", "Microservices environment", "Git"],
      githubLink: "#",
      icon: "🛒"
    },
    {
      title: "TuAn Fashion Store (Full-stack Website)",
      description: "A complete, functional e-commerce website developed to practice and showcase full-stack development capabilities.",
      achievement: "Built both the .NET MVC backend for server-side logic and the interactive ReactJS frontend, providing an end-to-end development experience.",
      technologies: [".NET MVC", "ReactJS", "SQL Server", "HTML/CSS"],
      githubLink: "#",
      icon: "👔"
    }
  ];

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="text-4xl text-center">{project.icon}</div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-foreground font-medium mb-1">Key Contribution:</p>
                  <p className="text-sm text-muted-foreground">
                    {project.achievement}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  View on GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
