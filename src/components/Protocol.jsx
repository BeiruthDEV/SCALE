import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Protocol() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
        
        gsap.to(card, {
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
          scale: 0.9,
          opacity: 0.5,
          filter: "blur(10px)",
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={container} className="relative w-full bg-background overflow-hidden">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <ProtocolCard 
        number="01" 
        title="TRACKING BRUTALISTA" 
        desc="Registre seus treinos de forma ágil. Cada série, repetição e carga fica armazenada no banco de dados da sua evolução."
        tags={["Cargas", "Séries", "Repetições"]}
        status="ACTIVE"
      >
        <div className="w-full h-full flex flex-col items-center justify-center relative opacity-90 p-4">
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/50"></div>
          
          <div className="absolute top-2 left-2 text-[10px] font-mono text-accent/50">SYS.LOG</div>
          <div className="absolute bottom-2 right-2 text-[10px] font-mono text-accent/50 animate-pulse">RECORDING...</div>

          <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-40 md:h-40 animate-[spin_10s_linear_infinite]">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#F97316" strokeWidth="2" strokeDasharray="10 10" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#E8E4DD" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="10" fill="#F97316" opacity="0.2" className="animate-pulse" />
          </svg>
          
          <div className="mt-8 font-mono text-xs text-textMain/70 bg-[#111] px-3 py-1.5 rounded-md border border-white/10 shadow-lg">
            DATA.STREAM: CONNECTED
          </div>
        </div>
      </ProtocolCard>

      <ProtocolCard 
        number="02" 
        title="DIETA SINTÉTICA" 
        desc="Não apenas levante peso. Domine sua janela metabólica com monitoramento preciso de macros e calorias diárias."
        tags={["Proteínas", "Carboidratos", "Gorduras"]}
        status="SYNC"
      >
        <div className="w-full h-full flex flex-col justify-center relative overflow-hidden opacity-90 p-6">
           {/* Decorative Corner Borders */}
           <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/50"></div>
           <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/50"></div>
           
           <div className="absolute top-2 left-2 text-[10px] font-mono text-accent/50">METABOLIC.RATE</div>
           
           <div className="flex justify-between items-end w-full h-32 mb-6">
             {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <div key={i} className="w-4 bg-accent/10 rounded-t-sm relative group overflow-hidden" style={{ height: `${h}%` }}>
                  <div className="absolute bottom-0 w-full bg-accent transition-all duration-500 group-hover:h-full" style={{ height: `${h/2}%` }}></div>
                </div>
             ))}
           </div>
           
           <div className="w-full h-[1px] bg-white/10 relative">
             <div className="absolute top-0 bottom-0 w-8 h-[2px] bg-accent shadow-[0_0_15px_#F97316] animate-[scan_3s_ease-in-out_infinite_alternate]" style={{ left: '0%', top: '-0.5px' }}></div>
           </div>
           
           <div className="absolute bottom-2 left-4 text-[10px] font-mono text-textDark/60">
             MACROS CALC... 100%
           </div>
        </div>
      </ProtocolCard>

      <ProtocolCard 
        number="03" 
        title="EVOLUÇÃO INEVITÁVEL" 
        desc="Acompanhe recordes pessoais e sobrecarga progressiva através de telemetria implacável."
        tags={["1RM", "Tonelagem", "Frequência"]}
        status="OPTIMIZED"
      >
        <div className="w-full h-full flex flex-col items-center justify-center relative opacity-90 p-6">
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent/50"></div>
          
          <div className="absolute top-2 right-2 text-[10px] font-mono text-accent/50">TELEMETRY.LIVE</div>

          <svg viewBox="0 0 200 100" className="w-full h-32 mt-4 overflow-visible">
            <path 
              d="M10,80 L40,70 L60,90 L90,40 L120,50 L160,20 L190,30" 
              fill="none" stroke="#F97316" strokeWidth="3"
            />
            {/* Soft glow underlying the line */}
            <path 
              d="M10,80 L40,70 L60,90 L90,40 L120,50 L160,20 L190,30" 
              fill="none" stroke="#F97316" strokeWidth="8" opacity="0.2"
              className="blur-sm"
            />
            <circle cx="160" cy="20" r="6" fill="#F97316" opacity="0.4" className="animate-ping" />
            <circle cx="160" cy="20" r="3" fill="#fff" />
          </svg>
          
          <div className="absolute bottom-6 flex gap-6 w-full justify-center">
             <div className="text-center font-mono">
               <div className="text-[10px] text-textDark/50 mb-1">VOL</div>
               <div className="text-sm font-bold text-accent px-2 py-1 bg-accent/10 rounded">+12%</div>
             </div>
             <div className="text-center font-mono border-l border-white/5 pl-6">
               <div className="text-[10px] text-textDark/50 mb-1">INTENSITY</div>
               <div className="text-sm font-bold text-accent px-2 py-1 bg-accent/10 rounded">9.5</div>
             </div>
          </div>
        </div>
      </ProtocolCard>
      
      <style>{`
        @keyframes scan {
          0% { left: 0%; opacity: 0.5; }
          50% { opacity: 1; }
          100% { left: calc(100% - 2rem); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

function ProtocolCard({ number, title, desc, tags, status, children }) {
  return (
    <div className="protocol-card sticky top-0 min-h-[100dvh] w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-24 bg-transparent border-t border-white/5 py-12 md:py-0">
      
      {/* Dim container bg for the local stacking card */}
      <div className="absolute inset-0 bg-background/95 z-0"></div>

      <div className="w-full md:w-1/2 flex flex-col items-start gap-6 z-10 relative mt-12 md:mt-0">
        <div className="flex items-center gap-4">
          <span className="font-mono text-3xl md:text-5xl text-accent font-bold">_{number}</span>
          <span className="px-2.5 py-1 bg-accent/10 border border-accent/20 rounded text-[10px] font-mono text-accent uppercase tracking-widest animate-pulse">
            {status}
          </span>
        </div>
        
        <h2 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-textMain uppercase leading-none tracking-tight">{title}</h2>
        <p className="font-sans text-textDark text-lg md:text-xl max-w-md mt-4 leading-relaxed">{desc}</p>
        
        {/* Additional Info / Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3 mt-4">
          {tags && tags.map((tag, i) => (
            <span key={i} className="px-3 py-1.5 bg-primary/80 border border-white/10 rounded-full font-mono text-[11px] md:text-xs text-textDark/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/80"></span>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-[60vh] flex items-center justify-center p-4 md:p-8 relative z-10 w-full max-w-lg mt-8 md:mt-0">
        {/* Complex UI Mockup Wrapper */}
        <div className="w-full h-full max-w-md max-h-[450px] border border-white/10 rounded-2xl bg-[#0d0d0d]/80 backdrop-blur-xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
          
          {/* Header Bar */}
          <div className="w-full h-10 bg-black/60 border-b border-white/5 flex items-center justify-between px-4 z-20">
             <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
             </div>
             <div className="font-mono text-[10px] text-textDark/40">MODULE_EXE_{number}</div>
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1 w-full flex items-center justify-center p-2 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50"></div>
            {children}
          </div>

        </div>
      </div>
      
    </div>
  );
}
