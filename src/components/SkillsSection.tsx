
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  CodeBracketIcon, 
  CubeIcon, 
  ServerIcon, 
  CommandLineIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  ArrowPathIcon 
} from "@heroicons/react/24/outline";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: "Languages & Platforms",
      skills: [
        { name: "C#", icon: <CodeBracketIcon className="w-6 h-6" /> },
        { name: ".NET API", icon: <BoltIcon className="w-6 h-6" /> },
        { name: ".NET MVC", icon: <CubeIcon className="w-6 h-6" /> },
        { name: "ReactJS", icon: <CommandLineIcon className="w-6 h-6" /> }
      ]
    },
    {
      title: "Architectures & Paradigms",
      skills: [
        { name: "Clean Architecture (Expert)", icon: <CubeIcon className="w-6 h-6" /> },
        { name: "SOLID Principles", icon: <CodeBracketIcon className="w-6 h-6" /> },
        { name: "RESTful API Design", icon: <ServerIcon className="w-6 h-6" /> },
        { name: "Microservices Environment", icon: <WrenchScrewdriverIcon className="w-6 h-6" /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "Microsoft SQL Server", icon: <CircleStackIcon className="w-6 h-6" /> }
      ]
    },
    {
      title: "Tools & Workflows",
      skills: [
        { name: "Git", icon: <CodeBracketIcon className="w-6 h-6" /> },
        { name: "GitHub", icon: <CodeBracketIcon className="w-6 h-6" /> },
        { name: "Visual Studio", icon: <CommandLineIcon className="w-6 h-6" /> },
        { name: "Docker", icon: <CubeIcon className="w-6 h-6" /> },
        { name: "Agile/Scrum", icon: <ArrowPathIcon className="w-6 h-6" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 section-padding bg-gradient-to-br from-gray-100/40 via-white to-gray-50/30" ref={ref}>
      <div className="container-width">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            My Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building robust and scalable applications
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold gradient-text text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="glass-effect rounded-lg p-4 card-hover border border-gray-200 group cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + skillIndex * 0.1 
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="text-gray-600 group-hover:text-black transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-gray-700 font-medium group-hover:gradient-text transition-all duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
