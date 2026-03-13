import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center overflow-hidden" style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div className="absolute inset-0 z-0" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img 
          src={heroImg} 
          alt="Luxury Showroom" 
          className="w-full h-full object-cover opacity-60 scale-110"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--primary), rgba(15, 23, 42, 0.5), transparent)' }}></div>
      </div>

      <div className="container relative z-10 animate-fade">
        <div className="max-w-2xl" style={{ maxWidth: '42rem' }}>
          <span className="text-accent font-semibold tracking-widest text-sm uppercase mb-4 block animate-fade delay-1" style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.1em', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
            Spring Collection 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 premium-font leading-tight animate-fade delay-2" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1 }}>
            Elevate Your <br />
            <span className="gradient-text">Lifestyle.</span>
          </h1>
          <p className="text-text-muted text-lg mb-8 animate-fade delay-3" style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2rem' }}>
            Experience the pinnacle of craftsmanship and design. 
            Discover our curated selection of ultra-premium electronics and life-style essentials.
          </p>
          <div className="flex gap-4 animate-fade delay-3" style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-primary">
              EXPLORE NOW <ArrowRight size={18} />
            </button>
            <button className="btn-outline">
              VIEW CATALOG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
