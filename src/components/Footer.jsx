import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    scrollToSection('home');
  };

  return (
    <footer className="relative py-12 bg-transparent overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              YASSIR<span className="text-primary">.KZ</span>
            </h3>
            <p className="text-slate-400 max-w-xs mx-auto md:mx-0">
              Transforming ideas into digital reality through clean code and modern design.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-slate-400 hover:text-white transition-colors interactive bg-transparent border-none cursor-pointer">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition-colors interactive bg-transparent border-none cursor-pointer">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-white transition-colors interactive bg-transparent border-none cursor-pointer">Works</button>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-bold text-white mb-6">Let's Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Yassir-kezzi" className="p-3 rounded-full glass group interactive">
                <i className="bi bi-github text-slate-400 group-hover:text-white transition-colors text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/yassir-kezzi-530383283/" className="p-3 rounded-full glass group interactive">
                <i className="bi bi-linkedin text-slate-400 group-hover:text-white transition-colors text-xl"></i>
              </a>
              <a href="mailto:kezziyassir005@gmail.com" className="p-3 rounded-full glass group interactive">
                <i className="bi bi-envelope text-slate-400 group-hover:text-white transition-colors text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-10 border-white/5" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm flex items-center gap-2">
            Crafted with <i className="bi bi-heart-fill text-rose-500 mx-1"></i> by Yassir Kezzi
          </p>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full glass group hover:bg-primary transition-all interactive"
          >
            <i className="bi bi-arrow-up text-slate-400 group-hover:text-white"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;