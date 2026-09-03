import { StatusBadge } from '@/components/StatusBadge';

const requests = [
  { name: 'Hassan Msuya', date: '06 Aug 2025', type: 'Architectural', status: 'Submitted' as const },
  { name: 'Rose M.', date: '05 Aug 2025', type: 'Structural', status: 'In Review' as const },
  { name: 'Daniel K.', date: '03 Aug 2025', type: 'BoQ', status: 'Quoted' as const },
  { name: 'Anita N.', date: '01 Aug 2025', type: 'Services', status: 'Delivered' as const }
];

export default function ConsultationRequestsPage() {
  return (
    <main className="section-shell py-16 md:py-20">
      <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-soft md:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="muted-label">ADMIN</p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-navy">Consultation Requests</h1>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input type="search" placeholder="Search name" className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-navy" />
            <select className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-navy">
              <option>All Status</option>
              <option>Submitted</option>
              <option>In Review</option>
              <option>Quoted</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between gap-4 rounded-[22px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <span>Data imelindwa chini ya Sheria ya PDPA 2022</span>
          <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">Protected</span>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-slate-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-4 font-semibold">Client Name</th>
                <th className="px-4 py-4 font-semibold">Date Submitted</th>
                <th className="px-4 py-4 font-semibold">Drawing Type</th>
                <th className="px-4 py-4 font-semibold">Status</th>
                <th className="px-4 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.name} className="border-t border-slate-200">
                  <td className="px-4 py-4 font-medium text-navy">{request.name}</td>
                  <td className="px-4 py-4 text-slate-600">{request.date}</td>
                  <td className="px-4 py-4 text-slate-600">{request.type}</td>
                  <td className="px-4 py-4"><StatusBadge status={request.status} /></td>
                  <td className="px-4 py-4 text-right">
                    <button className="rounded-full border border-navy/20 bg-navy/5 px-3 py-1.5 text-xs font-semibold text-navy">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
