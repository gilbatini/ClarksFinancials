import { Share2, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-24 border-t-2 border-[#1C1B1B]">
      <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="space-y-6">
          <div className="text-2xl font-black text-warm-cream font-headline uppercase tracking-tighter">
            Clarks Financials
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            Clarks Financials Limited is a Tier-4 Microfinance Institution licensed and regulated to provide credit services in Uganda.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-outline-variant flex items-center justify-center text-white hover:border-secondary hover:text-secondary transition-colors">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 border border-outline-variant flex items-center justify-center text-white hover:border-secondary hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-headline text-xl text-white uppercase mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#services" className="text-gray-500 hover:text-secondary transition-colors">Services</a></li>
            <li><a href="#how-it-works" className="text-gray-500 hover:text-secondary transition-colors">How It Works</a></li>
            <li><a href="#products" className="text-gray-500 hover:text-secondary transition-colors">Products</a></li>
            <li><a href="#contact" className="text-gray-500 hover:text-secondary transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline text-xl text-white uppercase mb-8">Compliance</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="text-gray-500 hover:text-secondary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-500 hover:text-secondary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-gray-500 hover:text-secondary transition-colors">Compliance</a></li>
            <li><a href="#" className="text-gray-500 hover:text-secondary transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-12 mt-24 pt-8 border-t border-outline-variant/10 text-center">
        <p className="text-[10px] font-bold text-gray-600 tracking-widest uppercase">
          © 2024 CLARKS FINANCIALS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
