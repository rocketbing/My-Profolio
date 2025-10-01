import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen,MapPinMinusInside,CalendarDays } from "lucide-react";
import { certification } from "../data/certification";
import { education } from "../data/education";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My learning journey in technology and continuous skill development
            </p>
          </motion.div>
          <div className={education.length > 1 ? "grid md:grid-cols-2 gap-8 mb-16" : "mb-16"}>
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="bg-card p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground mb-2"><CalendarDays size={20} style={{display:'inline-block',marginRight:'5px'}}/>{edu.period}</p>
                    <p className="text-muted-foreground"><MapPinMinusInside size={20} style={{display:'inline-block',marginRight:'5px'}}/>{edu.location}</p>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className={certification.length > 1 ? "grid md:grid-cols-2 gap-8 mb-16" : "mb-16"}>
            {certification.map((cer, index) => (
              <motion.div
                key={cer.id}
                className="bg-card p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {index === 0 ? (
                      <Award size={24} className="text-primary" />
                    ) : (
                      <BookOpen size={24} className="text-primary" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{cer.degree}</h3>
                    <p className="text-primary font-medium mb-2">{cer.institution}</p>
                    <p className="text-muted-foreground text-sm mb-3">{cer.period}</p>
                    <p className="text-muted-foreground mb-4">{cer.description}</p>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-primary">Status:</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        cer.grade === 'Certified' || cer.grade === 'Ongoing'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {cer.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-card p-8 rounded-2xl shadow-lg border"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <GraduationCap size={32} className="text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Self-Directed Learning</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                My journey in frontend development has been largely self-directed, driven by passion and curiosity. 
                I've completed numerous online courses, built personal projects, and continuously stay updated with 
                the latest technologies and best practices in web development.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Hours of Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Curiosity</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
