import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';

const items = [
  { title: 'Sunset Court', detail: '2-bed apartment • Dar es Salaam', tag: 'Verified', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80' },
  { title: 'Kigamboni Plot 003', detail: 'Prime commercial plot • 600 sqm', tag: 'Hot Deal', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
  { title: 'Mbezi Gardens', detail: '3-bedroom villa • Ready to move', tag: 'Featured', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' },
  { title: 'Mkoroshoni Residences', detail: 'Investment-ready apartments', tag: 'New Launch', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80' },
  { title: 'Amani Heights', detail: 'Townhouse • 4-bedroom', tag: 'Verified', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80' }
];

export default function RealEstatePage() {
  return (
    <main>
      <PageHeader
        title="Real Estate & Property Development"
        subtitle="Discover land, plots, and premium developments designed for long-term value and a strong future."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
        breadcrumb="Home > Real Estate"
      />

      <section className="section-shell py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-base leading-8 text-slate-700">
            We help buyers, investors, and developers access desirable locations with honest guidance, verified opportunities, and thoughtful development support.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
              <button type="button" className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/90 text-base text-slate-700 shadow-sm transition hover:scale-105">🚩</button>
              <div className="relative h-56">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-success px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">{item.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F1EC] py-16">
        <div className="section-shell">
          <div className="rounded-[30px] bg-white px-6 py-8 text-center shadow-soft md:px-10 md:py-12">
            <h3 className="text-3xl font-black tracking-[-0.05em] text-navy">Don&apos;t see what you need? Let&apos;s talk.</h3>
            <Link href="https://wa.me/255712345678" target="_blank" rel="noreferrer" className="primary-button mt-6">
              Chat With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
