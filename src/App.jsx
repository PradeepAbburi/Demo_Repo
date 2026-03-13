import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Footer from './components/Footer';

// Assets
import headphonesImg from './assets/headphones.png';
import cameraImg from './assets/camera.png';
import watchImg from './assets/watch.png';

const PRODUCTS = [
  {
    id: 1,
    name: "Elite X1 Headphones",
    price: 349,
    category: "Audio",
    image: headphonesImg
  },
  {
    id: 2,
    name: "Lumina Alpha Camera",
    price: 2499,
    category: "Photography",
    image: cameraImg
  },
  {
    id: 3,
    name: "Sapphire Chrono V2",
    price: 1850,
    category: "Timepieces",
    image: watchImg
  },
  {
    id: 4,
    name: "Nordic Desk Lamp",
    price: 120,
    category: "Lifestyle",
    image: headphonesImg // Placeholder fallback
  },
  {
    id: 5,
    name: "Graphite Smart Pen",
    price: 299,
    category: "Workspace",
    image: cameraImg // Placeholder fallback
  },
  {
    id: 6,
    name: "Aether Travel Pack",
    price: 450,
    category: "Travel",
    image: watchImg // Placeholder fallback
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen">
      <div className="bg-mesh"></div>
      
      <Navbar 
        cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        <Hero />

        <section className="container py-24" style={{ padding: '6rem 1.5rem' }}>
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase" style={{ color: 'var(--accent)', fontWeight: '700', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
                Exquisite Selection
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 premium-font" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800' }}>
                Featured Collections
              </h2>
            </div>
            <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
              <button className="text-sm font-semibold border-b-2 border-accent pb-1">ALL</button>
              <button className="text-sm font-semibold text-text-muted hover:text-white transition-colors pb-1">AUDIO</button>
              <button className="text-sm font-semibold text-text-muted hover:text-white transition-colors pb-1">VISUAL</button>
              <button className="text-sm font-semibold text-text-muted hover:text-white transition-colors pb-1">LIFESTYLE</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {PRODUCTS.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="container py-24" style={{ padding: '6rem 1.5rem' }}>
          <div className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden" style={{ padding: '5rem', borderRadius: '1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 premium-font relative z-10">
              The Art of <br />
              <span className="gradient-text">Exceptional Living.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto mb-12 text-lg relative z-10" style={{ maxWidth: '42rem', margin: '0 auto 3rem' }}>
              We believe that the objects you surround yourself with should be as intentional as the life you lead. 
              Each piece in our collection is storied, meticulously crafted, and built to last.
            </p>
            <button className="btn-primary relative z-10">
              LEARN OUR STORY
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
    </div>
  );
}

export default App;
