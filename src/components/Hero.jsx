import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 bg-mesh">
      {/* Dynamic Glows */}
      <div className="glow-blob w-[500px] h-[500px] bg-cyan-500/20 top-[-100px] right-[-100px]" />
      <div className="glow-blob w-[400px] h-[400px] bg-blue-600/10 bottom-[-100px] left-[-100px]" />

      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-8 inline-block">
            Pre-Final Year IT Student
          </span>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
            KAVIYARASU <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">V.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Architecting high-performance <span className="text-white font-medium">Java backends</span> and distilling complex data into actionable <span className="text-white font-medium">insights</span>.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a href="#projects" className="btn-primary flex items-center gap-3 group">
            Explore My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/resume.pdf" className="text-white font-bold px-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-3">
            <Download size={20} />
            Get Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex justify-center gap-8"
        >
          <a href="https://github.com/kavivpk" target="_blank" className="text-gray-500 hover:text-cyan-400 transition-colors">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/kaviyarasuv" target="_blank" className="text-gray-500 hover:text-cyan-400 transition-colors">
            <Linkedin size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
