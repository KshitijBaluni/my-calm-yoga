'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'Kan ik meedoen als ik nog nooit yoga heb gedaan?',
    a: 'Absoluut! Bij kalm. zijn beginners van harte welkom. We bieden specifieke beginnerslessen aan waar je rustig kunt leren. Onze docenten geven altijd aanpassingen zodat de les geschikt is voor jouw niveau.',
  },
  {
    q: 'Moet ik mijn eigen yogamat meenemen?',
    a: 'Nee, we hebben gratis matten beschikbaar in de studio. Je kunt ook een eigen mat meenemen als je dat fijner vindt. Blokken, riemen en bolsters zijn altijd beschikbaar.',
  },
  {
    q: 'Zijn de lessen in het Nederlands of Engels?',
    a: 'De meeste lessen worden in het Nederlands gegeven, maar we hebben ook Engelstalige klassen op dinsdag- en donderdagavond. Check het lesrooster voor de taalindeling per les.',
  },
  {
    q: 'Hoe kan ik een les reserveren?',
    a: 'Je kunt eenvoudig online reserveren via onze website of app. Reserveer minimaal 30 minuten van tevoren. Bij populaire lessen raden we vroeg boeken aan, want ze raken snel vol!',
  },
  {
    q: 'Wat is het annuleringsbeleid?',
    a: 'Je kunt een les tot 2 uur van tevoren kosteloos annuleren via de app. Daarna wordt de les van je tegoed afgeschreven. Dit helpt ons om plekken eerlijk te verdelen.',
  },
  {
    q: 'Bieden jullie ook studentenkorting aan?',
    a: 'Ja! Studenten met een geldige studentenkaart krijgen 20% korting op het maandabonnement. Neem je kaart mee bij je eerste bezoek voor verificatie.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Veelgestelde vragen
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Alles wat je wilt weten
          </h2>
          <p className="text-foreground/60 text-lg">
            Staat jouw vraag er niet bij? Stuur ons een bericht via{' '}
            <a href="mailto:hallo@kalm.nl" className="text-primary underline underline-offset-4">
              hallo@kalm.nl
            </a>
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className={`rounded-2xl border transition-colors ${
                open === i ? 'border-primary/30 bg-primary/5' : 'border-border/60 bg-secondary/20'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-foreground text-sm leading-snug">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-0.5 flex-shrink-0 text-primary"
                >
                  <Plus className="h-5 w-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-foreground/65">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
