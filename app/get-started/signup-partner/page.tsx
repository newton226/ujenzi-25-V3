import Link from 'next/link';

export default function SignUpPartnerPage() {
  return (
    <main className="section-shell py-16 md:py-20">
      <div className="mx-auto w-full max-w-3xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft md:p-10">
        <div className="text-center">
          <p className="muted-label">PARTNER REGISTRATION</p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] text-navy md:text-4xl">Jisajili kama Mshirika wa Huduma</h1>
        </div>

        <div className="mt-8">
          <div className="mb-6 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span>Page 1/2</span>
            <span>Uthibitisho wa Kisheria</span>
          </div>
          <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-1/2 rounded-full bg-orange" />
          </div>
        </div>

        <form className="space-y-6">
          <div className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Jina la Biashara / Jina Lako
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="Jina la biashara" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Aina ya Mshirika
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white">
                  <option>Muuza Vifaa vya Ujenzi</option>
                  <option>Timu ya Vibarua</option>
                  <option>Mwenye Nyumba ya Kupanga</option>
                  <option>Muuza Ardhi-Jengo</option>
                  <option>Mmiliki wa Hoteli-Apartment</option>
                </select>
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Namba ya Simu
                <input type="tel" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="+255 ..." />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Barua Pepe
                <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="you@example.com" />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Password
                <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="••••••••" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Mkoa/Mji wa Biashara
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="Dar es Salaam" />
              </label>
            </div>
          </div>

          <div className="rounded-[26px] bg-[#F5F1EA] p-5">
            <h2 className="text-xl font-black text-navy">Uthibitisho wa Kisheria</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Namba ya Usajili wa BRELA
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="BRELA-..." />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Namba ya TIN
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="TIN-..." />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Namba ya NIDA
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="NIDA-..." />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Namba ya Usajili wa ERB
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="ERB-..." />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Namba ya Usajili wa CRB
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="CRB-..." />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Namba ya Akaunti ya Malipo
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="Mobile Money / Bank" />
              </label>
            </div>

            <div className="mt-5 space-y-5">
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-5 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-2xl text-orange">⇩</div>
                <p className="text-sm text-slate-600">Pakia Leseni ya Biashara</p>
              </div>

              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-5 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-2xl text-orange">⇩</div>
                <p className="text-sm text-slate-600">Pakia Hati ya Umiliki wa Mali (kama ni mwenye nyumba/ardhi)</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-700">
            <label className="flex items-center gap-3"><input type="checkbox" className="h-4 w-4 rounded border-slate-300" /> Nakubali Sheria na Masharti pamoja na Sera ya Faragha</label>
          </div>

          <button type="submit" className="primary-button w-full text-base">Tuma Maombi ya Usajili</button>
        </form>
      </div>
    </main>
  );
}
