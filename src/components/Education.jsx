import React from 'react';
import { motion } from 'framer-motion';

const EducationItem = ({ degree, school, period, details }) => (
  <div className="py-12 border-t border-white/5 last:border-b">
    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
      <h3 className="text-3xl font-black text-white tracking-tighter">{degree}</h3>
      <span className="text-sm font-black text-cyan-500 uppercase tracking-widest">{period}</span>
    </div>
    <p className="text-xl text-gray-400 font-light italic mb-2">{school}</p>
    <p className="text-gray-500 max-w-2xl">{details}</p>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title"><span className="section-title-icon">🎓</span>Academic <span className="text-cyan-500 italic">Foundation.</span></h2>
        
        <div className="mt-20">
          <EducationItem 
            degree="B.Tech Information Technology"
            school="V.S.B. Engineering College, Tamil Nadu"
            period="2023 - 2027"
            details="Focusing on Advanced Java, Database Systems, and Analytical Modeling. Actively involved in technical research and development."
          />
          <EducationItem 
            degree="Higher Secondary Education"
            school="Vidiyal Matric Hr. Sec. School, Trichy"
            period="2022"
            details="Core focus on Computer Science and Mathematics. Achieved 80% aggregate."
          />
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-10">
          <div className="glass-card p-10 flex flex-col justify-between aspect-square">
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Certification</span>
            <p className="text-2xl font-bold text-white tracking-tight">Data Analytics</p>
            <p className="text-cyan-500 font-black text-xs uppercase tracking-widest">Microsoft · TCS · Deloitte</p>
          </div>
          <div className="glass-card p-10 flex flex-col justify-between aspect-square">
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Certification</span>
            <p className="text-2xl font-bold text-white tracking-tight">Java Programming</p>
            <p className="text-cyan-500 font-black text-xs uppercase tracking-widest">Infosys · NPTEL</p>
          </div>
          <div className="glass-card p-10 flex flex-col justify-between aspect-square">
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Achievement</span>
            <p className="text-2xl font-bold text-white tracking-tight">HACKSAGON 2026</p>
            <p className="text-cyan-500 font-black text-xs uppercase tracking-widest">Top Finalist · 2100+ Teams</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
