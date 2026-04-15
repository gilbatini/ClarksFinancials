import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 bg-surface-container-lowest overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>
      
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-8 flex flex-col justify-center py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline text-7xl md:text-9xl leading-[0.85] text-white tracking-tighter mb-8"
          >
            FAST APPROVAL <br />
            ON ALL <br />
            <span className="text-secondary text-shadow-glow">QUICK LOANS.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4"
          >
            <button className="bg-secondary text-background font-extrabold px-10 py-5 rounded-sm text-lg tracking-widest uppercase hover:scale-105 transition-transform flex items-center gap-2 group">
              GET STARTED 
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 bg-primary-container p-10 rounded-sm flex flex-col justify-between border-l-4 border-secondary shadow-2xl relative overflow-hidden"
        >
          <div className="mb-6 -mx-10 -mt-10 h-48 overflow-hidden">
            <img 
              alt="Professional stack of Ugandan Shillings" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChJhpkG3fM0YkjB1qtoBFBtH6KZ4z9rkMfIeANJGeaD67hiM5Fk5Nk3Q-yXDR5K2U1CNgKpqPxbWq-sBTVCD-zwIFI38sr39sslcA-urLBtGACqV2mVJYe2cDPwhCuBdCmjpcljyO0rZOFWfPkwJVHiWIljmiVJ-4EmGNmBV9zacRGzdIAG9VzHFJwfumjlMu6fwxwHytzbMjCoDD2_nH8QO3OB-DlGV3mhVcKq4qVf8S3oC_BlWhSPSYjOga1jV4XfrN0qbTo5rM"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div>
            <h3 className="font-headline text-3xl text-white mb-6 uppercase">Our Priority Services</h3>
            <ul className="space-y-4">
              {[
                'Instant Disbursement',
                'Flexible Terms',
                'No Collateral Required'
              ].map((service) => (
                <li key={service} className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-white/90">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Direct Contact</p>
            <p className="text-2xl font-headline text-white">+256 700 000 000</p>
            <p className="text-white/70 text-sm">support@clarksfinancials.com</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-container/30 blur-[120px] rounded-full"></div>
    </section>
  );
}
