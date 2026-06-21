import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Tow Me Now DMV",
  description:
    "Get in touch with Tow Me Now DMV. We're ready to help 24/7 across the entire DMV area.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface-container-lowest py-24 hero-diagonal min-h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBH0Qau64VQEbIczrsgCN8_ZyZs_hFkcTcBJghwjCJ9vZwwGuUMDFhYCvT2bAlNVb3etH_Ij_9pBINWesuxdjBE5ho_WeBjEB6E7B5Pyo_U8RhEtgRIfmtOArlFiPfrc2N_3fAozJD1DLN8fe0EzSPU8VmfGFuG2PIalQaBzTKnJndKOhOrydgOggOTTONCZC8EZvhlTU4-urTUph6MSfUDIbCFbxj-bLH6eLGQiuFnvFDIam7EK5VjWs9KTn2JakHv2w3BpVJJj_o')",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
          <div className="flex flex-col space-y-4">
            <nav className="flex items-center space-x-2 text-primary font-label-bold text-label-bold tracking-widest uppercase mb-4">
              <Link className="hover:text-secondary transition-colors" href="/">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface">Contact Us</span>
            </nav>
            <h1 className="font-headline-xl text-headline-xl text-on-surface max-w-4xl leading-none">
              WE&apos;RE READY TO HELP — <span className="text-secondary">RIGHT NOW</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-4 border-secondary pl-6 py-2">
              Stranded? Need a quote? Our fleet is on standby across the DMV area 24/7. Connect with professional help in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-[1280px] mx-auto px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-card border-l-4 border-secondary p-10 flex flex-col space-y-4 neon-glow-secondary transition-all">
            <div className="bg-secondary/10 w-16 h-16 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-[40px]">phone_in_talk</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Phone Support</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">24/7 Emergency Assistance</p>
              <a className="font-headline-md text-headline-md text-secondary mt-2 block" href="tel:2028120075">
                (202) 812-0075
              </a>
            </div>
          </div>
          <div className="bg-surface-card border-l-4 border-primary p-10 flex flex-col space-y-4 neon-glow-primary transition-all">
            <div className="bg-primary/10 w-16 h-16 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[40px]">mail</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Email Dispatch</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">General Inquiries &amp; Billing</p>
              <a className="font-headline-md text-headline-md text-primary mt-2 block" href="mailto:Towmenowdmv@gmail.com">
                Towmenowdmv@gmail.com
              </a>
            </div>
          </div>
          <div className="bg-surface-card border-l-4 border-secondary p-10 flex flex-col space-y-4 neon-glow-secondary transition-all">
            <div className="bg-secondary/10 w-16 h-16 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-[40px]">distance</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Service Area</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">DC, MD, and Northern VA</p>
              <p className="font-headline-md text-headline-md text-secondary mt-2 uppercase">15-30 Min Arrival</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="max-w-[1280px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-8">
            <div className="mb-10">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                REQUEST ASSISTANCE OR <br /><span className="text-secondary">GET A FREE QUOTE</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
                Fill out the details below and a dispatch officer will contact you immediately.
              </p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container p-10 glass-panel-cyan">
              <div className="flex flex-col space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                <input
                  className="bg-surface-main border border-outline-variant p-4 focus:border-secondary focus:ring-0 text-on-surface transition-all outline-none"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Phone Number</label>
                <input
                  className="bg-surface-main border border-outline-variant p-4 focus:border-secondary focus:ring-0 text-on-surface transition-all outline-none"
                  placeholder="(555) 000-0000"
                  type="tel"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
                <input
                  className="bg-surface-main border border-outline-variant p-4 focus:border-secondary focus:ring-0 text-on-surface transition-all outline-none"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Vehicle Make/Model</label>
                <input
                  className="bg-surface-main border border-outline-variant p-4 focus:border-secondary focus:ring-0 text-on-surface transition-all outline-none"
                  placeholder="e.g. 2021 Ford F-150"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Service Required</label>
                <select className="bg-surface-main border border-outline-variant p-4 focus:border-secondary focus:ring-0 text-on-surface transition-all outline-none appearance-none">
                  <option>Emergency Towing</option>
                  <option>Roadside Assistance</option>
                  <option>Lockout Service</option>
                  <option>Battery Jumpstart</option>
                  <option>Tire Change</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Best Time To Contact</label>
                <select className="bg-surface-main border border-outline-variant p-4 focus:border-secondary focus:ring-0 text-on-surface transition-all outline-none">
                  <option>Immediately (Asap)</option>
                  <option>In 30 Minutes</option>
                  <option>In 1-2 Hours</option>
                  <option>Morning</option>
                  <option>Evening</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Current Location</label>
                <input
                  className="bg-surface-main border border-outline-variant p-4 focus:border-secondary focus:ring-0 text-on-surface transition-all outline-none"
                  placeholder="Intersection or Address"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Destination (If Towing)</label>
                <input
                  className="bg-surface-main border border-outline-variant p-4 focus:border-secondary focus:ring-0 text-on-surface transition-all outline-none"
                  placeholder="Drop-off point"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Additional Details</label>
                <textarea
                  className="bg-surface-main border border-outline-variant p-4 focus:border-secondary focus:ring-0 text-on-surface transition-all outline-none"
                  placeholder="Briefly describe your situation..."
                  rows={4}
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  className="w-full bg-secondary text-on-secondary font-headline-md text-headline-md py-6 tracking-widest hover:bg-secondary/90 transition-all flex items-center justify-center space-x-3 active:scale-95"
                  type="submit"
                >
                  <span>SEND REQUEST NOW</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Emergency Block */}
              <div className="bg-error-container/20 border border-error/30 p-8 glass-panel-cyan">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="material-symbols-outlined text-error animate-pulse">emergency</span>
                  <h4 className="font-headline-md text-headline-md text-error">EMERGENCY?</h4>
                </div>
                <p className="font-body-md text-body-md text-on-surface mb-6">
                  If you are in an unsafe location or blocking traffic, call us directly for priority dispatching.
                </p>
                <a
                  className="flex items-center justify-center space-x-2 border-2 border-error text-error font-headline-md text-headline-md py-4 hover:bg-error hover:text-on-error transition-all"
                  href="tel:2028120075"
                >
                  <span className="material-symbols-outlined">phone_iphone</span>
                  <span>(202) 812-0075</span>
                </a>
              </div>

              {/* Why Tow Me Now */}
              <div className="bg-surface-card p-8 border-l-4 border-primary glass-panel-cyan">
                <h4 className="font-headline-md text-headline-md text-on-surface mb-6">WHY TOW ME NOW?</h4>
                <ul className="space-y-4">
                  {[
                    "Licensed & Fully Insured Fleet",
                    "Real-time GPS Driver Tracking",
                    "Transparent Up-front Pricing",
                    "Expertise in Exotic & EV Towing",
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability */}
              <div className="bg-surface-container-high p-8 glass-panel-cyan border border-outline-variant">
                <h4 className="font-headline-md text-headline-md text-on-surface mb-6">AVAILABILITY</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                    <span className="font-label-bold text-label-bold text-on-surface-variant">Dispatch</span>
                    <span className="font-label-bold text-label-bold text-secondary">24/7/365</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                    <span className="font-label-bold text-label-bold text-on-surface-variant">Front Office</span>
                    <span className="font-body-md text-body-md text-on-surface">8AM - 6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-label-bold text-label-bold text-on-surface-variant">Billing</span>
                    <span className="font-body-md text-body-md text-on-surface">9AM - 5PM</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-[1280px] mx-auto px-8 mb-24">
        <div className="relative group cursor-pointer overflow-hidden border border-outline-variant/30 h-[500px]">
          <div
            className="w-full h-full bg-cover bg-center grayscale contrast-125 opacity-60 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC97_5jHAFB30d41Tpdnjlnj8BSmNYlhdaaeZwl7Mq7JFjEqskwBx5n7zahtu1UDNx1XWsm8lHp_37eiISxWTzJXOjKnOyQbIo9nLuO-pC7kxfZGn0SoS_jSU84lHOm7vK-olSEb0n0zNKHD2sbAeY2WxJVbRpuXtcXZPSLzdiHz3y_yFpdgPUeAXkLV9w9aEBfLcxl69tKQhZ58AkXJ3ykFlEW3MmKmkiUlBvy-6xlE2uUq6Z0KjnPrmjRUfEjwTaWopmaacYCXpk')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091518] via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 text-center">
            <div className="bg-secondary p-8 rounded-full shadow-[0_0_50px_rgba(255,185,95,0.4)]">
              <span
                className="material-symbols-outlined text-on-secondary text-[64px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
            </div>
            <div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">HQ &amp; SERVICE HUB</h3>
              <p className="font-body-lg text-body-lg text-secondary uppercase tracking-[0.2em]">Covering all 68 Square Miles of DMV</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Strip */}
      <section className="bg-surface-container py-24 border-t border-secondary/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">STILL HAVE QUESTIONS?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link
              className="w-full md:w-auto px-12 py-5 border-2 border-primary text-primary font-headline-md text-headline-md tracking-widest hover:bg-primary hover:text-on-primary transition-all active:scale-95"
              href="/services"
            >
              VIEW HELP CENTER
            </Link>
            <Link
              className="w-full md:w-auto px-12 py-5 border-2 border-secondary text-secondary font-headline-md text-headline-md tracking-widest hover:bg-secondary hover:text-on-secondary transition-all active:scale-95"
              href="/services#faq"
            >
              READ OUR FAQS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
