const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 bg-muted rounded-2xl flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-28 h-28 bg-primary/20 rounded-full mx-auto mb-7 flex items-center justify-center">
                  <img
                    className="object-cover w-full h-auto rounded-full"
                    src="https://res.cloudinary.com/dqwxudyzu/image/upload/v1749374580/avatarProfile_kkgvqq.jpg"
                    alt="avatar"
                  />
                </div>
                <p className="text-sm">Võ Hoàng Tuấn</p>
                <p className="text-xs">(Software Developer)</p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About Me
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                As a final-year student with a strong aspiration to contribute
                to my country's technological growth, I've dedicated myself to
                mastering software engineering principles. My core expertise
                lies in .NET and the strategic application of Clean Architecture
                to create software that is not only functional but also clean,
                testable, and easy to maintain. I am driven by the challenge of
                solving complex problems and building systems that last.
              </p>

              <p className="text-lg">
                Beyond coding, I am an active leader and team player. As an
                Executive Committee Member of my university's IT Club, I
                organized technical workshops and mentored fellow students. My
                long-term participation in my university's football team has
                taught me discipline, resilience, and the power of teamwork
                under pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
