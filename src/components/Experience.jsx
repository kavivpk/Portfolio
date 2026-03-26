import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ company, role, period, details, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative grid md:grid-cols-5 gap-10 py-16 border-t border-white/5 group"
  >
    <div className="md:col-span-1">
      <span className="text-sm font-black text-slate-500 uppercase tracking-widest">{period}</span>
    </div>
    <div className="md:col-span-2">
      <h3 className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tighter mb-2">{company}</h3>
      <p className="text-cyan-500 font-bold uppercase text-xs tracking-[0.2em]">{role}</p>
    </div>
    <div className="md:col-span-2">
      <p className="text-gray-400 leading-relaxed font-light text-lg">
        {details}
      </p>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      company: "Infosys Springboot",
      role: "Backend Intern",
      period: "2025 Sept - Dec",
      details: "Architected a collaborative Study Group Finder platform. Implemented secure user authentication and optimized database interactions for high-performance retrieval."
    },
    {
      company: "Fantastic Solution",
      role: "Frontend Intern",
      period: "2024 - 2025",
      details: "Crafted high-fidelity user interfaces and streamlined frontend workflows. Focused on responsive design and seamless user experiences across devices."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title"><span className="section-title-icon">💼</span>Career <span className="text-cyan-500 italic">Timeline.</span></h2>
        <div className="mt-20 border-b border-white/5">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
