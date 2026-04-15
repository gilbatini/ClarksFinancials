import { Banknote, Shield, Store, CheckCircle } from 'lucide-react';

export default function LoanProducts() {
  return (
    <section className="bg-surface-container-lowest py-32" id="products">
      <div className="container mx-auto px-8 text-center mb-20">
        <h2 className="font-headline text-6xl text-white uppercase mb-4 tracking-tighter">OUR LOAN PRODUCTS</h2>
        <div className="w-20 h-1 bg-secondary mx-auto"></div>
      </div>

      <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-outline-variant/10">
        {/* Salary Loan */}
        <div className="bg-primary-container p-12 flex flex-col justify-between items-center text-center group relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              alt="Ugandan currency abstract" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIC4DLSQ5WkExY4GoSKagIDrX6nb1UzIUxxK297OSlg_TIseqoMRckC_Ed25VIP-cPnho70n_vfoDv-18x9egUFtHvvquFjD8juMkXn4TdHYFIupWRWuRoiCT1h4H8cJoSs8Ug6V6NBzuw4HfU7-P2R6EPmCXgyREixnZHTKoY8FB21NalRo8wEeBazQKWhc-eSkyxXrnbA1Aa2l45hi5RaHbEegNTHO5TlYJQmvOFCueDODiBM6fJk3X546LY0OCWEMcvTS6ap5c"
              referrerPolicy="no-referrer"
            />
          </div>
          <Banknote className="w-16 h-16 text-white mb-8 relative z-10" />
          <div className="relative z-10">
            <h3 className="font-headline text-4xl text-white uppercase mb-4">Salary Loan</h3>
            <p className="text-white/80 mb-8">Fast credit for salaried employees with competitive interest rates and easy payroll deductions.</p>
          </div>
          <ul className="text-left w-full space-y-4 mb-10 text-sm font-semibold text-white/90 relative z-10">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" /> Max UGX 20,000,000
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" /> Up to 24 Months Tenor
            </li>
          </ul>
          <button className="w-full bg-white text-primary-container font-black py-4 uppercase tracking-widest hover:bg-secondary hover:text-background transition-colors relative z-10">
            Select Plan
          </button>
        </div>

        {/* Unsecured Loan */}
        <div className="bg-background p-12 flex flex-col justify-between items-center text-center group relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img 
              alt="Ugandan 50,000 Shilling note" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuo43h8nUEyjqe8UyzX3y9pyofLa_n2wDUsEuvlPZFVBCCulVbnu287FdPw_ohisATBYTB-n99tivaEjkOdZxvfx22h-cKzlvOwyxtnMRT-TQuDHS7RIv_SfdX7Yjm1-OaiBgLLwXYdNq9JkehGurwgkS4YH5Xo4pCe7yGu-nn7083assgCRgyFZlrEOgCVbz90ogXETvguXX8H3AptyLhvEbHXTSAzXgXCtcaGqbSmeQ_UFdhbABgTamq2HJ0wXt08Jh5HsSTBtU"
              referrerPolicy="no-referrer"
            />
          </div>
          <Shield className="w-16 h-16 text-secondary mb-8 relative z-10" />
          <div className="relative z-10">
            <h3 className="font-headline text-4xl text-white uppercase mb-4">Unsecured Loan</h3>
            <p className="text-on-surface-variant mb-8">Quick personal and business funding without the need for traditional collateral or security.</p>
          </div>
          <ul className="text-left w-full space-y-4 mb-10 text-sm font-semibold text-on-surface relative z-10">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" /> No Title Deeds Required
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" /> 48-Hour Processing
            </li>
          </ul>
          <button className="w-full bg-secondary text-background font-black py-4 uppercase tracking-widest hover:scale-[1.02] transition-transform relative z-10">
            Select Plan
          </button>
        </div>

        {/* Agency Banking */}
        <div className="bg-white p-12 flex flex-col justify-between items-center text-center group">
          <Store className="w-16 h-16 text-primary-container mb-8" />
          <div>
            <h3 className="font-headline text-4xl text-background uppercase mb-4">Agency Banking</h3>
            <p className="text-surface-container-highest mb-8">Specialized credit solutions for banking agents to manage daily float and liquid demands.</p>
          </div>
          <ul className="text-left w-full space-y-4 mb-10 text-sm font-semibold text-background">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary-container" /> Daily Float Financing
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary-container" /> Weekend Support
            </li>
          </ul>
          <button className="w-full bg-background text-white font-black py-4 uppercase tracking-widest hover:bg-primary-container transition-colors">
            Select Plan
          </button>
        </div>
      </div>
    </section>
  );
}
