import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-16 border-t border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-6">
              <img
                src="/images/Tow%20me%20now%20logo.webp"
                alt="Tow Me Now DMV"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="inter text-on-surface-variant text-sm leading-relaxed mb-6">
              Providing reliable, professional towing and roadside assistance
              across the entire DMV region for over 25 years.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a
                className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="bebas text-xl text-on-background mb-6">Quick Links</h5>
            <ul className="space-y-4 inter text-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="bebas text-xl text-on-background mb-6">Services</h5>
            <ul className="space-y-4 inter text-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/services">
                  24/7 Emergency Towing
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/services">
                  Accident Management
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/services">
                  Roadside Support
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/services">
                  Specialized Transport
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="bebas text-xl text-on-background mb-6">Contact Info</h5>
            <ul className="space-y-4 inter text-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  location_on
                </span>
                <span>
                  Serving Washington D.C., <br />
                  Maryland, and Virginia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  call
                </span>
                <a href="tel:2028120075" className="hover:text-primary transition-colors">202-812-0075</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  mail
                </span>
                <a href="mailto:Towmenowdmv@gmail.com" className="hover:text-primary transition-colors break-all">Towmenowdmv@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-on-surface-variant text-center">
          <p>© 2026 Tow Me Now DMV. All rights reserved.</p>
          <p className="normal-case tracking-normal font-normal text-xs flex items-center gap-1">
            Designed with{" "}
            <span className="material-symbols-outlined text-amber-brand" style={{ fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>favorite</span>
            {" "}by{" "}
            <a href="https://linkedo.co.uk/" target="_blank" rel="nofollow noopener" className="text-amber-brand hover:underline">Linkedo</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
