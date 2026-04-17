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
        <div className="w-full h-full flex flex-col relative opacity-100 p-4 font-sans justify-center mt-4">
          <div className="w-full bg-[#111] rounded-xl border border-white/10 p-4 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
            
            <div className="flex justify-between items-center mb-4 pl-2">
               <div>
                 <span className="font-bold text-textMain text-sm block">Supino Reto</span>
                 <span className="text-[10px] text-textDark/60 font-mono">Peitoral • Barra</span>
               </div>
               <span className="text-[10px] font-mono text-accent animate-pulse bg-accent/10 px-2 py-1 rounded">Rest: 00:45</span>
            </div>
            
            {/* Table Header */}
            <div className="grid grid-cols-4 px-2 mb-2 text-[10px] text-textDark/40 font-mono tracking-widest text-center">
              <div>SET</div><div>KG</div><div>REPS</div><div>DONE</div>
            </div>
            
            {/* Table Rows (Mock) */}
            <div className="flex flex-col gap-1.5">
              {[1,2,3,4].map(i => {
                const isDone = i <= 2;
                const isCurrent = i === 3;
                return (
                  <div key={i} className={`grid grid-cols-4 items-center px-2 py-2.5 rounded-lg text-sm font-mono text-center transition-colors
                    ${isDone ? 'bg-transparent opacity-40' : ''} 
                    ${isCurrent ? 'bg-[#1a1a1a] border border-white/10 shadow-inner scale-[1.02]' : ''}
                    ${!isDone && !isCurrent ? 'bg-transparent border border-transparent' : ''}
                  `}>
                    <div className={isCurrent ? "text-accent font-bold" : ""}>{i}</div>
                    <div className="font-bold text-textMain">100</div>
                    <div className={`font-bold ${isCurrent ? "text-textMain" : "text-textMain"}`}>{isDone ? '8' : '-'}</div>
                    <div className="flex justify-center">
                      <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors cursor-pointer
                        ${isDone ? 'bg-accent/80 border-transparent shadow-[0_0_10px_#f9731640]' : 'border border-white/20 hover:border-accent'}
                        ${isCurrent ? 'border-accent/50' : ''}`}>
                        {isDone && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full mt-4 flex items-center justify-between pl-2">
              <span className="text-[10px] text-textDark/40 font-mono">Volume: <span className="text-textDark font-bold">1,600 kg</span></span>
              <button className="text-[10px] bg-white/5 hover:bg-white/10 text-textDark py-1 px-3 rounded uppercase font-bold tracking-widest transition-colors font-mono">+ Add Set</button>
            </div>
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
        <div className="w-full h-full flex flex-col relative opacity-100 p-4 justify-center">
          
          <div className="w-full bg-[#111] rounded-xl border border-white/10 p-5 shadow-2xl relative">
            <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-textDark/60 font-mono tracking-widest">CALORIAS CONSUMIDAS</span>
                <span className="text-4xl font-bold text-textMain font-mono leading-none tracking-tighter">1,750</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                 <span className="text-[10px] text-textDark/60 font-mono tracking-widest">META DIÁRIA</span>
                 <span className="text-sm font-bold text-accent font-mono">3,200</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: 'PROTEÍNAS', current: '120g', max: '200g', pct: 60, color: 'bg-[#F97316]' },
                { label: 'CARBOIDRATOS', current: '180g', max: '400g', pct: 45, color: 'bg-[#E8E4DD]' },
                { label: 'GORDURAS', current: '40g', max: '90g', pct: 44, color: 'bg-[#555]' },
              ].map(m => (
                <div key={m.label} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[11px] font-mono font-bold tracking-wider">
                    <span className="text-textDark/80">{m.label}</span>
                    <span className="text-textDark"><span className="text-textMain">{m.current}</span> / {m.max}</span>
                  </div>
                  <div className="w-full h-3 bg-[#0a0a0a] rounded-full overflow-hidden shadow-inner">
                    <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex gap-2">
               <button className="flex-1 bg-white/5 hover:bg-white/10 text-white text-xs font-bold py-2 rounded font-sans transition-colors">
                 Café da Manhã
               </button>
               <button className="flex-1 bg-white/5 hover:bg-white/10 text-white text-xs font-bold py-2 rounded font-sans transition-colors">
                 Almoço
               </button>
            </div>
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
        <div className="w-full h-full flex flex-col justify-center relative opacity-100 p-4">

          <div className="w-full bg-[#111] rounded-xl border border-white/10 p-5 shadow-2xl relative">
             <div className="flex justify-between items-center mb-6">
               <span className="text-xs text-textMain font-bold uppercase tracking-wider font-sans">Evolução: Supino Reto (1RM)</span>
               <div className="flex gap-1">
                 <span className="text-[10px] bg-[#1a1a1a] border border-white/5 px-2 py-0.5 rounded text-textDark/60 font-mono">1M</span>
                 <span className="text-[10px] bg-accent/20 border border-accent/30 text-accent font-bold px-2 py-0.5 rounded font-mono">6M</span>
               </div>
             </div>
             
             {/* Chart representation */}
             <div className="relative h-28 w-full flex items-end justify-between px-0 pb-0 border-b border-white/10">
               <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-[1px]">
                  {Array.from({length: 18}).map((_, i) => (
                    <div key={i} className="border-b border-r border-[#222]"></div>
                  ))}
               </div>
               
               <svg className="absolute inset-0 w-full h-full z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0,80 Q10,75 20,60 T60,50 T80,30 T100,20" fill="none" stroke="#F97316" strokeWidth="2.5" vectorEffect="non-scaling-stroke" className="drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"/>
                 <path d="M0,80 Q10,75 20,60 T60,50 T80,30 T100,20 L100,100 L0,100 Z" fill="url(#gradGraph)" opacity="0.1"/>
                 
                 <circle cx="20" cy="60" r="1.5" fill="#fff" />
                 <circle cx="60" cy="50" r="1.5" fill="#fff" />
                 <circle cx="80" cy="30" r="1.5" fill="#fff" />
                 <circle cx="100" cy="20" r="2.5" fill="#F97316" className="animate-pulse" />
                 
                 <defs>
                   <linearGradient id="gradGraph" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#F97316"/>
                     <stop offset="100%" stopColor="transparent"/>
                   </linearGradient>
                 </defs>
               </svg>
             </div>
             
             <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-2 text-center flex flex-col">
                   <span className="text-[9px] text-textDark/60 font-mono tracking-widest mb-0.5">ATUAL</span>
                   <span className="text-sm font-bold text-textMain font-mono">110kg</span>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-2 text-center flex flex-col relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-accent"></div>
                   <span className="text-[9px] text-accent font-mono tracking-widest mb-0.5">ESTIMADO</span>
                   <span className="text-sm font-bold text-accent font-mono">115kg</span>
                </div>
                <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-2 text-center flex flex-col">
                   <span className="text-[9px] text-textDark/60 font-mono tracking-widest mb-0.5">EVOL. %</span>
                   <span className="text-sm font-bold text-green-400 font-mono">+12.5%</span>
                </div>
             </div>
          </div>

        </div>
      </ProtocolCard>
      
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
        <div className="w-full h-full max-w-md max-h-[500px] border border-white/10 rounded-2xl bg-[#080808]/90 backdrop-blur-xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
          
          {/* Header Bar (Mock App Header) */}
          <div className="w-full h-12 bg-[#141414] border-b border-white/5 flex items-center justify-between px-5 z-20">
             <div className="font-sans text-[12px] font-bold tracking-widest text-textMain">IRONLOG</div>
             <div className="flex gap-2">
               <div className="w-1 h-3 rounded-full bg-accent/40 animate-pulse"></div>
               <div className="w-1 h-3 rounded-full bg-accent/70 animate-pulse delay-75"></div>
               <div className="w-1 h-3 rounded-full bg-accent animate-pulse delay-150"></div>
             </div>
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1 w-full flex items-center justify-center p-2 relative bg-[#050505] overflow-y-auto overflow-x-hidden">
            <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-full h-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-80 blur-xl pointer-events-none"></div>
            {children}
          </div>

        </div>
      </div>
      
    </div>
  );
}
