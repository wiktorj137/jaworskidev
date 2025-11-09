import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../config/siteConfig";
import { mainNav } from "../config/navigation";
import Link from "next/link";
import { Toaster } from "../components/ui/sonner";
import { MobileNav } from "../components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>        
        <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
            <Link href="/" className="font-mono text-sm font-bold">
              JaworskiDev
            </Link>
            
            {/* Desktop nav */}
            <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider md:flex">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile nav */}
            <MobileNav />
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border/50 mt-16 py-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Wszystkie prawa zastrzeżone.
        </footer>
        <Toaster richColors />
      </body>
    </html>
  );
}
