import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-white text-center md:text-left">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group interactive">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <i className="bi bi-envelope w-6 h-6"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-tighter">Email</p>
                  <p className="text-slate-200">kezziyassir005@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group interactive">
                <div className="p-4 rounded-full bg-secondary/10 border border-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <i className="bi bi-telephone w-6 h-6"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-tighter">Phone</p>
                  <p className="text-slate-200">+212 682 486 661</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group interactive">
                <div className="p-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <i className="bi bi-geo-alt w-6 h-6"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-tighter">Location</p>
                  <p className="text-slate-200">Rabat, Morocco</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-64 rounded-2xl overflow-hidden glass">
            <img src="/images/contact1.png" className="w-full h-full object-cover opacity-50" alt="Contact" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <form className="space-y-6">
            <div className="relative group">
              <i className="bi bi-person absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors"></i>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-primary/50 transition-all"
                required 
              />
            </div>
            <div className="relative group">
              <i className="bi bi-envelope absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors"></i>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-primary/50 transition-all"
                required 
              />
            </div>
            <div className="relative group">
              <i className="bi bi-chat-dots absolute left-4 top-6 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors"></i>
              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-primary/50 transition-all resize-none"
                required 
              />
            </div>
            <button type="submit" className="btn-premium btn-premium-primary w-full justify-center py-4 text-lg">
              Send Message <i className="bi bi-send ms-2"></i>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;