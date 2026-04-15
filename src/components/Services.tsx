import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      id: '01',
      title: 'Asset Finance',
      description: 'Strategic funding for high-value equipment and operational assets to scale your business efficiency.',
    },
    {
      id: '02',
      title: 'Business Growth',
      description: 'Working capital injections designed to bridge cash flow gaps and fuel seasonal expansion.',
    },
    {
      id: '03',
      title: 'Refinancing',
      description: 'Consolidate existing debt into a single, manageable monthly payment with competitive rates.',
    },
    {
      id: '04',
      title: 'Emergency Fund',
      description: 'Rapid response lending for unforeseen medical or operational emergencies with 24h processing.',
    },
  ];

  return (
    <section className="bg-warm-cream py-32" id="services">
      <div className="container mx-auto px-8 mb-16">
        <h2 className="font-headline text-6xl text-background tracking-tight uppercase leading-none">
          Specialized<br />Services
        </h2>
      </div>
      
      <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-outline-variant/20">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ backgroundColor: 'var(--color-primary-container)' }}
            className="group relative bg-surface-container-low p-12 h-[450px] flex flex-col justify-between overflow-hidden transition-all duration-500"
          >
            <div className="text-secondary font-headline text-5xl opacity-30 group-hover:opacity-100 group-hover:text-white transition-all">
              {service.id}
            </div>
            <div>
              <h3 className="font-headline text-3xl text-white mb-4 uppercase">{service.title}</h3>
              <p className="text-on-surface-variant group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </div>
            <div className="absolute bottom-[-100%] group-hover:bottom-0 left-0 w-full bg-secondary p-4 text-center text-background font-black uppercase tracking-tighter transition-all duration-300">
              LEARN MORE
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
