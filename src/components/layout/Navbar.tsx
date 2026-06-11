import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigationStore } from '../../store/useNavigationStore';
import type { PageId } from '../../store/useNavigationStore';

export const Navbar: React.FC = () => {
  const { activePage, navigateTo } = useNavigationStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    navigateTo(pageId);
    setIsOpen(false);
  };

  const isOverlayPage =
    activePage === 'home' ||
    activePage === 'details' ||
    activePage === 'about' ||
    activePage === 'listings';
  const showTransparent = isOverlayPage && !isScrolled;

  const headerBgClass = showTransparent
    ? 'bg-transparent border-b border-white/20 text-white'
    : 'bg-white/95 dark:bg-black/95 border-b border-black dark:border-white/10 text-slate-900 dark:text-[#f0f2f1] shadow-sm';

  const logoBorderClass = showTransparent ? 'border-white/20' : 'border-black dark:border-white/10';

  const contactBtnClass = showTransparent
    ? 'bg-white text-black hover:bg-white/90'
    : 'bg-black text-white dark:bg-white dark:text-black hover:opacity-90';

  const getCellClass = (pageId: PageId, borderClasses: string) => {
    const isActive = activePage === pageId;
    const borderStyle = borderClasses
      ? borderClasses
          .split(' ')
          .map(
            (b) =>
              `${b} ${showTransparent ? 'border-white/20' : 'border-black dark:border-white/10'}`
          )
          .join(' ')
      : '';

    const activeClass = showTransparent
      ? 'bg-white text-black font-bold'
      : 'bg-black text-white dark:bg-white dark:text-black font-bold';

    const inactiveClass = showTransparent
      ? 'bg-transparent text-white/90 hover:bg-white/10 hover:text-white'
      : 'bg-transparent text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5';

    return `text-xs font-semibold uppercase tracking-wider transition-all duration-300 h-full w-full flex items-center justify-center ${borderStyle} ${
      isActive ? activeClass : inactiveClass
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${headerBgClass}`}
    >
      {/* Desktop Navigation (Full Width Grid) */}
      <div className="hidden md:flex items-stretch justify-between h-24 w-full">
        {/* Logo Column */}
        <div
          onClick={() => handleNavClick('home')}
          className={`w-64 flex-shrink-0 flex items-center justify-center border-r select-none font-display text-3xl font-bold tracking-tight cursor-pointer transition-colors ${logoBorderClass}`}
        >
          <span>PropIQ</span>
        </div>

        {/* Menu Column */}
        <div className={`flex-grow flex justify-center border-r ${logoBorderClass}`}>
          <div className="grid grid-cols-2 grid-rows-2 w-full max-w-sm h-full">
            <button
              onClick={() => handleNavClick('home')}
              className={getCellClass('home', 'border-r border-b')}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('listings')}
              className={getCellClass('listings', 'border-b')}
            >
              Project
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={getCellClass('about', 'border-r')}
            >
              About us
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={getCellClass('services', '')}
            >
              Services
            </button>
          </div>
        </div>

        {/* Utilities Column */}
        <div
          className={`flex-shrink-0 flex items-center justify-center gap-6 px-8 border-r ${logoBorderClass}`}
        >
          <button
            onClick={() => handleNavClick('docs')}
            className={`text-xs font-semibold uppercase tracking-wider py-2 cursor-pointer transition-colors ${
              activePage === 'docs'
                ? 'text-[#2b5c8f] dark:text-brand-400 font-bold'
                : showTransparent
                  ? 'text-white/80 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            Docs
          </button>
        </div>

        {/* Contact Column */}
        <div
          onClick={() => handleNavClick('contact')}
          className={`w-64 flex-shrink-0 flex items-center justify-center gap-2 font-semibold uppercase tracking-wider text-xs cursor-pointer transition-all ${contactBtnClass}`}
        >
          <Phone size={14} />
          <span>Contact us</span>
        </div>
      </div>

      {/* Mobile Navigation (Responsive Bar) */}
      <div className="md:hidden flex items-center justify-between h-24 px-4 sm:px-6">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer select-none font-display text-3xl font-bold tracking-tight text-current"
        >
          <span>PropIQ</span>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl cursor-pointer ${
              showTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-xl cursor-pointer ${
                  activePage === 'home'
                    ? 'bg-slate-100 dark:bg-white/5 text-[#2b5c8f] dark:text-white'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('listings')}
                className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-xl cursor-pointer ${
                  activePage === 'listings'
                    ? 'bg-slate-100 dark:bg-white/5 text-[#2b5c8f] dark:text-white'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-xl cursor-pointer ${
                  activePage === 'about'
                    ? 'bg-slate-100 dark:bg-white/5 text-[#2b5c8f] dark:text-white'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                About us
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-xl cursor-pointer ${
                  activePage === 'services'
                    ? 'bg-slate-100 dark:bg-white/5 text-[#2b5c8f] dark:text-white'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('docs')}
                className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-xl cursor-pointer ${
                  activePage === 'docs'
                    ? 'bg-slate-100 dark:bg-white/5 text-[#2b5c8f] dark:text-white'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Developer Docs
              </button>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 px-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#2b5c8f] text-white rounded-xl font-semibold text-center cursor-pointer"
                >
                  <Phone size={18} />
                  <span>Contact us</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
