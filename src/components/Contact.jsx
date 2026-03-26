import React from 'react';
import { Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-12">
              Let's build <br />
              <span className="text-cyan-500 italic">together.</span>
            </h2>
            <div className="space-y-12">
              <a href="mailto:kaviyarasu4980@gmail.com" className="group block">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Send an enquiry</p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">kaviyarasu4980@gmail.com</span>
                  <ArrowUpRight size={32} className="text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
              <div className="block">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Current Location</p>
                <span className="text-2xl md:text-4xl font-bold text-white italic">Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-12 bg-white/[0.03]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:border-cyan-500 outline-none transition-colors" placeholder="Kaviyarasu V" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:border-cyan-500 outline-none transition-colors" placeholder="kavi@example.com" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Your Perspective</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:border-cyan-500 outline-none transition-colors resize-none" placeholder="Let's talk about the project..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-6 flex items-center justify-center gap-4 text-lg">
                Submit Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
