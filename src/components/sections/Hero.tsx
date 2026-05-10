'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Leden' },
  { value: '4.9★', label: 'Beoordeling' },
  { value: '20+', label: 'Lessen/Week' },
  { value: '5 jaar', label: 'Ervaring' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16"
    >
      {/* Background decorative circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[560px] w-[560px] rounded-full opacity-20"
        style={{ background: 'var(--yoga-circle)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-48 h-[400px] w-[400px] rounded-full opacity-10"
        style={{ background: 'var(--accent)' }}
      />

      <div className="mx-auto max-w-7xl w-full px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              🌿 Amsterdam &nbsp;·&nbsp; Alle niveaus
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item} className="space-y-2">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-foreground">
              Beweeg.
              <br />
              <span className="text-primary">Adem.</span>
              <br />
              Bloei.
            </h1>
          </motion.div>

          {/* Sub */}
          <motion.p
            variants={item}
            className="max-w-md text-lg leading-relaxed text-foreground/65"
          >
            Ontdek jouw innerlijke rust bij kalm. — Amsterdam&apos;s meest geliefde yogastudio.
            Lessen voor beginners, gevorderden en iedereen daartussenin.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Start Gratis Proefles
              <ArrowRight className="h-4 w-4" />
            </a>
            <button className="inline-flex items-center gap-2.5 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground/80 hover:border-primary/50 hover:text-foreground transition-colors">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15">
                <Play className="h-3 w-3 fill-primary text-primary" />
              </span>
              Bekijk Studio
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-4 gap-4 border-t border-border/50 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-heading text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-foreground/50 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Sage circle backdrop */}
          <div
            className="absolute inset-0 m-auto h-[400px] w-[400px] md:h-[480px] md:w-[480px] rounded-full"
            style={{ background: 'var(--yoga-circle)', opacity: 0.55 }}
          />

          {/* Image */}
          <div className="relative z-10 h-[460px] w-[320px] md:h-[540px] md:w-[380px] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=760&h=1080&fit=crop&crop=top"
              alt="Yogadocent in een serene pose in de kalm. studio Amsterdam"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 320px, 380px"
            />
          </div>

          {/* Floating review card */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-8 -left-4 md:-left-10 z-20 rounded-2xl bg-background/95 backdrop-blur-sm shadow-xl border border-border/50 p-4 max-w-[200px]"
          >
            <div className="flex items-center gap-1 mb-1">
              {[1,2,3,4,5].map((i) => (
                <span key={i} className="text-amber-400 text-xs">★</span>
              ))}
            </div>
            <p className="text-xs font-medium text-foreground leading-snug">
              &ldquo;De beste beslissing van mijn jaar!&rdquo;
            </p>
            <p className="text-[10px] text-foreground/50 mt-1.5">— Sanne V., Amsterdam</p>
          </motion.div>

          {/* Floating class card */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-12 -right-4 md:-right-8 z-20 rounded-2xl bg-primary/95 backdrop-blur-sm shadow-xl p-4 text-primary-foreground"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider opacity-80 mb-1">
              Volgende les
            </p>
            <p className="text-sm font-bold">Vinyasa Flow</p>
            <p className="text-xs opacity-75 mt-0.5">Vandaag · 18:30</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="h-6 w-0.5 bg-foreground/20 rounded-full"
        />
      </motion.div>
    </section>
  );
}
