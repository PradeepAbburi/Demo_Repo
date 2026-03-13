import React from 'react';
import { X, Trash2, ChevronRight } from 'lucide-react';

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity" 
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 100 }}
      />
      <div 
        className="fixed right-0 top-0 h-full w-full max-w-md glass-dark z-[101] shadow-2xl flex flex-col animate-slide-in"
        style={{ position: 'fixed', right: 0, top: 0, height: '100%', width: '100%', maxWidth: '28rem', zIndex: 101, display: 'flex', flexDirection: 'column', animation: 'slideInRight 0.4s ease-out' }}
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between" style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="text-xl font-bold premium-font">YOUR BAG</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center" style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Trash2 size={24} className="text-text-muted" />
              </div>
              <p className="text-text-muted">Your bag is currently empty.</p>
              <button onClick={onClose} className="btn-outline">CONTINUE SHOPPING</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
                <div className="w-24 h-24 rounded-xl overflow-hidden glass" style={{ width: '6rem', height: '6rem', borderRadius: '0.75rem', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="flex-1" style={{ flex: 1 }}>
                  <div className="flex justify-between" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 className="font-semibold">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-text-muted hover:text-red-500 transition-colors">
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-text-muted mb-2">{item.category}</p>
                  <div className="flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="flex items-center glass rounded-lg" style={{ display: 'flex', alignItems: 'center', borderRadius: '0.5rem' }}>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:text-accent transition-colors"
                      >-</button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:text-accent transition-colors"
                      >+</button>
                    </div>
                    <span className="font-bold">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 glass-dark space-y-4" style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="text-text-muted">Subtotal</span>
              <span className="text-2xl font-bold premium-font">${total.toLocaleString()}</span>
            </div>
            <p className="text-xs text-text-muted italic text-center">Shipping and taxes calculated at checkout.</p>
            <button className="w-full btn-primary justify-center py-4" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              PROCEED TO CHECKOUT <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
