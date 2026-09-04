import Image from 'next/image';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
};

export function PageHeader({ title, subtitle, image, breadcrumb = 'Home' }: PageHeaderProps) {
  return (
    <header className="relative isolate overflow-hidden">
      <div className="relative h-[280px] md:h-[360px]">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="section-shell relative flex h-full items-end pb-10 md:pb-14">
          <div className="max-w-2xl text-white">
            <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-terracotta">{breadcrumb}</div>
            <h1 className="text-4xl font-black tracking-[-0.06em] md:text-5xl">{title}</h1>
            {subtitle && <p className="mt-4 max-w-lg text-base text-slate-200 md:text-lg">{subtitle}</p>}
          </div>
        </div>
      </div>
    </header>
  );
}
