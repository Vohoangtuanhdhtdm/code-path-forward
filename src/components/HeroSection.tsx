
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    window.open("https://github.com/Vohoangtuanhdhtdm", "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding pt-20 relative overflow-hidden bg-gradient-to-br from-gray-50/60 via-white to-gray-100/40"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-70" />
      
      <div className="container-width relative z-10">
        <div className="text-center space-y-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Võ Hoàng Tuấn
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Developer
            </motion.h2>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A passionate and detail-oriented developer with deep experience in
            building robust, maintainable, and scalable backend systems using
            .NET and Clean Architecture. Eager to contribute to building
            high-quality "Make in Vietnam" technology products.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="px-8 py-3 text-lg bg-black hover:bg-gray-800 shadow-lg text-white font-semibold"
                onClick={() => scrollToSection("projects")}
              >
                View My Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold"
                onClick={downloadCV}
              >
                View My Github
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <ChevronDownIcon className="w-8 h-8 text-gray-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
