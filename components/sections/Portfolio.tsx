"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Restauracja Demo",
    desc: "Nowoczesna strona restauracji",
    detail: "Elegancka strona z menu, rezerwacjami i galerią. Responsywny design.",
    metric: "Next.js",
    metricLabel: "Full-stack aplikacja",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    color: "violet",
    size: "large", // 2 columns
    link: "https://restauracja-demo-lovat.vercel.app/",
    linkType: "external",
  },
  {
    id: 2,
    title: "RenKon Stone",
    desc: "Firma szlifująca lastryko",
    detail: "Profesjonalna strona z galerią realizacji i referencjami od klientów.",
    metric: "15+",
    metricLabel: "lat doświadczenia",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    color: "cyan",
    size: "small", // 1 column
    link: "https://www.szlifowanie-lastryko.pl/",
    linkType: "external",
  },
  {
    id: 3,
    title: "Spaw-Serwis",
    desc: "Szkolenia spawalnicze",
    detail: "Kompleksowa strona z ofertą szkoleń, nadzorem i doradctwem technicznym.",
    metric: "1998",
    metricLabel: "rok założenia",
    tech: ["Next.js", "React", "Custom CMS"],
    color: "pink",
    size: "small", // 1 column
    link: "https://spaw-serwis.com.pl/",
    linkType: "external",
  },
];

function ProjectBlock({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      x.set((e.clientX - centerX) / (rect.width / 2));
      y.set((e.clientY - centerY) / (rect.height / 2));
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  const colorMap = {
    violet: "from-violet-600/20 to-purple-600/20",
    cyan: "from-cyan-600/20 to-blue-600/20",
    pink: "from-pink-600/20 to-rose-600/20",
  };

  const textColorMap = {
    violet: "text-violet-400",
    cyan: "text-cyan-400",
    pink: "text-pink-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={project.size === "large" ? "md:col-span-2" : ""}
    >
      <a
        href={project.link}
        target={project.linkType === "external" ? "_blank" : "_self"}
        rel={project.linkType === "external" ? "noopener noreferrer" : undefined}
        className="group block"
      >
        <motion.div
          ref={ref}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all duration-500 hover:border-border md:p-12"
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[project.color as keyof typeof colorMap]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

          {/* Noise texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative">
            {/* Header */}
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="mb-2 font-mono text-xs text-muted-foreground">
                  0{project.id}
                </p>
                <h3 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.desc}
                </p>
              </div>
              
              <motion.div
                className="rounded-full bg-background/50 p-3 backdrop-blur-sm transition-colors group-hover:bg-background"
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="h-5 w-5" />
              </motion.div>
            </div>

            {/* Details */}
            <p className="mb-8 text-muted-foreground">
              {project.detail}
            </p>

            {/* Metric - large display */}
            <div className="mb-8">
              <div className={`mb-1 text-6xl font-bold tabular-nums ${textColorMap[project.color as keyof typeof textColorMap]}`}>
                {project.metric}
              </div>
              <p className="text-sm text-muted-foreground">
                {project.metricLabel}
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border/50 bg-background/50 px-3 py-1 font-mono text-xs backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-32">
      {/* Background accent */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-violet-500/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header - asymmetric layout */}
        <div className="mb-20 grid gap-12 lg:grid-cols-12">
          {/* Left - Title & Counter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-muted/30">
                <span className="font-mono text-2xl font-bold">3</span>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground">
                  /// PROJEKTY
                </p>
                <p className="text-sm text-muted-foreground">
                  Zrealizowane do tej pory
                </p>
              </div>
            </div>
            <h2 className="text-5xl font-bold leading-tight lg:text-6xl">
              Wybrane
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                realizacje
              </span>
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-end lg:col-span-7"
          >
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Każdy projekt to unikalna historia. Od stron wizytówek po
              zaawansowane aplikacje webowe - stawiamy na jakość, wydajność i
              nowoczesny design.
            </p>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 font-mono text-sm text-violet-600 transition-colors hover:text-violet-700"
            >
              Porozmawiajmy o Twoim projekcie
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>

        {/* Bento grid - asymmetric layout */}
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectBlock key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
