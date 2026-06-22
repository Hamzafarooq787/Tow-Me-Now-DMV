import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Tow Me Now DMV",
  description:
    "Built on trust, driven by service. Serving the DMV area for over two decades with heavy-duty reliability and rapid response times.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] md:min-h-[614px] flex items-center diagonal-clip bg-surface-main overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#091518] via-[#091518]/80 to-transparent" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-24">
          <nav className="flex items-center gap-2 mb-6 text-on-surface-muted font-label-bold text-label-bold tracking-[0.1em]">
            <Link className="hover:text-primary transition-colors" href="/">HOME</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-secondary">ABOUT US</span>
          </nav>
          <h1 className="font-headline-xl text-[52px] sm:text-[72px] md:text-headline-xl text-on-surface mb-4 leading-tight">
            BUILT ON <span className="text-secondary">TRUST</span>,<br />
            DRIVEN BY <span className="text-primary">SERVICE</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Serving the DMV area for over two decades with heavy-duty reliability and rapid response times. We don&apos;t just move vehicles; we move people forward.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 border border-secondary/20 rounded-lg -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
          <div className="relative aspect-square bg-surface-card border-l-4 border-secondary overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src="/images/OUR%20LEGACY%20OF%20RESILIENCE-airanko.webp"
              alt="Classic heavy-duty tow truck in an industrial yard"
            />
          </div>
        </div>
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">
            OUR LEGACY OF <span className="text-secondary">RESILIENCE</span>
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
            <p>
              What started as a single truck in northern Virginia has evolved into the DMV&apos;s most trusted fleet. For over 25 years, Tow Me Now DMV has stood as a beacon of reliability on the toughest highways.
            </p>
            <p>
              We understood early on that a breakdown isn&apos;t just a mechanical failure—it&apos;s a disruption of life. That&apos;s why we&apos;ve invested in industrial-grade technology and elite operators who treat every call as a mission.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="p-6 border-l-4 border-primary bg-surface-container-low">
              <div className="font-headline-md text-headline-md text-primary">25K+</div>
              <div className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface-muted">Recoveries</div>
            </div>
            <div className="p-6 border-l-4 border-secondary bg-surface-container-low">
              <div className="font-headline-md text-headline-md text-secondary">24/7</div>
              <div className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface-muted">Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface-container-lowest py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-label-bold text-label-bold tracking-[0.3em] uppercase mb-4 block">Our DNA</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              CORE <span className="text-secondary">VALUES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 border-l-4 border-secondary hover:-translate-y-2 transition-all group">
              <span className="material-symbols-outlined text-[48px] text-secondary mb-6 block group-hover:scale-110 transition-transform">verified_user</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">RELIABILITY</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">We show up when others don&apos;t. Rain, snow, or midnight hours—our fleet is always ready for dispatch.</p>
            </div>
            <div className="glass-card p-10 border-l-4 border-primary hover:-translate-y-2 transition-all group">
              <span className="material-symbols-outlined text-[48px] text-primary mb-6 block group-hover:scale-110 transition-transform">bolt</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">SPEED</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">Equipped with real-time GPS tracking and local knowledge to ensure the fastest arrival times in the DMV area.</p>
            </div>
            <div className="glass-card p-10 border-l-4 border-secondary hover:-translate-y-2 transition-all group">
              <span className="material-symbols-outlined text-[48px] text-secondary mb-6 block group-hover:scale-110 transition-transform">handshake</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">INTEGRITY</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">Transparent pricing and honest assessments. No hidden fees, no unnecessary upselling. Just professional help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-10">
              THE <span className="text-primary">TOW ME NOW</span> EDGE
            </h2>
            <ul className="space-y-8">
              {[
                {
                  icon: "schedule",
                  title: "24/7 EMERGENCY READY",
                  desc: "Our dispatch center never sleeps. Instant connection to a live operator every time.",
                },
                {
                  icon: "engineering",
                  title: "CERTIFIED PROFESSIONALS",
                  desc: "Every operator undergoes rigorous technical training and safety certification.",
                },
                {
                  icon: "map",
                  title: "WIDE COVERAGE",
                  desc: "Serving DC, Maryland, and Virginia with strategic staging for maximum reach.",
                },
                {
                  icon: "payments",
                  title: "COMPETITIVE RATES",
                  desc: "Premium service at fair, market-standard pricing for all vehicle types.",
                },
              ].map(({ icon, title, desc }) => (
                <li key={title} className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface leading-none mb-2">{title}</h4>
                    <p className="text-on-surface-variant font-body-md text-body-md">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <div className="glass-card p-8 md:p-12 border-l-8 border-secondary relative">
              <span
                className="material-symbols-outlined text-secondary/20 text-[120px] absolute top-4 right-4 pointer-events-none"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p className="font-headline-md text-headline-md text-on-surface relative z-10 mb-8 italic">
                &ldquo;When my car died on the I-495 at 2 AM, I thought I was stranded. Tow Me Now DMV arrived in 20 minutes. Professional, fast, and remarkably calm. Truly elite service.&rdquo;
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-on-secondary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    person
                  </span>
                </div>
                <div>
                  <div className="font-label-bold text-label-bold text-on-surface">MARCUS R.</div>
                  <div className="text-secondary text-xs uppercase tracking-widest">Verified Customer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Strip */}
      <section className="py-16 md:py-24 bg-surface-main">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary font-label-bold text-label-bold tracking-[0.3em] uppercase mb-4 block">The Crew</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                EXPERT <span className="text-primary">OPERATORS</span>
              </h2>
            </div>
            <p className="text-on-surface-muted font-body-md text-body-md max-w-sm hidden md:block">
              Our team is comprised of seasoned veterans with decades of combined recovery experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "JACK STRICKLAND",
                role: "Lead Recovery Specialist",
                desc: "15+ years experience. Specialist in heavy-duty commercial vehicle recovery.",
              },
              {
                name: "SARAH CHEN",
                role: "Dispatch Operations Manager",
                desc: "Expert in logistics and rapid fleet deployment across the tri-state area.",
              },
              {
                name: "MIKE VANCE",
                role: "Master Technician",
                desc: "Certified ASE master technician specializing in roadside diagnostic and repair.",
              },
            ].map(({ name, role, desc }) => (
              <div
                key={name}
                className="bg-surface-card p-8 border border-outline-variant hover:border-secondary transition-colors group"
              >
                <div className="w-24 h-24 bg-surface-container rounded-full mb-6 flex items-center justify-center border-2 border-secondary overflow-hidden">
                  <span
                    className="material-symbols-outlined text-[64px] text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    person
                  </span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-1">{name}</h4>
                <p className="text-secondary font-label-bold text-xs uppercase tracking-widest mb-4">{role}</p>
                <p className="text-on-surface-variant text-sm font-body-md">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <div className="bg-gradient-to-r from-secondary to-secondary-container p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl amber-glow">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}
          />
          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg text-on-secondary leading-tight">
              READY TO EXPERIENCE THE<br />TOW ME NOW DIFFERENCE?
            </h2>
            <p className="font-body-lg text-body-lg text-on-secondary/80 mt-4 max-w-xl">
              Keep our number on speed dial. Whether it&apos;s a flat tire or a major accident, we&apos;re here to help you get back on track.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2028120075"
              className="bg-on-secondary text-secondary font-headline-md text-[20px] px-10 py-4 hover:bg-on-secondary/90 transition-all active:scale-95"
            >
              GET A QUOTE
            </a>
            <Link
              href="/contact"
              className="border-2 border-on-secondary text-on-secondary font-headline-md text-[20px] px-10 py-4 hover:bg-on-secondary/10 transition-all active:scale-95"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
