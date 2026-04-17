import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'w-[90%] md:w-[600px]' : 'w-[95%] md:w-[800px]'}`}>
      <nav 
        ref={navRef}
        className={`flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500 clip-pill ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border border-[#333] shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <span className="font-sans font-bold text-xl tracking-tighter text-textMain uppercase">
          SCALE<span className="text-accent">.</span>
        </span>
        
        <div className="hidden md:flex gap-8">
          <a href="#features" className="text-textDark hover:text-textMain hover:-translate-y-[1px] transition-transform text-sm font-sans">Features</a>
          <a href="#protocol" className="text-textDark hover:text-textMain hover:-translate-y-[1px] transition-transform text-sm font-sans">Protocol</a>
          <a href="#pricing" className="text-textDark hover:text-textMain hover:-translate-y-[1px] transition-transform text-sm font-sans">Pricing</a>
        </div>

        <button className="relative overflow-hidden group bg-accent text-background font-bold py-2 px-6 rounded-full text-sm font-sans hover:scale-[1.03] transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
          <span className="relative z-10 group-hover:text-white transition-colors">Start Tracking</span>
          <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
        </button>
      </nav>
    </div>
  );
}
