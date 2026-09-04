import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';

const projectCards = [
  { title: 'Skyline Residency', location: 'Arusha', description: 'Luxury residential living with curated finishes and open, airy layouts.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Coastal Heights', location: 'Dar es Salaam', description: 'A landmark mixed-use block designed for modern urban living.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Kilimanjaro Villas', location: 'Moshi', description: 'Boutique family villas tailored for natural light and comfort.', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Mwanza Commercial Hub', location: 'Mwanza', description: 'A high-performance commercial complex built for visibility and growth.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Abel Terrace', location: 'Dodoma', description: 'Smart, compact family homes with practical, long-term value.', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80' },
  { title: 'North View Estate', location: 'Mbeya', description: 'Premium residential plots and villa homes in a scenic setting.', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1000&q=80' }
];

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader title="Our Work" subtitle="Selected projects that reflect quality, vision, and long-term value across Tanzania." image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80" breadcrumb="Home > Projects" />

      <section className="section-shell py-16 md:py-20">
        <div className="flex flex-wrap gap-3">
          {['All', 'Consultation', 'Construction', 'Real Estate'].map((filter) => (
            <button key={filter} type="button" className={`rounded-full px-4 py-2 text-sm font-semibold ${filter === 'All' ? 'bg-navy text-white' : 'border border-slate-200 bg-white text-slate-700'}`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectCards.map((project) => (
            <div key={project.title} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
              <div className="relative h-72">
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/5 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">{project.location}</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-navy">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                <div className="mt-4 inline-flex text-sm font-semibold text-electric">View Details →</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F1EC] py-20">
        <div className="section-shell">
          <div className="mb-8">
            <p className="muted-label">TRANSFORMATION</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-navy md:text-5xl">Before & After</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-soft">
              <div className="relative h-[420px] overflow-hidden rounded-[22px]">
                <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80" alt="Before renovation" fill className="object-cover" />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-slate-900/20 to-transparent p-4 text-sm font-semibold text-white">Before</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-soft">
              <div className="relative h-[420px] overflow-hidden rounded-[22px]">
                <Image src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80" alt="After renovation" fill className="object-cover" />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-slate-900/20 to-transparent p-4 text-sm font-semibold text-white">After</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
