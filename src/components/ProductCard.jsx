import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="glass group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl" style={{ borderRadius: '1rem', overflow: 'hidden', transition: 'var(--transition)' }}>
      <div className="relative aspect-[4/5] overflow-hidden" style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', transform: 'translateY(100%)', transition: 'transform 0.3s ease' }}>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full btn-primary justify-center py-3"
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <ShoppingCart size={18} /> ADD TO CART
          </button>
        </div>
        <button className="absolute top-4 right-4 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.5rem' }}>
          <Heart size={18} className="text-white hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <div className="p-5" style={{ padding: '1.25rem' }}>
        <span className="text-[10px] text-accent font-bold uppercase tracking-widest" style={{ fontSize: '0.625rem', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          {product.category}
        </span>
        <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-accent transition-colors" style={{ fontSize: '1.125rem', fontWeight: '600', margin: '0.25rem 0 0.5rem' }}>
          {product.name}
        </h3>
        <div className="flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="text-xl font-bold premium-font" style={{ fontSize: '1.25rem', fontWeight: '800' }}>
            ${product.price.toLocaleString()}
          </span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="w-1.5 h-1.5 rounded-full bg-accent/20"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
