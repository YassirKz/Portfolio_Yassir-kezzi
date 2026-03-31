import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML5', img: '/images/html.jpg' },
  { name: 'CSS3', img: '/images/CSS.png' },
  { name: 'BOOTSTRAP5', img: '/images/bootstrap-logo.png' },
  { name: 'JAVASCRIPT', img: '/images/javascript-logo.png' },
  { name: 'React', img: '/images/react-logo.png' },
  { name: 'Php', img: '/images/php-logo.png' },
  { name: 'MySQL', img: '/images/MySQL.png' },
  { name: 'PYTHON', img: '/images/python.png' },
  { name: 'Git', img: '/images/git.png' },
  { name: 'Github', img: '/images/github.png' },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Skills & <span className="text-gradient">Abilities</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          I've worked with a variety of technologies in the web development world. 
          From front-end frameworks to back-end databases.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {skillsData.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.05 }}
            className="glass-card p-6 flex flex-col items-center justify-center gap-4 text-center group interactive"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors" />
              <img 
                src={skill.img} 
                className="relative w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                alt={skill.name} 
              />
            </div>
            <h5 className="font-bold text-slate-300 group-hover:text-white transition-colors">{skill.name}</h5>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;