import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  location: string;
  image: string;
  description: string;
};

export function ProjectCard({ title, location, image, description }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,35,58,0.75)] via-[rgba(19,30,50,0.25)] to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy">
          {location}
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-navy">{title}</h3>
        </div>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
        <Link href="/projects" className="inline-flex items-center text-sm font-semibold text-electric">
          View Details →
        </Link>
      </div>
    </div>
  );
}
