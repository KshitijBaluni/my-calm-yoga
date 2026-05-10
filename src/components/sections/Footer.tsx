'use client';

import { motion } from 'framer-motion';
import { Heart, Globe, Rss, Mail, MapPin, Phone, Link2 } from 'lucide-react';

const columns = [
  {
    title: 'Studio',
    links: [
      { label: 'Over ons', href: '#' },
      { label: 'Ons team', href: '#' },
      { label: 'Vacatures', href: '#' },
      { label: 'Pers', href: '#' },
    ],
  },
  {
    title: 'Lessen',
    links: [
      { label: 'Rooster', href: '#' },
      { label: 'Beginnerslessen', href: '#features' },
      { label: 'Workshops', href: '#' },
      { label: 'Retraites', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#' },
      { label: 'Privacybeleid', href: '#' },
      { label: 'Algemene voorwaarden', href: '#' },
    ],
  },
];

const social = [
  { icon: Link2, href: '#', label: 'Instagram' },
  { icon: Heart, href: '#', label: 'Facebook' },
  { icon: Globe, href: '#', label: 'YouTube' },
  { icon: Rss, href: '#', label: 'Nieuwsbrief' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      {/* CTA Band */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="border-b border-background/10"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-2">
              Klaar om te beginnen?
            </h2>
            <p className="text-background/55 text-sm">
              De eerste les is gratis. Geen creditcard nodig.
            </p>
          </div>
          <a
            href="#pricing"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Start gratis proefles
          </a>
        </div>
      </motion.div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand col */}
          <div className="md:col-span-2 space-y-5">
            <p className="text-2xl font-bold tracking-wider text-background font-sans">kalm.</p>
            <p className="text-sm leading-relaxed text-background/50 max-w-xs">
              Yogastudio in het hart van Amsterdam. Lessen voor alle niveaus, elke dag van de
              week.
            </p>
            {/* Contact */}
            <div className="space-y-2.5 text-sm text-background/50">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                Keizersgracht 123, 1015 CW Amsterdam
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                hallo@kalm.nl
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                +31 20 123 4567
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-background/15 text-background/50 hover:border-primary hover:text-primary transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-background/30 mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-background/55 hover:text-background transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/30">
          <p>© {new Date().getFullYear()} kalm. Yoga Studio Amsterdam. Alle rechten voorbehouden.</p>
          <p>
            Gemaakt met{' '}
            <span className="text-primary">♥</span>
            {' '}in Amsterdam
          </p>
        </div>
      </div>
    </footer>
  );
}
