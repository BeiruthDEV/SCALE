import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-[100dvh] w-full flex items-end pb-24 px-8 md:px-24">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 flex flex-col gap-6">
        <h1 className="flex flex-col">
          <span className="hero-anim font-sans font-bold text-2xl md:text-4xl text-textDark tracking-tight uppercase mb-2">
            Trust your Instinct
          </span>
          <span className="hero-anim font-drama italic text-5xl md:text-8xl text-textMain leading-[0.9] tracking-tighter">
            Defy your <span className="text-accent underline decoration-accent decoration-8 underline-offset-4">Limits.</span>
          </span>
        </h1>
        
        <p className="hero-anim font-sans text-textDark text-lg md:text-xl max-w-lg mt-4 leading-relaxed">
          Log your training sessions, track progressive overload, and monitor your diet — all in one place. Built for those who actually train.
        </p>

        <div className="hero-anim mt-6">
          <button className="relative overflow-hidden group bg-accent text-background text-lg font-bold py-4 px-10 rounded-[2rem] hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_40px_-10px_#F97316]" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
            <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-3">
              Download App
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </span>
            <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
