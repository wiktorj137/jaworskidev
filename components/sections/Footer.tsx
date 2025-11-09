"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Usługi", href: "#uslugi" },
    { label: "Proces", href: "#proces" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  social: [
    {
      label: "GitHub",
      href: "https://github.com/wiktorj137",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/wiktor-jaworski",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:contact@jaworskidev.pl",
      icon: Mail,
    },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="mb-4 font-mono text-2xl font-bold">JaworskiDev</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Tworzymy nowoczesne aplikacje webowe,
              <br />
              które pomagają firmom rosnąć w internecie.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span>Dostępni dla nowych projektów</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-sm transition-colors hover:text-violet-600"
                  >
                    {link.label}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Kontakt
            </h4>
            <div className="mb-6">
              <a
                href="mailto:contact@jaworskidev.pl"
                className="text-sm font-medium transition-colors hover:text-violet-600"
              >
                contact@jaworskidev.pl
              </a>
            </div>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50 transition-all hover:border-violet-600/50 hover:bg-violet-500/10"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground sm:flex-row"
        >
          <p>© {currentYear} JaworskiDev. Wszystkie prawa zastrzeżone.</p>
          <p className="font-mono">
            Zbudowane z Next.js 15 + TypeScript + Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
