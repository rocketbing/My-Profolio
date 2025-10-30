import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Building } from "lucide-react";
import { experiences } from "../data/experience";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="relative flex items-start gap-8"
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary rounded-full text-primary-foreground font-bold text-lg z-10 relative">
                    {index + 1}
                  </div>

                  <motion.div
                    className="flex-1 bg-card p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building size={16} />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-primary font-semibold mt-2 md:mt-0">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                    <p className="font-semibold mb-4">{experience.title}</p>
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-2">•</span>
                          <span className="text-muted-foreground">{desc}</span>
                        </li>
                      ))}
                    </ul>
                    {experience.cross_platform_title && (
                      <><p className="font-semibold mb-4">{experience.cross_platform_title}</p>
                      <ul className="space-y-2 mb-4">
                        {experience.cross_platform_description.map((desc, descIndex) => (
                          <li key={descIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-2">•</span>
                            <span className="text-muted-foreground">{desc}</span>
                          </li>
                        ))}
                      </ul></>
                    
                    )}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <div className="bg-card p-8 rounded-2xl shadow-lg border max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Transition to Tech</h3>
              <p className="text-muted-foreground">
                My experience in education and leadership has provided me with strong communication skills, 
                problem-solving abilities, and the capacity to work effectively in team environments. 
                These skills are now being applied to my passion for frontend development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
