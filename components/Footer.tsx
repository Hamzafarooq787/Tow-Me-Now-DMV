import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-16 border-t border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span
                className="material-symbols-outlined text-amber-brand text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rowing
              </span>
              <span className="bebas text-2xl font-bold tracking-tight text-on-background">
                TOW ME NOW <span className="text-primary">DMV</span>
              </span>
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

          <div>
            <h5 className="bebas text-xl text-on-background mb-6">Quick Links</h5>
            <ul className="space-y-4 inter text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#">Sitemap</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#">Career Opportunities</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="bebas text-xl text-on-background mb-6">Services</h5>
            <ul className="space-y-4 inter text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors" href="/services">24/7 Emergency Towing</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Accident Management</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Roadside Support</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Specialized Transport</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="bebas text-xl text-on-background mb-6">Contact Info</h5>
            <ul className="space-y-4 inter text-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>Serving Washington D.C., <br />Maryland, and Virginia</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <span>202-812-0075</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <span>Towmenowdmv@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          <p>© 2025 Tow Me Now DMV. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Precision Towing</span>
            <span>Professional Recovery</span>
            <span>24/7 Reliability</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
