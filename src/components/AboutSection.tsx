
import BlurFade from "@/components/ui/blur-fade";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-width">
        <BlurFade delay={0.25} inView>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Learn more about my background, experience, and what drives my passion for development.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <BlurFade delay={0.5} inView>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a dedicated software developer with a strong foundation in backend development, 
                particularly with .NET technologies and Clean Architecture principles. My approach 
                to coding emphasizes maintainability, scalability, and robust system design.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Throughout my career, I've been passionate about creating high-quality software 
                that not only meets current requirements but also stands the test of time. I believe 
                in writing clean, well-documented code that other developers can easily understand 
                and build upon.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.75} inView>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">
                What I Do
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Backend Development with .NET and Clean Architecture
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Database Design and Optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    API Development and Integration
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    System Architecture and Design Patterns
                  </span>
                </li>
              </ul>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
