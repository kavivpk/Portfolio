import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, desc, tech, github, url, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -10 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card group overflow-hidden flex flex-col h-full border-white/5 hover:border-cyan-500/30"
  >
    <div className="aspect-[16/10] bg-mesh relative p-12 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors" />
      <span className="text-8xl font-black text-white/5 group-hover:text-white/10 transition-all select-none italic tracking-tighter">
        {title.charAt(0)}
      </span>
      <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <a href={github} target="_blank" className="p-2 bg-black/50 backdrop-blur-md rounded-lg text-white hover:text-cyan-400">
          <Github size={20} />
        </a>
      </div>
    </div>
    
    <div className="p-10 flex flex-col flex-grow">
      <div className="flex gap-2 mb-6">
        {tech.map(t => (
          <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-black uppercase tracking-widest text-cyan-400">
            {t}
          </span>
        ))}
      </div>
      <h3 className="text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 flex-grow">
        {desc}
      </p>
      <a href={github} target="_blank" className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group/link">
        View Case Study 
        <div className="w-8 h-[2px] bg-cyan-500 scale-x-50 group-hover/link:scale-x-100 transition-transform origin-left" />
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Study Group Finder",
      desc: "A full-stack collaborative ecosystem for students. Built with a focus on real-time interactions and secure data handling.",
      tech: ["Spring Boot", "Java", "SQL"],
      github: "https://github.com/kavivpk",
      url: "#"
    },
    {
      title: "Financial Engine",
      desc: "Advanced data visualization engine built for organizational KPIs. Transforming raw financial data into interactive narratives.",
      tech: ["Power BI", "Excel", "DAX"],
      github: "https://github.com/kavivpk",
      url: "#"
    },
    {
      title: "Tactile Calculator",
      desc: "A minimalist web calculator focusing on precise arithmetic and responsive UX. Built for speed and reliability.",
      tech: ["JS", "CSS", "HTML"],
      github: "https://github.com/kavivpk",
      url: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
              Selected <span className="text-cyan-500 italic">Work.</span>
            </h2>
          </div>
          <a href="https://github.com/kavivpk" target="_blank" className="btn-primary">
            All Projects
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
