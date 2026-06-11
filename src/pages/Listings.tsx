import React, { useState } from 'react';
import { useListingsStore } from '../store/useListingsStore';
import { useNavigationStore } from '../store/useNavigationStore';
import { HeroHeaderCover } from '../components/ui/HeroHeaderCover';
import { ContactCTA } from '../components/ui/ContactCTA';

export const Listings: React.FC = () => {
  const { navigateTo } = useNavigationStore();
  const { properties } = useListingsStore();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, properties.length));
  };

  const hasMore = properties.length > visibleCount;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-black text-slate-900 dark:text-[#f0f2f1] overflow-x-hidden animate-fade-in">
      {/* 1. HERO COVER SECTION */}
      <HeroHeaderCover
        title="OUR PROJECTS"
        subtitle="Browse Listings"
        description="These project details can be customized and expanded upon for each property listing. Providing comprehensive and accurate details helps buyers make informed decisions."
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
        infoItems={[
          { label: 'TOTAL LISTINGS:', value: `${properties.length} Active` },
          { label: 'CATEGORIES:', value: 'Residential & Houses' },
        ]}
      />

      {/* 2. ALTERNATING PROJECTS LIST */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-28 lg:space-y-36">
        {properties.slice(0, visibleCount).map((property, idx) => {
          const isEven = idx % 2 === 0;

          const getDisplayType = (type: string) => {
            if (type === 'apartment') return 'Residential';
            if (type === 'house') return 'Houses';
            if (type === 'villa') return 'Villa';
            return type;
          };

          return (
            <div
              key={property.id}
              className="relative flex flex-col lg:block w-full lg:h-[550px] mb-16 lg:mb-28"
            >
              {/* Image box */}
              <div className="w-full h-[320px] sm:h-[450px] lg:h-full overflow-hidden shadow-md">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover filter contrast-102"
                />
              </div>

              {/* Overlay Content Box */}
              <div
                className={`w-full lg:w-[43%] bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/10 p-8 sm:p-10 lg:p-12 shadow-2xl lg:absolute lg:bottom-0 ${
                  isEven ? 'lg:right-0' : 'lg:left-0'
                } z-10 mt-6 lg:mt-0`}
              >
                <div className="space-y-5">
                  <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase leading-tight">
                    {property.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {property.description}
                  </p>

                  <div className="space-y-4 pt-5 border-t border-slate-100 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300">
                    <p className="leading-relaxed">
                      <span className="font-bold text-black dark:text-white mr-1.5 uppercase">
                        {isEven ? 'LOCATION:' : 'Location:'}
                      </span>
                      {property.address}
                    </p>
                    <p>
                      <span className="font-bold text-black dark:text-white mr-1.5 uppercase">
                        {isEven ? 'PROJECT TYPE:' : 'Project Type:'}
                      </span>
                      {getDisplayType(property.type)}
                    </p>
                    <div className="space-y-2">
                      <span className="font-bold text-black dark:text-white uppercase block">
                        {isEven ? 'KEY FEATURES:' : 'Key Features:'}
                      </span>
                      <ul className="space-y-1.5 pl-4 list-disc text-slate-600 dark:text-slate-400 font-medium">
                        {property.amenities.map((amenity, i) => (
                          <li key={i}>{amenity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => navigateTo('details', property.id)}
                    className="inline-block text-xs font-bold tracking-wider text-black dark:text-white underline hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    More Information
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. LOAD MORE */}
      {hasMore && (
        <div className="py-12 text-center">
          <button
            onClick={handleLoadMore}
            className="text-base font-bold tracking-wider text-black dark:text-white underline hover:opacity-80 transition-opacity cursor-pointer pb-1"
          >
            Load More
          </button>
        </div>
      )}

      {/* 4. GET IN TOUCH CTA FOOTER */}
      <ContactCTA />
    </div>
  );
};
