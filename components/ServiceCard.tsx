import Link from 'next/link';
import type { ReactNode } from 'react';

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  accent: string;
};

export function ServiceCard({ number, title, description, icon, href, accent }: ServiceCardProps) {
  return (
    <Link href={href} className="group block rounded-[26px] border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full text-xl" style={{ backgroundColor: `${accent}22`, color: accent }}>
            {icon}
          </div>
          <div className="rounded-full bg-gold px-2 py-1 text-[10px] font-bold tracking-[0.18em] text-white">
            {number}
          </div>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg text-[var(--navy)] transition-transform duration-200 group-hover:translate-x-2">
          <span className="transform transition-transform duration-200 group-hover:translate-x-2">→</span>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-bold text-navy">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </Link>
  );
}
