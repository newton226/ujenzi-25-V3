import Link from 'next/link';

export default function PendingReviewPage() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center py-16 md:py-20">
      <div className="w-full max-w-xl rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-soft md:p-12">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-terracotta/10 text-4xl text-terracotta">⏱</div>
        <h1 className="mt-8 text-3xl font-black tracking-[-0.06em] text-navy md:text-4xl">Maombi Yako Yanapitiwa</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Tunapitia nyaraka zako, jibu litakuwa tayari ndani ya masaa 24-48.
        </p>
        <div className="mt-6 rounded-full bg-slate-100 px-4 py-3 text-sm font-semibold text-navy">Rejea: #PTR-1092</div>
        <Link href="/" className="primary-button mt-8 w-full">Rudi Mwanzo</Link>
      </div>
    </main>
  );
}
