import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Professional Towing Services | Tow Me Now DMV",
  description:
    "Rapid response and elite heavy-duty assistance throughout the DMV area.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative w-full overflow-hidden bg-surface-main diagonal-clip pt-16 pb-16 md:pt-20 md:pb-48">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">
          <nav className="flex mb-8 items-center gap-2 font-label-bold text-[14px] text-secondary/70 font-bold tracking-[0.1em]">
            <Link className="hover:text-secondary" href="/">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-secondary">Services</span>
          </nav>
          <h1 className="font-headline-xl text-[52px] sm:text-[72px] md:text-headline-xl text-on-surface leading-none mb-6 max-w-3xl">
            Professional <span className="text-secondary">Towing</span> &amp; Roadside Services
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            Rapid response and elite heavy-duty assistance throughout the DMV area. We specialize in complex recoveries and immediate emergency support when every second counts.
          </p>
          <div className="flex flex-wrap gap-12 mt-16">
            {[
              { stat: "25+", label: "Years Experience" },
              { stat: "3,000+", label: "Vehicles Assisted" },
              { stat: "24/7", label: "Elite Availability" },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-headline-lg text-headline-md text-secondary leading-none">{stat}</span>
                <span className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface-variant mt-2">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Service Cards */}
      <main className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-24 space-y-16 md:space-y-24">

        {/* Card 1: Accident Management — image right */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-surface-card border-l-4 border-secondary overflow-hidden">
          <div className="p-10">
            <div className="inline-block bg-secondary/10 px-4 py-1 mb-6">
              <span className="font-label-bold text-label-bold text-secondary uppercase tracking-widest">Emergency Priority</span>
            </div>
            <h2 className="font-headline-lg text-headline-md text-on-surface mb-6">Accident Management</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Comprehensive scene management from initial contact to secure storage. We handle coordination with law enforcement and insurance providers to reduce your stress during critical moments.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Precision scene cleanup & debris removal",
                "Secure, monitored vehicle storage facilities",
                "Insurance claim coordination & digital documentation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-body-md text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:2028120075"
              className="inline-block bg-secondary text-on-secondary font-headline-md text-body-md px-10 py-4 uppercase tracking-wide neon-glow-amber transition-all active:scale-95"
            >
              Get Immediate Help
            </a>
          </div>
          <div className="h-full min-h-[400px] relative order-first md:order-last">
            <img
              className="w-full h-full object-cover grayscale-[0.3] contrast-125"
              src="/images/Accident%20DMV-airanko.webp"
              alt="Professional tow truck with emergency lights at night"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-card via-transparent to-transparent" />
          </div>
        </section>

        {/* Card 2: Recovery Towing — image left */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-surface-card border-l-4 border-primary overflow-hidden">
          <div className="h-full min-h-[400px] relative">
            <img
              className="w-full h-full object-cover grayscale-[0.3] contrast-125"
              src="/images/Towing%20service%20DMV-airanko.webp"
              alt="Heavy-duty winch and cable recovery vehicle"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-surface-card via-transparent to-transparent" />
          </div>
          <div className="p-10">
            <div className="inline-block bg-primary/10 px-4 py-1 mb-6">
              <span className="font-label-bold text-label-bold text-primary uppercase tracking-widest">Heavy Duty Elite</span>
            </div>
            <h2 className="font-headline-lg text-headline-md text-on-surface mb-6">Recovery Towing</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Specialized winching and off-road recovery for vehicles in impossible situations. Whether stuck in mud, down an embankment, or overturned, our heavy-duty fleet manages the load safely.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Low-clearance garage recovery specialists",
                "Winching and rollover correction",
                "Long-distance transport for luxury & fleet vehicles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-body-md text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:2028120075"
              className="inline-block bg-secondary text-on-secondary font-headline-md text-body-md px-10 py-4 uppercase tracking-wide neon-glow-amber transition-all active:scale-95"
            >
              Inquire About Recovery
            </a>
          </div>
        </section>

        {/* Card 3: Roadside Assistance — image right */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-surface-card border-l-4 border-secondary overflow-hidden">
          <div className="p-10">
            <div className="inline-block bg-secondary/10 px-4 py-1 mb-6">
              <span className="font-label-bold text-label-bold text-secondary uppercase tracking-widest">Rapid Response</span>
            </div>
            <h2 className="font-headline-lg text-headline-md text-on-surface mb-6">Roadside Assistance</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Don&apos;t let a small mechanical failure ruin your schedule. Our rapid response units arrive equipped with modern diagnostic tools to get you back on the road in minutes.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Rapid jump starts & battery replacements",
                "Fuel delivery (Regular, Diesel, Premium)",
                "Professional lockout services (damage-free)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-body-md text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:2028120075"
              className="inline-block bg-secondary text-on-secondary font-headline-md text-body-md px-10 py-4 uppercase tracking-wide neon-glow-amber transition-all active:scale-95"
            >
              Dispatch Now
            </a>
          </div>
          <div className="h-full min-h-[400px] relative order-first md:order-last">
            <img
              className="w-full h-full object-cover grayscale-[0.3] contrast-125"
              src="/images/Roadside%20Assistance%20DMV-airanko.webp"
              alt="Technician performing roadside assistance on a vehicle"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-card via-transparent to-transparent" />
          </div>
        </section>
      </main>

      {/* Service Area Banner */}
      <section className="w-full bg-surface-container py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#ffb95f 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <h2 className="font-headline-lg text-headline-md text-on-surface mb-8">
            Serving the Entire <span className="text-secondary">DMV Region</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Strategic dispatch centers located across the region ensure we reach you in 30 minutes or less, regardless of your location.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["WASHINGTON DC", "MARYLAND", "VIRGINIA"].map((city) => (
              <div
                key={city}
                className="glass-panel-cyan px-12 py-6 border border-secondary/20 flex items-center gap-4"
              >
                <span className="material-symbols-outlined text-secondary">location_on</span>
                <span className="font-headline-md text-headline-md tracking-widest">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-md text-on-surface mb-4">
            Service <span className="text-secondary">Intelligence</span>
          </h2>
          <p className="font-body-md text-on-surface-variant uppercase tracking-widest">
            Frequently Asked Questions
          </p>
        </div>
        <FaqAccordion />
      </section>
    </>
  );
}
