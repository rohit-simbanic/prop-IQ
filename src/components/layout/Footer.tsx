import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Landmark, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useNavigationStore } from '../../store/useNavigationStore';
import type { PageId } from '../../store/useNavigationStore';
import { Button } from '../ui/Button';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigationStore();
  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const handleSubscribe = async (data: NewsletterFormData) => {
    console.log('Subscribing email:', data.email);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubscribed(true);
    reset();
    setTimeout(() => setSubscribed(false), 5000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-[#070908] border-t border-slate-800 dark:border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2 cursor-pointer font-display text-2xl font-bold tracking-tight text-white"
            >
              <Landmark className="text-brand-500 w-8 h-8" />
              <span>
                Luxe<span className="text-brand-500 font-medium">Haven</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Crafting architectural icons and high-end living spaces since 2012. We make finding
              premium residential assets simple, secure, and inspiring.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-brand-500 transition-colors" aria-label="Facebook">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-500 transition-colors" aria-label="Instagram">
                <svg
                  className="w-[18px] h-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-500 transition-colors" aria-label="Twitter">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-500 transition-colors" aria-label="LinkedIn">
                <svg
                  className="w-[18px] h-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-base font-bold font-display text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Explore Projects', id: 'listings' },
                { label: 'Our Agency', id: 'about' },
                { label: 'Services Guide', id: 'services' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => navigateTo(link.id as PageId)}
                    className="hover:text-brand-500 hover:translate-x-1 transition-all text-slate-400 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="text-base font-bold font-display text-white mb-6 uppercase tracking-wider">
              Office Details
            </h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 flex-shrink-0 mt-0.5" />
                <span>9550 Heather Rd, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500 flex-shrink-0" />
                <a href="tel:+13105550199" className="hover:text-white transition-colors">
                  +1 (310) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500 flex-shrink-0" />
                <a href="mailto:info@luxehaven.com" className="hover:text-white transition-colors">
                  info@luxehaven.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-6">
            <h5 className="text-base font-bold font-display text-white mb-6 uppercase tracking-wider">
              Newsletter
            </h5>
            <p className="text-sm text-slate-400 leading-relaxed">
              Subscribe to stay updated with luxury property drops and market reports.
            </p>
            <form onSubmit={handleSubmit(handleSubscribe)} className="space-y-2">
              <div className="flex gap-2 items-start">
                <div className="flex-grow space-y-1">
                  <input
                    type="email"
                    placeholder="Your email address"
                    {...register('email')}
                    className="bg-slate-800 border border-slate-700 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 rounded-xl px-4 py-2.5 text-sm w-full text-white placeholder-slate-500 outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-500 font-medium animate-fade-in pl-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  isLoading={isSubmitting}
                  className="rounded-xl px-4 py-2.5 h-[42px] flex items-center justify-center flex-shrink-0 cursor-pointer"
                >
                  <Send size={16} />
                </Button>
              </div>
              {subscribed && (
                <p className="text-xs text-brand-400 animate-fade-in font-medium pl-1">
                  Subscription active! Check your inbox soon.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 dark:border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {currentYear} LuxeHaven Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => navigateTo('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigateTo('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigateTo('cookies')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
