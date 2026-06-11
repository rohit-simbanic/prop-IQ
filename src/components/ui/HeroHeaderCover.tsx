import React from 'react';

interface InfoItem {
  label: string;
  value: string;
}

interface HeroHeaderCoverProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  infoItems: InfoItem[];
  minHeightClass?: string;
}

export const HeroHeaderCover: React.FC<HeroHeaderCoverProps> = ({
  title,
  subtitle,
  description,
  image,
  infoItems,
  minHeightClass = 'min-h-[50vh]',
}) => {
  return (
    <section className={`relative ${minHeightClass} flex flex-col justify-end pt-32 bg-slate-950`}>
      {/* Cover visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={`${title} Cover`}
          className="w-full h-full object-cover filter brightness-75 dark:brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Hero Info Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pb-0">
        <div className="space-y-1.5 pb-8 text-white max-w-2xl">
          <span className="text-xs font-semibold text-slate-300 block uppercase tracking-wider">
            {subtitle}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed pt-2">
            {description}
          </p>
        </div>

        {/* Solid Info Banner block flush aligned bottom-right */}
        <div className="bg-white dark:bg-zinc-900 text-black dark:text-white p-6 sm:p-8 flex gap-8 sm:gap-12 md:max-w-md shadow-2xl border-t border-x md:border-b-0 border-slate-200 dark:border-white/10 select-none">
          {infoItems.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block tracking-wider">
                {item.label}
              </span>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-normal">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
