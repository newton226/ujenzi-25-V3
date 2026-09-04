import Image from 'next/image';
import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
import { ServiceCard } from '@/components/ServiceCard';

const services = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Civil works planning, design and site advisory',
    href: '/consultation',
    accent: '#1F2A44',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M4 20V7l8-4 8 4v13" />
        <path d="M8 11h8M8 15h8M12 3v17" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Construction',
    description: 'Skilled labour supply and building materials',
    href: '/construction',
    accent: '#D97706',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M3 19h18" />
        <path d="M6 19V9l6-5 6 5v10" />
        <path d="M9 12h6M9 15h6" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Real Estate & Property Development',
    description: 'Land, plots and finished developments for sale',
    href: '/real-estate',
    accent: '#B8A552',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Rental Housing',
    description: 'Verified houses and apartments to let',
    href: '/rental-housing',
    accent: '#1E7A4C',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-7h6v7" />
      </svg>
    )
  },
  {
    number: '05',
    title: 'Hotels & Airbnb',
    description: 'Short-stay rooms and vacation listings',
    href: '/hotels-airbnb',
    accent: '#D97706',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M4 18V8h16v10" />
        <path d="M7 18v-5h10v5" />
        <path d="M7 8V6h10v2" />
      </svg>
    )
  }
] as const;

const reasons = [
  { title: 'One Trusted Partner', description: 'A single team handling strategy, delivery, and support from concept to keys.', icon: '◎' },
  { title: 'End-to-End Support', description: 'From planning and permits to final handover, we simplify every step.', icon: '↗' },
  { title: 'Secure Payments', description: 'Transparent milestones and trusted transaction flows that protect your peace of mind.', icon: '✓' },
  { title: 'Verified Listings', description: 'Every property and service opportunity is screened for quality and reliability.', icon: '★' }
];

const projects = [
  {
    title: 'Skyline Residency',
    location: 'Arusha',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    description: 'Luxury residential development with smart layouts and premium finishes.'
  },
  {
    title: 'Coastal Heights',
    location: 'Dar es Salaam',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    description: 'A mixed-use block designed for modern urban living and business convenience.'
  },
  {
    title: 'Kilimanjaro Villas',
    location: 'Moshi',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80',
    description: 'Boutique villas tailored for comfort, natural light, and family living.'
  },
  {
    title: 'Mwanza Commercial Hub',
    location: 'Mwanza',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    description: 'Commercial workspace and retail hub built for scale and long-term value.'
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=75"
            alt="Construction site"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="video-overlay absolute inset-0" />

        <div className="section-shell relative z-10 flex min-h-[85vh] items-center py-16 md:py-20">
          <div className="max-w-3xl text-white">
            <p className="muted-label text-white/80">BUILDING TANZANIA</p>
            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[0.96] tracking-[-0.06em] md:text-7xl reveal-clip">
              From Blueprint to Keys — One Company, Five Services
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-200 md:text-xl reveal-fade">
              Your dream, our foundation. Consultation, construction, real estate, rentals, and stays — all in one trusted place.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/consultation" className="primary-button w-full sm:w-auto">
                Explore Our Services
              </Link>
              <a href="https://wa.me/255712345678" target="_blank" rel="noreferrer" className="secondary-button w-full border-white/50 bg-white/5 text-white hover:bg-white hover:text-navy sm:w-auto">
                Talk to Us
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/80">
          <div className="flex h-12 w-8 items-end justify-center rounded-full border border-white/50">
            <div className="mb-2 h-3 w-1 rounded-full bg-white" />
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-24">
        <div className="mb-10 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rotate-45 bg-terracotta" />
            <span className="muted-label">OUR SERVICES</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-navy md:text-5xl">
            Five Divisions, One Site — Pick What You Need
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-[#F3F1EC] py-20">
        <div className="section-shell">
          <div className="mb-10 max-w-xl">
            <p className="muted-label">WHY UJENZI 25</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-navy md:text-4xl">Built around trust, clarity, and momentum.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="soft-card p-6">
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-xl text-terracotta">{reason.icon}</div>
                <h3 className="text-xl font-bold text-navy">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-navy md:text-5xl">Our Work Speaks for Itself</h2>
          <Link href="/projects" className="hidden text-sm font-semibold text-electric md:inline-flex">
            View All Projects →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/projects" className="primary-button">View All Projects</Link>
        </div>
      </section>

      <section className="bg-slate-950 py-18 text-white">
        <div className="section-shell grid items-center gap-8 py-10 md:grid-cols-[120px_1fr] md:py-16">
          <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white/20 md:mx-0">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
              alt="Client testimonial"
              fill
              sizes="120px"
              loading="lazy"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-200 md:text-2xl">
              “UJENZI 25 understood our vision from day one. The communication, quality, and trust made the entire process feel smooth and professional.”
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div>
                <div className="font-bold text-white">Amina M.</div>
                <div className="text-sm text-slate-400">Homeowner, Dar es Salaam</div>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="section-shell text-center">
          <h2 className="text-3xl font-black tracking-[-0.05em] md:text-5xl">Ready to Start Building Your Dream?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
            Tell us what you need and we’ll help you move from concept to completion with confidence.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="primary-button bg-electric text-base">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
