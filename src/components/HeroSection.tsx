
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
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
      className="min-h-screen flex items-center justify-center section-padding pt-20 relative overflow-hidden bg-white dark:bg-black"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-gray-100/20 dark:from-gray-900/30 dark:via-black dark:to-gray-800/20" />
      
      <div className="container-width relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <BlurFade delay={0.25} inView>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white tracking-tight">
                Võ Hoàng Tuấn
              </h1>
            </BlurFade>
            
            <BlurFade delay={0.5} inView>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-semibold tracking-tight">
                Software Developer
              </h2>
            </BlurFade>
          </div>

          <BlurFade delay={0.75} inView>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A passionate and detail-oriented developer with deep experience in
              building robust, maintainable, and scalable backend systems using
              .NET and Clean Architecture. Eager to contribute to building
              high-quality "Make in Vietnam" technology products.
            </p>
          </BlurFade>

          <BlurFade delay={1.0} inView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="px-8 py-3 text-lg bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 shadow-lg text-white dark:text-black font-semibold transition-all duration-200"
                onClick={() => scrollToSection("projects")}
              >
                View My Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 font-semibold transition-all duration-200"
                onClick={downloadCV}
              >
                View My Github
              </Button>
            </div>
          </BlurFade>

          {/* Animated scroll indicator */}
          <BlurFade delay={1.25} inView>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div
                className="cursor-pointer animate-bounce"
                onClick={() => scrollToSection("about")}
              >
                <ChevronDownIcon className="w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200" />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
