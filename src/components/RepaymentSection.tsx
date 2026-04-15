import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, ShieldCheck, CheckCircle2, Signal, Wifi, BatteryFull } from 'lucide-react';

export default function RepaymentSection() {
  const [isPaid, setIsPaid] = useState(false);

  const handlePay = () => {
    setIsPaid(true);
    setTimeout(() => setIsPaid(false), 3000);
  };

  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          {/* CSS Phone Mockup */}
          <div className="w-[300px] h-[600px] bg-[#0A0A0A] rounded-[3rem] p-4 border-[8px] border-surface-container-high shadow-2xl relative z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-container-high rounded-b-2xl"></div>
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col font-sans relative">
              {/* Phone Status Bar */}
              <div className="h-8 flex justify-between items-center px-6 pt-4 text-[10px] text-gray-400 font-bold">
                <span>9:41</span>
                <div className="flex gap-1">
                  <Signal className="w-3 h-3" />
                  <Wifi className="w-3 h-3" />
                  <BatteryFull className="w-3 h-3" />
                </div>
              </div>
              
              {/* UI Content */}
              <div className="p-6">
                <h5 className="text-background font-bold text-lg mb-1">Loan Repayment</h5>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-6">Clarks Financials Ltd</p>
                
                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                  <p className="text-gray-400 text-[10px] uppercase font-bold mb-1">Amount Due</p>
                  <p className="text-background font-black text-2xl">UGX 460,000</p>
                </div>
                
                <p className="text-gray-500 text-[10px] uppercase font-bold mb-3">Select Provider</p>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  <div className="border-2 border-secondary p-3 rounded-xl flex items-center justify-center bg-secondary/5">
                    <div className="text-center">
                      <p className="text-[10px] font-black text-red-600 leading-none">airtel</p>
                      <p className="text-[8px] font-bold text-gray-400">Money</p>
                    </div>
                  </div>
                  <div className="border border-gray-100 p-3 rounded-xl flex items-center justify-center opacity-40">
                    <div className="text-center">
                      <p className="text-[10px] font-black text-yellow-500 leading-none">MTN</p>
                      <p className="text-[8px] font-bold text-gray-400">MoMo</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handlePay}
                  className="w-full bg-background text-white font-bold py-4 rounded-xl text-sm transition-all active:scale-95"
                >
                  Pay UGX 460,000
                </button>
              </div>

              {/* Success State */}
              <AnimatePresence>
                {isPaid && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-secondary flex flex-col items-center justify-center p-8 text-center z-20"
                  >
                    <CheckCircle2 className="w-16 h-16 text-background mb-4" />
                    <h6 className="text-background font-black text-2xl uppercase mb-2">Payment Received</h6>
                    <p className="text-background/80 text-sm">Your loan balance has been updated instantly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
        </div>

        <div>
          <h2 className="font-headline text-6xl text-white uppercase leading-none mb-8 tracking-tighter">
            REPAYMENTS MADE <span className="text-secondary">EFFORTLESS.</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-10">
            We integrate directly with Uganda's leading mobile networks. Repay your loan from anywhere, anytime, with instant confirmation and automated receipting.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-full">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Real-time Updates</p>
                <p className="text-on-surface-variant text-xs">Zero waiting for ledger updates.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-full">
                <ShieldCheck className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Secure Bridge</p>
                <p className="text-on-surface-variant text-xs">Encrypted transaction tunnels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
