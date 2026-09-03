import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'Contact', href: '/contact' }
];

const services = [
  { label: 'Consultation', href: '/consultation' },
  { label: 'Construction', href: '/construction' },
  { label: 'Real Estate', href: '/real-estate' },
  { label: 'Rental Housing', href: '/rental-housing' },
  { label: 'Hotels & Airbnb', href: '/hotels-airbnb' }
];

export function Footer() {
  return (
    <footer className="bg-navy text-slate-200">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-base font-black text-orange">
              U
            </div>
            <div>
              <div className="text-xl font-black tracking-[-0.05em] text-white">UJENZI 25</div>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-7 text-slate-300">
            Premium construction, property, and stay solutions built for the modern Tanzanian lifestyle.
          </p>
          <div className="mt-6 flex items-center gap-3 text-lg text-white/80">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">f</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">in</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">◎</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>Dar es Salaam, Tanzania</li>
            <li>+255 712 345 678</li>
            <li>WhatsApp: +255 700 123 456</li>
            <li>hello@ujenzi25.co.tz</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2025 UJENZI 25. All rights reserved.</span>
            <Link href="/privacy" className="transition hover:text-white">Sera ya Faragha</Link>
            <Link href="/terms" className="transition hover:text-white">Sheria na Masharti</Link>
          </div>
          <span>Reg. No. TCR/2025/0142 • Licensed & insured</span>
        </div>
      </div>
    </footer>
  );
}
