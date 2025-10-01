import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/skills";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {  margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const SkillCard = ({ category, skillList, icon }) => (
    <motion.div
      className="bg-card p-6 rounded-2xl shadow-lg border"
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{category}</h3>
      </div>
      
      <div className="space-y-4">
        {skillList.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <SkillCard
              category="Frontend"
              skillList={skills.frontend}
              icon={<span className="text-2xl">🎨</span>}
            />
            
            <SkillCard
              category="Backend"
              skillList={skills.backend}
              icon={<span className="text-2xl">⚙️</span>}
            />
            
            <SkillCard
              category="Tools & Frameworks"
              skillList={skills.tools}
              icon={<span className="text-2xl">🛠️</span>}
            />
            
            <SkillCard
              category="Soft Skills"
              skillList={skills.soft}
              icon={<span className="text-2xl">🤝</span>}
            />
          </div>

          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <div className="bg-card p-8 rounded-2xl shadow-lg border max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
              <p className="text-muted-foreground">
                I'm passionate about staying up-to-date with the latest technologies and best practices. 
                Currently exploring advanced React patterns, TypeScript, and modern web development tools.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
