import Link from 'next/link';
import { LogoBadge } from '@/components/LogoBadge';

export default function SelectAccountPage() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center py-16 md:py-20">
      <div className="w-full max-w-4xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft md:p-10">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-block animate-float"><LogoBadge /></div>
          <p className="muted-label">CREATE ACCOUNT</p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] text-navy md:text-5xl">Chagua Aina ya Akaunti</h1>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-soft">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy text-4xl text-white">👤</div>
            <h2 className="mt-5 text-2xl font-black text-navy">Mimi ni Mteja</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Ninatafuta huduma za ujenzi, ardhi, au malazi.</p>
            <Link href="/get-started/signup-client" className="primary-button mt-6 w-full">Endelea</Link>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-soft">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-terracotta text-4xl text-white">🏢</div>
            <h2 className="mt-5 text-2xl font-black text-navy">Mimi ni Mshirika wa Huduma</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Ninauza vifaa, natoa vibarua, au ninamiliki mali ya kuorodhesha.</p>
            <Link href="/get-started/signup-partner" className="primary-button mt-6 w-full">Endelea</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
