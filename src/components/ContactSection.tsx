import { useState, FormEvent } from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="bg-warm-cream py-32" id="contact">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-headline text-6xl text-background uppercase leading-none mb-12 tracking-tighter">
            CONTACT OUR<br /><span className="text-secondary">HQ OFFICE</span>
          </h2>
          
          <div className="space-y-10">
            <div className="flex gap-6">
              <MapPin className="text-secondary w-10 h-10 shrink-0" />
              <div>
                <h4 className="text-background font-headline text-2xl uppercase mb-2">Main Branch</h4>
                <p className="text-background/70">Plot 45, Kampala Road<br />Financial Towers, Level 4<br />Kampala, Uganda</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <Clock className="text-secondary w-10 h-10 shrink-0" />
              <div>
                <h4 className="text-background font-headline text-2xl uppercase mb-2">Hours of Operation</h4>
                <p className="text-background/70">Monday - Friday: 08:00 AM - 05:00 PM<br />Saturday: 09:00 AM - 01:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 rounded-sm overflow-hidden h-64 w-full">
            <img 
              className="w-full h-full object-cover" 
              alt="Professional modern minimalist office lobby" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJd-VUQd_hHCOmgPvW4fl6szpA0tK5yJiUnYGpg08-5sFONg0UqJukxVG4KoLJ-xNrHcWAMogWz5YK590dgDc1WP9bXVTRulvo0xjVIwA3CkiMuqpfLlqqI7pcbtgfxka38Ywk5ny_SDs5S9PugMViKj3Zmdhbpzbsn9rWlVwzMiShMZokLfYl57-3Khk4BePWZOFXtFq_fi9WcL3DqS6AQ61yW1JNhxfg6AU3tvmJGFVXQMGCD1rkOje5Vx6jQF8KXIaM-4QRSgY"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="bg-background p-12 border-t-4 border-secondary shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase text-secondary tracking-widest mb-2">First Name</label>
                <input 
                  className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-white p-4 transition-colors" 
                  required 
                  type="text" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-secondary tracking-widest mb-2">Last Name</label>
                <input 
                  className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-white p-4 transition-colors" 
                  required 
                  type="text" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-black uppercase text-secondary tracking-widest mb-2">Phone Number</label>
              <input 
                className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-white p-4 transition-colors" 
                required 
                type="tel" 
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-black uppercase text-secondary tracking-widest mb-2">Loan Type</label>
              <select className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-white p-4 appearance-none transition-colors">
                <option>Salary Loan</option>
                <option>Unsecured Loan</option>
                <option>Agency Banking Finance</option>
                <option>Asset Finance</option>
              </select>
            </div>
            
            <div>
              <label className="block text-[10px] font-black uppercase text-secondary tracking-widest mb-2">Requested Amount (UGX)</label>
              <input 
                className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-white p-4 transition-colors" 
                required 
                type="number" 
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-black uppercase text-secondary tracking-widest mb-2">Additional Notes</label>
              <textarea 
                className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-white p-4 transition-colors" 
                rows={3}
              ></textarea>
            </div>
            
            <button 
              className="w-full bg-secondary text-background font-black py-5 uppercase tracking-widest text-lg hover:scale-[1.01] active:scale-[0.99] transition-transform" 
              type="submit"
            >
              SUBMIT APPLICATION
            </button>
            
            {isSubmitted && (
              <div className="text-center bg-secondary/10 border border-secondary p-4 text-secondary font-bold uppercase text-xs tracking-widest animate-pulse">
                Application Sent Successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
