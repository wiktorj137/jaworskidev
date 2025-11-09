"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMagneticButton } from "@/lib/hooks";
import Link from "next/link";
import { ArrowRight, Code2, Zap, Sparkles } from "lucide-react";
import { useRef } from "react";

function MagneticButton({ children, ...props }: React.ComponentProps<typeof Button>) {
  const ref = useMagneticButton();
  return (
    <Button ref={ref} className="transition-transform duration-200 ease-out" {...props}>
      {children}
    </Button>
  );
}

function FloatingCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          delay,
          duration: 0.6,
          ease: "easeOut",
        }
      }}
      whileHover={{ 
        y: -4, 
        transition: { duration: 0.2 } 
      }}
      className="group"
    >
      {children}
    </motion.div>
  );
}

function AnimatedOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        transition: { delay, duration: 1, ease: "easeOut" }
      }}
      className={className}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-full w-full rounded-full blur-3xl"
      />
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated orbs - fixed positioning and sizes */}
      <div className="pointer-events-none absolute inset-0">
        <AnimatedOrb 
          delay={0.2}
          className="absolute left-[5%] top-[15%] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] bg-gradient-to-br from-violet-500/30 to-purple-500/30"
        />
        <AnimatedOrb 
          delay={0.4}
          className="absolute right-[5%] top-[30%] h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] bg-gradient-to-br from-cyan-500/30 to-blue-500/30"
        />
        <AnimatedOrb 
          delay={0.6}
          className="absolute bottom-[10%] left-[40%] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[350px] lg:w-[350px] bg-gradient-to-br from-pink-500/30 to-rose-500/30"
        />
      </div>

      <motion.div 
        style={{ y, opacity }} 
        className="relative z-10 flex min-h-screen items-center px-4 py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Compact status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 flex justify-center sm:mb-8 sm:justify-start"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 backdrop-blur-sm sm:px-4">
              <Sparkles className="h-3 w-3 text-violet-400 sm:h-3.5 sm:w-3.5" />
              <span className="text-xs font-medium sm:text-sm">Otwarty na projekty 2025</span>
            </div>
          </motion.div>

          {/* Main content grid */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left column - text content */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="block"
                >
                  Buduję
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  software
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="block"
                >
                  który liczy się
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl"
              >
                Full-stack developer specjalizujący się w Next.js i React. 
                Tworzę aplikacje, które użytkownicy kochają, a wyszukiwarki doceniają.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
              >
                <MagneticButton size="lg" className="group w-full sm:w-auto" asChild>
                  <Link href="/contact">
                    Rozpocznij projekt
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
                <MagneticButton size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/portfolio">
                    <Code2 className="mr-2 h-4 w-4" />
                    Zobacz portfolio
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right column - stats cards */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-5">
              <FloatingCard delay={1.1}>
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-xl sm:rounded-2xl sm:p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent" />
                  <div className="relative">
                    <Zap className="mb-2 h-6 w-6 text-violet-500 sm:mb-3 sm:h-8 sm:w-8" />
                    <div className="text-2xl font-bold sm:text-3xl">3+</div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      Projektów w portfolio
                    </div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={1.3}>
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-xl sm:rounded-2xl sm:p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                  <div className="relative">
                    <Code2 className="mb-2 h-6 w-6 text-cyan-500 sm:mb-3 sm:h-8 sm:w-8" />
                    <div className="text-2xl font-bold sm:text-3xl">100%</div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      TypeScript + najnowsze tech
                    </div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={1.5}>
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-xl sm:rounded-2xl sm:p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent" />
                  <div className="relative">
                    <Sparkles className="mb-2 h-6 w-6 text-pink-500 sm:mb-3 sm:h-8 sm:w-8" />
                    <div className="text-2xl font-bold sm:text-3xl">&lt;1s</div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      Średni czas ładowania
                    </div>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground">Scroll</span>
            <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/30 p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
