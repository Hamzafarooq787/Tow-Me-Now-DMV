import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Tow Me Now DMV",
  description: "Over 25 years of trusted towing and roadside assistance across Washington D.C., Maryland, and Virginia.",
};

const reasons = [
  { icon: "verified", title: "Over 25 years of experience", description: "Decades of navigating the DMV area means we know every shortcut and complication to get to you faster." },
  { icon: "engineering", title: "Skilled tow truck operators", description: "Our team undergoes rigorous training and certification to handle any vehicle type, from luxury sedans to heavy trucks." },
  { icon: "schedule", title: "Available around the clock", description: "Breakdowns don't wait for business hours. Neither do we. Rain or shine, day or night, we are your 24/7 lifeline." },
  { icon: "payments", title: "Transparent pricing", description: "No hidden fees, no surprises. The price we quote is the price you pay. We believe honest service builds lasting trust." },
  { icon: "shield", title: "Fully insured & licensed", description: "We carry full commercial liability insurance and all required state licenses, so you can rest easy when we handle your vehicle." },
  { icon: "handshake", title: "Community-first values", description: "We're your neighbors — born and raised in the DMV. Giving back to the community that trusted us is what drives everything we do." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-dark-navy py-24 border-b border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-6">Our Story</span>
          <h1 className="bebas text-6xl md:text-7xl text-on-background mb-6">About <span className="text-amber-brand">Tow Me Now DMV</span></h1>
          <p className="inter text-lg text-on-surface-variant max-w-2xl mx-auto">Since 1999, we&apos;ve been the DMV&apos;s most trusted name in towing and roadside assistance — built on reliability, honesty, and a genuine commitment to our community.</p>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-cover bg-center border border-outline-variant" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFzpwzZDhpddk1gf2lrN-_YgHcndzZKWxBkXYsJ2tFdo47XEqKVrVTktATCq-zhpexm4d0whnEfaSJQ15jNHCGKTYRSCXdbm5iKsr7kgc7MLYGJDu865kMeVcY1-LcVpKKCLV2r23bquW5iaKjyyYMiAAZM4evM-O39LXGY4Llj-4hI32fBsEEy-br3qUYFEsmOgkw5bPRzjgh-b1vZyNZ85Ww7VSbBvCiSb-Y-EkMJhp4nqEOBLbdGY3u1mUy5sNLAUAiL-3hYDM')" }} />
            <div className="absolute -bottom-8 -right-8 bg-amber-brand p-8 hidden md:block">
              <div className="bebas text-4xl text-black">SINCE 1999</div>
            </div>
          </div>
          <div>
            <h2 className="bebas text-5xl md:text-6xl text-on-background mb-6">25 Years of <span className="text-primary">Trusted Service</span></h2>
            <p className="inter text-on-surface-variant leading-relaxed mb-6">Tow Me Now DMV was founded in 1999 with one simple mission: to provide the DMV area with honest, fast, and professional towing when people need it most. What started as a single truck operation has grown into a full-fleet company serving Washington D.C., Maryland, and Virginia around the clock.</p>
            <p className="inter text-on-surface-variant leading-relaxed mb-6">Over the years we&apos;ve built our reputation one rescue at a time — arriving quickly, treating every vehicle like it&apos;s our own, and charging exactly what we quote. No shortcuts, no surprises.</p>
            <p className="inter text-on-surface-variant leading-relaxed">Today our team of certified operators handles everything from simple jump-starts to complex multi-vehicle accident recoveries. Whatever the situation, we&apos;re ready.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="bebas text-5xl md:text-6xl text-on-background mb-4">Why Choose <span className="text-primary">Us</span></h2>
            <p className="inter text-on-surface-variant max-w-2xl mx-auto">We&apos;ve earned our reputation the hard way — one satisfied customer at a time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map(({ icon, title, description }) => (
              <div key={title} className="flex gap-6">
                <div className="h-12 w-12 shrink-0 bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">{icon}</span>
                </div>
                <div>
                  <h4 className="bebas text-2xl text-on-background mb-2">{title}</h4>
                  <p className="inter text-on-surface-variant">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-16 border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[{ stat: "25+", label: "Years Experience" }, { stat: "24/7", label: "Availability" }, { stat: "FAST", label: "Response Time" }].map(({ stat, label }) => (
            <div key={label} className="group">
              <div className="bebas text-6xl text-amber-brand mb-2 group-hover:scale-110 transition-transform">{stat}</div>
              <div className="inter text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="bebas text-5xl md:text-6xl text-on-background mb-6">Ready to Work <span className="text-amber-brand">With Us?</span></h2>
          <p className="inter text-on-surface-variant max-w-xl mx-auto mb-10">Get in touch today — our team is always ready to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2028120075" className="bg-amber-brand hover:bg-amber-600 text-black font-bold py-4 px-10 rounded text-lg bebas tracking-wide transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">Call 202-812-0075</a>
            <Link href="/contact" className="border-2 border-white/20 hover:border-white text-white font-bold py-4 px-10 rounded text-lg bebas tracking-wide transition-all">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
