import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.phil-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out'
      });
      
      // Parallax effect for bg
      gsap.to('.phil-bg', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: '20%'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-40 px-6 md:px-24 bg-[#050505] overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym plates" 
          className="phil-bg w-full h-[120%] object-cover opacity-10 grayscale absolute top-[-10%]"
        />
        <div className="absolute inset-0 bg-background/50"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col gap-12 text-center">
        <p className="phil-text font-sans text-xl md:text-3xl text-textDark/60 font-medium tracking-tight">
          Most apps focus on: <span className="text-textDark">disorganized notes.</span>
        </p>
        <h2 className="phil-text font-drama italic text-4xl md:text-7xl text-textMain leading-tight">
          We focus on: <span className="text-accent not-italic font-sans font-bold uppercase tracking-tighter block mt-4">Absolute Control.</span>
        </h2>
      </div>
    </section>
  );
}
