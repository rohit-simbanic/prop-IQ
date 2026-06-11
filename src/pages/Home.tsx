import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowDown, ChevronDown, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigationStore } from '../store/useNavigationStore';

const brandTickers = [
  'EXPRESS',
  'GREEK',
  'NATUSKA',
  'BREEZY',
  'Safaricom',
  'GREEK',
  'EXPRESS',
  'NATUSKA',
  'BREEZY',
];

const slides = [
  {
    line1: 'Invest In Your',
    line2: 'Future Property',
    desc: 'PropIQ represents a fresh perspective on living, acquiring, and possessing real estate, including opportunities for leasing.',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
  },
  {
    line1: "Residential Fort'D",
    line2: 'Premium Complex',
    desc: 'An architectural masterpiece in the historical center of Louvain, offering state-of-the-art design and amenities.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  },
  {
    line1: 'Architectural Glass',
    line2: 'Skyline Towers',
    desc: 'Corporate and office developments designed for next-generation environmental efficiency and dynamic growth.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
  },
  {
    line1: 'Luxe Penthouse',
    line2: 'Urban Haven',
    desc: 'Exquisitely curated penthouses featuring luxury styling, private pools, and high-contrast interior architecture.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80',
  },
  {
    line1: 'Sustainable Brick',
    line2: 'Landscape Estates',
    desc: 'Blending structural aesthetics with botanical landscapes to cultivate healthy, modern residential communities.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80',
  },
];

const projectsData = [
  {
    id: '1',
    title: 'Apartments',
    desc: 'This Visualization Project Is About The Building In The Historical Center Of Omsk City, Russia. Initially, It Was Built As A Hotel For The 2018 FIFA World Cup, But The Project Was Not Completed As Supposed.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '2',
    title: 'Villa House',
    desc: 'This Premium Villa Project Is Designed With High-Contrast Modern Elements, Incorporating Sustainable Brick Materials And Natural Lighting For An Exceptional Private Living Experience.',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '3',
    title: 'Skyline Towers',
    desc: 'A Commercial Landmark Showcase Located In The Heart of Louvain. Developed For Corporate Environmental Efficiency With Modern Steel Architecture and High-Contrast Finishes.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
  },
];

const services = [
  {
    title: 'Property Listings',
    desc: 'Explore our extensive portfolio of carefully curated properties. We provide detailed listings with high-quality photos and comprehensive descriptions to help you find the perfect match for your needs.',
  },
  {
    title: 'Home Buying Assistance',
    desc: "Our experienced team of real estate experts is here to guide you through the home-buying process. From finding the right property to negotiating the best deal and navigating the paperwork, we're with you every step of the way.",
  },
  {
    title: 'Selling Your Property',
    desc: "When it's time to sell your property, trust us to showcase it effectively. We utilize modern marketing strategies, professional photography, and targeted advertising to ensure your property gets the attention it deserves.",
  },
  {
    title: 'Investment Opportunities',
    desc: 'Explore real estate investment opportunities tailored to your goals. Our experts can help you identify properties with great potential for ROI.',
  },
];

const testimonials = [
  {
    name: 'Jenny Wilson',
    role: 'Private Investor',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    houseImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    text: "It Really Saves Me Time And Effort. Abstract Is Exactly What Our Business Has Been Lacking. I'm Good To Go. Thank You For Making It Painless, Pleasant And Most Of All Hassle Free! It Really Saves Me Time And Effort.",
  },
  {
    name: 'Savannah Nguyen',
    role: 'Real Estate Specialist',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    houseImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    text: "I've Been Investing In Real Estate For Years, And Has Consistently Provide Me With Valuable Insights And Opportunities. Their Knowledge Of The Market And Dedication To Helping Me Achieve My Investment Goals.",
  },
  {
    name: 'Ronald Richards',
    role: 'Homeowner',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    houseImage:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    text: "It Really Saves Me Time And Effort. Abstract Is Exactly What Our Business Has Been Lacking. I'm Good To Go. Thank You For Making It Painless, Pleasant And Most Of All Hassle Free!",
  },
  {
    name: 'Bessie Cooper',
    role: 'Property Investor',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    houseImage:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    text: "I've Been Investing In Real Estate For Years, And Has Consistently Provide Me With Valuable Insights And Opportunities. Their Knowledge Of The Market And Dedication To Helping Me Achieve My Investment Goals.",
  },
  {
    name: 'Ralph Edwards',
    role: 'Design Consultant',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    houseImage:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80',
    text: "It Really Saves Me Time And Effort. Abstract Is Exactly What Our Business Has Been Lacking. I'm Good To Go. Thank You For Making It Painless, Pleasant And Most Of All Hassle Free! It Really Saves Me Time And Effort.",
  },
  {
    name: 'Albert Flores',
    role: 'Portfolio Manager',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    houseImage:
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=600&q=80',
    text: "I've Been Investing In Real Estate For Years, And Has Consistently Provide Me With Valuable Insights And Opportunities. Their Knowledge Of The Market And Dedication To Helping Me Achieve My Investment Goals.",
  },
];

const testimonialsRow1 = [testimonials[0], testimonials[1], testimonials[2]];
const testimonialsRow2 = [testimonials[3], testimonials[4], testimonials[5]];

export const Home: React.FC = () => {
  const { navigateTo } = useNavigationStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev + 1) % projectsData.length);
  }, []);

  const prevProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-black text-slate-900 dark:text-[#f0f2f1] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-between pt-32 overflow-hidden bg-slate-950">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              alt="Skyscraper background"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="w-full h-full object-cover object-center filter brightness-50 contrast-110"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Right-side vertical slide indicators */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-5 items-center">
          {slides.map((_, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="relative flex items-center justify-center w-6 h-6 focus:outline-none cursor-pointer group"
                aria-label={`Go to slide ${idx + 1}`}
              >
                {isActive ? (
                  <>
                    <div className="w-1.5 h-1.5 rounded-full bg-white z-10" />
                    <motion.div
                      layoutId="activeDotOutline"
                      className="absolute inset-0 rounded-full border border-white opacity-80"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  </>
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/80 transition-colors" />
                )}
              </button>
            );
          })}
        </div>

        {/* Hero Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 pb-16 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-6"
              >
                <h1 className="text-5xl sm:text-6xl md:text-[80px] font-extrabold font-display text-white tracking-tight leading-[1.05]">
                  {slides[currentSlide].line1}
                  {slides[currentSlide].line2 && (
                    <>
                      <br />
                      {slides[currentSlide].line2}
                    </>
                  )}
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl font-light leading-relaxed">
                  {slides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4 text-white font-medium text-sm pt-4 select-none">
              <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-colors cursor-pointer">
                <ArrowDown size={18} />
              </div>
              <span className="text-white/80 font-semibold tracking-wider text-xs uppercase">
                Scroll down
              </span>
            </div>
          </div>
        </div>

        {/* Brands Infinite Ticker (Figma Ticker Row) */}
        <div className="relative z-10 bg-black/60 backdrop-blur-sm border-t border-white/10 py-6 overflow-hidden mask-marquee">
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Double the list to support infinite scroll loop seamlessly */}
            <div className="flex gap-16 sm:gap-24 items-center pr-16 sm:pr-24 text-xs sm:text-sm font-semibold tracking-[0.2em] text-white/40">
              {[...brandTickers, ...brandTickers].map((brand, idx) => (
                <span
                  key={idx}
                  className="hover:text-white transition-colors cursor-default select-none"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PROPIQ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Overlapping Text Box */}
          <div className="lg:col-span-5 bg-[#2b5c8f] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-between shadow-2xl relative z-10 min-h-[380px]">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
                About PropIQ
              </h2>
              <p className="text-sm sm:text-base font-light leading-relaxed text-slate-100">
                At PropIQ, we are more than just a real estate agency. We are your trusted partner
                in finding the perfect property. Our journey is defined by a commitment to
                excellence, a passion for helping clients find their dream homes, and an unwavering
                dedication to professional service.
              </p>
            </div>
            <button
              onClick={() => navigateTo('about')}
              className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-slate-200 mt-8 group cursor-pointer"
            >
              <span>Our story</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 h-[420px] rounded-none overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
              alt="Skyscraper skyscraper visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 bg-slate-50 dark:bg-neutral-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase z-10">
              Our Real Estate Service
            </h2>
            {/* Outline text SERVICES overlay */}
            <div className="absolute right-0 pointer-events-none select-none z-0 hidden sm:block">
              <span
                className="text-6xl md:text-8xl font-black tracking-widest text-transparent uppercase opacity-20 dark:opacity-10"
                style={{
                  WebkitTextStrokeWidth: '1px',
                  WebkitTextStrokeColor: 'currentColor',
                }}
              >
                SERVICES
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (Images) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6 items-center">
              {/* Image 1 (Left tall building) */}
              <div className="h-[280px] sm:h-[350px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80"
                  alt="Brick building vertical view"
                  className="w-full h-full object-cover filter contrast-102"
                />
              </div>

              {/* Image 2 (Right facade building) */}
              <div className="h-[340px] sm:h-[420px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                  alt="Brick facade windows"
                  className="w-full h-full object-cover filter contrast-102"
                />
              </div>
            </div>

            {/* Right Column (Accordion List) */}
            <div className="lg:col-span-6 space-y-2">
              {services.map((svc, idx) => {
                const isOpen = activeAccordion === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-slate-200 dark:border-white/10 first:border-t"
                  >
                    <button
                      onClick={() => setActiveAccordion(isOpen ? null : idx)}
                      className="w-full py-5 flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#2b5c8f] dark:group-hover:text-brand-300 transition-colors">
                        {svc.title}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed pr-6">
                            {svc.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROJECTS SHOWCASE */}
      <section className="bg-black text-white w-full py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase z-10">
              Our Projects
            </h2>
            {/* Outline text OUR PROJECTS overlay */}
            <div className="absolute right-0 pointer-events-none select-none z-0 hidden sm:block">
              <span
                className="text-6xl md:text-8xl font-black tracking-widest text-transparent uppercase opacity-10"
                style={{
                  WebkitTextStrokeWidth: '1.5px',
                  WebkitTextStrokeColor: '#444444',
                }}
              >
                OUR PROJECTS
              </span>
            </div>
          </div>

          {/* Showcase Slide */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch border border-white/10 overflow-hidden bg-black">
            {/* Image */}
            <div className="lg:col-span-7 h-[360px] lg:h-[480px] min-h-[300px] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentProjectIndex}
                  src={projectsData[currentProjectIndex].image}
                  alt={projectsData[currentProjectIndex].title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover filter contrast-102 absolute inset-0"
                />
              </AnimatePresence>
            </div>

            {/* Details Content Box */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center bg-black relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProjectIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-center"
                >
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 lg:-ml-24 relative z-10">
                    {projectsData[currentProjectIndex].title}
                  </h3>

                  {/* Blue Card */}
                  <div className="bg-[#004d8c] text-white p-8 sm:p-10 shadow-xl relative z-10 lg:-ml-24">
                    <p className="text-xs sm:text-sm font-light leading-relaxed text-slate-100">
                      {projectsData[currentProjectIndex].desc}
                    </p>
                    <button
                      onClick={() => navigateTo('details', projectsData[currentProjectIndex].id)}
                      className="inline-block underline text-xs font-semibold tracking-wider text-white hover:text-slate-200 mt-6 transition-colors cursor-pointer"
                    >
                      More Information
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider arrows below the blue card */}
              <div className="flex items-center gap-3 mt-6 lg:-ml-24 relative z-10 justify-start">
                <button
                  onClick={prevProject}
                  className="w-12 h-12 flex items-center justify-center bg-black hover:bg-zinc-900 text-white border border-white/20 cursor-pointer transition-colors"
                  aria-label="Previous Project"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={nextProject}
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-slate-100 text-black border border-white cursor-pointer transition-colors shadow-sm"
                  aria-label="Next Project"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Stats and Sub Showcase row */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Column 1: Stats Grid and Title-Case description */}
            <div className="md:col-span-5 space-y-8">
              <div className="grid grid-cols-2 border-t border-b border-r border-white/15">
                {/* Top Left */}
                <div className="p-6 border-b border-r border-white/15">
                  <h4 className="text-4xl font-extrabold text-white">2100+</h4>
                  <p className="text-xs text-slate-400 mt-1 font-medium">Total Projects</p>
                </div>
                {/* Top Right */}
                <div className="p-6 border-b border-white/15">
                  <h4 className="text-4xl font-extrabold text-white">21+</h4>
                  <p className="text-xs text-slate-400 mt-1 font-medium">Years of experience</p>
                </div>
                {/* Bottom Left */}
                <div className="p-6 border-r border-white/15">
                  <h4 className="text-4xl font-extrabold text-white">2000+</h4>
                  <p className="text-xs text-slate-400 mt-1 font-medium">Happy Customers</p>
                </div>
                {/* Bottom Right */}
                <div className="p-6">
                  <h4 className="text-4xl font-extrabold text-white">50+</h4>
                  <p className="text-xs text-slate-400 mt-1 font-medium">Awards</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                We Work Together With Our Clients To Design And Construct Homes And Surroundings
                That Match Their Values And Way Of Life.
              </p>
            </div>

            {/* Column 2: White architectural block with "View Project" button */}
            <div className="md:col-span-3 flex flex-col md:-mt-12">
              <div className="h-[280px] overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
                  alt="White geometric architecture"
                  className="w-full h-full object-cover filter contrast-102"
                />
              </div>
              <button
                onClick={() => navigateTo('listings')}
                className="w-full py-4 mt-6 bg-white hover:bg-slate-100 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
              >
                <span>View Project</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Column 3: Skyscrapers visual shifted downwards */}
            <div className="md:col-span-4 md:mt-16">
              <div className="h-[340px] overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
                  alt="Modern skyscrapers towers"
                  className="w-full h-full object-cover filter contrast-102"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLIENT FEEDBACKS */}
      <section className="py-24 bg-black text-white w-full border-t border-white/10 overflow-hidden animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Client Feedbacks
            </h2>
          </div>
        </div>

        {/* Testimonials Marquee Row 1 (Leftwards) */}
        <div className="relative w-full overflow-hidden mask-marquee py-2">
          <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] gap-6 w-max">
            {[...testimonialsRow1, ...testimonialsRow1].map((test, idx) => (
              <div
                key={idx}
                className="flex w-[480px] sm:w-[500px] shrink-0 border border-white/10 bg-[#121212] overflow-hidden text-left transition-colors hover:border-white/20"
              >
                {/* Left House Image */}
                <div className="w-[180px] sm:w-[200px] shrink-0 h-[220px]">
                  <img
                    src={test.houseImage}
                    alt="Review house decoration"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Right Content Box */}
                <div className="flex-grow p-6 flex flex-col justify-between whitespace-normal">
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-light italic">
                    "{test.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-4">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-white">{test.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Marquee Row 2 (Rightwards) */}
        <div className="relative w-full overflow-hidden mask-marquee py-2 mt-6">
          <div className="flex whitespace-nowrap animate-marquee-reverse hover:[animation-play-state:paused] gap-6 w-max">
            {[...testimonialsRow2, ...testimonialsRow2].map((test, idx) => (
              <div
                key={idx}
                className="flex w-[480px] sm:w-[500px] shrink-0 border border-white/10 bg-[#121212] overflow-hidden text-left transition-colors hover:border-white/20"
              >
                {/* Left House Image */}
                <div className="w-[180px] sm:w-[200px] shrink-0 h-[220px]">
                  <img
                    src={test.houseImage}
                    alt="Review house decoration"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Right Content Box */}
                <div className="flex-grow p-6 flex flex-col justify-between whitespace-normal">
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-light italic">
                    "{test.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-4">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-white">{test.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GET IN TOUCH CTA FOOTER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-black text-white w-full border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-sm sm:text-base font-light leading-relaxed text-slate-300 max-w-xl mx-auto">
            Thank you for considering PropIQ for your real estate needs. We look forward to hearing
            from you and assisting you on your real estate journey.
          </p>

          <button
            onClick={() => navigateTo('services')}
            className="px-8 py-3.5 bg-white text-black hover:bg-slate-100 transition-colors font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Get in touch</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
};
