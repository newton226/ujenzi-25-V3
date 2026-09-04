import Link from 'next/link';

export default function SignInPage() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center py-16 md:py-20">
      <div className="w-full max-w-xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft md:p-10">
        <div className="text-center">
          <p className="muted-label">WELCOME BACK</p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] text-navy md:text-4xl">Ingia</h1>
        </div>

        <form className="mt-8 space-y-5">
          <label className="block text-sm font-medium text-slate-700">
            Namba ya Simu au Barua Pepe
            <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="+255... / email@example.com" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Password
            <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="••••••••" />
          </label>

          <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
            <Link href="/privacy" className="text-electric">Umesahau Password?</Link>
          </div>

          <button type="submit" className="primary-button w-full text-base">Ingia</button>
          <p className="text-center text-sm text-slate-600">
            Huna akaunti? <Link href="/get-started/select-account" className="font-semibold text-navy">Jisajili</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
