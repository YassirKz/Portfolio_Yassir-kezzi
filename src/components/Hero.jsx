import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
        >
          Available for Hire
        </motion.span>
        
        <h1 className="heading-xl mb-6">
          Hi, I'm <br />
          <span className="text-gradient">Yassir Kezzi</span>
        </h1>
        
        <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
          A passionate <span className="text-white font-semibold">Full-Stack Developer</span> crafting digital experiences that are as beautiful as they are functional.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#projects" className="btn-premium btn-premium-primary interactive">
            View My Work <i className="bi bi-arrow-right ms-2"></i>
          </a>
          <button className="btn-premium btn-premium-outline interactive">
            Download CV <i className="bi bi-download ms-2"></i>
          </button>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Yassirkz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors interactive"
          >
            <i className="bi bi-github text-2xl"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/yassir-kezzi-530383283/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors interactive"
          >
            <i className="bi bi-linkedin text-2xl"></i>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex justify-center"
      >
        {/* Glow effect behind image */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src="/images/OFF-img.png" 
              alt="Yassir Kezzi" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating tech icons or badges can be added here */}
          <div className="absolute -bottom-4 -right-4 glass p-4 rounded-2xl shadow-xl border border-white/10 animate-bounce">
            <span className="text-2xl">🚀</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;