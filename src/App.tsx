/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import StatsStrip from '@/src/components/StatsStrip';
import Services from '@/src/components/Services';
import HowItWorks from '@/src/components/HowItWorks';
import LoanProducts from '@/src/components/LoanProducts';
import RepaymentSection from '@/src/components/RepaymentSection';
import CTABanner from '@/src/components/CTABanner';
import ContactSection from '@/src/components/ContactSection';
import Footer from '@/src/components/Footer';
import Chatbot from '@/src/components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <HowItWorks />
        <LoanProducts />
        <RepaymentSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}
