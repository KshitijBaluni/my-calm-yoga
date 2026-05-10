'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

type Plan = {
  name: string;
  price: { monthly: string; annual: string };
  period: string;
  tag?: string;
  highlight: boolean;
  description: string;
  features: string[];
  cta: string;
};

const plans: Plan[] = [
  {
    name: 'Drop-in',
    price: { monthly: '€18', annual: '€18' },
    period: 'per les',
    highlight: false,
    description: 'Ideaal voor als je eerst wilt uitproberen of flexibel wilt blijven.',
    features: [
      'Toegang tot alle lestypen',
      'Online reservering',
      'Gratis mat gebruik',
      'Geen abonnement nodig',
    ],
    cta: 'Boek een les',
  },
  {
    name: 'Maandelijks',
    price: { monthly: '€79', annual: '€59' },
    period: '/maand',
    tag: 'Meest populair',
    highlight: true,
    description: 'Onbeperkte lessen voor de echte yogaliefhebber.',
    features: [
      'Onbeperkte lessen',
      'Gratis proefles voor vrienden',
      'Vroege toegang tot workshops',
      'Kortingsapp voor merchandise',
      'Persoonlijk voortgangsplan',
    ],
    cta: 'Start nu',
  },
  {
    name: 'Jaarlijks',
    price: { monthly: '€69', annual: '€49' },
    period: '/maand',
    tag: 'Beste waarde',
    highlight: false,
    description: 'Maximale besparing voor wie écht committed is.',
    features: [
      'Alles in Maandelijks',
      'Eén gratis privéles per kwartaal',
      'Prioriteit bij populaire lessen',
      'Exclusieve retraites',
      'Naam op onze Wall of Calm',
    ],
    cta: 'Bespaar 30%',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Tarieven
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-5">
            Eerlijk geprijsd, altijd
          </h2>
          <p className="max-w-lg mx-auto text-foreground/60 text-lg mb-8">
            Geen verborgen kosten. Geen verplichtingen. Alleen yoga.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-background p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                !annual ? 'bg-primary text-primary-foreground shadow' : 'text-foreground/60'
              }`}
            >
              Maandelijks
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                annual ? 'bg-primary text-primary-foreground shadow' : 'text-foreground/60'
              }`}
            >
              Jaarlijks
              <span className="absolute -top-2.5 -right-1 rounded-full bg-accent px-1.5 py-0.5 text-[9px] font-bold uppercase text-primary-foreground">
                -30%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 border transition-shadow hover:shadow-xl ${
                plan.highlight
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                  : 'bg-background border-border/60'
              }`}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className={`rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wider shadow ${
                      plan.highlight
                        ? 'bg-background text-primary'
                        : 'bg-accent text-primary-foreground'
                    }`}
                  >
                    {plan.tag}
                  </span>
                </div>
              )}

              {/* Plan info */}
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    plan.highlight ? 'text-primary-foreground/70' : 'text-foreground/50'
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={annual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="font-heading text-5xl font-black"
                    >
                      {annual ? plan.price.annual : plan.price.monthly}
                    </motion.span>
                  </AnimatePresence>
                  <span
                    className={`mb-1.5 text-sm ${
                      plan.highlight ? 'text-primary-foreground/70' : 'text-foreground/50'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm mt-3 leading-relaxed ${
                    plan.highlight ? 'text-primary-foreground/75' : 'text-foreground/55'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                        plan.highlight
                          ? 'bg-primary-foreground/20 text-primary-foreground'
                          : 'bg-primary/12 text-primary'
                      }`}
                    >
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span className={plan.highlight ? 'text-primary-foreground/85' : 'text-foreground/70'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`w-full inline-flex items-center justify-center rounded-2xl py-3.5 text-sm font-bold transition-all hover:opacity-90 ${
                  plan.highlight
                    ? 'bg-primary-foreground text-primary'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-foreground/40 mt-10"
        >
          Alle prijzen zijn inclusief btw · Maandelijks opzegbaar · Gratis eerste les
        </motion.p>
      </div>
    </section>
  );
}
