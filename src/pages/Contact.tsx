import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '../components/ui/ContactForm';
import { ContactCTA } from '../components/ui/ContactCTA';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-black text-slate-900 dark:text-[#f0f2f1] overflow-x-hidden pt-24">
      {/* 1. TOP DUAL IMAGES HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left Vertical Image */}
          <div className="md:col-span-4 h-[300px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
              alt="Skyscraper skyscraper visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Landscape Image with CONTACT Outline overlay */}
          <div className="md:col-span-8 h-[300px] md:h-[400px] relative">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
              alt="Lobby office boardroom visual"
              className="w-full h-full object-cover"
            />
            {/* Outline text CONTACT in top-right overlay */}
            <div className="absolute top-8 right-8 pointer-events-none select-none z-10">
              <span
                className="text-5xl sm:text-6xl md:text-8xl font-black tracking-widest text-transparent uppercase opacity-40 dark:opacity-20"
                style={{
                  WebkitTextStrokeWidth: '1.5px',
                  WebkitTextStrokeColor: 'white',
                }}
              >
                CONTACT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT GRID DETAILS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-slate-200 dark:border-white/10">
        {/* Left column: Contact Form */}
        <div className="lg:col-span-7 pr-0 lg:pr-8">
          <ContactForm
            defaultMessage="Hello, I would like to schedule a consultation regarding premium properties."
            title="Get in Touch"
            subtitle="Send us an inquiry and our partner broker Floyd Miles will get back to you within 2 hours."
            successTitle="Inquiry Logged"
            successDesc="Floyd Miles has received your request and will follow up with you within 2 hours."
            bgClass="bg-white dark:bg-black p-0"
            inputBgClass="bg-slate-50 dark:bg-neutral-900/20"
          />
        </div>

        {/* Right column: Channels details */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-neutral-900/20 border border-slate-200 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-8 h-fit">
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-slate-950 dark:text-white border-l-2 border-[#2b5c8f] pl-3">
              Office Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-xs">
                <MapPin className="w-5 h-5 text-[#2b5c8f] dark:text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-400 block mb-1">Address:</span>
                  <p className="text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                    Andreas Vesaliusstraat & Frederik 3000, Louvain, Belgium
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Phone className="w-5 h-5 text-[#2b5c8f] dark:text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-400 block mb-1">Call Advisory:</span>
                  <a
                    href="tel:+15550123456"
                    className="text-slate-700 dark:text-slate-300 font-medium hover:underline"
                  >
                    +1 (555) 012-3456
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Mail className="w-5 h-5 text-[#2b5c8f] dark:text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-400 block mb-1">Email Inquiry:</span>
                  <a
                    href="mailto:advisory@propiq.com"
                    className="text-slate-700 dark:text-slate-300 font-medium hover:underline"
                  >
                    advisory@propiq.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Clock className="w-5 h-5 text-[#2b5c8f] dark:text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-400 block mb-1">Working Hours:</span>
                  <p className="text-slate-700 dark:text-slate-300 font-light">
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <ContactCTA buttonText="Call Us Now" />
    </div>
  );
};
