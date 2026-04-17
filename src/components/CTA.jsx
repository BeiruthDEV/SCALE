import React from 'react';

export default function CTA() {
  return (
    <section id="pricing" className="relative w-full py-40 px-6 md:px-12 bg-background flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl w-full flex flex-col items-center gap-8">
        <h2 className="font-sans font-bold text-5xl md:text-8xl text-textMain tracking-tighter uppercase">
          Comece agora.
        </h2>
        <p className="font-sans text-textDark text-xl md:text-2xl max-w-2xl mt-4">
          O código é aberto. Seus resultados não são. O IronLog está disponível no GitHub para lifters e engenheiros.
        </p>

        <a 
          href="https://github.com/BeiruthDEV/IronLog" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative overflow-hidden group bg-accent text-background text-2xl font-bold py-6 px-16 rounded-[3rem] hover:scale-[1.03] transition-transform duration-300 mt-12 shadow-[0_0_60px_-15px_#F97316]" 
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        >
          <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-4">
            Acessar o GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </span>
          <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
        </a>
      </div>
    </section>
  );
}
