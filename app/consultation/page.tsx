import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';

const features = [
  { title: 'Architectural Drawings', description: 'Functional layouts that balance aesthetics, comfort, and your land potential.', icon: '▣' },
  { title: 'Structural Drawings', description: 'Safe, buildable engineering plans tailored for local construction realities.', icon: '▤' },
  { title: 'Services Drawings', description: 'Electrical, plumbing, and mechanical coordination for efficient installation.', icon: '⎈' },
  { title: 'Bills of Quantities', description: 'Clear cost estimates that help you plan budgets and procurement more accurately.', icon: '☰' }
];

const steps = [
  { number: '01', title: 'Submit Request', text: 'Share your vision, location, and drawing needs.' },
  { number: '02', title: 'We Review', text: 'Our team evaluates scope and next steps.' },
  { number: '03', title: 'Get Your Quote', text: 'Receive a transparent proposal and timeline.' },
  { number: '04', title: 'Receive Drawings', text: 'Get your final plans ready for build approval.' }
];

export default function ConsultationPage() {
  return (
    <main>
      <PageHeader
        title="Consultation — Civil Works"
        subtitle="Professional design guidance and technical planning for homes, commercial spaces, and infrastructure projects."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
        breadcrumb="Home > Consultation"
      />

      <section className="section-shell py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-base leading-8 text-slate-700">
            Every great build starts with clarity. Our consultation team helps clients turn ideas into practical, buildable plans through expert advice, technical drawings, and cost visibility.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="soft-card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-2xl text-navy">{feature.icon}</div>
              <h3 className="text-xl font-bold text-navy">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F1EC] py-16 md:py-20">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="muted-label">HOW IT WORKS</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-navy md:text-4xl">A smooth path from concept to construction</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="mb-5 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">{step.number}</div>
                </div>
                <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="soft-card overflow-hidden bg-navy text-white">
          <div className="grid gap-8 p-8 md:grid-cols-[1.3fr_0.7fr] md:p-12">
            <div>
              <p className="muted-label text-orange">READY TO BUILD</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl">Ready to bring your project to life?</h3>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Link href="/consultation/request" className="primary-button bg-orange px-8 text-base">Request Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
