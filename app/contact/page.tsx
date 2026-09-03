import Link from 'next/link';

export default function ContactPage() {
  return (
    <main>
      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <p className="muted-label">CONTACT US</p>
            <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] text-navy md:text-5xl">Let&apos;s talk about your next move</h1>

            <form className="mt-8 space-y-5">
              <label className="block text-sm font-medium text-slate-700">
                Name
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="Your name" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Email
                <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="you@example.com" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Message
                <textarea rows={5} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white" placeholder="Tell us how we can help" />
              </label>
              <button type="submit" className="primary-button w-full text-base">Submit</button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] bg-navy p-6 text-white shadow-soft md:p-8">
              <h2 className="text-2xl font-black tracking-[-0.05em] text-white">Get in touch</h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                <li>Address: 12 Ali Hassan Mwinyi Rd, Dar es Salaam, Tanzania</li>
                <li>Phone: +255 712 345 678</li>
                <li>Email: hello@ujenzi25.co.tz</li>
                <li>Office hours: Mon–Sat, 8:00 AM – 6:00 PM</li>
              </ul>
              <Link href="https://wa.me/255712345678" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white">
                WhatsApp Chat
              </Link>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-soft">
              <div className="relative h-[290px] overflow-hidden rounded-[24px] bg-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(31,42,68,0.08),_rgba(255,255,255,0)_65%)]" />
                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-orange/70 bg-white/70 shadow-lg" />
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[30%] border border-slate-300" />
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
