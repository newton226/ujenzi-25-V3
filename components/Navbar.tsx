'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'Construction', href: '/construction' },
  { label: 'Real Estate', href: '/real-estate' },
  { label: 'Rental Housing', href: '/rental-housing' },
  { label: 'Hotels & Airbnb', href: '/hotels-airbnb' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#FAFAF8]/80 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="UJENZI 25 home">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-lg font-bold text-white shadow-lg shadow-navy/20">
            U
          </div>
          <div>
            <div className="text-lg font-black tracking-[-0.05em] text-navy">UJENZI 25</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">Your dream, Our foundation</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'text-navy' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy transition hover:border-navy">
            EN / SW
          </button>
          <Link href="/get-started" className="primary-button">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy xl:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-[#FAFAF8] xl:hidden">
          <div className="section-shell space-y-4 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-xl px-3 py-2 text-base font-medium ${pathname === item.href ? 'bg-navy/5 text-navy' : 'text-slate-700'}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                EN / SW
              </button>
              <Link href="/get-started" className="primary-button" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
