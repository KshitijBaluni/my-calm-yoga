'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Tevreden leden' },
  { value: '4.9', label: 'Gemiddelde beoordeling' },
  { value: '20+', label: 'Lessen per week' },
  { value: '97%', label: 'Zou ons aanbevelen' },
];

const testimonials = [
  {
    name: 'Sanne van der Berg',
    location: 'Amsterdam-Noord',
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Sanne&backgroundColor=d1e8d0',
    text: 'Ik begon zonder enige yogaervaring en nu kan ik het niet meer zonder. De docenten zijn ontzettend geduldig en de sfeer is warm en inclusief. Kalm. heeft mijn leven veranderd.',
    stars: 5,
    since: 'Lid sinds 2022',
  },
  {
    name: 'Lars Hendriks',
    location: 'Utrecht',
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Lars&backgroundColor=d1c8e8',
    text: 'Na mijn burnout zocht ik naar iets wat me zou helpen vertragen. De Yin-lessen bij kalm. waren precies wat ik nodig had. Nu kom ik drie keer per week en voel me volledig herboren.',
    stars: 5,
    since: 'Lid sinds 2023',
  },
  {
    name: 'Femke de Boer',
    location: 'Amsterdam-Oost',
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Femke&backgroundColor=e8d1c8',
    text: 'De Vinyasa Flow klassen zijn geweldig. Goede muziek, een uitdagende les en achteraf voel je je als herboren. De docent is super enthousiast en neemt iedereen mee.',
    stars: 5,
    since: 'Lid sinds 2021',
  },
];

export default function SocialProof() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-background overflow-hidden">
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
            Wat onze leden zeggen
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-5">
            Duizenden blije yogis
          </h2>
          <p className="max-w-lg mx-auto text-foreground/60 text-lg">
            Lees wat onze leden zeggen over hun ervaring bij kalm.
          </p>
        </motion.div>

        {/* Stats band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-3xl bg-primary/8 border border-primary/15 p-8 md:p-10 mb-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="text-center"
            >
              <p className="font-heading text-4xl md:text-5xl font-black text-primary">{s.value}</p>
              <p className="text-sm text-foreground/55 mt-1.5">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-3xl border border-border/60 bg-secondary/30 p-7 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="text-amber-400 text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-foreground/70 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-secondary flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/45">{t.location} · {t.since}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
