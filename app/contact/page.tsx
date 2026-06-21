import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tow Me Now DMV",
  description: "Get in touch with Tow Me Now DMV for emergency towing, a free quote, or any roadside assistance inquiry.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-dark-navy py-24 border-b border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-6">Get in Touch</span>
          <h1 className="bebas text-6xl md:text-7xl text-on-background mb-6">Contact <span className="text-amber-brand">Us</span></h1>
          <p className="inter text-lg text-on-surface-variant max-w-2xl mx-auto">Fill out the form below for a non-emergency quote or general inquiry. For immediate emergency towing, please call us directly.</p>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="bebas text-6xl text-on-background mb-6">Get Assistance <span className="text-amber-brand">Now</span></h2>
            <p className="inter text-on-surface-variant mb-10 leading-relaxed">We&apos;re available 24 hours a day, 7 days a week. Whether you&apos;re stranded on the highway or just need a quote, we respond fast.</p>
            <div className="space-y-6">
              {[
                { icon: "phone_in_talk", label: "Emergency Dispatch", value: "202-812-0075", href: "tel:2028120075" },
                { icon: "alternate_email", label: "Email Us", value: "Towmenowdmv@gmail.com", href: "mailto:Towmenowdmv@gmail.com" },
                { icon: "location_on", label: "Service Area", value: "Washington D.C., Maryland & Virginia", href: null },
                { icon: "schedule", label: "Hours", value: "24 / 7 — 365 Days a Year", href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <span className="material-symbols-outlined text-primary">{icon}</span>
                  </div>
                  <div>
                    <p className="inter text-xs text-on-surface-variant uppercase tracking-widest">{label}</p>
                    {href ? (
                      <a href={href} className="bebas text-2xl text-on-background hover:text-primary transition-colors">{value}</a>
                    ) : (
                      <p className="bebas text-2xl text-on-background">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <form className="glass-panel p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Full Name</label>
                  <input className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Phone Number</label>
                  <input className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none" placeholder="(202) 000-0000" type="tel" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Email Address</label>
                  <input className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none" placeholder="john@example.com" type="email" />
                </div>
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Vehicle Make/Model</label>
                  <input className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none" placeholder="e.g., Ford F-150" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Service Needed</label>
                  <select className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all appearance-none outline-none">
                    <option>Select a Service</option>
                    <option>Emergency Towing</option>
                    <option>Accident Recovery</option>
                    <option>Roadside Assistance</option>
                    <option>Long Distance Transport</option>
                  </select>
                </div>
                <div>
                  <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Location</label>
                  <input className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none" placeholder="Current address or landmark" type="text" />
                </div>
              </div>
              <div>
                <label className="inter text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Message / Additional Details</label>
                <textarea className="w-full bg-surface border border-outline-variant focus:border-amber-brand focus:ring-0 text-on-background p-4 transition-all outline-none" placeholder="How can we help?" rows={4} />
              </div>
              <button type="submit" className="w-full bg-amber-brand hover:bg-amber-600 text-black font-bold py-5 px-10 rounded text-xl bebas tracking-wider transition-all">Request Assistance Now</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
