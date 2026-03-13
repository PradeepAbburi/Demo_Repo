import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-dark border-t border-white/5 py-16 mt-20" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '4rem 0', marginTop: '5rem' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 className="premium-font text-2xl font-bold gradient-text">LUXEBAZAAR</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Curating the world's most exceptional products for the discerning minimalist. 
              Elevating standards in design and technology since 2026.
            </p>
            <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="p-2 glass rounded-full hover:border-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 glass rounded-full hover:border-accent transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 glass rounded-full hover:border-accent transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 glass rounded-full hover:border-accent transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 className="font-bold text-sm tracking-widest uppercase">SHOP</h4>
            <ul className="space-y-3 text-sm text-text-muted" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" className="hover:text-accent transition-colors">Digital Life</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Precision Timing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Visual Arts</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Travel Essentials</a></li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 className="font-bold text-sm tracking-widest uppercase">CLIENT SERVICES</h4>
            <ul className="space-y-3 text-sm text-text-muted" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Product Care</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 className="font-bold text-sm tracking-widest uppercase">NEWSLETTER</h4>
            <p className="text-sm text-text-muted">Join our exclusive circle for early access to limited releases.</p>
            <div className="flex gap-2" style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-1 outline-none focus:border-accent transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', flex: 1, padding: '0.5rem 1rem', borderRadius: '0.5rem', color: 'white' }}
              />
              <button className="btn-primary" style={{ padding: '0.5rem 1rem' }}>JOIN</button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-text-muted" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p>© 2026 LUXEBAZAAR. ALL RIGHTS RESERVED. DESIGNED WITH PRECISION.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
