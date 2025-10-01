import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "../data/personalInfo";

const About = () => {
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img
                    src="/img/artPhoto.jpg"
                    alt="Steve Zhang"
                    className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  💻
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Hello, I'm Steve Zhang
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {personalInfo.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="bg-card p-4 rounded-2xl shadow-lg">
                    <h4 className="font-semibold text-primary mb-2">Experience</h4>
                    <p className="text-sm text-muted-foreground">4+ Years in Education & Leadership</p>
                  </div>

                  <div className="bg-card p-4 rounded-2xl shadow-lg">
                    <h4 className="font-semibold text-primary mb-2">Focus</h4>
                    <p className="text-sm text-muted-foreground">Frontend Development</p>
                  </div>

                  <div className="bg-card p-4 rounded-2xl shadow-lg">
                    <h4 className="font-semibold text-primary mb-2">Location</h4>
                    <p className="text-sm text-muted-foreground">Toronto, Canada</p>
                  </div>

                  <div className="bg-card p-4 rounded-2xl shadow-lg">
                    <h4 className="font-semibold text-primary mb-2">Status</h4>
                    <p className="text-sm text-muted-foreground">Available for Work</p>
                  </div>
                </div>

                <motion.div
                  className="flex gap-4 pt-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex-1 border-2 border-primary text-primary py-3 px-6 rounded-2xl text-center font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Contact Me
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="flex-1 border-2 border-primary text-primary py-3 px-6 rounded-2xl text-center font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Download CV
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
