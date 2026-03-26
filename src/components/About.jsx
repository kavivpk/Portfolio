import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-[100px] -z-10" />
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative group">
              <div className="absolute inset-0 bg-mesh opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="w-full h-full flex items-center justify-center text-[15rem] font-black text-white/5 select-none italic">
                KV
              </div>
              <div className="absolute bottom-10 left-10">
                <p className="text-4xl font-black text-white tracking-tighter">Kaviyarasu V.</p>
                <p className="text-cyan-400 font-bold tracking-widest uppercase text-xs">V.S.B Engineering College '27</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-6 block">Biography</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
              A blend of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Logic</span> and <span className="italic">Vision.</span>
            </h2>
            <div className="space-y-8 text-gray-400 text-xl leading-relaxed font-light">
              <p>
                I am a passionate <span className="text-white font-medium">B.Tech IT student</span> dedicated to mastering the art of software engineering. My focus lies in building robust backends with Java and Spring Boot while leveraging Data Analytics to drive meaningful solutions.
              </p>
              <p>
                With a background in both <span className="text-white font-medium">multi-national corporate environments</span> (Infosys) and <span className="text-white font-medium">dynamic startups</span>, I bring a versatile perspective to every project I touch.
              </p>
            </div>
            
            <div className="mt-16 flex gap-12">
              <div>
                <p className="text-4xl font-black text-white">02+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Internships</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">05+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Project Wins</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
