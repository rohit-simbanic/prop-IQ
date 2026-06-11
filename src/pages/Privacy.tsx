import React from 'react';
import { Shield, Lock, Eye, Bell } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfcf9] dark:bg-[#0b0d0c] font-sans text-slate-800 dark:text-slate-300 pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-100 dark:border-white/5 pb-6 mb-10">
          <h1 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white leading-none">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Last Updated: June 12, 2026. How we collect, use, and protect your personal data.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <Shield className="text-[#2b5c8f]" size={20} />
              <span>1. Information We Collect</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              We collect information that you provide directly to us when using our services. This
              includes personal information such as your name, email address, phone number, and any
              details you provide when contacting agents or subscribing to our newsletters.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <Lock className="text-[#2b5c8f]" size={20} />
              <span>2. How We Use Your Information</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Your data allows us to provide, maintain, and improve our services, facilitate
              connections between you and real estate brokers, and respond to your requests. We may
              also send you administrative notifications, promotional messages, and updates about
              premium properties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <Eye className="text-[#2b5c8f]" size={20} />
              <span>3. Sharing and Disclosure</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              We do not sell your personal data. We only share information with partner brokers and
              service providers who assist us in operating our platform, conducting our business, or
              servicing you, under strict confidentiality agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <Bell className="text-[#2b5c8f]" size={20} />
              <span>4. Data Security</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              We implement a variety of security measures to maintain the safety of your personal
              information. However, please note that no method of transmission over the Internet is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
