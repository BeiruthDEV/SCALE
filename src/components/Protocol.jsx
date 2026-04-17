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
    <section id="protocol" ref={container} className="relative w-full bg-background">
      <ProtocolCard 
        number="01" 
        title="TRACKING BRUTALISTA" 
        desc="Registre seus treinos de forma ágil. Cada série, repetição e carga fica armazenada no banco de dados da sua evolução."
      >
        <div className="w-full h-full flex items-center justify-center opacity-80">
          <svg viewBox="0 0 100 100" className="w-48 h-48 animate-[spin_10s_linear_infinite]">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#F97316" strokeWidth="2" strokeDasharray="10 10" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#E8E4DD" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </ProtocolCard>

      <ProtocolCard 
        number="02" 
        title="DIETA SINTÉTICA" 
        desc="Não apenas levante peso. Domine sua janela metabólica com monitoramento preciso de macros e calorias diárias."
      >
        <div className="w-full h-full flex flex-col justify-center relative overflow-hidden opacity-80">
           <div className="grid grid-cols-6 gap-2 w-full ml-12">
             {Array.from({length: 24}).map((_, i) => (
                <div key={i} className="h-4 bg-[#222] rounded"></div>
             ))}
           </div>
           <div className="absolute top-0 bottom-0 w-1 bg-accent shadow-[0_0_15px_#F97316] animate-[scan_3s_ease-in-out_infinite_alternate]" style={{ left: '0%' }}></div>
        </div>
      </ProtocolCard>

      <ProtocolCard 
        number="03" 
        title="EVOLUÇÃO INEVITÁVEL" 
        desc="Acompanhe recordes pessoais e sobrecarga progressiva através de telemetria implacável."
      >
        <div className="w-full h-full flex items-center opacity-80">
          <svg viewBox="0 0 200 50" className="w-full">
            <path 
              d="M0,25 L40,25 L50,5 L60,45 L70,25 L200,25" 
              fill="none" stroke="#F97316" strokeWidth="3"
            />
          </svg>
        </div>
      </ProtocolCard>
      
      <style>{`
        @keyframes scan {
          0% { left: 10%; }
          100% { left: 90%; }
        }
      `}</style>
    </section>
  );
}

function ProtocolCard({ number, title, desc, children }) {
  return (
    <div className="protocol-card sticky top-0 h-[100dvh] w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-24 bg-background border-t border-white/5 py-12">
      
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6 z-10 mt-12 md:mt-0">
        <span className="font-mono text-3xl md:text-5xl text-accent font-bold">_{number}</span>
        <h2 className="font-sans font-bold text-4xl md:text-7xl text-textMain uppercase leading-none tracking-tight">{title}</h2>
        <p className="font-sans text-textDark text-lg md:text-xl max-w-md mt-4">{desc}</p>
      </div>

      <div className="w-full md:w-1/2 h-[40vh] md:h-full flex items-center justify-center p-8">
        <div className="w-full h-full max-w-sm max-h-[400px] border border-white/10 rounded-3xl bg-primary/50 backdrop-blur overflow-hidden flex items-center justify-center p-8">
          {children}
        </div>
      </div>
      
    </div>
  );
}
