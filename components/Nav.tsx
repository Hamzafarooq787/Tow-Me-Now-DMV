"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "HOME", href: "/" },
  { label: "WHY CHOOSE US?", href: "/#why" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "CONTACT", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-amber-brand text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            rowing
          </span>
          <span className="bebas text-2xl md:text-3xl font-bold tracking-tight text-on-background">
            TOW ME NOW <span className="text-primary">DMV</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(({ label, href }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href.replace("/#", "/"));
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

        <a
          className="bg-amber-brand hover:bg-amber-600 text-black font-bold py-2 px-6 rounded transition-transform active:scale-95 uppercase text-sm tracking-widest bebas"
          href="tel:2028120075"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}
