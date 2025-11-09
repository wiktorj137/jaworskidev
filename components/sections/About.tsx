"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Zap, Target } from "lucide-react";

const skills = [
  { name: "TypeScript", level: 95, category: "language" },
  { name: "React/Next.js", level: 98, category: "framework" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Tailwind", level: 95, category: "styling" },
  { name: "PostgreSQL", level: 85, category: "database" },
  { name: "Docker", level: 80, category: "devops" },
];

const stats = [
  { icon: Code2, value: "3+", label: "Lat doświadczenia" },
  { icon: Sparkles, value: "20+", label: "Projektów zrealizowanych" },
  { icon: Zap, value: "100%", label: "TypeScript w kodzie" },
  { icon: Target, value: "<500ms", label: "Średni FCP" },
];

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-sm">{skill.name}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="relative h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-violet-600 to-pink-600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-pink-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative">
        <Icon className="mb-4 h-8 w-8 text-violet-600" />
        <div className="mb-2 text-3xl font-bold tabular-nums">
          {stat.value}
        </div>
        <p className="text-sm text-muted-foreground">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32">
      {/* Background decoration */}
      <motion.div
        style={{ y, opacity }}
        className="absolute left-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 font-mono text-sm text-muted-foreground">
            /// O MNIE
          </p>
          <h2 className="mb-6 text-5xl font-bold lg:text-7xl">
            Full-stack developer
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column - Bio */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-lg text-muted-foreground"
            >
              <p>
                Specjalizuję się w budowaniu{" "}
                <span className="font-semibold text-foreground">
                  nowoczesnych aplikacji webowych
                </span>{" "}
                z naciskiem na performance, UX i maintainability.
              </p>
              <p>
                Pracuję głównie z{" "}
                <span className="font-semibold text-foreground">
                  TypeScript, React i Next.js
                </span>
                , ale elastycznie dobierze stack do wymagań projektu. Każda linia
                kodu jest przemyślana - od architektury po detal animacji.
              </p>
              <p>
                Wierzę, że dobry kod to nie tylko działająca funkcjonalność, ale też{" "}
                <span className="font-semibold text-foreground">
                  czytelność, testabilność i skalowalność
                </span>
                . Projekty realizuję z myślą o długoterminowej wartości dla klienta.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Right column - Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="mb-8 text-2xl font-bold">Tech Stack</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>

              {/* Bottom note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 rounded-xl border border-border/40 bg-muted/30 p-6"
              >
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Otwarty na nowe technologie
                  </span>{" "}
                  — szybko uczę się nowych frameworków i narzędzi. Jeśli projekt
                  wymaga konkretnego stacku, nie jest to problem.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
