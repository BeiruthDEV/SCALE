import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] rounded-t-[4rem] text-textDark/60 py-16 px-6 md:px-24 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12">
        <div className="md:col-span-2 flex flex-col items-start">
          <span className="font-sans font-bold text-2xl tracking-tighter text-textMain uppercase mb-2">
            SCALE<span className="text-accent">.</span>
          </span>
          <p className="font-sans max-w-sm mt-4 text-sm leading-relaxed">
            A dark-themed workout and nutrition tracking app for lifters and fitness enthusiasts. Built as a Software Engineering thesis.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-bold text-textMain uppercase text-sm tracking-wider mb-2">Protocol</h4>
          <a href="#" className="font-sans text-sm hover:text-textMain transition-colors">Training Log</a>
          <a href="#" className="font-sans text-sm hover:text-textMain transition-colors">Diet Track</a>
          <a href="#" className="font-sans text-sm hover:text-textMain transition-colors">Analytics</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-bold text-textMain uppercase text-sm tracking-wider mb-2">System</h4>
          <a href="https://github.com/BeiruthDEV/IronLog" target="_blank" rel="noopener" className="font-sans text-sm hover:text-textMain transition-colors">GitHub Repository</a>
          <a href="#" className="font-sans text-sm hover:text-textMain transition-colors">Releases</a>
          <a href="#" className="font-sans text-sm hover:text-textMain transition-colors">License</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 mt-4 gap-4">
        <p className="font-mono text-xs">© 2026 SCALE / BeiruthDEV.</p>
        <div className="flex items-center gap-2 bg-[#111] px-4 py-2 border border-white/5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
          <span className="font-mono text-xs text-textMain tracking-widest uppercase">System Operational</span>
        </div>
      </div>
    </footer>
  );
}
