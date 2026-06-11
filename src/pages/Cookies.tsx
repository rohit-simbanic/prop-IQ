import React from 'react';
import { Cookie, Settings, CheckSquare, RefreshCw } from 'lucide-react';

export const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfcf9] dark:bg-[#0b0d0c] font-sans text-slate-800 dark:text-slate-300 pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-100 dark:border-white/5 pb-6 mb-10">
          <h1 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white leading-none">
            Cookie Settings & Policy
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Last Updated: June 12, 2026. How we use cookies to personalize and enhance your browsing
            experience.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <Cookie className="text-[#2b5c8f]" size={20} />
              <span>1. What Are Cookies?</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Cookies are small text files stored on your computer or device by your web browser
              when you visit a website. They help us remember your preferences, track visits, and
              analyze how visitors interact with our platform to improve overall performance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <Settings className="text-[#2b5c8f]" size={20} />
              <span>2. Types of Cookies We Use</span>
            </h2>
            <div className="space-y-3 pl-2">
              <div className="flex gap-3 text-xs leading-relaxed font-light">
                <CheckSquare size={16} className="text-[#2b5c8f] flex-shrink-0 mt-0.5" />
                <p className="text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-800 dark:text-white">Essential Cookies:</strong>{' '}
                  Required to enable core site features, such as secure logins, session settings,
                  and navigation.
                </p>
              </div>
              <div className="flex gap-3 text-xs leading-relaxed font-light">
                <CheckSquare size={16} className="text-[#2b5c8f] flex-shrink-0 mt-0.5" />
                <p className="text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-800 dark:text-white">Performance Cookies:</strong>{' '}
                  Collect anonymous analytical data regarding page traffic and component usage to
                  help us optimize speed and UX.
                </p>
              </div>
              <div className="flex gap-3 text-xs leading-relaxed font-light">
                <CheckSquare size={16} className="text-[#2b5c8f] flex-shrink-0 mt-0.5" />
                <p className="text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-800 dark:text-white">Preference Cookies:</strong>{' '}
                  Remember your theme choices (light vs. dark mode) and map location selections for
                  subsequent visits.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <RefreshCw className="text-[#2b5c8f]" size={20} />
              <span>3. Managing Your Choices</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              You can control and manage cookies through your browser settings. Removing or blocking
              cookies may impact your user experience, and certain parts of our website may not be
              fully functional.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
