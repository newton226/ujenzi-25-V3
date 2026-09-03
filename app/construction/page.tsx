import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';

const items = [
  { title: 'Premium Cement', detail: 'Bagged cement • 50kg', tag: 'Best Seller', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80' },
  { title: 'Reinforcement Steel', detail: 'Ribbed bars • 12mm', tag: 'Bulk Supply', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80' },
  { title: 'Tile Collection', detail: 'Floor & wall ceramic', tag: 'New Arrivals', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' },
  { title: 'Skilled Labour Crew', detail: 'Masons • Carpenters • Electricians', tag: 'Verified', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' },
  { title: 'Roofing Systems', detail: 'Metal sheets • insulation', tag: 'Weatherproof', image: 'https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=900&q=80' }
];

export default function ConstructionPage() {
  return (
    <main>
      <PageHeader
        title="Construction — Materials & Labour"
        subtitle="Reliable materials, vetted tradespeople, and practical support for residential and commercial builds."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
        breadcrumb="Home > Construction"
      />

      <section className="section-shell py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-base leading-8 text-slate-700">
            We connect clients with dependable construction inputs and experienced teams for projects of every scale, reducing delays and improving build quality from day one.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
              <button type="button" className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/90 text-base text-slate-700 shadow-sm transition hover:scale-105">🚩</button>
              <div className="relative h-52">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-orange px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">{item.tag}</span>
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
