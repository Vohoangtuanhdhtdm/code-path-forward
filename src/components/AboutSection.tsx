
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 section-padding bg-slate-50" ref={ref}>
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-80 h-80 glass-effect rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-600 rounded-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ padding: "2px" }}
                >
                  <div className="w-full h-full bg-white rounded-2xl" />
                </motion.div>
                
                <div className="relative z-10 text-center text-slate-600 p-6">
                  <motion.div 
                    className="w-28 h-28 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full mx-auto mb-7 flex items-center justify-center overflow-hidden"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://res.cloudinary.com/dqwxudyzu/image/upload/v1749374580/avatarProfile_kkgvqq.jpg"
                      alt="avatar"
                    />
                  </motion.div>
                  <p className="text-sm font-semibold gradient-text">Võ Hoàng Tuấn</p>
                  <p className="text-xs text-slate-500">(Software Developer)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              About Me
            </motion.h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                As a final-year student with a strong aspiration to contribute
                to my country's technological growth, I've dedicated myself to
                mastering software engineering principles. My core expertise
                lies in .NET and the strategic application of Clean Architecture
                to create software that is not only functional but also clean,
                testable, and easy to maintain. I am driven by the challenge of
                solving complex problems and building systems that last.
              </motion.p>

              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Beyond coding, I am an active leader and team player. As an
                Executive Committee Member of my university's IT Club, I
                organized technical workshops and mentored fellow students. My
                long-term participation in my university's football team has
                taught me discipline, resilience, and the power of teamwork
                under pressure.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
