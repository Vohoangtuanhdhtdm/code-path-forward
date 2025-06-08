import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    // Replace with actual CV download link
    window.open("#", "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding pt-20"
    >
      <div className="container-width">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Võ Hoàng Tuấn
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-medium">
              Software Developer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A passionate and detail-oriented developer with deep experience in
            building robust, maintainable, and scalable backend systems using
            .NET and Clean Architecture. Eager to contribute to building
            high-quality "Make in Vietnam" technology products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="px-8 py-3 text-lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg"
              onClick={downloadCV}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
