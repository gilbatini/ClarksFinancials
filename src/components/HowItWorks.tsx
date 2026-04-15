import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      id: '01',
      title: 'Apply Online',
      description: 'Fill out our secure digital application form in less than 5 minutes.',
    },
    {
      id: '02',
      title: 'Verification',
      description: 'Our expert analysts review your request and verify documentation within hours.',
    },
    {
      id: '03',
      title: 'Approval',
      description: 'Receive a personalized loan offer with clear terms and zero hidden costs.',
    },
    {
      id: '04',
      title: 'Disbursement',
      description: 'Funds are deposited directly into your bank account or Mobile Money wallet.',
    },
  ];

  return (
    <section className="bg-warm-cream py-32 border-b-2 border-surface-container-low" id="how-it-works">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-headline text-7xl text-background mb-12 uppercase tracking-tighter leading-none">
            THE PATH TO <br /><span className="text-secondary">PROSPERITY</span>
          </h2>
          <p className="text-background/80 text-lg max-w-md mb-8">
            Our streamlined process removes the friction from traditional banking. We focus on your potential, not just your paperwork.
          </p>
          <div className="bg-surface-container-high p-8 border-l-2 border-secondary">
            <p className="italic text-white">
              "Clarks Financials provided the funds I needed in less than two days. Their team is professional and transparent."
            </p>
            <p className="mt-4 font-bold text-secondary uppercase text-sm tracking-widest">— James K., Entrepreneur</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[2px] bg-outline-variant/10">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              whileHover={{ x: 8 }}
              className="bg-surface-container-low p-8 flex gap-6 items-start transition-all"
            >
              <div className="bg-secondary text-background font-headline text-3xl p-4 w-16 h-16 flex items-center justify-center shrink-0">
                {step.id}
              </div>
              <div>
                <h4 className="font-headline text-2xl text-white uppercase mb-2">{step.title}</h4>
                <p className="text-on-surface-variant text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
