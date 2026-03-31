import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    image: '/images/ConverterAppImg.png',
    title: 'USD ↔ MAD Converter',
    description: 'A fully responsive currency conversion platform with real-time calculations and a sleek interface.',
    techs: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
    liveLink: '#',
    codeLink: 'https://github.com/Yassirkz/Converter'
  },
  {
    image: '/images/QuizAppImg.png', 
    title: 'Quiz Academy',
    description: 'A dynamic PHP web application for interactive learning, featuring database-driven questions and scoring.',
    techs: ['PHP', 'MySQL', 'CSS', 'Bootstrap'],
    liveLink: '#', 
    codeLink: 'https://github.com/Yassirkz/quizAcademy' 
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Key <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A selection of personal and academic projects that showcase my development skills.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden flex flex-col interactive group"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={project.image} 
                className="w-full h-full object-cover" 
                alt={project.title} 
              />
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary transition-colors text-white"
                >
                  <i className="bi bi-github text-xl"></i>
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary transition-colors text-white"
                >
                  <i className="bi bi-box-arrow-up-right text-xl"></i>
                </a>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={project.liveLink} 
                  className="btn-premium btn-premium-primary text-sm py-3 px-6 flex-1 justify-center text-center whitespace-nowrap"
                >
                  Live Demo
                </a>
                <a 
                  href={project.codeLink} 
                  className="btn-premium btn-premium-outline text-sm py-3 px-6 flex-1 justify-center text-center whitespace-nowrap"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
