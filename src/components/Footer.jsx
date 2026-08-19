import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <span className="text-2xl font-black italic tracking-tighter text-white">KV<span className="text-cyan-500">.</span></span>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-4">Precision in code. Vision in data.</p>
        </div>
        
        <div className="flex gap-12">
          <a href="https://linkedin.com/in/kaviyarasuv" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/kavivpk" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">GitHub</a>
          <a href="https://leetcode.com/u/kavivpk/" target="_blank" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">LeetCode</a>
          <a href="https://www.geeksforgeeks.org/profile/kavivpk" target="_blank" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">GFG</a>
          <a href="mailto:kaviyarasu4980@gmail.com" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Email</a>
        </div>

        <div className="text-right flex flex-col items-end">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">© 2026 Kaviyarasu V.</p>
          <p className="text-[10px] font-bold text-slate-700 italic mt-1">Design matters. Code logic matters more.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
