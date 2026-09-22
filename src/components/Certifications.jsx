import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Eye, Download, CheckCircle2, ShieldCheck, X } from 'lucide-react';

const certificates = [
  {
    id: 'infosys-internship',
    title: 'Internship 6.0 (B3) Edusync : Development of Study Group Finder & Collaboration Platform',
    issuer: 'Infosys Springboard',
    category: 'internship',
    date: 'Jan 2026',
    issuedDate: 'Issued: Jan 13, 2026',
    tenure: 'Sep 15, 2025 – Nov 25, 2025',
    type: 'Certificate of Completion',
    description: 'Successfully developed and deployed the Edusync platform for study group matching and peer collaboration with Spring Boot, MySQL, and JWT role-based security.',
    skills: ['Spring Boot', 'MySQL', 'Full-Stack Dev', 'Agile Collaboration', 'RBAC'],
    image: '/certificates/images/infosys-internship-edusync.png',
    pdf: '/certificates/infosys-internship-edusync.pdf',
    verifyUrl: 'https://verify.onwingspan.com',
    credentialId: 'Wingspan QR Verified',
    accentColor: 'from-blue-500/20 to-cyan-500/20',
    badgeColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20'
  },
  {
    id: 'tata-genai-data',
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata (via Forage)',
    category: 'data-ai',
    date: 'Feb 2026',
    issuedDate: 'Issued: Feb 8, 2026',
    tenure: 'February 2026',
    type: 'Certificate of Completion',
    description: 'Completed practical simulation tasks in exploratory data analysis & risk profiling, predicting delinquency with AI, and crafting business reports for collections strategy.',
    skills: ['GenAI & LLMs', 'Risk Profiling', 'Predictive Modeling', 'Data Storytelling', 'Delinquency AI'],
    image: '/certificates/images/tata-genai-data-analytics.png',
    pdf: '/certificates/tata-genai-data-analytics.pdf',
    credentialId: 'Forage: ePaRZrCR9Do6p2r9n',
    accentColor: 'from-blue-600/20 to-indigo-600/20',
    badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20'
  },
  {
    id: 'deloitte-data-analytics',
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte (via Forage)',
    category: 'data-ai',
    date: 'Feb 2026',
    issuedDate: 'Issued: Feb 5, 2026',
    tenure: 'Jan 2026 – Feb 2026',
    type: 'Certificate of Completion',
    description: 'Completed enterprise job simulation modules covering practical data analysis, forensic technology, hypothesis validation, and executive business insights.',
    skills: ['Data Analysis', 'Forensic Technology', 'Business Analytics', 'Client Advisory'],
    image: '/certificates/images/deloitte-data-analytics.png',
    pdf: '/certificates/deloitte-data-analytics.pdf',
    credentialId: 'Forage: 6BpJJiuurSPMwCHHy',
    accentColor: 'from-emerald-500/20 to-teal-500/20',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
  },
  {
    id: 'infosys-python',
    title: 'Python Foundation Certification',
    issuer: 'Infosys Springboard',
    category: 'programming',
    date: 'Oct 2024',
    issuedDate: 'Issued: Oct 27, 2024',
    tenure: 'October 2024',
    type: 'Certificate of Achievement',
    description: 'Comprehensive certification demonstrating deep proficiency in core Python programming, data structures, algorithms, modular coding, and object-oriented architecture.',
    skills: ['Python Core', 'Data Structures', 'OOPs', 'Algorithms', 'Problem Solving'],
    image: '/certificates/images/infosys-python-foundation.png',
    pdf: '/certificates/infosys-python-foundation.pdf',
    verifyUrl: 'https://verify.onwingspan.com',
    credentialId: 'Wingspan QR Verified',
    accentColor: 'from-amber-500/20 to-orange-500/20',
    badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20'
  },
  {
    id: 'codealpha-powerbi',
    title: 'Power BI Internship Selection & Program',
    issuer: 'CodeAlpha',
    category: 'internship',
    date: 'Jan 2026',
    issuedDate: 'Dated: Jan 9, 2026',
    tenure: 'Jan 10, 2026 – Feb 10, 2026',
    type: 'Internship Offer & Program Letter',
    description: 'Selected for hands-on Power BI internship focused on data modeling, DAX measures, automated KPI reporting pipelines, and interactive executive dashboards.',
    skills: ['Power BI', 'DAX Measures', 'KPI Dashboards', 'Data Modeling', 'ETL Pipelines'],
    image: '/certificates/images/codealpha-powerbi-internship.png',
    pdf: '/certificates/codealpha-powerbi-internship.pdf',
    credentialId: 'Student ID: CA/DF1/12486',
    accentColor: 'from-purple-500/20 to-pink-500/20',
    badgeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20'
  }
];

const categories = [
  { key: 'all', label: 'All Credentials' },
  { key: 'internship', label: 'Internships' },
  { key: 'data-ai', label: 'Data & AI' },
  { key: 'programming', label: 'Programming' },
];

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = activeCategory === 'all'
    ? certificates
    : certificates.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="py-32 px-6 relative">
      {/* Background ambient lighting */}
      <div className="glow-blob w-[450px] h-[450px] bg-cyan-500/10 top-1/4 left-[-150px]" />
      <div className="glow-blob w-[400px] h-[400px] bg-blue-600/10 bottom-1/4 right-[-150px]" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
            <ShieldCheck size={16} /> Verified Credentials
          </div>
          <h2 className="section-title mb-4">
            <span className="section-title-icon">📜</span>
            Certifications & <span className="text-cyan-500 italic">Honors.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Industry-recognized certifications and job simulations demonstrating verified expertise across AI, Data Analytics, and Full-Stack Engineering.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,245,255,0.4)]'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedCert(cert)}
                className="glass-card group overflow-hidden flex flex-col h-full border-white/10 hover:border-cyan-500/40 relative cursor-pointer"
              >
                {/* Certificate Image Preview Header */}
                <div className="aspect-[16/10] bg-black/40 relative overflow-hidden border-b border-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top filter brightness-90 contrast-105 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                  {/* Issuer pill */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border backdrop-blur-md ${cert.badgeColor}`}>
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Click to preview overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
                    <span className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black font-black text-xs uppercase tracking-wider rounded-lg shadow-lg">
                      <Eye size={16} /> Click to Preview
                    </span>
                  </div>

                  {/* Date badge */}
                  <span className="absolute bottom-3 right-4 text-[11px] font-bold text-gray-300 bg-black/60 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
                    {cert.date}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest block mb-1">
                      {cert.type}
                    </span>
                    <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm font-light leading-relaxed my-4 flex-grow">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map(s => (
                      <span
                        key={s}
                        className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-semibold text-gray-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1.5 truncate" title={cert.credentialId}>
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span className="truncate font-mono text-[11px] text-gray-400">{cert.credentialId}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium mt-1 block">{cert.tenure}</span>
                  </div>
                </div>

                {/* Action Buttons — sit outside flex-grow so always at bottom */}
                <div className="px-8 pb-6 grid grid-cols-2 gap-2">
                  <div className="w-full py-2.5 px-3 bg-white/5 group-hover:bg-cyan-500/20 text-white group-hover:text-cyan-300 border border-white/10 group-hover:border-cyan-500/40 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                    <Eye size={15} className="text-cyan-400" /> View Certificate
                  </div>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-2.5 px-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={15} /> PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-[#121212] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="pr-4 truncate">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">{selectedCert.issuer}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-xs text-gray-400">{selectedCert.issuedDate}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight truncate mt-0.5">
                    {selectedCert.title}
                  </h4>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                  title="Close preview"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Certificate Image */}
              <div className="p-4 sm:p-8 overflow-y-auto flex-grow bg-black/60 flex items-center justify-center">
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl max-w-3xl">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain max-h-[62vh] rounded-lg"
                  />
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="px-6 py-4 border-t border-white/10 bg-black/50 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-gray-400">
                  <span className="text-slate-500">Verification ID: </span>
                  <span className="font-mono text-cyan-300 font-semibold">{selectedCert.credentialId}</span>
                </div>

                <div className="flex items-center gap-3">
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-bold text-cyan-400 hover:text-white border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center gap-2"
                    >
                      <ShieldCheck size={16} /> Verify Online
                    </a>
                  )}
                  <a
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2 px-5 text-xs font-black uppercase tracking-wider flex items-center gap-2"
                  >
                    <Download size={14} /> Open Full PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
