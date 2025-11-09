"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // TODO: Implement server action
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Wiadomość wysłana! Odpowiem najszybciej jak to możliwe.");
    e.currentTarget.reset();
    setIsSubmitting(false);
  }

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 font-mono text-sm text-muted-foreground">
            /// KONTAKT
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Rozpocznijmy projekt
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <p className="mb-8 text-lg text-muted-foreground">
              Szukasz dewelopera do swojego projektu? Napisz – omówimy
              szczegóły i znajdziemy najlepsze rozwiązanie.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:contact@jaworskidev.pl"
                className="group flex items-center gap-4 rounded-lg border border-border/50 bg-card/30 p-4 transition-colors hover:border-border hover:bg-card/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10">
                  <Mail className="h-5 w-5 text-violet-600" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-mono text-sm font-medium group-hover:text-violet-600">
                    contact@jaworskidev.pl
                  </div>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-border/50 bg-card/30 p-4 transition-colors hover:border-border hover:bg-card/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">GitHub</div>
                  <div className="font-mono text-sm font-medium group-hover:underline">
                    @jaworskidev
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-border/50 bg-card/30 p-4 transition-colors hover:border-border hover:bg-card/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <div className="font-mono text-sm font-medium group-hover:text-blue-600">
                    Wiktor Jaworski
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-sm font-medium"
                >
                  Imię
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600/20"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600/20"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-sm font-medium"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-border/50 bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600/20"
                  placeholder="Opowiedz o swoim projekcie..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "Wysyłam..." : "Wyślij wiadomość"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
