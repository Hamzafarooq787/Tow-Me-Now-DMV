import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className="relative min-h-[600px] md:min-h-[870px] flex items-center overflow-hidden bg-dark-navy">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-0 w-full relative z-10">
          <div className="py-12 lg:pr-12">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-6">
              Available 24/7 Across DMV Area
            </span>
            <h1 className="bebas text-6xl md:text-8xl leading-none text-on-background mb-6">
              Reliable Towing, <br />
              <span className="text-amber-brand">Right When You Need It</span>
            </h1>
            <p className="inter text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Our professional car towing services are designed to provide you
              with peace of mind — 24/7, 365 days a year. Stranded on the
              roadside? We&apos;re already on our way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-amber-brand hover:bg-amber-600 text-black font-bold py-4 px-10 rounded text-lg bebas tracking-wide transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:2028120075"
                className="border-2 border-white/20 hover:border-white text-white font-bold py-4 px-10 rounded text-lg bebas tracking-wide transition-all text-center"
              >
                Call 202-812-0075
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-dark-navy via-transparent to-transparent z-10" />
            <div
              className="h-full w-full bg-cover bg-center diagonal-split shadow-2xl"
              style={{
                backgroundImage:
                  "url('/images/Hero%20image-airanko.webp')",
              }}
            />
            <div className="absolute bottom-10 right-10 z-20 glass-panel p-6 border-l-4 border-amber-brand">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-brand animate-pulse">
                  location_on
                </span>
                <p className="bebas text-xl">Rapid Response DMV Area</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="bg-surface-container py-12 md:py-16 border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-3 gap-6 md:gap-12 text-center">
          <div className="group">
            <div className="bebas text-6xl text-amber-brand mb-2 group-hover:scale-110 transition-transform">
              25+
            </div>
            <div className="inter text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Years Experience
            </div>
          </div>
          <div className="group">
            <div className="bebas text-6xl text-amber-brand mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="inter text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Availability
            </div>
          </div>
          <div className="group">
            <div className="bebas text-6xl text-amber-brand mb-2 group-hover:scale-110 transition-transform">
              FAST
            </div>
            <div className="inter text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Response Time
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-surface" id="services">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="bebas text-5xl md:text-6xl text-on-background mb-4">
                Our Professional <span className="text-primary">Services</span>
              </h2>
              <p className="inter text-on-surface-variant max-w-2xl">
                Whatever the situation, our team is equipped with the latest
                technology and years of expertise to get you back on the road
                safely.
              </p>
            </div>
            <Link
              className="text-primary hover:text-amber-brand transition-colors font-bold uppercase tracking-widest text-sm flex items-center gap-2"
              href="/services"
            >
              View All Services{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#131929] p-10 border-l-4 border-amber-500 neon-border group transition-all duration-500">
              <span className="material-symbols-outlined text-amber-brand text-5xl mb-8 group-hover:-translate-y-2 transition-transform block">
                car_crash
              </span>
              <h3 className="bebas text-3xl text-on-background mb-4">
                Accident Management
              </h3>
              <p className="inter text-on-surface-variant leading-relaxed">
                Swift and careful vehicle removal from accident scenes. We
                handle the logistics so you can focus on what matters.
              </p>
            </div>

            <div className="bg-[#131929] p-10 border-l-4 border-amber-500 neon-border group transition-all duration-500">
              <span className="material-symbols-outlined text-amber-brand text-5xl mb-8 group-hover:-translate-y-2 transition-transform block">
                rowing
              </span>
              <h3 className="bebas text-3xl text-on-background mb-4">
                Recovery Towing
              </h3>
              <p className="inter text-on-surface-variant leading-relaxed">
                Specialized equipment for vehicles in ditches, mud, or complex
                recovery scenarios. Precision and power combined.
              </p>
            </div>

            <div className="bg-[#131929] p-10 border-l-4 border-amber-500 neon-border group transition-all duration-500">
              <span className="material-symbols-outlined text-amber-brand text-5xl mb-8 group-hover:-translate-y-2 transition-transform block">
                minor_crash
              </span>
              <h3 className="bebas text-3xl text-on-background mb-4">
                Roadside Assistance
              </h3>
              <p className="inter text-on-surface-variant leading-relaxed">
                Lockouts, jump-starts, tire changes, and fuel delivery. Small
                problems shouldn&apos;t ruin your entire day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-surface-container-low" id="why">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div
              className="aspect-square bg-cover bg-center border border-outline-variant"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFzpwzZDhpddk1gf2lrN-_YgHcndzZKWxBkXYsJ2tFdo47XEqKVrVTktATCq-zhpexm4d0whnEfaSJQ15jNHCGKTYRSCXdbm5iKsr7kgc7MLYGJDu865kMeVcY1-LcVpKKCLV2r23bquW5iaKjyyYMiAAZM4evM-O39LXGY4Llj-4hI32fBsEEy-br3qUYFEsmOgkw5bPRzjgh-b1vZyNZ85Ww7VSbBvCiSb-Y-EkMJhp4nqEOBLbdGY3u1mUy5sNLAUAiL-3hYDM')",
              }}
            />
            <div className="absolute -bottom-8 -right-8 bg-amber-brand p-8 hidden md:block">
              <div className="bebas text-4xl text-black">SINCE 1999</div>
            </div>
          </div>

          <div>
            <h2 className="bebas text-5xl md:text-6xl text-on-background mb-8">
              Why Choose{" "}
              <span className="text-amber-brand">Tow Me Now DMV</span>?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="h-12 w-12 shrink-0 bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>
                </div>
                <div>
                  <h4 className="bebas text-2xl text-on-background mb-2">
                    Over 25 years of experience
                  </h4>
                  <p className="inter text-on-surface-variant">
                    Decades of navigating the DMV area means we know every
                    shortcut and complication to get to you faster.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-12 w-12 shrink-0 bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">
                    engineering
                  </span>
                </div>
                <div>
                  <h4 className="bebas text-2xl text-on-background mb-2">
                    Skilled tow truck operators
                  </h4>
                  <p className="inter text-on-surface-variant">
                    Our team undergoes rigorous training and certification to
                    handle any vehicle type, from luxury sedans to heavy trucks.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-12 w-12 shrink-0 bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                </div>
                <div>
                  <h4 className="bebas text-2xl text-on-background mb-2">
                    Available around the clock
                  </h4>
                  <p className="inter text-on-surface-variant">
                    Breakdowns don&apos;t wait for business hours. Neither do
                    we. Rain or shine, day or night, we are your 24/7 lifeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="bebas text-5xl md:text-6xl text-on-background mb-4">
              Trusted by the <span className="text-primary">Community</span>
            </h2>
            <p className="inter text-on-surface-variant">
              Real stories from drivers we&apos;ve helped across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Got a flat on I-495 at 2 AM. They arrived in less than 20 minutes. Professional, safe, and reasonably priced. Best towing experience I've had.",
                author: "MARCUS R.",
                span: 1,
              },
              {
                quote:
                  "Excellent service after my accident. They handled my car with such care and even helped coordinate with my insurance. Highly recommend.",
                author: "SARAH T.",
                span: 1,
              },
              {
                quote:
                  "Reliable and honest. The price they quoted over the phone was exactly what I paid. No hidden fees. Will definitely use them again.",
                author: "DAVID L.",
                span: 1,
              },
              {
                quote:
                  "My battery died in the grocery parking lot. They were there fast and got me a jump start in seconds. Very polite crew!",
                author: "JESSICA K.",
                span: 1,
              },
              {
                quote:
                  "If you're stranded in the DMV area, call these guys. They are the only ones I trust with my vintage BMW. They use flatbeds for everything and are extremely careful.",
                author: "ANTHONY V.",
                span: 2,
              },
            ].map(({ quote, author, span }) => (
              <div
                key={author}
                className={`glass-panel p-8 border-t-2 border-primary ${span === 2 ? "md:col-span-2" : "md:col-span-1"}`}
              >
                <div className="flex text-amber-brand mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="inter text-on-background italic mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="font-bold text-primary bebas tracking-widest">
                  — {author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-surface-container-lowest" id="contact">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-5">
            <h2 className="bebas text-6xl text-on-background mb-6">
              Get Assistance <span className="text-amber-brand">Now</span>
            </h2>
            <p className="inter text-on-surface-variant mb-10 leading-relaxed">
              Fill out the form below for a non-emergency quote or general
              inquiry. For immediate emergency towing, please call us directly.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    phone_in_talk
                  </span>
                </div>
                <div>
                  <p className="inter text-xs text-on-surface-variant uppercase tracking-widest">
                    Emergency Dispatch
                  </p>
                  <p className="bebas text-2xl text-on-background">
                    202-812-0075
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    alternate_email
                  </span>
                </div>
                <div>
                  <p className="inter text-xs text-on-surface-variant uppercase tracking-widest">
                    Email Us
                  </p>
                  <p className="bebas text-2xl text-on-background">
                    Towmenowdmv@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="glass-panel p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none"
                    placeholder="(202) 000-0000"
                    type="tel"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                    Vehicle Make/Model
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none"
                    placeholder="e.g., Ford F-150"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                    Service Needed
                  </label>
                  <select className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all appearance-none outline-none">
                    <option>Select a Service</option>
                    <option>Emergency Towing</option>
                    <option>Accident Recovery</option>
                    <option>Roadside Assistance</option>
                    <option>Long Distance Transport</option>
                  </select>
                </div>
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                    Location
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none"
                    placeholder="Current address or landmark"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                  Message / Additional Details
                </label>
                <textarea
                  className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none"
                  placeholder="How can we help?"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-brand hover:bg-amber-600 text-black font-bold py-5 px-10 rounded text-xl bebas tracking-wider transition-all"
              >
                Request Assistance Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
