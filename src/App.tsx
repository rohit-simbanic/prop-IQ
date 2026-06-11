import { Suspense, lazy, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { useNavigationStore } from './store/useNavigationStore';
import { AnimatePresence, motion } from 'framer-motion';
import { Landmark } from 'lucide-react';

// Lazy loading pages with named-to-default export converters
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Listings = lazy(() => import('./pages/Listings').then((m) => ({ default: m.Listings })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const PropertyDetail = lazy(() =>
  import('./pages/PropertyDetail').then((m) => ({ default: m.PropertyDetail }))
);
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const Docs = lazy(() => import('./pages/Docs').then((m) => ({ default: m.Docs })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Privacy = lazy(() => import('./pages/Privacy').then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then((m) => ({ default: m.Terms })));
const Cookies = lazy(() => import('./pages/Cookies').then((m) => ({ default: m.Cookies })));

// Loading spinner fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 bg-white dark:bg-black">
    <Landmark className="text-brand-500 w-12 h-12 animate-pulse" />
    <span className="text-xs font-bold font-display uppercase tracking-widest text-slate-400">
      Loading Luxe Haven...
    </span>
  </div>
);

function App() {
  const { activePage } = useNavigationStore();

  useEffect(() => {
    // Detect system preferred color scheme and apply it to document root
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Set initial state
    handleThemeChange(mediaQuery);

    // Watch for system color scheme changes dynamically
    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'listings':
        return <Listings />;
      case 'about':
        return <About />;
      case 'details':
        return <PropertyDetail />;
      case 'services':
        return <Services />;
      case 'docs':
        return <Docs />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'cookies':
        return <Cookies />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />

      {/* Page Content with premium slide & fade animation */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Suspense fallback={<PageLoader />}>{renderPage()}</Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
