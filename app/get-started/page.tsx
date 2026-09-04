import Link from 'next/link';

export default function GetStartedLandingPage() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center py-16 md:py-20">
      <div className="w-full max-w-3xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft md:p-10">
        <div className="text-center">
          <p className="muted-label">START HERE</p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] text-navy md:text-5xl">Chagua Njia yako</h1>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy text-3xl text-white">👤</div>
            <h2 className="mt-5 text-2xl font-black text-navy">Tayari Una Akaunti?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Endelea kwenye akaunti yako ili kuendelea na ombi au huduma.</p>
            <Link href="/get-started/signin" className="primary-button mt-6 w-full">Ingia</Link>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-terracotta text-3xl text-white">✦</div>
            <h2 className="mt-5 text-2xl font-black text-navy">Mtumiaji Mpya?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Unda akaunti yako na uanze na huduma inayokufaa.</p>
            <Link href="/get-started/select-account" className="primary-button mt-6 w-full">Jisajili</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
