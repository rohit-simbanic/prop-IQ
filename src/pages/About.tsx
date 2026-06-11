import React from 'react';
import { Mail } from 'lucide-react';
import { HeroHeaderCover } from '../components/ui/HeroHeaderCover';
import { ContactCTA } from '../components/ui/ContactCTA';

const team = [
  {
    name: 'Cameron Williamson',
    role: 'Marketing Associate',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    email: 'cameron.williamson@propiq.com',
  },
  {
    name: 'Floyd Miles',
    role: 'Real Estate Broker',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    email: 'floyd.miles@propiq.com',
  },
  {
    name: 'Esther Howard',
    role: 'Project Manager',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    email: 'esther.howard@propiq.com',
  },
  {
    name: 'Savannah Nguyen',
    role: 'Head of Brokers',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    email: 'savannah.nguyen@propiq.com',
  },
  {
    name: 'Courtney Henry',
    role: 'Leasing Manager',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    email: 'courtney.henry@propiq.com',
  },
  {
    name: 'Robert Fox',
    role: 'Sales Specialist',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    email: 'robert.fox@propiq.com',
  },
  {
    name: 'Kathryn Murphy',
    role: 'Office Manager',
    avatar:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=300&q=80',
    email: 'kathryn.murphy@propiq.com',
  },
  {
    name: 'Devon Lane',
    role: 'Legal Consultant',
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    email: 'devon.lane@propiq.com',
  },
];

const whyChooseUs = [
  {
    title: 'EXPERTISE',
    desc: 'Our team consists of highly experienced and qualified real estate professionals dedicated to delivering the best advisory.',
  },
  {
    title: 'CLIENT-CENTRIC APPROACH',
    desc: 'We always put our clients first, listening to their preferences to build tailored strategies for buying or renting.',
  },
  {
    title: 'TRANSPARENCY',
    desc: 'We build relationships on absolute transparency. No hidden structures, clear pricing matrices, and secure transactions.',
  },
  {
    title: 'INNOVATION',
    desc: 'We embrace advanced digital tech, rendering 3D visuals, mapping locations, and automating smart contracts.',
  },
  {
    title: 'COMMUNITY FOCUS',
    desc: 'We are more than a brokerage; we support local developments and foster long-term community relations.',
  },
  {
    title: 'TRUSTED ADVISORS',
    desc: 'Our agents act as financial and legal partners to guide real estate portfolio structuring and risk auditing.',
  },
];

export const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-black text-slate-900 dark:text-[#f0f2f1] overflow-x-hidden animate-fade-in">
      {/* 1. HERO COVER SECTION */}
      <HeroHeaderCover
        title="Our Story & Mission"
        subtitle="About Us"
        description="Welcome to PropIQ, where your real estate aspirations meet personalized service. Our journey is defined by a commitment to excellence and professional standards."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        infoItems={[
          { label: 'FOUNDED:', value: '2018 in Louvain' },
          { label: 'PORTFOLIO VALUE:', value: '€2.1 Billion+' },
        ]}
      />

      {/* 2. OUR STORY SPLIT SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-200 dark:border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left building visual (Blue building) */}
          <div className="lg:col-span-6 h-[460px] lg:h-auto min-h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              alt="PropIQ modern blue skyscraper"
              className="w-full h-full object-cover filter contrast-105"
            />
          </div>

          {/* Right text panel */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 lg:pl-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
                Your Trusted Real Estate Partner
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                Welcome to PropIQ, where your real estate aspirations meet personalized service. Our
                journey is defined by a commitment to excellence, a passion for helping clients find
                their perfect homes, and an unwavering dedication to professional standards.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <h2 className="text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                Founded by a team of experienced real estate professionals, PropIQ was born from a
                shared vision to create a real estate experience that prioritizes the unique needs
                of our clients. We understood that the world of real estate can be complex and
                overwhelming. We set out to build a brokerage that provides clear, honest guidance.
                We are more than just brokers; we are trusted advisors helping you make informed
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE PROPIQ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-200 dark:border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
            Why Choose PropIQ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-neutral-900/20 border border-slate-200 dark:border-white/10 p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h3 className="text-sm font-extrabold tracking-wider text-slate-900 dark:text-white uppercase border-l-2 border-[#2b5c8f] pl-3">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MEET OUR TEAM */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-200 dark:border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
            Meet Our Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Our team is made up of dedicated real estate professionals who share a passion for what
            they do. We are not just agents; we are your trusted advisors. Our agents are
            experienced, knowledgeable, and ready to help you achieve your real estate goals.
          </p>
        </div>

        {/* 8 Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((broker, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-neutral-900/20 border border-slate-200 dark:border-white/10 flex flex-col justify-between group overflow-hidden"
            >
              <div className="h-48 sm:h-60 overflow-hidden relative">
                <img
                  src={broker.avatar}
                  alt={broker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {broker.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-medium mt-1 block">
                    {broker.role}
                  </span>
                </div>
                <a
                  href={`mailto:${broker.email}`}
                  className="inline-flex items-center gap-1.5 text-[9px] text-[#2b5c8f] dark:text-slate-300 font-semibold hover:underline"
                >
                  <Mail size={10} />
                  <span className="truncate">{broker.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BECOME A PART OF THE TEAM */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white">
              Become a Part of the Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              We're always looking for talented, driven individuals who share our values. If you're
              looking for a rewarding career in real estate, working with state-of-the-art tech and
              premium luxury portfolios, we'd love to hear from you.
            </p>
            <div className="pt-4">
              <a
                href="mailto:careers@propiq.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-900 dark:border-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Join Us Today
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 h-[360px] rounded-none overflow-hidden relative shadow-md">
            <img
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80"
              alt="People working in office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <ContactCTA className="mt-0" />
    </div>
  );
};
