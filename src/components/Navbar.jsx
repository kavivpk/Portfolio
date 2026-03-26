import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Tech', href: '#skills' },
    { name: 'Works', href: '#projects' },
    { name: 'Timeline', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-black italic tracking-tighter text-white">
          KV<span className="text-cyan-500">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-12">
          {menuItems.map(item => (
            <a key={item.name} href={item.href} className="nav-link uppercase text-[10px] font-black tracking-widest">
              {item.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-white text-black text-xs font-black uppercase rounded-lg hover:bg-cyan-400 transition-colors">
            Hire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-b border-white/10 p-10 flex flex-col gap-8 animate-in slide-in-from-top duration-300">
          {menuItems.map(item => (
            <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-white hover:text-cyan-400 transition-colors">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
