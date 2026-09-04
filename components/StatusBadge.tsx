type StatusBadgeProps = {
  status: 'Submitted' | 'In Review' | 'Quoted' | 'Delivered';
};

const classes = {
  Submitted: 'bg-slate-200 text-slate-700',
  'In Review': 'bg-navy/10 text-navy',
  Quoted: 'bg-terracotta/10 text-terracotta',
  Delivered: 'bg-success/10 text-success'
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={`status-pill ${classes[status]}`}>{status}</span>;
}
