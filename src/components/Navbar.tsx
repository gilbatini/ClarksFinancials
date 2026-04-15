import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-8 py-4 flex justify-between items-center',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent'
      )}
    >
      <div className="text-2xl font-black tracking-tighter text-warm-cream uppercase font-headline">
        Clarks Financials
      </div>
      
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white/70 hover:text-secondary transition-colors duration-200 font-semibold text-sm uppercase tracking-wider"
          >
            {link.name}
          </a>
        ))}
      </div>

      <button className="bg-secondary text-background font-extrabold px-6 py-2 rounded-sm text-xs tracking-widest uppercase hover:scale-105 active:scale-95 transition-transform">
        APPLY NOW
      </button>
    </nav>
  );
}
