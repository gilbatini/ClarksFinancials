export default function StatsStrip() {
  const stats = [
    { label: 'Disbursed Monthly', value: 'UGX 5M+' },
    { label: 'Approval Time', value: '48 HRS' },
    { label: 'Active Clients', value: '500+' },
    { label: 'Hidden Fees', value: '0%' },
  ];

  return (
    <section className="bg-secondary py-6">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-4 text-background">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-8 md:gap-4">
              <div className="flex flex-col items-center md:items-start">
                <span className="font-headline text-4xl leading-none">{stat.value}</span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest">{stat.label}</span>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-[2px] h-10 bg-background/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
