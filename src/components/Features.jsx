import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2 } from 'lucide-react';

export default function Features() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={container} className="relative z-10 w-full py-32 px-6 md:px-12 bg-background flex flex-col gap-16">
      <div className="text-center md:text-left md:px-12">
        <p className="font-mono text-accent text-sm uppercase tracking-widest mb-4">Analytical Artifacts</p>
        <h2 className="font-sans font-bold text-4xl md:text-6xl text-textMain max-w-2xl">The End of Workout Spreadsheets.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <CursorScheduler />
      </div>
    </section>
  );
}

function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, data: "Bench Press • 4x8 • 100kg" },
    { id: 2, data: "Squat • 5x5 • 140kg" },
    { id: 3, data: "Deadlift • 3x5 • 160kg" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-card bg-primary border border-white/5 rounded-[2rem] p-8 shadow-2xl flex flex-col items-center justify-between relative overflow-hidden group h-[400px]">
      <div className="w-full text-left mb-8 z-10">
        <h3 className="font-sans font-bold text-2xl text-textMain mb-2">Training Sessions</h3>
        <p className="font-sans text-textDark/80">Your relentless training log.</p>
      </div>
      
      <div className="relative w-full h-48 flex items-center justify-center">
        {cards.map((card, index) => {
          return (
            <div 
              key={card.id}
              className="absolute w-[90%] bg-[#222] border border-white/10 rounded-2xl p-4 transition-all duration-500 text-center font-mono text-sm text-accent"
              style={{
                zIndex: cards.length - index,
                transform: `translateY(${index * 15}px) scale(${1 - index * 0.05})`,
                opacity: 1 - index * 0.3,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {card.data}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TelemetryTypewriter() {
  const [text, setText] = useState("");
  const fullText = "NEW 1RM: 100KG => 105KG (+5%). VOLUME OPTIMIZED.";

  useEffect(() => {
    let current = "";
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        current += fullText.charAt(i);
        setText(current);
        i++;
      } else {
        setTimeout(() => { i = 0; current = ""; setText(""); }, 2000);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="feature-card bg-primary border border-white/5 rounded-[2rem] p-8 shadow-2xl flex flex-col group h-[400px]">
       <div className="w-full text-left mb-6">
        <h3 className="font-sans font-bold text-2xl text-textMain mb-2">Progressive Overload</h3>
        <p className="font-sans text-textDark/80">Evolution documented in real-time.</p>
      </div>

      <div className="mt-auto bg-background rounded-xl p-4 border border-white/10 font-mono text-sm text-textMain h-32 relative">
        <div className="absolute top-[-10px] right-4 bg-accent/20 text-accent px-2 py-0.5 rounded text-[10px] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          LIVE FEED
        </div>
        <p className="mt-4 leading-relaxed">
          &gt;_ {text}
          <span className="inline-block w-2 h-4 bg-accent animate-pulse ml-1 align-middle"></span>
        </p>
      </div>
    </div>
  );
}

function CursorScheduler() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.set('.cursor', { x: 0, y: 0, scale: 1 })
        .to('.cursor', { x: 80, y: 40, duration: 1.5, ease: 'power2.inOut' })
        .to('.cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.target-cell', { backgroundColor: '#F97316', color: '#fff', duration: 0.2 }, "-=0.1")
        .to('.cursor', { x: 180, y: -20, duration: 1, ease: 'power2.inOut', delay: 0.5 })
        .to('.cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.cursor', { opacity: 0, duration: 0.4 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div ref={containerRef} className="feature-card bg-primary border border-white/5 rounded-[2rem] p-8 shadow-2xl flex flex-col group h-[400px] relative overflow-hidden">
      <div className="w-full text-left mb-auto">
        <h3 className="font-sans font-bold text-2xl text-textMain mb-2">Diet Monitoring</h3>
        <p className="font-sans text-textDark/80">Absolute control of your macronutrients.</p>
      </div>

      <div className="relative mt-8 bg-background p-4 rounded-xl border border-white/10">
        <div className="flex gap-2 justify-between">
          {days.map((d, i) => (
            <div key={i} className={`w-8 h-8 rounded-md flex items-center justify-center font-sans font-bold text-xs ${i === 3 ? 'target-cell bg-[#333] text-textDark' : 'bg-[#222] text-textDark/50'}`}>
              {d}
            </div>
          ))}
        </div>
        
        <div className="absolute top-1/2 left-0 z-20 cursor text-white/90 drop-shadow-lg" style={{ pointerEvents: 'none' }}>
           <MousePointer2 className="w-6 h-6 fill-white stroke-background text-white" />
        </div>

        <div className="mt-4 flex justify-end">
          <div className="bg-[#222] px-3 py-1 rounded text-[10px] font-mono text-textDark border border-white/5">
            + MACROS
          </div>
        </div>
      </div>
    </div>
  );
}
