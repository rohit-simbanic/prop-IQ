import React from 'react';
import { ContactCTA } from '../components/ui/ContactCTA';

const serviceList = [
  {
    title: 'PROPERTY LISTINGS',
    desc: 'Explore Our Extensive Portfolio Of Carefully Curated Properties. We Provide Detailed Listings With High-Quality Photos And Comprehensive Descriptions To Help You Find The Perfect Match For Your Needs.',
  },
  {
    title: 'HOME BUYING ASSISTANCE',
    desc: "Our experienced team of real estate experts is here to guide you through the home-buying process. From finding the right property to negotiating the best deal and navigating the paperwork, we're with you every step of the way.",
  },
  {
    title: 'SELLING YOUR PROPERTY',
    desc: "When it's time to sell your property, trust us to showcase it effectively. We utilize modern marketing strategies, professional photography, and targeted advertising to ensure your property gets the attention it deserves.",
  },
  {
    title: 'INVESTMENT OPPORTUNITIES',
    desc: 'Explore real estate investment opportunities tailored to your goals. Our experts can help you identify properties with great potential for ROI.',
  },
];

export const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-black text-slate-900 dark:text-[#f0f2f1] overflow-x-hidden pt-24">
      {/* 1. TOP DUAL IMAGES HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left Vertical Image */}
          <div className="md:col-span-4 h-[300px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80"
              alt="Brick building vertical view"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Landscape Image with SERVICES Outline overlay */}
          <div className="md:col-span-8 h-[300px] md:h-[400px] relative">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
              alt="Brick facade windows"
              className="w-full h-full object-cover"
            />
            {/* Outline text SERVICES in top-right overlay */}
            <div className="absolute top-8 right-8 pointer-events-none select-none z-10">
              <span
                className="text-5xl sm:text-6xl md:text-8xl font-black tracking-widest text-transparent uppercase opacity-40 dark:opacity-20"
                style={{
                  WebkitTextStrokeWidth: '1.5px',
                  WebkitTextStrokeColor: 'white',
                }}
              >
                SERVICES
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES TEXT SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-slate-900 dark:text-white">
            Our Real Estate Service
          </h2>
        </div>

        {/* Line-divided vertical list */}
        <div className="border-t border-slate-200 dark:border-white/10">
          {serviceList.map((svc, idx) => (
            <div
              key={idx}
              className="py-12 border-b border-slate-200 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-4">
                <h3 className="text-base sm:text-lg font-extrabold tracking-wider text-slate-950 dark:text-white uppercase">
                  {svc.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GET IN TOUCH CTA FOOTER */}
      <ContactCTA className="mt-0" />
    </div>
  );
};
