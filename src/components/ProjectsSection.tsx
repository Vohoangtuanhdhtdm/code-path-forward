
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Meditation Course Application (Backend System)",
      description:
        "Architected and developed a distributed backend system for a meditation app, focusing on high maintainability and scalability.",
      achievement:
        "My main achievement was the strategic implementation of Clean Architecture, which strictly follows SOLID principles, resulting in a highly testable and modular codebase.",
      technologies: [
        "C#",
        ".NET API",
        "Clean Architecture",
        "SQL Server",
        "CQRS pattern",
        "ReactJS",
        "Docker",
      ],
      githubLink: "https://github.com/Vohoangtuanhdhtdm/Meditation.API2.git",
      icon: "🧘",
      gradient: "from-gray-400 to-gray-600",
    },
    {
      title: "Lemoo E-commerce Platform (Scientific Research Project)",
      description:
        "Developed the user-facing interface for a complex e-commerce platform built on a Microservices architecture.",
      achievement:
        "As a Frontend Developer, I was responsible for building responsive UI components in ReactJS and integrating data from multiple independent backend services (Product, Order, Identity) into a seamless user experience.",
      technologies: ["ReactJS", "REST API", "Microservices environment", "Git"],
      githubLink: "https://github.com/Zeustakeshi/Lemoo.git",
      icon: "🛒",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      title: "TuAn Fashion Store (Full-stack Website)",
      description:
        "A complete, functional e-commerce website developed to practice and showcase full-stack development capabilities.",
      achievement:
        "Built both the .NET MVC backend for server-side logic and the interactive ReactJS frontend, providing an end-to-end development experience.",
      technologies: [".NET MVC", "ReactJS", "SQL Server", "HTML/CSS"],
      githubLink: "https://github.com/Vohoangtuanhdhtdm/CuaHangVHT.git",
      icon: "👔",
      gradient: "from-gray-800 to-gray-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 section-padding bg-gradient-to-br from-gray-50/40 via-white to-gray-100/30" ref={ref}>
      <div className="container-width">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="glass-effect rounded-xl p-6 h-full relative overflow-hidden card-hover border border-gray-200">
                {/* Animated background gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <div className="relative z-10 space-y-4 h-full flex flex-col">
                  <motion.div 
                    className="text-6xl text-center mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {project.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-700 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <motion.div 
                    className="glass-effect border border-gray-200 rounded-lg p-4 flex-grow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-sm text-gray-700 font-medium mb-1">
                      Key Contribution:
                    </p>
                    <p className="text-sm text-gray-600">
                      {project.achievement}
                    </p>
                  </motion.div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + techIndex * 0.05 
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
