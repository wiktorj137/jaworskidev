"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-56px)] items-center overflow-hidden py-12 sm:py-0">
      {/* Minimal background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_65%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Main content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <div className="inline-flex items-baseline gap-3 rounded-full border border-border/50 bg-muted/30 px-4 py-2 font-mono text-sm">
                <span className="text-violet-600">●</span>
                <span>Dostępny na projekty</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 font-mono text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
            >
              JaworskiDev
              <span className="block text-muted-foreground">Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              Przekształcamy pomysły w produkty cyfrowe, które napędzają biznes.
              <br />
              Aplikacje webowe, które zachwycają użytkowników i generują wyniki.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Kontakt
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">Portfolio</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Metrics list */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8 rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm"
            >
              <div>
                <div className="mb-1 font-mono text-3xl font-bold">3+</div>
                <div className="text-sm text-muted-foreground">Zrealizowanych projektów</div>
              </div>

              <div className="h-px bg-border/50" />

              <div>
                <div className="mb-1 font-mono text-3xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">TypeScript w produkcji</div>
              </div>

              <div className="h-px bg-border/50" />

              <div>
                <div className="mb-1 font-mono text-3xl font-bold">&lt;1s</div>
                <div className="text-sm text-muted-foreground">Średni First Contentful Paint</div>
              </div>

              <div className="h-px bg-border/50" />

              <div>
                <div className="mb-1 font-mono text-3xl font-bold">Next.js</div>
                <div className="text-sm text-muted-foreground">Główny framework w stacku</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


