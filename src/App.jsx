import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import CTA from './components/CTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Any global GSAP logic
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="bg-background min-h-screen text-textMain overflow-x-hidden selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
