"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "TaskFlow Pro",
    desc: "SaaS do zarządzania projektami",
    detail: "Real-time collaboration. Built dla startupów tech.",
    metric: "40%",
    metricLabel: "wzrost produktywności",
    tech: ["Next.js", "Prisma", "WebSocket"],
    color: "violet",
    size: "large", // 2 columns
  },
  {
    id: 2,
    title: "ShopHub",
    desc: "Headless e-commerce",
    detail: "Custom checkout. 3x szybszy load time.",
    metric: "25%",
    metricLabel: "więcej konwersji",
    tech: ["Shopify", "Stripe"],
    color: "cyan",
    size: "small", // 1 column
  },
  {
    id: 3,
    title: "DevDocs Hub",
    desc: "Platforma dokumentacji",
    detail: "AI-powered search dla deweloperów.",
    metric: "50k+",
    metricLabel: "users miesięcznie",
    tech: ["MDX", "Algolia", "OpenAI"],
    color: "pink",
    size: "small", // 1 column
  },
];

function ProjectBlock({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      x.set((e.clientX - centerX) / (rect.width / 2));
      y.set((e.clientY - centerY) / (rect.height / 2));
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
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
      <Link
        ref={ref}
        href={`/portfolio/${project.id}`}
        className="group block"
      >
        <motion.div
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
      </Link>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-4 font-mono text-sm text-muted-foreground">
                /// WYBRANE PROJEKTY
              </p>
              <h2 className="text-5xl font-bold lg:text-7xl">
                Portfolio
              </h2>
            </div>
            
            <Link
              href="/portfolio"
              className="group hidden items-center gap-2 font-mono text-sm hover:underline md:flex"
            >
              Zobacz wszystkie
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

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
