type StatusBadgeProps = {
  status: 'Submitted' | 'In Review' | 'Quoted' | 'Delivered';
};

const classes = {
  Submitted: 'bg-slate-200 text-slate-700',
  'In Review': 'bg-blue-100 text-blue-700',
  Quoted: 'bg-orange-100 text-orange-700',
  Delivered: 'bg-green-100 text-green-700'
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={`status-pill ${classes[status]}`}>{status}</span>;
}
