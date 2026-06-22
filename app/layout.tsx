import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tow Me Now DMV | Reliable Towing 24/7",
  description:
    "Professional car towing services available 24/7, 365 days a year across the DMV area.",
  icons: {
    icon: "/images/Site-Icon%20Tow%20Me%20Now.webp",
    apple: "/images/Site-Icon%20Tow%20Me%20Now.webp",
  },
  openGraph: {
    title: "Tow Me Now DMV | Reliable Towing 24/7",
    description:
      "Professional car towing services available 24/7, 365 days a year across the DMV area.",
    images: [{ url: "/images/Open%20graph%20tow%20me%20now%20dmv-airanko.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-background inter selection:bg-primary selection:text-surface">
        <TopBar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
