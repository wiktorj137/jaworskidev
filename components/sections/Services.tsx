"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: 1,
    tag: "FULL-STACK",
    title: "Aplikacje Webowe",
    shortDesc: "SaaS, panele, platformy",
    fullDesc: "Od narzędzi wewnętrznych po platformy SaaS. Budujemy aplikacje, które automatyzują procesy i otwierają nowe możliwości dla Twojej firmy.",
    metrics: ["2-3 miesiące", "95+ Lighthouse", "Serverless"],
    color: "#8b5cf6",
  },
  {
    id: 2,
    tag: "COMMERCE",
    title: "Sklepy E-commerce",
    shortDesc: "Headless e-commerce",
    fullDesc: "Więcej niż sklep. Tworzymy platformy sprzedażowe, które zapewniają wyjątkowe doświadczenia zakupowe i maksymalizują konwersję.",
    metrics: ["3-4 tygodnie", "Mobile-first", "SEO ready"],
    color: "#06b6d4",
  },
  {
    id: 3,
    tag: "MARKETING",
    title: "Strony Internetowe",
    shortDesc: "Conversion-focused",
    fullDesc: "Twoja cyfrowa wizytówka. Projektujemy strony, które nie tylko świetnie wyglądają, ale skutecznie komunikują wartość Twojej marki i przyciągają klientów.",
    metrics: ["1-2 tygodnie", "High conversion", "Fast"],
    color: "#ec4899",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="uslugi" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 font-mono text-sm text-muted-foreground">
            /// SERVICES
          </p>
          <h2 className="text-5xl font-bold lg:text-7xl">
            Wybierz <br />
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              typ projektu
            </span>
          </h2>
        </motion.div>

        {/* Interactive list */}
        <div className="space-y-4">
          {services.map((service, index) => {
            const isActive = activeService === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveService(isActive ? null : service.id)}
                className="cursor-pointer"
              >
                <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isActive 
                    ? "border-border bg-card shadow-lg" 
                    : "border-border/30 bg-card/30 hover:border-border/60 hover:bg-card/50"
                }`}>
                  {/* Top bar - always visible */}
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-6">
                      {/* Number */}
                      <span className="font-mono text-4xl font-bold text-muted-foreground/30">
                        0{service.id}
                      </span>
                      
                      {/* Title & tag */}
                      <div>
                        <div className="mb-1 flex items-center gap-3">
                          <span 
                            className="font-mono text-xs font-semibold tracking-wider"
                            style={{ color: service.color }}
                          >
                            {service.tag}
                          </span>
                          <span className="text-xs text-muted-foreground">/</span>
                          <span className="text-sm text-muted-foreground">
                            {service.shortDesc}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <motion.div
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
                    >
                      <span className="text-xl">+</span>
                    </motion.div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/30 p-6 pt-6">
                          <div className="grid gap-8 lg:grid-cols-3">
                            {/* Description */}
                            <div className="lg:col-span-2">
                              <p className="text-lg leading-relaxed text-muted-foreground">
                                {service.fullDesc}
                              </p>
                              
                              <div className="mt-6">
                                <Button asChild>
                                  <Link href="/contact">
                                    Zamów wycenę →
                                  </Link>
                                </Button>
                              </div>
                            </div>

                            {/* Metrics */}
                            <div className="space-y-3">
                              {service.metrics.map((metric, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="rounded-lg border border-border/30 bg-background/50 p-3 text-sm"
                                >
                                  {metric}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1"
                    style={{ backgroundColor: service.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-sm text-muted-foreground"
        >
          Kliknij, aby zobaczyć szczegóły
        </motion.div>
      </div>
    </section>
  );
}



