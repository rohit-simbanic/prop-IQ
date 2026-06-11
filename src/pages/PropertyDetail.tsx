import React, { useState, useCallback, useMemo } from 'react';
import { Dumbbell, Tv, Utensils, Waves, Lightbulb, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigationStore } from '../store/useNavigationStore';
import { useListingsStore } from '../store/useListingsStore';
import { HeroHeaderCover } from '../components/ui/HeroHeaderCover';
import { ContactForm } from '../components/ui/ContactForm';
import { ContactCTA } from '../components/ui/ContactCTA';

const amenityIcons = [
  <Dumbbell className="w-5 h-5 text-slate-800 dark:text-white" />,
  <Tv className="w-5 h-5 text-slate-800 dark:text-white" />,
  <Utensils className="w-5 h-5 text-slate-800 dark:text-white" />,
  <Waves className="w-5 h-5 text-slate-800 dark:text-white" />,
  <Lightbulb className="w-5 h-5 text-slate-800 dark:text-white" />,
  <MapPin className="w-5 h-5 text-slate-800 dark:text-white" />,
];

export const PropertyDetail: React.FC = () => {
  const { selectedPropertyId } = useNavigationStore();
  const { properties } = useListingsStore();

  // Find selected property or default to first
  const property = useMemo(() => {
    return properties.find((p) => p.id === selectedPropertyId) || properties[0];
  }, [properties, selectedPropertyId]);

  const [startIndex, setStartIndex] = useState(0);

  const amenities = useMemo(() => {
    return property.amenities.map((label, idx) => ({
      icon: amenityIcons[idx % amenityIcons.length],
      label,
    }));
  }, [property.amenities]);

  const galleryImages = useMemo(() => {
    return property.images && property.images.length > 0 ? property.images : [property.image];
  }, [property.images, property.image]);

  const handleNextImages = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const displayPrice = useMemo(() => {
    return property.price >= 1000
      ? `$${property.price.toLocaleString('en-US', { minimumFractionDigits: 0 })}`
      : `$${property.price}`;
  }, [property.price]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-black text-slate-900 dark:text-[#f0f2f1] overflow-x-hidden animate-fade-in">
      {/* 2. HERO COVER WITH INFO BANNER */}
      <HeroHeaderCover
        title={property.title}
        subtitle="Projects"
        description=""
        image={property.image}
        infoItems={[
          { label: 'LOCATION:', value: property.address },
          {
            label: 'PRICE:',
            value: `${property.status === 'rent' ? 'Starting From ' : 'Purchase Price '}${displayPrice}`,
          },
        ]}
        minHeightClass="min-h-[60vh]"
      />

      {/* 3. MAIN DETAILS CONTENT */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Description & Amenities list */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-4">
            <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Project Amenities Grid with dividers */}
          <div className="space-y-8 pt-8 border-t border-slate-200 dark:border-white/10">
            <h3 className="text-sm font-black tracking-wider text-black dark:text-white uppercase">
              Project Amenities
            </h3>
            <div className="grid grid-cols-3 border-t border-b border-slate-200 dark:border-white/10">
              {amenities.map((item, idx) => {
                const borderClasses = `flex flex-col items-center text-center p-6 space-y-3 ${
                  idx < 3 ? 'border-b border-slate-200 dark:border-white/10' : ''
                } ${idx % 3 !== 2 ? 'border-r border-slate-200 dark:border-white/10' : ''}`;
                return (
                  <div key={idx} className={borderClasses}>
                    <div className="w-14 h-14 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center bg-transparent">
                      {item.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Large vertical bedroom portrait */}
        <div className="lg:col-span-5 lg:h-[480px] overflow-hidden relative shadow-sm">
          <img
            src={galleryImages[1 % galleryImages.length]}
            alt={`${property.title} Interior view`}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 4. PROPERTY HIGHLIGHT SECTION */}
      <section className="py-24 bg-slate-50 dark:bg-neutral-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-black dark:text-white">
              Property Highlight
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              This is your opportunity to experience luxury, comfort, and convenience like never
              before. Don't miss out on the chance to make {property.title.toLowerCase()} your
              forever property. Contact us today for a private tour and to explore all that this
              exceptional property has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* 5. INTERIORS GRID GALLERY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {[0, 1, 2].map((offset) => {
            const imgIdx = (startIndex + offset) % galleryImages.length;
            const imgUrl = galleryImages[imgIdx];
            return (
              <div key={offset} className="h-64 md:h-80 overflow-hidden relative">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={imgUrl}
                    src={imgUrl}
                    alt={`${property.title} Interior view ${offset + 1}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Carousel Next Arrow Button at the bottom-right */}
        <div className="flex justify-end pt-4 pr-2">
          <button
            onClick={handleNextImages}
            className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-white/5 text-black dark:text-white cursor-pointer transition-colors shadow-sm"
            aria-label="Next Gallery Images"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* 6. CONTACT FORM PANEL */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-slate-200 dark:border-white/10">
        <ContactForm
          defaultMessage={`Hello, I am interested in "${property.title}" and would like to arrange a private viewing.`}
          title={`Inquire About ${property.title}`}
          subtitle={`Send a request to our real estate broker ${property.agent.name} to arrange a private viewing.`}
          successTitle="Request Logged"
          successDesc={`${property.agent.name} has been notified and will reach out to you within the next 2 hours.`}
        />
      </section>

      {/* 7. GET IN TOUCH CTA FOOTER */}
      <ContactCTA />
    </div>
  );
};
