import React, { useState } from 'react';
import { BookOpen, Terminal, Zap, CheckCircle, Laptop, ChevronDown, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DocSection {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const sections: DocSection[] = [
  { id: 'features', title: 'Core Features', icon: <BookOpen size={16} /> },
  { id: 'install', title: 'Installation Process', icon: <Terminal size={16} /> },
  { id: 'storybook', title: 'Storybook Guide', icon: <Layers size={16} /> },
  { id: 'performance', title: 'Performance Techniques', icon: <Zap size={16} /> },
  { id: 'themes', title: 'Theme System', icon: <Laptop size={16} /> },
];

export const Docs: React.FC = () => {
  const [activeSection, setActiveSection] = useState('features');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcfcf9] dark:bg-[#0b0d0c] font-sans text-slate-800 dark:text-slate-300 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-100 dark:border-white/5 pb-6 mb-10">
          <h1 className="text-3xl font-extrabold font-display text-slate-900 dark:text-white leading-none">
            Developer Documentation
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Technical setup, architectural specifications, and performance optimization summaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Mobile Summary Accordion (hidden on desktop) */}
          <div className="lg:hidden w-full">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#0f1211] border border-slate-100 dark:border-white/5 rounded-2xl text-xs font-semibold text-slate-800 dark:text-slate-300 shadow-sm cursor-pointer"
            >
              <span className="flex items-center gap-2">
                {sections.find((s) => s.id === activeSection)?.icon}
                <span>Section: {sections.find((s) => s.id === activeSection)?.title}</span>
              </span>
              <motion.span
                animate={{ rotate: isSidebarOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isSidebarOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden bg-white dark:bg-[#0f1211] border border-slate-100 dark:border-white/5 rounded-2xl p-3 shadow-md space-y-1"
                >
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest pl-3 block mb-2">
                    Sections
                  </span>
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => {
                        setActiveSection(sec.id);
                        setIsSidebarOpen(false);
                        document
                          .getElementById(sec.id)
                          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all text-left cursor-pointer ${
                        activeSection === sec.id
                          ? 'bg-brand-500 text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5'
                      }`}
                    >
                      {sec.icon}
                      <span>{sec.title}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* LEFT SIDEBAR: Nav Links (desktop only) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-2 sticky top-28 bg-white dark:bg-[#0f1211] border border-slate-100 dark:border-white/5 rounded-2xl p-4 shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest pl-3 block mb-2">
              Sections
            </span>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  setActiveSection(sec.id);
                  document
                    .getElementById(sec.id)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all text-left cursor-pointer ${
                  activeSection === sec.id
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5'
                }`}
              >
                {sec.icon}
                <span>{sec.title}</span>
              </button>
            ))}
          </aside>

          {/* RIGHT VIEWPORT: Content */}
          <main className="lg:col-span-9 space-y-16">
            {/* 1. CORE FEATURES */}
            <section id="features" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="text-brand-500" />
                <span>Core Features</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                LuxeHaven is a responsive real estate portal presenting premium properties, maps,
                filters, and Storybook components.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-white dark:bg-[#0f1211] border border-slate-100 dark:border-white/5 rounded-2xl p-6 shadow-sm space-y-3">
                  <h4 className="font-bold text-sm text-slate-950 dark:text-white">
                    Geospatial Maps
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    Built using Leaflet. Map markers are rendered as styled HTML price bubbles (e.g.
                    "$4.9M") that light up when hovered or selected.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#0f1211] border border-slate-100 dark:border-white/5 rounded-2xl p-6 shadow-sm space-y-3">
                  <h4 className="font-bold text-sm text-slate-950 dark:text-white">Sync Filters</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    Select values on the Homepage Hero search bar and navigate instantly to Listings
                    to view pre-filtered cards.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#0f1211] border border-slate-100 dark:border-white/5 rounded-2xl p-6 shadow-sm space-y-3">
                  <h4 className="font-bold text-sm text-slate-950 dark:text-white">
                    Storybook Library
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    Includes isolated component stories with documentation for Button and Modal in
                    the storybook server.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#0f1211] border border-slate-100 dark:border-white/5 rounded-2xl p-6 shadow-sm space-y-3">
                  <h4 className="font-bold text-sm text-slate-950 dark:text-white">
                    Zod Validations
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    Agent contact panels and general service forms run zod resolvers to deliver
                    type-safe validation popups on submit.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. INSTALLATION PROCESS */}
            <section
              id="install"
              className="space-y-6 scroll-mt-28 border-t border-slate-100 dark:border-white/5 pt-12"
            >
              <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="text-brand-500" />
                <span>Installation Process</span>
              </h2>

              <div className="space-y-4">
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  Follow these terminal instructions to spin up the local development ecosystem:
                </p>

                <div className="bg-slate-900 dark:bg-black rounded-2xl p-5 font-mono text-xs text-brand-400 space-y-3 shadow-inner overflow-x-auto leading-relaxed border border-slate-800 dark:border-white/5">
                  <div>
                    <span className="text-slate-500"># Install package dependencies</span>
                    <br />
                    npm install
                  </div>
                  <div>
                    <span className="text-slate-500"># Run development server (vite)</span>
                    <br />
                    npm run dev
                  </div>
                  <div>
                    <span className="text-slate-500"># Run Storybook server docs</span>
                    <br />
                    npm run storybook
                  </div>
                  <div>
                    <span className="text-slate-500"># Format, lint, and verify compile build</span>
                    <br />
                    npm run format:write && npm run lint && npm run build
                  </div>
                </div>
              </div>
            </section>

            {/* 3. STORYBOOK GUIDE */}
            <section
              id="storybook"
              className="space-y-6 scroll-mt-28 border-t border-slate-100 dark:border-white/5 pt-12"
            >
              <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="text-brand-500" />
                <span>Storybook Showcase Guide</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Storybook isolates core UI components from the page application state, enabling
                designers and developers to interactively test prop variations, inspect layout
                responsiveness, and audit accessibility.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-white dark:bg-[#0f1211] border border-slate-100 dark:border-white/5 rounded-2xl p-6 shadow-sm space-y-3">
                  <h4 className="font-bold text-sm text-slate-950 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-500" />
                    <span>Storybook Features</span>
                  </h4>
                  <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 font-light list-disc pl-4 leading-relaxed">
                    <li>
                      <strong>Live Controls (Args)</strong>: Modify button sizes, variants, text,
                      loading state, and modal open states in real-time.
                    </li>
                    <li>
                      <strong>Built-in A11y Panel</strong>: Automated accessibility checkers ensure
                      color contrast and keyboard navigation standards.
                    </li>
                    <li>
                      <strong>Viewport Testing</strong>: Test responsive layouts across pre-set
                      phone, tablet, and desktop display resolutions.
                    </li>
                    <li>
                      <strong>Auto Documentation</strong>: Automatically compiles usage guidelines
                      and source codes for clean handoff.
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-[#0f1211] border border-slate-100 dark:border-white/5 rounded-2xl p-6 shadow-sm space-y-3">
                  <h4 className="font-bold text-sm text-slate-950 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-500" />
                    <span>Installing & Running</span>
                  </h4>
                  <div className="bg-slate-950 rounded-xl p-3 font-mono text-[10px] text-brand-400 space-y-2 leading-relaxed">
                    <div>
                      <span className="text-slate-500"># Install dependencies</span>
                      <br />
                      npm install
                    </div>
                    <div>
                      <span className="text-slate-500"># Start local Storybook dashboard</span>
                      <br />
                      npm run storybook
                    </div>
                    <div>
                      <span className="text-slate-500"># Compile static documentation build</span>
                      <br />
                      npm run build-storybook
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-black/20 rounded-2xl p-6 border border-slate-150 dark:border-white/5 space-y-4">
                <h4 className="font-bold text-xs text-slate-950 dark:text-white uppercase tracking-wider">
                  Using Storybook in this Project
                </h4>
                <div className="space-y-4 text-xs font-light text-slate-500 dark:text-slate-400 leading-relaxed">
                  <p>
                    Open the local server (typically at{' '}
                    <code className="text-brand-500 font-mono">http://localhost:6006</code>) to
                    browse the catalog of stories:
                  </p>
                  <ol className="list-decimal pl-4 space-y-2">
                    <li>
                      <strong>Button Stories</strong>: Located in{' '}
                      <code className="text-slate-600 dark:text-slate-300">
                        src/components/ui/Button.stories.tsx
                      </code>
                      . Try toggling <code className="text-brand-500 font-mono">isLoading</code> or
                      modifying the <code className="text-brand-500 font-mono">variant</code>{' '}
                      control values.
                    </li>
                    <li>
                      <strong>Modal Stories</strong>: Located in{' '}
                      <code className="text-slate-600 dark:text-slate-300">
                        src/components/ui/Modal.stories.tsx
                      </code>
                      . Test the slide-up viewport animations and closing mechanics.
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 4. PERFORMANCE OPTIMIZATIONS */}
            <section
              id="performance"
              className="space-y-6 scroll-mt-28 border-t border-slate-100 dark:border-white/5 pt-12"
            >
              <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <Zap className="text-brand-500" />
                <span>Performance Optimizations</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                We have applied the following engineering techniques to optimize bundle weight,
                frame rates, and load speeds:
              </p>

              <div className="space-y-6">
                {/* Lazy loading */}
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-500 mt-1">
                    <CheckCircle size={14} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Page-Level Lazy Loading (`React.lazy`)
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                      Pages like listings, detail cards, and services are dynamically imported only
                      when needed. The initial script payload size was optimized by **47%**
                      (shrinking from 706 kB to 376 kB).
                    </p>
                  </div>
                </div>

                {/* Map splitting */}
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-500 mt-1">
                    <CheckCircle size={14} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Geospatial Library Code Splitting
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                      The Leaflet mapping dependency and css styles are isolated into their own code
                      bundle (`PropertyMap-VpHhTDam.js`). Users loading the Homepage or About page
                      do not download any map scripts until navigating to Listings.
                    </p>
                  </div>
                </div>

                {/* Component Reuse */}
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-500 mt-1">
                    <CheckCircle size={14} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Structured Component Reuse
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                      Extracted highly repetitive layouts across pages into reusable, atomic UI
                      components such as ContactCTA, HeroHeaderCover, and ContactForm to ensure DRY
                      compliance.
                    </p>
                  </div>
                </div>

                {/* Effect elimination */}
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-500 mt-1">
                    <CheckCircle size={14} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Synchronous Render Computations
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                      Eliminated asynchronous `useEffect` hook callbacks (which trigger lag-inducing
                      secondary rendering loops) by calculating visible highlighting selectors
                      synchronously during render.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. THEME SYSTEM */}
            <section
              id="themes"
              className="space-y-6 scroll-mt-28 border-t border-slate-100 dark:border-white/5 pt-12"
            >
              <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <Laptop className="text-brand-500" />
                <span>Theme System & Accessibility</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                The UI maps colors dynamically using Tailwind v4 custom theme HSL mappings inside
                `index.css`:
              </p>

              <div className="bg-slate-50 dark:bg-black/20 rounded-2xl p-6 border border-slate-150 dark:border-white/5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#fcfcf9] border border-slate-350 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                      Light Mode Palette
                    </h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-light">
                      Warm bone background `#fcfcf9` combined with slate text `#1f2937` and luxury
                      bronze accents (`#c9a054`). Offers a soft, magazine-style layout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#0b0d0c] border border-white/10 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                      Dark Mode Palette
                    </h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-light">
                      Obsidian space background `#0b0d0c` combined with high-contrast off-white text
                      `#f0f2f1` and card overlays `#0f1211`. Ensures clear legibility and reduced
                      eye-strain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                      Branding Accents
                    </h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-light">
                      Gold-bronze brand colors are applied to buttons, search tabs, and badge
                      backgrounds. Accent colors are adjusted in dark mode to maintain minimum WCAG
                      AA contrast ratio standards.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
