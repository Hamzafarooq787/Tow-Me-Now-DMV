"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/images/Tow%20me%20now%20logo.webp"
            alt="Tow Me Now DMV"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(({ label, href }) => {
            const isActive = href === "/" ? pathname === "/" : pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-label-bold text-[14px] transition-colors ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface hover:text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            className="hidden sm:block bg-amber-brand hover:bg-amber-600 text-black font-bold py-2 px-5 rounded transition-transform active:scale-95 uppercase text-sm tracking-widest bebas"
            href="tel:2028120075"
          >
            Call Now
          </a>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-on-surface p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant">
          <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-6">
            {links.map(({ label, href }) => {
              const isActive = href === "/" ? pathname === "/" : pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-label-bold text-[16px] transition-colors border-b border-outline-variant pb-4 ${
                    isActive ? "text-primary" : "text-on-surface hover:text-primary"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <a
              className="bg-amber-brand text-black font-bold py-3 px-6 rounded text-center uppercase tracking-widest bebas text-lg"
              href="tel:2028120075"
            >
              Call Now — 202-812-0075
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
