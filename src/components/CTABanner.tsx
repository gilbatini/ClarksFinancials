export default function CTABanner() {
  return (
    <section className="bg-secondary py-20 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <h2 className="font-headline text-[20rem] text-background leading-none">FAST</h2>
      </div>
      <div className="container mx-auto px-8 relative z-10 text-center">
        <h2 className="font-headline text-5xl md:text-7xl text-background uppercase mb-8 tracking-tighter">
          READY TO GET YOUR LOAN TODAY?
        </h2>
        <button className="bg-background text-white font-black px-12 py-5 rounded-sm text-xl tracking-widest uppercase hover:scale-105 transition-transform">
          START APPLICATION NOW
        </button>
      </div>
    </section>
  );
}
