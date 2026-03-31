import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: 'Web & App Development',
    institution: 'Institute of New Technologies Information and Communication | NTIC',
    years: '2024 - Present',
    status: 'Pursuing',
    img: '/images/Ntic rabat.jpg',
  },
  {
    title: 'German Language Certification',
    institution: 'Rheinland Privatschule-Rheinland Institut',
    years: '2023 - 2024',
    status: 'Completed',
    img: '/images/RP.jpg',
  },
  {
    title: 'High School Diploma (Physics Sciences)',
    institution: 'Charif el Idrissi High School | CEIHS',
    years: '2020 - 2023',
    status: 'Completed',
    img: '/images/Charif el idrissi.jpg',
  },
];

const Education = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-gradient">Education</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto italic">
          "Education is not the learning of facts, but the training of the mind to think."
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 h-56 md:h-auto overflow-hidden">
                <img 
                  src={edu.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={edu.institution} 
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <i className="bi bi-mortarboard text-6xl"></i>
                </div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <i className="bi bi-mortarboard w-5 h-5"></i>
                  <span className="text-sm font-bold uppercase tracking-wider">{edu.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {edu.title}
                </h3>
                <p className="text-slate-300 mb-4 flex items-center gap-2">
                  <i className="bi bi-geo-alt w-4 h-4 text-slate-500"></i>
                  {edu.institution}
                </p>
                <div className="flex items-center gap-2 text-slate-400 font-medium">
                  <i className="bi bi-calendar-event w-4 h-4"></i>
                  {edu.years}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;