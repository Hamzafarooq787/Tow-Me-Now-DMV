import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Tow Me Now DMV",
  description: "Full range of professional towing and roadside assistance services across the DMV area.",
};

const services = [
  { icon: "car_crash", title: "Accident Management", description: "Swift and careful vehicle removal from accident scenes. We handle the logistics so you can focus on what matters. Our team coordinates with law enforcement and insurance companies to make the process seamless." },
  { icon: "rowing", title: "Recovery Towing", description: "Specialized equipment for vehicles in ditches, mud, or complex recovery scenarios. Precision and power combined. We handle rollover recoveries, off-road extractions, and any situation that demands heavy-duty solutions." },
  { icon: "minor_crash", title: "Roadside Assistance", description: "Lockouts, jump-starts, tire changes, and fuel delivery. Small problems shouldn't ruin your entire day. Our roadside crew carries the tools to handle the most common vehicle emergencies on the spot." },
  { icon: "local_shipping", title: "Long Distance Transport", description: "Need your vehicle moved across state lines? We offer reliable long-distance vehicle transport with full insurance coverage and real-time tracking for your peace of mind." },
  { icon: "electric_bolt", title: "Jump Start Service", description: "Dead battery? Our team will get you back on the road in minutes with a professional jump start. We also carry battery replacement equipment if your battery needs a full swap." },
  { icon: "lock_open", title: "Lockout Service", description: "Locked your keys inside? We use professional-grade tools to get you back in your vehicle without any damage. Available 24/7 throughout the DMV area." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-dark-navy py-24 border-b border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-6">What We Offer</span>
          <h1 className="bebas text-6xl md:text-7xl text-on-background mb-6">Our Professional <span className="text-primary">Services</span></h1>
          <p className="inter text-lg text-on-surface-variant max-w-2xl mx-auto">Whatever the situation, our team is equipped with the latest technology and years of expertise to get you back on the road safely.</p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ icon, title, description }) => (
              <div key={title} className="bg-[#131929] p-10 border-l-4 border-amber-500 neon-border group transition-all duration-500">
                <span className="material-symbols-outlined text-amber-brand text-5xl mb-8 group-hover:-translate-y-2 transition-transform block">{icon}</span>
                <h3 className="bebas text-3xl text-on-background mb-4">{title}</h3>
                <p className="inter text-on-surface-variant leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="bebas text-5xl md:text-6xl text-on-background mb-6">Need Immediate <span className="text-amber-brand">Assistance?</span></h2>
          <p className="inter text-on-surface-variant max-w-xl mx-auto mb-10">Don&apos;t wait — our dispatch team is standing by 24/7 to get someone to you fast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2028120075" className="bg-amber-brand hover:bg-amber-600 text-black font-bold py-4 px-10 rounded text-lg bebas tracking-wide transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">Call 202-812-0075</a>
            <Link href="/contact" className="border-2 border-white/20 hover:border-white text-white font-bold py-4 px-10 rounded text-lg bebas tracking-wide transition-all">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
