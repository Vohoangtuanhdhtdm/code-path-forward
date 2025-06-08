
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Platforms",
      skills: [
        { name: "C#", icon: "🔷" },
        { name: ".NET API", icon: "🚀" },
        { name: ".NET MVC", icon: "🌐" },
        { name: "ReactJS", icon: "⚛️" }
      ]
    },
    {
      title: "Architectures & Paradigms",
      skills: [
        { name: "Clean Architecture (Expert)", icon: "🏗️" },
        { name: "SOLID Principles", icon: "📐" },
        { name: "RESTful API Design", icon: "🔗" },
        { name: "Microservices Environment", icon: "🔧" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "Microsoft SQL Server", icon: "🗄️" }
      ]
    },
    {
      title: "Tools & Workflows",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" },
        { name: "Visual Studio", icon: "💻" },
        { name: "Docker", icon: "🐳" },
        { name: "Agile/Scrum", icon: "🔄" }
      ]
    }
  ];

  return (
    <section className="py-20 section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building robust and scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-primary text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="bg-card border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-foreground font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
