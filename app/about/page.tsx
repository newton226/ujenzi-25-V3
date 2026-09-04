import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '5', label: 'Core Services' },
  { value: '2025', label: 'Est. In Tanzania' },
  { value: '24/7', label: 'Client Support' }
];

const team = [
  { name: 'Aida K.', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80' },
  { name: 'Frank T.', role: 'Project Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
  { name: 'Mariam J.', role: 'Property Lead', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80' },
  { name: 'Joseph N.', role: 'Construction Manager', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' }
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader title="Building Tanzania, One Foundation at a Time" subtitle="A modern property and construction partner built for trust, execution, and lasting value." image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80" breadcrumb="Home > About" />

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-soft">
            <div className="relative h-[480px] overflow-hidden rounded-[24px]">
              <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="UJENZI 25 team" fill className="object-cover" />
            </div>
          </div>
          <div>
            <p className="muted-label">OUR STORY</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-navy md:text-5xl">From local insight to national ambition.</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              UJENZI 25 was created to simplify how Tanzanians access quality building services, trusted property opportunities, and comfortable stays. We combine expertise across planning, construction, real estate, rentals, and hospitality under one accountable brand.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Our mission is to help people build, live, and invest with confidence by blending technical excellence, honest guidance, and premium service inspired by global standards.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 text-white">
        <div className="section-shell grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[26px] border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-4xl font-black tracking-[-0.06em] text-terracotta">{stat.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 text-center">
          <p className="muted-label">MEET THE TEAM</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-navy md:text-5xl">People behind the progress</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-soft">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{member.name}</h3>
              <p className="text-sm text-slate-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F1EC] py-20">
        <div className="section-shell">
          <div className="mb-8 text-center">
            <p className="muted-label">CERTIFICATIONS</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-navy md:text-5xl">Licensed, trusted, and compliant</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {['Architectural Practice', 'Construction License', 'Property Compliance', 'Safety Certification'].map((label) => (
              <div key={label} className="rounded-[26px] border border-slate-200 bg-white p-6 text-center shadow-soft">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-olive/20 text-2xl text-olive">✓</div>
                <div className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
