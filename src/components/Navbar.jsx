import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="glass-dark sticky top-0 z-50 py-4">
      <div className="container flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="flex items-center gap-8" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/" className="premium-font text-2xl font-bold gradient-text" style={{ fontSize: '1.5rem', fontWeight: '800' }}>
            LUXEBAZAAR
          </a>
          <div className="hidden md:flex gap-6" style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">COLLECTIONS</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">NEW ARRIVALS</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">BRANDS</a>
          </div>
        </div>

        <div className="flex items-center gap-5" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <User size={20} />
          </button>
          <button 
            onClick={onCartClick}
            className="p-2 hover:bg-white/5 rounded-full transition-colors relative"
            id="cart-button"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-primary text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
