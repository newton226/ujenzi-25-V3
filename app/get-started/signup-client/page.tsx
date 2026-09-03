import Link from 'next/link';

export default function SignUpClientPage() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center py-16 md:py-20">
      <div className="w-full max-w-xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft md:p-10">
        <div className="text-center">
          <p className="muted-label">CLIENT ACCOUNT</p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] text-navy md:text-4xl">Fungua Akaunti</h1>
        </div>

        <form className="mt-8 space-y-5">
          <label className="block text-sm font-medium text-slate-700">
            Jina Kamili
            <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="Jina lako kamili" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Namba ya Simu
            <input type="tel" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="+255 ..." />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Barua Pepe
            <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="you@example.com" />
          </label>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Password
              <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="••••••••" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Thibitisha Password
              <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="••••••••" />
            </label>
          </div>

          <div className="space-y-3 text-sm text-slate-700">
            <label className="flex items-center gap-3"><input type="checkbox" className="h-4 w-4 rounded border-slate-300" /> NIDA (Hiari)</label>
            <label className="flex items-center gap-3"><input type="checkbox" className="h-4 w-4 rounded border-slate-300" /> Nakubali Sheria na Masharti</label>
          </div>

          <button type="submit" className="primary-button w-full text-base">Fungua Akaunti</button>
          <p className="text-center text-sm text-slate-600">Tayari una akaunti? <Link href="/get-started/signin" className="font-semibold text-navy">Ingia</Link></p>
        </form>
      </div>
    </main>
  );
}
