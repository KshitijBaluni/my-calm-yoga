'use client';

import { motion } from 'framer-motion';
import { Leaf, Flame, Moon } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    color: 'bg-primary/12 text-primary',
    title: 'Beginnersvriendelijk',
    description:
      'Geen ervaring nodig. Onze geduldige docenten begeleiden je stap voor stap — van je allereerste downward dog tot gevorderde flows.',
    tag: 'Alle niveaus welkom',
  },
  {
    icon: Flame,
    color: 'bg-accent/15 text-accent',
    title: 'Vinyasa & Power',
    description:
      'Bouw kracht, uithoudingsvermogen en flexibiliteit met onze dynamische lessen. Verbind beweging en adem in een vloeiende dans.',
    tag: 'Meest populair',
    highlight: true,
  },
  {
    icon: Moon,
    color: 'bg-secondary text-foreground/70',
    title: 'Meditatie & Yin',
    description:
      'Vind stilte en herstel in onze langzame, diepgaande lessen. Ideaal voor stressreductie en innerlijke balans.',
    tag: 'Rust & herstel',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Ons aanbod
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-5">
            Een les voor elk moment
          </h2>
          <p className="max-w-xl mx-auto text-foreground/60 text-lg leading-relaxed">
            Van energieke ochtendflows tot rustige avondmeditaties — bij kalm. vind je altijd de
            perfecte les voor hoe jij je voelt.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative rounded-3xl p-8 flex flex-col gap-5 border transition-shadow hover:shadow-lg ${
                f.highlight
                  ? 'bg-background border-primary/30 shadow-md'
                  : 'bg-background border-border/50'
              }`}
            >
              {f.highlight && (
                <div className="absolute -top-3 left-8">
                  <span className="rounded-full bg-primary px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                    Populair
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${f.color}`}>
                <f.icon className="h-6 w-6" />
              </div>

              {/* Text */}
              <div className="flex-1 space-y-2.5">
                <h3 className="font-heading text-xl font-bold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{f.description}</p>
              </div>

              {/* Tag + link */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground/40">{f.tag}</span>
                <a
                  href="#pricing"
                  className="text-xs font-semibold text-primary hover:underline underline-offset-4"
                >
                  Meer info →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-foreground/60 text-sm">
            Niet zeker welke les bij jou past?
          </p>
          <a
            href="#pricing"
            className="text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            Probeer een gratis proefles →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
