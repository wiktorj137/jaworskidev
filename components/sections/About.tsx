"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Poznanie i Strategia",
    description:
      "Spotykamy się, aby dokładnie zrozumieć Twoją wizję i cele biznesowe. Wspólnie ustalamy, co ma robić aplikacja i dla kogo będzie stworzona.",
    tools: ["Notion", "Miro", "Linear"],
    output: "Plan działania",
    color: "violet",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    id: 2,
    icon: Palette,
    title: "Projektowanie i Makiety",
    description:
      "Tworzymy wizualne projekty pokazujące, jak będzie wyglądać Twoja aplikacja. Możesz zobaczyć i przetestować wygląd przed rozpoczęciem tworzenia kodu.",
    tools: ["Figma", "FigJam", "Tailwind"],
    output: "Projekty graficzne",
    color: "cyan",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: 3,
    icon: Code2,
    title: "Tworzenie Aplikacji",
    description:
      "Zamieniamy projekty w działającą aplikację. Używamy najnowszych technologii, aby wszystko działało szybko i bezpiecznie. Możesz na bieżąco sprawdzać postępy.",
    tools: ["Next.js", "TypeScript", "Vercel"],
    output: "Działająca aplikacja",
    color: "pink",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Publikacja i Opieka",
    description:
      "Uruchamiamy Twoją aplikację w internecie i dbamy o to, aby wszystko działało sprawnie. Jesteśmy dostępni, jeśli pojawią się pytania lub potrzebne będą poprawki.",
    tools: ["Sentry", "Vercel", "GitHub"],
    output: "Gotowy produkt",
    color: "orange",
    gradient: "from-orange-600 to-amber-600",
  },
];

export function About() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const colorMap = {
    violet: "text-violet-600",
    cyan: "text-cyan-600",
    pink: "text-pink-600",
    orange: "text-orange-600",
  };

  const bgColorMap = {
    violet: "bg-violet-500/10",
    cyan: "bg-cyan-500/10",
    pink: "bg-pink-500/10",
    orange: "bg-orange-500/10",
  };

  return (
    <section id="proces" className="relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-4 font-mono text-sm text-muted-foreground">
            /// JAK TO ROBIMY
          </p>
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Proces → Produkt
          </h2>
          <p className="text-lg text-muted-foreground">
            <span className="font-bold text-violet-600">4</span> kroki od pomysłu do gotowego produktu. Kliknij, aby
            zobaczyć szczegóły.
          </p>
        </motion.div>

        {/* Interactive step cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveStep(isActive ? null : step.id)}
                className="group cursor-pointer"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-border bg-card shadow-xl"
                      : "border-border/30 bg-card/50 hover:border-border/60"
                  }`}
                >
                  {/* Card content */}
                  <div className="p-6">
                    {/* Icon & Title */}
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                            bgColorMap[step.color as keyof typeof bgColorMap]
                          }`}
                        >
                          <Icon
                            className={`h-6 w-6 ${
                              colorMap[step.color as keyof typeof colorMap]
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <p className="font-mono text-xs text-muted-foreground">
                            0{step.id}/04
                          </p>
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <motion.div
                        animate={{ rotate: isActive ? 45 : 0 }}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground"
                      >
                        +
                      </motion.div>
                    </div>

                    {/* Tools badges */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Expandable description */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>

                      <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-3 py-2 text-sm">
                        <span className="text-muted-foreground">Output:</span>
                        <span className="font-medium">{step.output}</span>
                      </div>
                    </motion.div>

                    {/* Gradient accent bottom */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.gradient}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isActive ? "100%" : "33%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech stack showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 rounded-2xl border border-border/50 bg-muted/30 p-8"
        >
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="mb-2 text-lg font-bold">Stack który używamy</h3>
              <p className="text-sm text-muted-foreground">
                Sprawdzone narzędzia produkcyjne, zero eksperymentów
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Next.js 15", "React", "TypeScript", "Tailwind", "Vercel"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border/50 bg-background px-4 py-2 font-mono text-sm font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
