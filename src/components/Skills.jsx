import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, items }) => (
  <div className="glass-card p-10 group hover:border-cyan-500/50 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl -z-10 group-hover:bg-cyan-500/10 transition-colors" />
    <h3 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-6">{name}</h3>
    <ul className="space-y-4">
      {items.map(item => (
        <li key={item} className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const data = [
    { name: "Backend Core", items: ["Java (Full Stack)", "Spring Boot", "Spring JPA", "SQL"] },
    { name: "Development Tools", items: ["Git & GitHub", "VS Code", "Maven", "REST APIs"] },
    { name: "Data & Frontend", items: ["Power BI", "React.js", "Javascript", "Tailwind CSS"] }
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title"><span className="section-title-icon">⚙️</span>Technical <span className="text-cyan-500 italic">Arsenal.</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((col, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard {...col} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
