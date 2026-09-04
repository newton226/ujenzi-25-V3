'use client';

import Link from 'next/link';
import { useState } from 'react';

const fileChips = [
  { name: 'survey-plan.pdf', badge: 'PDF' },
  { name: 'site-photo-1.jpg', badge: 'JPG' }
];

const stepLabels = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

export default function ConsultationRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState(fileChips);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const removeFile = (name: string) => {
    setFiles((current) => current.filter((file) => file.name !== name));
  };

  if (submitted) {
    return (
      <main className="section-shell flex min-h-[70vh] items-center justify-center py-20">
        <div className="w-full max-w-xl rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-soft md:p-12">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-4xl text-green-700">✓</div>
          <h1 className="mt-8 text-4xl font-black tracking-[-0.06em] text-navy">Request Received!</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Thank you — our team will review your project and reach out shortly. Reference #UJ-2048
          </p>
          <Link href="/" className="secondary-button mt-8">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section-shell py-16 md:py-20">
      <div className="mx-auto w-full max-w-4xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft md:p-10">
        <div className="mb-8">
          <p className="muted-label">START YOUR PROJECT</p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] text-navy md:text-4xl">Tell Us About Your Project</h1>
        </div>

        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span>Progress</span>
            <span>Section 1 of 4</span>
          </div>
          <div className="flex gap-3">
            {stepLabels.map((step, index) => (
              <div key={step} className="flex-1">
                <div className={`h-2 rounded-full ${index === 0 ? 'bg-electric' : 'bg-slate-200'}`} />
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 md:p-6">
            <h2 className="text-xl font-black text-navy">SECTION 1: Taarifa Zako</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Jina Kamili
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="Jina lako kamili" />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Namba ya Simu
                <div className="mt-2 flex gap-2">
                  <input type="tel" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="+255 ..." />
                  <button type="button" className="rounded-2xl bg-navy px-3 py-3 text-xs font-semibold text-white">Thibitisha</button>
                </div>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Barua Pepe
                <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="you@example.com" />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Namba ya NIDA
                <div className="mt-2 flex items-center gap-2">
                  <input type="text" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="Hiari" />
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-800">Hiari</span>
                </div>
              </label>

              <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                Mji / Mahali Unapoishi Sasa
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="Dar es Salaam" />
              </label>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 md:p-6">
            <h2 className="text-xl font-black text-navy">SECTION 2: Taarifa za Mradi na Kiwanja</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Aina ya Huduma Unayohitaji
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy">
                  <option>Mchoro wa Usanifu</option>
                  <option>Mchoro wa Muundo</option>
                  <option>Umeme-Maji</option>
                  <option>Makadirio ya Gharama BoQ</option>
                  <option>Sijui Bado</option>
                </select>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Mkoa / Wilaya / Kata
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="Dar es Salaam / Kinondoni / Mikocheni" />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Ukubwa wa Kiwanja
                <div className="mt-2 grid grid-cols-[1fr_120px] gap-2">
                  <input type="number" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="500" />
                  <select className="rounded-2xl border border-slate-200 bg-white px-3 py-3 outline-none transition focus:border-navy">
                    <option>Mita za Mraba</option>
                    <option>Ekari</option>
                  </select>
                </div>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Hali ya Umiliki wa Ardhi
                <div className="mt-2 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3">
                  <select className="w-full bg-transparent outline-none">
                    <option>Hati Miliki</option>
                    <option>Barua ya Toleo</option>
                    <option>Haki ya Kimila</option>
                    <option>Bado Sina Ardhi</option>
                  </select>
                  <span className="text-lg" title="Muhimu kwa Usalama wa Mradi">🔒</span>
                </div>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Aina ya Jengo
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy">
                  <option>Makazi</option>
                  <option>Kibiashara</option>
                  <option>Vyote</option>
                </select>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Idadi ya Vyumba / Ghorofa Zinazotarajiwa
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="e.g. 4 bedrooms / 3 floors" />
              </label>

              <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                Bajeti ya Makadirio
                <input type="range" min="1" max="4" defaultValue="2" className="mt-3 w-full accent-electric" />
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>Chini ya TZS 50M</span>
                  <span>50M–150M</span>
                  <span>150M–300M</span>
                  <span>Zaidi ya 300M</span>
                </div>
              </label>

              <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                Muda Unaotarajia Kuanza
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy">
                  <option>Mara Moja</option>
                  <option>Ndani ya Miezi 3</option>
                  <option>Bado Nachunguza</option>
                </select>
              </label>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 md:p-6">
            <h2 className="text-xl font-black text-navy">SECTION 3: Maelezo na Viambatanisho</h2>
            <div className="mt-5 space-y-5">
              <label className="block text-sm font-medium text-slate-700">
                Maelezo ya Ziada
                <textarea rows={6} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-navy" placeholder="Tafadhali eleza zaidi kuhusu mradi wako, mpango wa matumizi, na mahitaji ya ujenzi." />
              </label>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-5 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-2xl text-terracotta">⇩</div>
                  <p className="text-sm text-slate-600">Nyaraka za Ardhi</p>
                  <input type="file" className="mt-3 block w-full text-[11px] text-slate-500 file:mr-2 file:rounded-full file:border-0 file:bg-electric file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white" />
                </div>

                <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-5 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-2xl text-terracotta">⇩</div>
                  <p className="text-sm text-slate-600">Picha / Video za Eneo</p>
                  <input type="file" className="mt-3 block w-full text-[11px] text-slate-500 file:mr-2 file:rounded-full file:border-0 file:bg-electric file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white" multiple />
                </div>

                <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-5 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-2xl text-terracotta">⇩</div>
                  <p className="text-sm text-slate-600">Mchoro wa Awali</p>
                  <input type="file" className="mt-3 block w-full text-[11px] text-slate-500 file:mr-2 file:rounded-full file:border-0 file:bg-electric file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white" />
                </div>
              </div>

              {files.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {files.map((file) => (
                    <div key={file.name} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta/10 text-[10px] font-bold text-terracotta">{file.badge}</span>
                      <span>{file.name}</span>
                      <button type="button" onClick={() => removeFile(file.name)} className="text-slate-400 hover:text-red-500">×</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 md:p-6">
            <h2 className="text-xl font-black text-navy">SECTION 4: Uthibitisho na Idhini</h2>
            <div className="mt-5 space-y-4">
              <label className="flex items-start gap-3 text-sm text-slate-700">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
                <span>Nakubali Sheria na Masharti pamoja na Sera ya Faragha</span>
              </label>

              <div className="rounded-[24px] border border-slate-200 bg-[#F3F0EA] p-4 text-sm leading-7 text-slate-700">
                Ada ndogo ya TZS 15,000 inatumika kwa ushauri wa kwanza — inaondolewa kwenye bei ya mradi ukiendelea.
              </div>
            </div>
          </section>

          <button type="submit" className="primary-button w-full text-base">Tuma Ombi</button>
        </form>
      </div>
    </main>
  );
}
